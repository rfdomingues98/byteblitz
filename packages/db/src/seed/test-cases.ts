import type { Db } from "../client";
import { testCases } from "../schemas/tests";

// We'll need to retrieve the problem IDs from the database after they're inserted
export const testCasesSeedData = (problemId: string, problemSlug: string): typeof testCases.$inferInsert[] => {
  if (problemSlug === "two-sum") {
    return [
      {
        problemId,
        input: JSON.stringify({
          nums: [2, 7, 11, 15],
          target: 9
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
          target: 6
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
          target: 6
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
          target: 9
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
          target: 19
        }),
        expectedOutput: JSON.stringify([8, 9]),
        isPublic: false,
        isSample: false,
        orderIndex: 4,
      }
    ];
  }

  if (problemSlug === "valid-parentheses") {
    return [
      {
        problemId,
        input: JSON.stringify({
          s: "()"
        }),
        expectedOutput: JSON.stringify(true),
        isPublic: true,
        isSample: true,
        orderIndex: 0,
      },
      {
        problemId,
        input: JSON.stringify({
          s: "()[]{}"
        }),
        expectedOutput: JSON.stringify(true),
        isPublic: true,
        isSample: true,
        orderIndex: 1,
      },
      {
        problemId,
        input: JSON.stringify({
          s: "(]"
        }),
        expectedOutput: JSON.stringify(false),
        isPublic: true,
        isSample: true,
        orderIndex: 2,
      },
      {
        problemId,
        input: JSON.stringify({
          s: "([)]"
        }),
        expectedOutput: JSON.stringify(false),
        isPublic: false,
        isSample: false,
        orderIndex: 3,
      },
      {
        problemId,
        input: JSON.stringify({
          s: "{[]}"
        }),
        expectedOutput: JSON.stringify(true),
        isPublic: false,
        isSample: false,
        orderIndex: 4,
      }
    ];
  }

  if (problemSlug === "rotate-image") {
    return [
      {
        problemId,
        input: JSON.stringify({
          matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        }),
        expectedOutput: JSON.stringify([[7, 4, 1], [8, 5, 2], [9, 6, 3]]),
        isPublic: true,
        isSample: true,
        orderIndex: 0,
      },
      {
        problemId,
        input: JSON.stringify({
          matrix: [[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]
        }),
        expectedOutput: JSON.stringify([[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]),
        isPublic: true,
        isSample: true,
        orderIndex: 1,
      },
      {
        problemId,
        input: JSON.stringify({
          matrix: [[1]]
        }),
        expectedOutput: JSON.stringify([[1]]),
        isPublic: false,
        isSample: false,
        orderIndex: 2,
      },
      {
        problemId,
        input: JSON.stringify({
          matrix: [[1, 2], [3, 4]]
        }),
        expectedOutput: JSON.stringify([[3, 1], [4, 2]]),
        isPublic: false,
        isSample: false,
        orderIndex: 3,
      }
    ];
  }

  if (problemSlug === "palindrome-linked-list") {
    return [
      {
        problemId,
        input: JSON.stringify({
          head: [1, 2, 2, 1]
        }),
        expectedOutput: JSON.stringify(true),
        isPublic: true,
        isSample: true,
        orderIndex: 0,
      },
      {
        problemId,
        input: JSON.stringify({
          head: [1, 2]
        }),
        expectedOutput: JSON.stringify(false),
        isPublic: true,
        isSample: true,
        orderIndex: 1,
      },
      {
        problemId,
        input: JSON.stringify({
          head: [1, 2, 3, 2, 1]
        }),
        expectedOutput: JSON.stringify(true),
        isPublic: false,
        isSample: false,
        orderIndex: 2,
      },
      {
        problemId,
        input: JSON.stringify({
          head: [1, 2, 3, 4, 5]
        }),
        expectedOutput: JSON.stringify(false),
        isPublic: false,
        isSample: false,
        orderIndex: 3,
      }
    ];
  }

  if (problemSlug === "lru-cache") {
    return [
      {
        problemId,
        input: JSON.stringify({
          operations: ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"],
          values: [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
        }),
        expectedOutput: JSON.stringify([null, null, null, 1, null, -1, null, -1, 3, 4]),
        explanation: "LRUCache lRUCache = new LRUCache(2); lRUCache.put(1, 1); lRUCache.put(2, 2); lRUCache.get(1); lRUCache.put(3, 3); lRUCache.get(2); lRUCache.put(4, 4); lRUCache.get(1); lRUCache.get(3); lRUCache.get(4);",
        isPublic: true,
        isSample: true,
        orderIndex: 0,
      },
      {
        problemId,
        input: JSON.stringify({
          operations: ["LRUCache", "put", "get", "put", "get", "get"],
          values: [[1], [2, 1], [2], [3, 2], [2], [3]]
        }),
        expectedOutput: JSON.stringify([null, null, 1, null, -1, 2]),
        isPublic: false,
        isSample: false,
        orderIndex: 1,
      }
    ];
  }

  if (problemSlug === "course-schedule") {
    return [
      {
        problemId,
        input: JSON.stringify({
          numCourses: 2,
          prerequisites: [[1, 0]]
        }),
        expectedOutput: JSON.stringify(true),
        explanation: "There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.",
        isPublic: true,
        isSample: true,
        orderIndex: 0,
      },
      {
        problemId,
        input: JSON.stringify({
          numCourses: 2,
          prerequisites: [[1, 0], [0, 1]]
        }),
        expectedOutput: JSON.stringify(false),
        explanation: "There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.",
        isPublic: true,
        isSample: true,
        orderIndex: 1,
      },
      {
        problemId,
        input: JSON.stringify({
          numCourses: 4,
          prerequisites: [[1, 0], [2, 1], [3, 2]]
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
          prerequisites: [[0, 1], [0, 2], [1, 2], [2, 0]]
        }),
        expectedOutput: JSON.stringify(false),
        isPublic: false,
        isSample: false,
        orderIndex: 3,
      }
    ];
  }

  if (problemSlug === "word-break") {
    return [
      {
        problemId,
        input: JSON.stringify({
          s: "leetcode",
          wordDict: ["leet", "code"]
        }),
        expectedOutput: JSON.stringify(true),
        explanation: "Return true because 'leetcode' can be segmented as 'leet code'.",
        isPublic: true,
        isSample: true,
        orderIndex: 0,
      },
      {
        problemId,
        input: JSON.stringify({
          s: "applepenapple",
          wordDict: ["apple", "pen"]
        }),
        expectedOutput: JSON.stringify(true),
        explanation: "Return true because 'applepenapple' can be segmented as 'apple pen apple'. Note that you are allowed to reuse a dictionary word.",
        isPublic: true,
        isSample: true,
        orderIndex: 1,
      },
      {
        problemId,
        input: JSON.stringify({
          s: "catsandog",
          wordDict: ["cats", "dog", "sand", "and", "cat"]
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
          wordDict: ["aaaa", "aaa"]
        }),
        expectedOutput: JSON.stringify(true),
        isPublic: false,
        isSample: false,
        orderIndex: 3,
      }
    ];
  }

  if (problemSlug === "median-of-two-sorted-arrays") {
    return [
      {
        problemId,
        input: JSON.stringify({
          nums1: [1, 3],
          nums2: [2]
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
          nums2: [3, 4]
        }),
        expectedOutput: JSON.stringify(2.5),
        explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.",
        isPublic: true,
        isSample: true,
        orderIndex: 1,
      },
      {
        problemId,
        input: JSON.stringify({
          nums1: [],
          nums2: [1]
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
          nums2: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
        }),
        expectedOutput: JSON.stringify(1.5),
        isPublic: false,
        isSample: false,
        orderIndex: 3,
      }
    ];
  }

  // Default empty array for other problems
  return [];
};

export const insertTestCasesSeed = async (
  db: Db,
  problemsMap: Map<string, string>
) => {
  console.log("🌱 Seeding test cases...");

  // For each problem we have test cases for
  const problemsWithTests = [
    "two-sum",
    "valid-parentheses",
    "rotate-image",
    "palindrome-linked-list",
    "lru-cache",
    "course-schedule",
    "word-break",
    "median-of-two-sorted-arrays"
  ];

  for (const problemSlug of problemsWithTests) {
    const problemId = problemsMap.get(problemSlug);
    if (!problemId) continue;

    const tests = testCasesSeedData(problemId, problemSlug);
    if (tests.length > 0) {
      await db.insert(testCases).values(tests).onConflictDoNothing();
    }
  }
}; 