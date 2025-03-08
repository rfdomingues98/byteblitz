import type { Db } from "../client";
import { problemTags } from "../schemas/problems";
import { tags } from "../schemas/tags";

export const tagsSeedData = [
  {
    name: "Array",
    description: "Problems involving array manipulation, traversal, or operations.",
  },
  {
    name: "String",
    description: "Problems involving string manipulation, parsing, or pattern matching.",
  },
  {
    name: "Hash Table",
    description: "Problems requiring hash maps or dictionaries for efficient lookups.",
  },
  {
    name: "Math",
    description: "Problems involving mathematical concepts or calculations.",
  },
  {
    name: "Dynamic Programming",
    description: "Problems solved using dynamic programming approaches with overlapping subproblems.",
  },
  {
    name: "Sorting",
    description: "Problems involving sorting algorithms or sorted data structures.",
  },
  {
    name: "Greedy",
    description: "Problems solvable with greedy algorithms making locally optimal choices.",
  },
  {
    name: "Depth-First Search",
    description: "Problems requiring depth-first traversal of a graph or tree.",
  },
  {
    name: "Breadth-First Search",
    description: "Problems requiring breadth-first traversal of a graph or tree.",
  },
  {
    name: "Binary Search",
    description: "Problems involving binary search algorithm or search in sorted arrays.",
  },
  {
    name: "Matrix",
    description: "Problems involving 2D arrays or matrix operations.",
  },
  {
    name: "Tree",
    description: "Problems involving tree data structures like binary trees.",
  },
  {
    name: "Graph",
    description: "Problems involving graph data structures or graph algorithms.",
  },
  {
    name: "Linked List",
    description: "Problems involving singly or doubly linked lists.",
  },
  {
    name: "Stack",
    description: "Problems using stack data structures or principles.",
  },
  {
    name: "Queue",
    description: "Problems using queue data structures or principles.",
  },
  {
    name: "Heap",
    description: "Problems involving heap data structures (priority queues).",
  },
  {
    name: "Trie",
    description: "Problems involving trie data structures for efficient string operations.",
  },
  {
    name: "Recursion",
    description: "Problems requiring recursive solutions or thinking.",
  },
  {
    name: "Backtracking",
    description: "Problems solved using backtracking algorithms to explore all possibilities.",
  },
  {
    name: "Design",
    description: "Problems requiring the design of data structures or classes.",
  },
  {
    name: "Bit Manipulation",
    description: "Problems involving bitwise operations or binary representations.",
  },
  {
    name: "Two Pointers",
    description: "Problems solved using two pointer techniques.",
  },
  {
    name: "Sliding Window",
    description: "Problems solved using sliding window techniques.",
  },
  {
    name: "Divide and Conquer",
    description: "Problems solved by breaking down into smaller subproblems.",
  }
];

// Map of problem slugs to their associated tag names
export const problemTagsMap: Record<string, string[]> = {
  // Existing problems
  "two-sum": ["Array", "Hash Table"],
  "valid-parentheses": ["String", "Stack"],
  "merge-two-sorted-lists": ["Linked List", "Recursion"],
  "add-two-numbers": ["Linked List", "Math"],
  "longest-substring-without-repeating-characters": ["String", "Hash Table", "Sliding Window"],
  "reverse-linked-list": ["Linked List", "Recursion"],
  "maximum-subarray": ["Array", "Dynamic Programming", "Divide and Conquer"],
  "container-with-most-water": ["Array", "Two Pointers", "Greedy"],
  "trapping-rain-water": ["Array", "Two Pointers", "Dynamic Programming", "Stack"],
  "binary-tree-maximum-path-sum": ["Tree", "Depth-First Search", "Dynamic Programming"],

  // New problems
  "rotate-image": ["Array", "Matrix", "Math"],
  "palindrome-linked-list": ["Linked List", "Two Pointers", "Stack"],
  "lru-cache": ["Hash Table", "Linked List", "Design"],
  "course-schedule": ["Graph", "Depth-First Search", "Breadth-First Search", "Topological Sort"],
  "word-break": ["String", "Dynamic Programming", "Trie"],
  "median-of-two-sorted-arrays": ["Array", "Binary Search", "Divide and Conquer"]
};

export const insertTagsSeed = async (db: Db) => {
  console.log("🌱 Seeding tags...");

  // Insert tags
  await db.insert(tags).values(tagsSeedData).onConflictDoNothing();

  // Get inserted tag IDs
  const tagRows = await db
    .select({ id: tags.id, name: tags.name })
    .from(tags);

  const tagsMap = new Map(
    tagRows.map(row => [row.name, row.id])
  );

  return tagsMap;
};

export const insertProblemTagsSeed = async (
  db: Db,
  problemsMap: Map<string, string>,
  tagsMap: Map<string, string>
) => {
  console.log("🌱 Seeding problem tags...");

  const problemTagValues: typeof problemTags.$inferInsert[] = [];

  // Generate problem-tag associations
  for (const [problemSlug, tagNames] of Object.entries(problemTagsMap)) {
    const problemId = problemsMap.get(problemSlug);
    if (!problemId) continue;

    for (const tagName of tagNames) {
      const tagId = tagsMap.get(tagName);
      if (!tagId) continue;

      problemTagValues.push({
        problemId,
        tagId
      });
    }
  }

  // Insert problem-tag associations
  if (problemTagValues.length > 0) {
    await db.insert(problemTags).values(problemTagValues).onConflictDoNothing();
  }
}; 