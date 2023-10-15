import React, { useEffect, useState } from "react";
import styles from "./TodoSection.module.css";
import TodoCard from "./TodoCard/TodoCard";
import { upcoming_todos } from "./Data";
import { finished_todos } from "./Data";

export const TodoSection = () => {
  const [completedRoute, setCompletedRoute] = useState(false);
  const [upcomingfilteredTodos, setUpcomingFilteredTodos] = useState({});

  useEffect(() => {
    const obj = {};
    upcoming_todos.map((todo) => {
      const newDate = todo.date.replace(/,/g, "");
      if (obj[newDate]) {
        obj[newDate].push(todo);
      } else {
        obj[newDate] = [todo];
      }
    });
    setUpcomingFilteredTodos(obj);
  }, []);

  return (
    <div className={styles.todoSection}>
      <div className={styles.todoSectionHeading}>Tasks</div>
      <div className={styles.todoSectionSubheading}>Clinical tasks</div>
      <div className={styles.tabsContainer}>
        <div
          className={completedRoute ? "" : styles.active}
          onClick={() => setCompletedRoute(false)}
        >
          Upcoming tasks
        </div>
        <div
          className={completedRoute ? styles.active : ""}
          onClick={() => setCompletedRoute(true)}
        >
          Completed tasks
        </div>
      </div>
      <div>
        <div className={styles.todoSearchbar}>
          <div>
            <img src="/samplestructure/search.svg" alt="search" />
            <input placeholder="Search" />
          </div>
          <div>
            <div>
              <img src="/samplestructure/calendar.svg" alt="calendar" />
              <input placeholder="From date" />
            </div>
            <div>
              <img src="/samplestructure/calendar.svg" alt="calendar" />
              <input placeholder="To date" />
            </div>
            <div className={styles.button1}>Apply</div>
            <div className={styles.button2}>Reset</div>
          </div>
        </div>
      </div>
      {!completedRoute ? (
        Object.keys(upcomingfilteredTodos).map((date) => {
          return (
            <>
              {!completedRoute && (
                <div className={styles.todosDate}>{date}</div>
              )}
              <TodoCard
                completedRoute={completedRoute}
                data={upcomingfilteredTodos[date]}
              />
            </>
          );
        })
      ) : (
        <TodoCard completedRoute={completedRoute} data={finished_todos} />
      )}
    </div>
  );
};
