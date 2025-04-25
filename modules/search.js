const PAGES = require("../assets/SearchData/search.json"); // Import data from JSON file

/**
 * Count occurrences of keywords in a text
 * @param {string} text - The text to search in
 * @param {string} keyword - The keyword to search for
 * @returns {number} - The number of matches
 */
function countMatches(text, keyword) {
   if (!keyword) return 0;
   const regex = new RegExp(`\\b${keyword}\\b`, "gi"); // Match whole words
   const matches = text.match(regex);
   return matches ? matches.length : 0;
}

/**
 * Search function that ranks pages based on keyword matches with normalization
 * @param {string} query - The search query
 * @returns {Array} - Ranked list of pages with normalized scores
 */
export default function search(query) {
   if (!query.trim()) return []; // Return empty if no query

   const keywords = query.trim().split(/\s+/); // Split query into words

   return PAGES.map((page) => {
      let rawScore = 0;

      // Count matches in title, URL, and content
      keywords.forEach((word) => {
         rawScore += countMatches(page.title, word) * 2; // Title has higher weight
         rawScore += countMatches(page.url, word); // URL matches
         rawScore += countMatches(page.content, word); // Content matches
      });

      const totalWords = page.content.split(/\s+/).length; // Get total word count
      const normalizedScore = totalWords > 0 ? rawScore / totalWords : 0; // Normalize score

      return { ...page, score: normalizedScore };
   })
      .filter(page => page.score > 0) // Remove pages with no matches
      .sort((a, b) => b.score - a.score); // Sort pages by highest normalized score

}
