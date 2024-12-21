import React from "react";
import type { Task } from "src/api/tasks";
import { CheckButton } from "src/components";
import styles from "src/components/TaskItem.module.css";

export interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  // Initialize base class
  let textContainerClass = styles.textContainer;
  // Add conditional classes
  if (task.isChecked) {
    textContainerClass += ` ${styles.checked}`;
  }

  return (
    <div className={styles.item}>
      {/* Update 'isChecked' to 'checked' */}
      <CheckButton checked={task.isChecked} />

      <div className={textContainerClass}>
        <span className={styles.title}>{task.title}</span>
        {task.description && (
          <span className={styles.description}>{task.description}</span>
        )}
      </div>
    </div>
  );
}
