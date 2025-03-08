import type { Transaction } from "../client";
import { testCases } from "../schemas/tests";

// Define a type for our test case generator functions
type TestCaseGenerator = (problemId: string) => (typeof testCases.$inferInsert)[];

// We'll organize test cases in a map with problem slug as the key
const testCasesMap: Record<string, TestCaseGenerator> = {
  "two-sum": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        nums: [2, 7, 11, 15],
        target: 9,
      }),
      expectedOutput: JSON.stringify([0, 1]),
      explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        nums: [3, 2, 4],
        target: 6,
      }),
      expectedOutput: JSON.stringify([1, 2]),
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        nums: [3, 3],
        target: 6,
      }),
      expectedOutput: JSON.stringify([0, 1]),
      isPublic: true,
      isSample: true,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        nums: [1, 2, 3, 4, 5],
        target: 9,
      }),
      expectedOutput: JSON.stringify([3, 4]),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
    {
      problemId,
      input: JSON.stringify({
        nums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        target: 19,
      }),
      expectedOutput: JSON.stringify([8, 9]),
      isPublic: false,
      isSample: false,
      orderIndex: 4,
    },
  ],

  "valid-parentheses": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        s: "()",
      }),
      expectedOutput: JSON.stringify(true),
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "()[]{}",
      }),
      expectedOutput: JSON.stringify(true),
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "(]",
      }),
      expectedOutput: JSON.stringify(false),
      isPublic: true,
      isSample: true,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "([)]",
      }),
      expectedOutput: JSON.stringify(false),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "{[]}",
      }),
      expectedOutput: JSON.stringify(true),
      isPublic: false,
      isSample: false,
      orderIndex: 4,
    },
  ],

  "rotate-image": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        matrix: [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
      }),
      expectedOutput: JSON.stringify([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3],
      ]),
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        matrix: [
          [5, 1, 9, 11],
          [2, 4, 8, 10],
          [13, 3, 6, 7],
          [15, 14, 12, 16],
        ],
      }),
      expectedOutput: JSON.stringify([
        [15, 13, 2, 5],
        [14, 3, 4, 1],
        [12, 6, 8, 9],
        [16, 7, 10, 11],
      ]),
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        matrix: [[1]],
      }),
      expectedOutput: JSON.stringify([[1]]),
      isPublic: false,
      isSample: false,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        matrix: [
          [1, 2],
          [3, 4],
        ],
      }),
      expectedOutput: JSON.stringify([
        [3, 1],
        [4, 2],
      ]),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],

  "palindrome-linked-list": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        head: [1, 2, 2, 1],
      }),
      expectedOutput: JSON.stringify(true),
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        head: [1, 2],
      }),
      expectedOutput: JSON.stringify(false),
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        head: [1, 2, 3, 2, 1],
      }),
      expectedOutput: JSON.stringify(true),
      isPublic: false,
      isSample: false,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        head: [1, 2, 3, 4, 5],
      }),
      expectedOutput: JSON.stringify(false),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],

  "lru-cache": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        operations: [
          "LRUCache",
          "put",
          "put",
          "get",
          "put",
          "get",
          "put",
          "get",
          "get",
          "get",
        ],
        values: [
          [2],
          [1, 1],
          [2, 2],
          [1],
          [3, 3],
          [2],
          [4, 4],
          [1],
          [3],
          [4],
        ],
      }),
      expectedOutput: JSON.stringify([
        null,
        null,
        null,
        1,
        null,
        -1,
        null,
        -1,
        3,
        4,
      ]),
      explanation:
        "LRUCache lRUCache = new LRUCache(2); lRUCache.put(1, 1); lRUCache.put(2, 2); lRUCache.get(1); lRUCache.put(3, 3); lRUCache.get(2); lRUCache.put(4, 4); lRUCache.get(1); lRUCache.get(3); lRUCache.get(4);",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        operations: ["LRUCache", "put", "get", "put", "get", "get"],
        values: [[1], [2, 1], [2], [3, 2], [2], [3]],
      }),
      expectedOutput: JSON.stringify([null, null, 1, null, -1, 2]),
      isPublic: false,
      isSample: false,
      orderIndex: 1,
    },
  ],

  "course-schedule": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        numCourses: 2,
        prerequisites: [[1, 0]],
      }),
      expectedOutput: JSON.stringify(true),
      explanation:
        "There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        numCourses: 2,
        prerequisites: [
          [1, 0],
          [0, 1],
        ],
      }),
      expectedOutput: JSON.stringify(false),
      explanation:
        "There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.",
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        numCourses: 4,
        prerequisites: [
          [1, 0],
          [2, 1],
          [3, 2],
        ],
      }),
      expectedOutput: JSON.stringify(true),
      isPublic: false,
      isSample: false,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        numCourses: 3,
        prerequisites: [
          [0, 1],
          [0, 2],
          [1, 2],
          [2, 0],
        ],
      }),
      expectedOutput: JSON.stringify(false),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],

  "word-break": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        s: "leetcode",
        wordDict: ["leet", "code"],
      }),
      expectedOutput: JSON.stringify(true),
      explanation:
        "Return true because 'leetcode' can be segmented as 'leet code'.",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "applepenapple",
        wordDict: ["apple", "pen"],
      }),
      expectedOutput: JSON.stringify(true),
      explanation:
        "Return true because 'applepenapple' can be segmented as 'apple pen apple'. Note that you are allowed to reuse a dictionary word.",
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "catsandog",
        wordDict: ["cats", "dog", "sand", "and", "cat"],
      }),
      expectedOutput: JSON.stringify(false),
      isPublic: true,
      isSample: true,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "aaaaaaa",
        wordDict: ["aaaa", "aaa"],
      }),
      expectedOutput: JSON.stringify(true),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],

  "median-of-two-sorted-arrays": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        nums1: [1, 3],
        nums2: [2],
      }),
      expectedOutput: JSON.stringify(2.0),
      explanation: "merged array = [1,2,3] and median is 2.",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        nums1: [1, 2],
        nums2: [3, 4],
      }),
      expectedOutput: JSON.stringify(2.5),
      explanation:
        "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        nums1: [],
        nums2: [1],
      }),
      expectedOutput: JSON.stringify(1.0),
      isPublic: false,
      isSample: false,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        nums1: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        nums2: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      }),
      expectedOutput: JSON.stringify(1.5),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],

  "merge-two-sorted-lists": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        list1: [1, 2, 4],
        list2: [1, 3, 4],
      }),
      expectedOutput: JSON.stringify([1, 1, 2, 3, 4, 4]),
      explanation: "The two lists [1,2,4] and [1,3,4] merge to form [1,1,2,3,4,4].",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        list1: [],
        list2: [0],
      }),
      expectedOutput: JSON.stringify([0]),
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        list1: [],
        list2: [],
      }),
      expectedOutput: JSON.stringify([]),
      isPublic: true,
      isSample: true,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        list1: [1, 5, 7],
        list2: [2, 4, 6, 8],
      }),
      expectedOutput: JSON.stringify([1, 2, 4, 5, 6, 7, 8]),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],

  "add-two-numbers": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        l1: [2, 4, 3],
        l2: [5, 6, 4],
      }),
      expectedOutput: JSON.stringify([7, 0, 8]),
      explanation: "342 + 465 = 807. The result represents 807 in reverse order.",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        l1: [0],
        l2: [0],
      }),
      expectedOutput: JSON.stringify([0]),
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        l1: [9, 9, 9, 9, 9, 9, 9],
        l2: [9, 9, 9, 9],
      }),
      expectedOutput: JSON.stringify([8, 9, 9, 9, 0, 0, 0, 1]),
      explanation: "9999999 + 9999 = 10009998. The result represents 10009998 in reverse order.",
      isPublic: true,
      isSample: true,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        l1: [1, 2, 3],
        l2: [4, 5, 6],
      }),
      expectedOutput: JSON.stringify([5, 7, 9]),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],

  "longest-substring-without-repeating-characters": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        s: "abcabcbb",
      }),
      expectedOutput: JSON.stringify(3),
      explanation: "The answer is 'abc', with the length of 3.",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "bbbbb",
      }),
      expectedOutput: JSON.stringify(1),
      explanation: "The answer is 'b', with the length of 1.",
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "pwwkew",
      }),
      expectedOutput: JSON.stringify(3),
      explanation: "The answer is 'wke', with the length of 3. Notice that the answer must be a substring, 'pwke' is a subsequence and not a substring.",
      isPublic: true,
      isSample: true,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "aab",
      }),
      expectedOutput: JSON.stringify(2),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
    {
      problemId,
      input: JSON.stringify({
        s: "",
      }),
      expectedOutput: JSON.stringify(0),
      isPublic: false,
      isSample: false,
      orderIndex: 4,
    },
  ],

  "reverse-linked-list": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        head: [1, 2, 3, 4, 5],
      }),
      expectedOutput: JSON.stringify([5, 4, 3, 2, 1]),
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        head: [1, 2],
      }),
      expectedOutput: JSON.stringify([2, 1]),
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        head: [],
      }),
      expectedOutput: JSON.stringify([]),
      isPublic: true,
      isSample: true,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        head: [1, 2, 3, 4, 5, 6, 7, 8],
      }),
      expectedOutput: JSON.stringify([8, 7, 6, 5, 4, 3, 2, 1]),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],

  "maximum-subarray": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      }),
      expectedOutput: JSON.stringify(6),
      explanation: "The subarray [4,-1,2,1] has the largest sum 6.",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        nums: [1],
      }),
      expectedOutput: JSON.stringify(1),
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        nums: [5, 4, -1, 7, 8],
      }),
      expectedOutput: JSON.stringify(23),
      explanation: "The subarray [5,4,-1,7,8] has the largest sum 23.",
      isPublic: true,
      isSample: true,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        nums: [-1],
      }),
      expectedOutput: JSON.stringify(-1),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
    {
      problemId,
      input: JSON.stringify({
        nums: [-2, -1],
      }),
      expectedOutput: JSON.stringify(-1),
      explanation: "The subarray [-1] has the largest sum -1.",
      isPublic: false,
      isSample: false,
      orderIndex: 4,
    },
  ],

  "container-with-most-water": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
      }),
      expectedOutput: JSON.stringify(49),
      explanation: "The maximum area is formed by the vertical lines at indices 1 and 8 with heights 8 and 7, resulting in an area of min(8, 7) * (8 - 1) = 7 * 7 = 49.",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        height: [1, 1],
      }),
      expectedOutput: JSON.stringify(1),
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        height: [4, 3, 2, 1, 4],
      }),
      expectedOutput: JSON.stringify(16),
      explanation: "The maximum area is formed by the vertical lines at indices 0 and 4 with heights 4 and 4, resulting in an area of min(4, 4) * (4 - 0) = 4 * 4 = 16.",
      isPublic: false,
      isSample: false,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        height: [1, 2, 1],
      }),
      expectedOutput: JSON.stringify(2),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],

  "trapping-rain-water": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        height: [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1],
      }),
      expectedOutput: JSON.stringify(6),
      explanation: "The trapped rain water areas are: 1 unit between bars at indices 1 and 3, 1 unit between 3 and 6, 2 units between 6 and 8, and 2 units between 8 and 10. Total is 1 + 1 + 2 + 2 = 6.",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        height: [4, 2, 0, 3, 2, 5],
      }),
      expectedOutput: JSON.stringify(9),
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        height: [4, 2, 3],
      }),
      expectedOutput: JSON.stringify(1),
      explanation: "The trapped rain water area is: 1 unit between bars at indices 1 and 2.",
      isPublic: false,
      isSample: false,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        height: [5, 4, 1, 2],
      }),
      expectedOutput: JSON.stringify(1),
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],

  "binary-tree-maximum-path-sum": (problemId) => [
    {
      problemId,
      input: JSON.stringify({
        root: [1, 2, 3],
      }),
      expectedOutput: JSON.stringify(6),
      explanation: "The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.",
      isPublic: true,
      isSample: true,
      orderIndex: 0,
    },
    {
      problemId,
      input: JSON.stringify({
        root: [-10, 9, 20, null, null, 15, 7],
      }),
      expectedOutput: JSON.stringify(42),
      explanation: "The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.",
      isPublic: true,
      isSample: true,
      orderIndex: 1,
    },
    {
      problemId,
      input: JSON.stringify({
        root: [-3],
      }),
      expectedOutput: JSON.stringify(-3),
      isPublic: false,
      isSample: false,
      orderIndex: 2,
    },
    {
      problemId,
      input: JSON.stringify({
        root: [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1],
      }),
      expectedOutput: JSON.stringify(48),
      explanation: "The optimal path is 11 -> 4 -> 5 -> 8 -> 13 + 7 with a path sum of 11 + 4 + 5 + 8 + 13 + 7 = 48.",
      isPublic: false,
      isSample: false,
      orderIndex: 3,
    },
  ],
};

// We'll need to retrieve the problem IDs from the database after they're inserted
export const testCasesSeedData = (
  problemId: string,
  problemSlug: string,
): (typeof testCases.$inferInsert)[] => {
  // Look up the test cases generator function for this problem slug
  const testCaseGenerator = testCasesMap[problemSlug];

  // If we have test cases for this problem, use them, otherwise return an empty array
  return testCaseGenerator ? testCaseGenerator(problemId) : [];
};

export const insertTestCasesSeed = async (
  db: Transaction,
  problemsMap: Map<string, string>,
) => {
  console.log("🌱 Seeding test cases...");

  // For each problem we have test cases for - this should match the keys in testCasesMap
  const problemsWithTests = Object.keys(testCasesMap);

  for (const problemSlug of problemsWithTests) {
    const problemId = problemsMap.get(problemSlug);
    if (!problemId) continue;

    const tests = testCasesSeedData(problemId, problemSlug);
    if (tests.length > 0) {
      await db.insert(testCases).values(tests).onConflictDoNothing();
    }
  }
};
