import type { Transaction } from "../client";
import { problemCodeTemplates } from "../schemas/code-templates";

// Function to generate code templates for a problem in multiple languages
export const codeTemplatesSeedData = (
  problemId: string,
  problemSlug: string,
  languagesMap: Map<string, string>,
): (typeof problemCodeTemplates.$inferInsert)[] => {
  const templates: (typeof problemCodeTemplates.$inferInsert)[] = [];

  if (problemSlug === "two-sum") {
    // JavaScript solution
    const jsLangId = languagesMap.get("javascript");
    if (jsLangId !== undefined) {
      templates.push({
        problemId,
        languageId: jsLangId,
        initialCode: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  // Your code here
}`,
      });
    }

    // Python solution
    const pyLangId = languagesMap.get("python");
    if (pyLangId !== undefined) {
      templates.push({
        problemId,
        languageId: pyLangId,
        initialCode: `from typing import List

def two_sum(nums: List[int], target: int) -> List[int]:
    # Your code here
    pass`,
      });
    }

    // Java solution
    const javaLangId = languagesMap.get("java");
    if (javaLangId !== undefined) {
      templates.push({
        problemId,
        languageId: javaLangId,
        initialCode: `import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Your code here
    }
}`,
      });
    }
  }

  if (problemSlug === "valid-parentheses") {
    // JavaScript solution
    const jsLangId = languagesMap.get("javascript");
    if (jsLangId !== undefined) {
      templates.push({
        problemId,
        languageId: jsLangId,
        initialCode: `/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  // Your code here
}`,
      });
    }

    // Python solution
    const pyLangId = languagesMap.get("python");
    if (pyLangId !== undefined) {
      templates.push({
        problemId,
        languageId: pyLangId,
        initialCode: `def is_valid(s: str) -> bool:
    # Your code here
    pass`,
      });
    }
  }

  if (problemSlug === "rotate-image") {
    // JavaScript solution
    const jsLangId = languagesMap.get("javascript");
    if (jsLangId !== undefined) {
      templates.push({
        problemId,
        languageId: jsLangId,
        initialCode: `/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix) {
  // Your code here
}`,
      });
    }

    // Python solution
    const pyLangId = languagesMap.get("python");
    if (pyLangId !== undefined) {
      templates.push({
        problemId,
        languageId: pyLangId,
        initialCode: `from typing import List

def rotate(matrix: List[List[int]]) -> None:
    """
    Do not return anything, modify matrix in-place instead.
    """
    # Your code here
    pass`,
      });
    }

    // Java solution
    const javaLangId = languagesMap.get("java");
    if (javaLangId !== undefined) {
      templates.push({
        problemId,
        languageId: javaLangId,
        initialCode: `class Solution {
    public void rotate(int[][] matrix) {
        // Your code here
    }
}`,
      });
    }
  }

  if (problemSlug === "palindrome-linked-list") {
    // JavaScript solution
    const jsLangId = languagesMap.get("javascript");
    if (jsLangId !== undefined) {
      templates.push({
        problemId,
        languageId: jsLangId,
        initialCode: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
  // Your code here
}`,
      });
    }

    // Python solution
    const pyLangId = languagesMap.get("python");
    if (pyLangId !== undefined) {
      templates.push({
        problemId,
        languageId: pyLangId,
        initialCode: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

def is_palindrome(head: ListNode) -> bool:
    # Your code here
    pass`,
      });
    }

    // Java solution
    const javaLangId = languagesMap.get("java");
    if (javaLangId !== undefined) {
      templates.push({
        problemId,
        languageId: javaLangId,
        initialCode: `/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
        // Your code here
    }
}`,
      });
    }
  }

  if (problemSlug === "lru-cache") {
    // JavaScript solution
    const jsLangId = languagesMap.get("javascript");
    if (jsLangId !== undefined) {
      templates.push({
        problemId,
        languageId: jsLangId,
        initialCode: `/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity) {
        // Initialize your data structure here
    }
    
    /** 
     * @param {number} key
     * @return {number}
     */
    get(key) {
        // Your code here
    }
    
    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        // Your code here
    }
}

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key, value)
 */`,
      });
    }

    // Python solution
    const pyLangId = languagesMap.get("python");
    if (pyLangId !== undefined) {
      templates.push({
        problemId,
        languageId: pyLangId,
        initialCode: `class LRUCache:
    def __init__(self, capacity: int):
        # Initialize your data structure here
        pass
    
    def get(self, key: int) -> int:
        # Your code here
        pass
    
    def put(self, key: int, value: int) -> None:
        # Your code here
        pass

