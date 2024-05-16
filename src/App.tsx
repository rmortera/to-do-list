import { useState } from "react";

import Header from "./components/Header";
import goalsImg from "./assets/todos.png";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";

export type CourseGoal = {
  id: number;
  title: string;
  done: boolean;
  description: string;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        done: false,
        title: goal,
        description: summary,
      };

      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  function handleToggleDone(id: number) {
    setGoals((goals) =>
      goals.map((goal) =>
        goal.id === id ? { ...goal, done: !goal.done } : goal
      )
    );
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your TO DO's LIST</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList
        goals={goals}
        onDeleteGoal={handleDeleteGoal}
        onDoneGoal={handleToggleDone}
      />
    </main>
  );
}
