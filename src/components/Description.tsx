// TODO: replace with actual text
const placeholderDescription = Array.from(
  new Array(50)
).reduce((prev) => prev + "info ", "");

const categories = [
  {
    title: "Payments",
    description: placeholderDescription,
  },
  {
    title: "Students",
    description: placeholderDescription,
  },
  {
    title: "Professors",
    description: placeholderDescription,
  },
];

function Description() {
  return (
    <div className="bg-blue-500 text-white flex gap-4 p-4">
      {categories.map(({ title, description }) => (
        <div
          className="flex flex-col items-center gap-4"
          key={title}
        >
          <div className="text-xl font-bold">{title}</div>
          <div className="text-center">{description}</div>
        </div>
      ))}
    </div>
  );
}

export default Description;
