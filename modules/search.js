const PAGES = require("../assets/SearchData/search.json");

/**
 * Count occurrences of a keyword or phrase in text
 * @param {string} text - The text to search in
 * @param {string} keyword - The keyword or phrase to search for
 * @returns {number} - The number of matches
 */
function countMatches(text, keyword) {
   if (!keyword) return 0;
   // Use non-word-boundaries if keyword has spaces (i.e., it's a phrase)
   const pattern = keyword.includes(" ")
      ? keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // escape regex chars
      : `\\b${keyword}\\b`; // whole word for single word
   const regex = new RegExp(pattern, "gi");
   const matches = text.match(regex);
   return matches ? matches.length : 0;
}

/**
 * Search function that ranks pages based on keyword and phrase matches
 * @param {string} query - The search query
 * @returns {Array} - Ranked list of pages with normalized scores
 */
export default function search(query) {
   if (!query.trim()) return [];

   const keywords = query.trim().split(/\s+/); // Individual words
   const phrase = query.trim(); // Full phrase

   return PAGES.map((page) => {
      let rawScore = 0;

      // Prioritize full phrase matches (higher weight)
      rawScore += countMatches(page.title, phrase) * 5;
      rawScore += countMatches(page.url, phrase) * 3;
      rawScore += countMatches(page.content, phrase) * 3;

      // Then add scores from individual words
      keywords.forEach((word) => {
         rawScore += countMatches(page.title, word) * 2;
         rawScore += countMatches(page.url, word);
         rawScore += countMatches(page.content, word);
      });

      const totalWords = page.content.split(/\s+/).length;
      const normalizedScore = totalWords > 0 ? rawScore / totalWords : 0;

      return { ...page, score: normalizedScore };
   })
      .filter(page => page.score > 0)
      .sort((a, b) => b.score - a.score);
}

