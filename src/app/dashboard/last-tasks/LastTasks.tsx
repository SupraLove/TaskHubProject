import { Task } from "@/components/ui/task/Task";
import { TASKS } from "./last-tasks.data";

export function LastTasks() {
  return (
    <div>
      <h2 className="text-xl font-medium mb-2">
        Last Tasks{" "}
        <span className="opacity-50 font-normal">({TASKS.length})</span>
      </h2>
      {TASKS.length ? (
        TASKS.map((task) => <Task key={task.id} task={task} />)
      ) : (
        <div>
          <p className="text-center opacity-50">no tasks</p>
        </div>
      )}
    </div>
  );
}
