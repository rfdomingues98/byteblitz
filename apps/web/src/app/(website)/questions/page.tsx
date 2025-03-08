const mockQuestions = [
  {
    id: 1,
    title: "Question 1",
    description: "Description 1",
  },
  {
    id: 2,
    title: "Question 2",
    description: "Description 2",
  },
  {
    id: 3,
    title: "Question 3",
    description: "Description 3",
  },
];

export default function QuestionsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Questions</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockQuestions.map((question) => (
          <div key={question.id}>{question.title}</div>
        ))}
      </div>
    </div>
  );
}
