// formatName.js

/**
 * Converts a string to title case (first letter of each word capitalized)
 * @param {string} name - The input name string
 * @returns {string} - Name in title case
 */
function formatName(name) {
    if (!name) return "";
    return name
        // .trim()
        // .split(/\s+/) // split by one or more spaces
        // .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        // .join(' ');
}

// Example usage with user input
if (require.main === module) {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question("Enter your name: ", input => {
        console.log("Formatted name:", formatName(input));
        readline.close();
    });
}

module.exports = formatName;