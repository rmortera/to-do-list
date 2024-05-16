import { type ReactNode } from "react";

type CourseGoalsProps = {
  id: number;
  done: boolean;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
  onDone: (id: number) => void;
};

// Alternative way to define props with children props...
// type CourseGoalsProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({
  id,
  title,
  done,
  children,
  onDelete,
  onDone,
}: CourseGoalsProps) {
  return (
    <article>
      <div>
        <h2 style={done ? { textDecoration: "line-through" } : {}}>{title}</h2>
        {children}
      </div>
      <div className="buttons">
        <button onClick={() => onDelete(id)}>DELETE</button>
        <button onClick={() => onDone(id)}>DONE</button>
      </div>
    </article>
  );
}

/*
Component Props & The Special "key" Prop
All React components (built-in components and also your custom components) do accept a special key prop which is used by React to track specific component instances.

For example, the key prop should always be set when outputting a list of components.

This key prop can be set on custom components even if you didn't specify it in your props type!

For example, the following component code will work:

type UserProps = {
  name: string;
};
 
function User({ name }: UserProps) {
  return <li>User: {name}</li>;
}
 
function App() {
  const users = [{ name: 'John' }, { name: 'Mary' }, { name: 'Luke' }];
 
  return (
    <>
      <ul>
        {users.map((user, index) => (
          <User key={user} name={user.name} />
        ))}
      </ul>
    </>
  );
} */
