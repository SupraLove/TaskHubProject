import type { ITask } from "@/types/last-tasks.types";
import { Edit2, Folder, Link, MessageSquareMore, Plus } from "lucide-react";
import Image from "next/image";

interface Props {
  task: ITask;
}

export function Task({ task }: Props) {
  const completedCount = task.subTasks.filter((t) => t.isCompleted).length;
  const totalCount = task.subTasks.length;
  const progress = Math.round((completedCount / totalCount) * 100);
  return (
    <div>
      <div className="flex items-center gap-2 mb-1.5">
        <div className="p-1.5 rounded-full bg-primary/30 flex items-center justify-center">
          <task.icon />
        </div>

        <span>{task.title}</span>
        <div className="flex items-center -space-x-1">
          {task.users.map((user) => (
            <div key={user.id}>
              <Image
                src={user.avatarPath}
                alt={user.name}
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      </div>

      <div>
        <span>
          Due: {Math.ceil((+task.dueDate - Date.now()) / (1000 * 60 * 60 * 24))}
          days
        </span>
      </div>
      <div>
        <span>{progress}%</span>
      </div>
      <div>
        <span>
          <MessageSquareMore />
          {task.comments.length}
        </span>
        <span>
          <Folder />
          {task.resources.length}
        </span>
        <span>
          <Link />
          {task.links.length}
        </span>
      </div>
      <div>
        <button>
          <Plus />
        </button>
        <button>
          <Edit2 />
        </button>
      </div>
    </div>
  );
}
