import CourseGoal from "./CourseGoal";
import { type CourseGoal as Goal } from "../App";

type CourseGoalListProps = {
  goals: Goal[];
  onDeleteGoal: (id: number) => void;
  onDoneGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
  onDoneGoal,
}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal
            id={goal.id}
            title={goal.title}
            done={goal.done}
            onDelete={onDeleteGoal}
            onDone={onDoneGoal}
          >
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