# Your LRUCache object will be instantiated and called as such:
# obj = LRUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key, value)`,
      });
    }

    // Java solution
    const javaLangId = languagesMap.get("java");
    if (javaLangId !== undefined) {
      templates.push({
        problemId,
        languageId: javaLangId,
        initialCode: `class LRUCache {
    
    public LRUCache(int capacity) {
        // Initialize your data structure here
    }
    
    public int get(int key) {
        // Your code here
    }
    
    public void put(int key, int value) {
        // Your code here
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */`,
      });
    }
  }

  if (problemSlug === "course-schedule") {
    // JavaScript solution
    const jsLangId = languagesMap.get("javascript");
    if (jsLangId !== undefined) {
      templates.push({
        problemId,
        languageId: jsLangId,
        initialCode: `/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
function canFinish(numCourses, prerequisites) {
  // Your code here
}`,
      });
    }

    // Python solution
    const pyLangId = languagesMap.get("python");
    if (pyLangId !== undefined) {
      templates.push({
        problemId,
        languageId: pyLangId,
        initialCode: `from typing import List

def can_finish(num_courses: int, prerequisites: List[List[int]]) -> bool:
    # Your code here
    pass`,
      });
    }

    // Java solution
    const javaLangId = languagesMap.get("java");
    if (javaLangId !== undefined) {
      templates.push({
        problemId,
        languageId: javaLangId,
        initialCode: `class Solution {
    public boolean canFinish(int numCourses, int[][] prerequisites) {
        // Your code here
    }
}`,
      });
    }
  }

  if (problemSlug === "word-break") {
    // JavaScript solution
    const jsLangId = languagesMap.get("javascript");
    if (jsLangId !== undefined) {
      templates.push({
        problemId,
        languageId: jsLangId,
        initialCode: `/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
function wordBreak(s, wordDict) {
  // Your code here
}`,
      });
    }

    // Python solution
    const pyLangId = languagesMap.get("python");
    if (pyLangId !== undefined) {
      templates.push({
        problemId,
        languageId: pyLangId,
        initialCode: `from typing import List

def word_break(s: str, word_dict: List[str]) -> bool:
    # Your code here
    pass`,
      });
    }

    // Java solution
    const javaLangId = languagesMap.get("java");
    if (javaLangId !== undefined) {
      templates.push({
        problemId,
        languageId: javaLangId,
        initialCode: `import java.util.List;

class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        // Your code here
    }
}`,
      });
    }
  }

  if (problemSlug === "median-of-two-sorted-arrays") {
    // JavaScript solution
    const jsLangId = languagesMap.get("javascript");
    if (jsLangId !== undefined) {
      templates.push({
        problemId,
        languageId: jsLangId,
        initialCode: `/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function findMedianSortedArrays(nums1, nums2) {
  // Your code here
}`,
      });
    }

    // Python solution
    const pyLangId = languagesMap.get("python");
    if (pyLangId !== undefined) {
      templates.push({
        problemId,
        languageId: pyLangId,
        initialCode: `from typing import List

def find_median_sorted_arrays(nums1: List[int], nums2: List[int]) -> float:
    # Your code here
    pass`,
      });
    }

    // Java solution
    const javaLangId = languagesMap.get("java");
    if (javaLangId !== undefined) {
      templates.push({
        problemId,
        languageId: javaLangId,
        initialCode: `class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // Your code here
    }
}`,
      });
    }
  }

  return templates;
};

export const insertCodeTemplatesSeed = async (
  db: Transaction,
  problemsMap: Map<string, string>,
  languagesMap: Map<string, string>,
) => {
  console.log("🌱 Seeding code templates...");

  // For each problem we have templates for
  const problemsWithTemplates = [
    "two-sum",
    "valid-parentheses",
    "rotate-image",
    "palindrome-linked-list",
    "lru-cache",
    "course-schedule",
    "word-break",
    "median-of-two-sorted-arrays",
  ];

  for (const problemSlug of problemsWithTemplates) {
    const problemId = problemsMap.get(problemSlug);
    if (!problemId) continue;

    const templates = codeTemplatesSeedData(
      problemId,
      problemSlug,
      languagesMap,
    );
    if (templates.length > 0) {
      await db
        .insert(problemCodeTemplates)
        .values(templates)
        .onConflictDoNothing();
    }
  }
};
