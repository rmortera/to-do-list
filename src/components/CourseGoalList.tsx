import CourseGoal from "./CourseGoal";
import { type CourseGoal as Goal } from "../App";
import InfoBox from "./InfoBox";
import { type ReactNode } from "react";

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
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no To Do's yet. Start adding some!</InfoBox>
    );
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="medium">
        You're collecting a lot of tasks. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
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
    </>
  );
}
