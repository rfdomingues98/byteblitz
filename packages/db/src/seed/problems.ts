import type { Transaction } from "../client";
import { problems } from "../schemas/problems";

export const problemsSeedData: (typeof problems.$inferInsert)[] = [
  {
    title: "Two Sum",
    slug: "two-sum",
    description: `# Two Sum

Given an array of integers \`nums\` and an integer \`target\`, return indices of the two numbers such that they add up to \`target\`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

## Example 1:

\`\`\`
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
\`\`\`

## Example 2:

\`\`\`
Input: nums = [3,2,4], target = 6
Output: [1,2]
\`\`\`

## Example 3:

\`\`\`
Input: nums = [3,3], target = 6
Output: [0,1]
\`\`\`

## Constraints:

- \`2 <= nums.length <= 10^4\`
- \`-10^9 <= nums[i] <= 10^9\`
- \`-10^9 <= target <= 10^9\`
- Only one valid answer exists.

**Follow-up:** Can you come up with an algorithm that is less than O(n²) time complexity?`,
    difficulty: "easy",
    isPublished: true,
  },
  {
    title: "Valid Parentheses",
    slug: "valid-parentheses",
    description: `# Valid Parentheses

Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

## Example 1:

\`\`\`
Input: s = "()"
Output: true
\`\`\`

## Example 2:

\`\`\`
Input: s = "()[]{}"
Output: true
\`\`\`

## Example 3:

\`\`\`
Input: s = "(]"
Output: false
\`\`\`

## Constraints:

- \`1 <= s.length <= 10^4\`
- \`s\` consists of parentheses only \`'()[]{}'\`.`,
    difficulty: "easy",
    isPublished: true,
  },
  {
    title: "Merge Two Sorted Lists",
    slug: "merge-two-sorted-lists",
    description: `# Merge Two Sorted Lists

You are given the heads of two sorted linked lists \`list1\` and \`list2\`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

## Example 1:

\`\`\`
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
\`\`\`

## Example 2:

\`\`\`
Input: list1 = [], list2 = []
Output: []
\`\`\`

## Example 3:

\`\`\`
Input: list1 = [], list2 = [0]
Output: [0]
\`\`\`

## Constraints:

- The number of nodes in both lists is in the range \`[0, 50]\`.
- \`-100 <= Node.val <= 100\`
- Both \`list1\` and \`list2\` are sorted in non-decreasing order.`,
    difficulty: "easy",
    isPublished: true,
  },
  {
    title: "Add Two Numbers",
    slug: "add-two-numbers",
    description: `# Add Two Numbers

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

## Example 1:

\`\`\`
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
\`\`\`

## Example 2:

\`\`\`
Input: l1 = [0], l2 = [0]
Output: [0]
\`\`\`

## Example 3:

\`\`\`
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,1]
\`\`\`

## Constraints:

- The number of nodes in each linked list is in the range \`[1, 100]\`.
- \`0 <= Node.val <= 9\`
- It is guaranteed that the list represents a number that does not have leading zeros.`,
    difficulty: "medium",
    isPublished: true,
  },
  {
    title: "Longest Substring Without Repeating Characters",
    slug: "longest-substring-without-repeating-characters",
    description: `# Longest Substring Without Repeating Characters

Given a string \`s\`, find the length of the longest substring without repeating characters.

## Example 1:

\`\`\`
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
\`\`\`

## Example 2:

\`\`\`
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
\`\`\`

## Example 3:

\`\`\`
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
\`\`\`

## Constraints:

- \`0 <= s.length <= 5 * 10^4\`
- \`s\` consists of English letters, digits, symbols and spaces.`,
    difficulty: "medium",
    isPublished: true,
  },
  {
    title: "Reverse Linked List",
    slug: "reverse-linked-list",
    description: `# Reverse Linked List

Given the \`head\` of a singly linked list, reverse the list, and return the reversed list.

## Example 1:

\`\`\`
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
\`\`\`

## Example 2:

\`\`\`
Input: head = [1,2]
Output: [2,1]
\`\`\`

## Example 3:

\`\`\`
Input: head = []
Output: []
\`\`\`

## Constraints:

- The number of nodes in the list is the range \`[0, 5000]\`.
- \`-5000 <= Node.val <= 5000\`

**Follow-up:** A linked list can also be reversed iteratively or recursively. Could you implement both?`,
    difficulty: "easy",
    isPublished: true,
  },
  {
    title: "Maximum Subarray",
    slug: "maximum-subarray",
    description: `# Maximum Subarray

Given an integer array \`nums\`, find the subarray with the largest sum, and return its sum.

## Example 1:

\`\`\`
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: The subarray [4,-1,2,1] has the largest sum 6.
\`\`\`

## Example 2:

\`\`\`
Input: nums = [1]
Output: 1
Explanation: The subarray [1] has the largest sum 1.
\`\`\`

## Example 3:

\`\`\`
Input: nums = [5,4,-1,7,8]
Output: 23
Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
\`\`\`

## Constraints:

- \`1 <= nums.length <= 10^5\`
- \`-10^4 <= nums[i] <= 10^4\`

**Follow-up:** If you have figured out the \`O(n)\` solution, try coding another solution using the divide and conquer approach, which is more subtle.`,
    difficulty: "medium",
    isPublished: true,
  },
  {
    title: "Container With Most Water",
    slug: "container-with-most-water",
    description: `# Container With Most Water

You are given an integer array \`height\` of length \`n\`. There are \`n\` vertical lines drawn such that the two endpoints of the \`i\`th line are \`(i, 0)\` and \`(i, height[i])\`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

**Notice** that you may not slant the container.

## Example 1:

\`\`\`
Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water the container can contain is 49.
\`\`\`

## Example 2:

\`\`\`
Input: height = [1,1]
Output: 1
\`\`\`

## Constraints:

- \`n == height.length\`
- \`2 <= n <= 10^5\`
- \`0 <= height[i] <= 10^4\``,
    difficulty: "medium",
    isPublished: true,
  },
  {
    title: "Trapping Rain Water",
    slug: "trapping-rain-water",
    description: `# Trapping Rain Water

Given \`n\` non-negative integers representing an elevation map where the width of each bar is \`1\`, compute how much water it can trap after raining.

## Example 1:

\`\`\`
Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water are being trapped.
\`\`\`

## Example 2:

\`\`\`
Input: height = [4,2,0,3,2,5]
Output: 9
\`\`\`

## Constraints:

- \`n == height.length\`
- \`1 <= n <= 2 * 10^4\`
- \`0 <= height[i] <= 10^5\``,
    difficulty: "hard",
    isPublished: true,
  },
  {
    title: "Binary Tree Maximum Path Sum",
    slug: "binary-tree-maximum-path-sum",
    description: `# Binary Tree Maximum Path Sum

A **path** in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence **at most once**. Note that the path does not need to pass through the root.

The **path sum** of a path is the sum of the node's values in the path.

Given the \`root\` of a binary tree, return the maximum **path sum** of any **non-empty** path.

## Example 1:

\`\`\`
Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.
\`\`\`

## Example 2:

\`\`\`
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.
\`\`\`

## Constraints:

- The number of nodes in the tree is in the range \`[1, 3 * 10^4]\`.
- \`-1000 <= Node.val <= 1000\``,
    difficulty: "hard",
    isPublished: true,
  },
  {
    title: "Rotate Image",
    slug: "rotate-image",
    description: `# Rotate Image

You are given an \`n x n\` 2D \`matrix\` representing an image, rotate the image by **90 degrees** (clockwise).

You have to rotate the image **in-place**, which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

## Example 1:

\`\`\`
Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
\`\`\`

## Example 2:

\`\`\`
Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
\`\`\`

## Constraints:

- \`n == matrix.length == matrix[i].length\`
- \`1 <= n <= 20\`
- \`-1000 <= matrix[i][j] <= 1000\``,
    difficulty: "medium",
    isPublished: true,
  },
  {
    title: "Palindrome Linked List",
    slug: "palindrome-linked-list",
    description: `# Palindrome Linked List

Given the \`head\` of a singly linked list, return \`true\` if it is a palindrome or \`false\` otherwise.

## Example 1:

\`\`\`
Input: head = [1,2,2,1]
Output: true
\`\`\`

## Example 2:

\`\`\`
Input: head = [1,2]
Output: false
\`\`\`

## Constraints:

- The number of nodes in the list is in the range \`[1, 10^5]\`.
- \`0 <= Node.val <= 9\`

**Follow-up:** Could you do it in \`O(n)\` time and \`O(1)\` space?`,
    difficulty: "easy",
    isPublished: true,
  },
  {
    title: "LRU Cache",
    slug: "lru-cache",
    description: `# LRU Cache

Design a data structure that follows the constraints of a **Least Recently Used (LRU) cache**.

Implement the \`LRUCache\` class:

- \`LRUCache(int capacity)\` Initialize the LRU cache with **positive** size \`capacity\`.
- \`int get(int key)\` Return the value of the \`key\` if the key exists, otherwise return \`-1\`.
- \`void put(int key, int value)\` Update the value of the \`key\` if the \`key\` exists. Otherwise, add the \`key-value\` pair to the cache. If the number of keys exceeds the \`capacity\` from this operation, **evict** the least recently used key.

The functions \`get\` and \`put\` must each run in \`O(1)\` average time complexity.

## Example 1:

\`\`\`
Input
["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
Output
[null, null, null, 1, null, -1, null, -1, 3, 4]

Explanation
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
\`\`\`

## Constraints:

- \`1 <= capacity <= 3000\`
- \`0 <= key <= 10^4\`
- \`0 <= value <= 10^5\`
- At most \`2 * 10^5\` calls will be made to \`get\` and \`put\`.`,
    difficulty: "medium",
    isPublished: true,
  },
  {
    title: "Course Schedule",
    slug: "course-schedule",
    description: `# Course Schedule

There are a total of \`numCourses\` courses you have to take, labeled from \`0\` to \`numCourses - 1\`. You are given an array \`prerequisites\` where \`prerequisites[i] = [ai, bi]\` indicates that you **must** take course \`bi\` first if you want to take course \`ai\`.

For example, the pair \`[0, 1]\`, indicates that to take course \`0\` you have to first take course \`1\`.

Return \`true\` if you can finish all courses. Otherwise, return \`false\`.

## Example 1:

\`\`\`
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
\`\`\`

## Example 2:

\`\`\`
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
\`\`\`

## Constraints:

- \`1 <= numCourses <= 2000\`
- \`0 <= prerequisites.length <= 5000\`
- \`prerequisites[i].length == 2\`
- \`0 <= ai, bi < numCourses\`
- All the pairs prerequisites[i] are **unique**.`,
    difficulty: "medium",
    isPublished: true,
  },
  {
    title: "Word Break",
    slug: "word-break",
    description: `# Word Break

Given a string \`s\` and a dictionary of strings \`wordDict\`, return \`true\` if \`s\` can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

## Example 1:

\`\`\`
Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
\`\`\`

## Example 2:

\`\`\`
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
\`\`\`

## Example 3:

\`\`\`
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false
\`\`\`

## Constraints:

- \`1 <= s.length <= 300\`
- \`1 <= wordDict.length <= 1000\`
- \`1 <= wordDict[i].length <= 20\`
- \`s\` and \`wordDict[i]\` consist of only lowercase English letters.
- All the strings of \`wordDict\` are **unique**.`,
    difficulty: "medium",
    isPublished: true,
  },
  {
    title: "Median of Two Sorted Arrays",
    slug: "median-of-two-sorted-arrays",
    description: `# Median of Two Sorted Arrays

Given two sorted arrays \`nums1\` and \`nums2\` of size \`m\` and \`n\` respectively, return **the median** of the two sorted arrays.

The overall run time complexity should be \`O(log (m+n))\`.

## Example 1:

\`\`\`
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
\`\`\`

## Example 2:

\`\`\`
Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
\`\`\`

## Constraints:

- \`nums1.length == m\`
- \`nums2.length == n\`
- \`0 <= m <= 1000\`
- \`0 <= n <= 1000\`
- \`1 <= m + n <= 2000\`
- \`-10^6 <= nums1[i], nums2[i] <= 10^6\``,
    difficulty: "hard",
    isPublished: true,
  },
];

export const insertProblemsSeed = async (db: Transaction) => {
  console.log("🌱 Seeding problems...");
  await db.insert(problems).values(problemsSeedData).onConflictDoNothing();
};
