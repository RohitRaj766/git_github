// testFormatName.js

const formatName = require('./formatName');

// Array of test cases
const testCases = [
    { input: "rohit raj", expected: "Rohit Raj" },
    { input: "alice", expected: "Alice" },
    { input: "  john  doe  ", expected: "John Doe" },
    { input: "rOhIt rAJ", expected: "Rohit Raj" },
    { input: "", expected: "" }
];

console.log("Running tests...\n");

let failedTests = 0;

testCases.forEach((test, index) => {
    const { input, expected } = test;
    const result = formatName(input);

    if (result === expected) {
        console.log(`✅ Test ${index + 1} Passed: "${input}" → "${result}"`);
    } else {
        console.error(`❌ Test ${index + 1} Failed: "${input}" → "${result}", expected: "${expected}"`);
        failedTests++;
    }
});

console.log("\nAll tests completed.");

// Exit with error code if any tests failed
if (failedTests > 0) {
    process.exit(1);
}