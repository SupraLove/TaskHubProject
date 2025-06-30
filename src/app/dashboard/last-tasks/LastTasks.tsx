import { Task } from "@/components/ui/task/Task";
import { TASKS } from "./last-tasks.data";

export function LastTasks() {
  return (
    <div className="mt-7">
      <h2 className="text-xl font-medium mb-2">
        Last Tasks{" "}
        <span className="opacity-50 font-normal">({TASKS.length})</span>
      </h2>
      {TASKS.length ? (
        <div className="grid grid-cols-3 gap2">
          {TASKS.map((task) => (
            <Task key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 gap2">
          <p className="text-center opacity-50">no tasks</p>
        </div>
      )}
    </div>
  );
}
