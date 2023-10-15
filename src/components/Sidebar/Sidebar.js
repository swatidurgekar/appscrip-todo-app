import React from "react";
import styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.medlife}>MedLife</div>
      <div className={styles.todoType}>Add Clinical</div>
      <div className={styles.appointment}>
        <div>
          <img alt="appointment" src="/samplestructure/appointment.svg" />
        </div>
        <span>Appointments</span>
      </div>
      <div className={styles.appointment}>
        <div>
          <img alt="task" src="/samplestructure/tasks.svg" />
        </div>
        <span>Tasks</span>
      </div>
    </div>
  );
};
