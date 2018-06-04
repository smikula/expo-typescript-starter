// Files that end in '.test.ts' or '.test.tsx' will be treated as test files
module.exports = {
    transform: { '^.+\\.tsx?$': 'ts-jest' },
    testRegex: '\\.test\\.tsx?$',
    moduleFileExtensions: ['js', 'jsx', 'json', 'ts', 'tsx'],
};
