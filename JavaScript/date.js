// Create a Date object for the current date and time
const now = new Date();
console.log("Current Date and Time:", now);
console.log("Current Date and Time:", now.toString());


// Create a Date object for a specific date (Christmas 2024)
const christmas2024 = new Date('2024-12-25T00:00:00Z');
console.log("Christmas 2024:", christmas2024.toString());

// Get and log date components
console.log("Year:", now.getFullYear());  // e.g., 2024
console.log("Month (0-11):", now.getMonth()); // e.g., 9 (for October)
console.log("Date (1-31):", now.getDate()); // e.g., 3
console.log("Day of the Week (0-6):", now.getDay()); // e.g., 4 (Thursday)

// Setting components of a date
const futureDate = new Date();
futureDate.setFullYear(2025);
futureDate.setMonth(11); // December
futureDate.setDate(25);
console.log("Future Date (25 December 2025):", futureDate.toString());

// Get milliseconds since January 1, 1970
const timestamp = now.getTime();
console.log("Current Timestamp (ms since epoch):", timestamp);

// Convert a date to ISO format
console.log("Current Date in ISO format:", now.toISOString());

// Format the current date to a locale-specific string
console.log("Current Date in Local String format:", now.toLocaleString());

// Calculate the number of days until Christmas 2024
const daysUntilChristmas = Math.floor((christmas2024.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
console.log("Days until Christmas 2024:", daysUntilChristmas);
