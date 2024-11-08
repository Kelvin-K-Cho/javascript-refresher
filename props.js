const COURSE_GOAL = [
  {
    title: "Learn React",
    description: "In-depth",
  },
  {
    title: "title",
    description: "description",
  },
];

export function CourseGoal({ title, description }) {
  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div id="app" data-testid="app">
      <h1>Time to Practice</h1>
      <p>One course, many goals! 🎯</p>
      <ul>
        {/* OUTPUT AT LEAST TWO CourseGoal components here */}
        {/* One of them should have a title of “Learn React” and a description of “In-depth” */}
        <CourseGoal {...COURSE_GOAL[0]} />
        <CourseGoal {...COURSE_GOAL[1]} />
      </ul>
    </div>
  );
}

export default App;
