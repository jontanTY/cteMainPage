const PAGES = [
   {
      "title": "Computer Science",
      "url": "cte/computer-science",
      "content": "Computer science focuses on programming, algorithms, and software development. Careers include software engineering and cybersecurity."
   },
   {
      "title": "Automotive Technology",
      "url": "cte/automotive",
      "content": "Automotive technology teaches vehicle maintenance, repair, and diagnostics. Careers include auto mechanics and service technicians."
   },
   {
      "title": "Culinary Arts",
      "url": "cte/culinary",
      "content": "Culinary arts cover cooking techniques, food safety, and restaurant management. Careers include chefs and pastry artists."
   },
   {
      "title": "Health Science",
      "url": "cte/health-science",
      "content": "Health science prepares students for medical careers such as nursing, EMT, and medical assisting. Topics include anatomy and patient care."
   },
   {
      "title": "Welding Technology",
      "url": "cte/welding",
      "content": "Welding technology teaches metal fabrication, safety procedures, and blueprint reading. Careers include welding and metalworking."
   },
   {
      "title": "Digital Media & Graphic Design",
      "url": "cte/digital-media",
      "content": "Graphic design includes digital illustration, branding, and video production. Careers include graphic designers and video editors."
   },
   {
      "title": "Construction & Carpentry",
      "url": "cte/construction",
      "content": "Construction teaches blueprint reading, framing, and finishing. Careers include carpentry, plumbing, and electrical work."
   },
   {
      "title": "Agriculture & Natural Resources",
      "url": "cte/agriculture",
      "content": "Agriculture education covers crop production, animal science, and environmental conservation. Careers include farming and forestry."
   },
   {
      "title": "Law & Public Safety",
      "url": "cte/law-public-safety",
      "content": "This program prepares students for careers in law enforcement, firefighting, and emergency management."
   },
   {
      "title": "Robotics & Engineering",
      "url": "cte/robotics-engineering",
      "content": "Engineering and robotics focus on mechanical design, automation, and electronics. Careers include robotics technicians and engineers."
   }
];


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
