import styles from "./TodoCard.module.css";

const TodoCard = ({ data, completedRoute }) => {
  return (
    <>
      <div className={styles.todoItem}>
        {data.map((todo) => {
          return (
            <div className={styles.todoItemDetails} key={todo.task_id}>
              <div className={styles.todoPhoto}>
                <img src="/samplestructure/profilePic.svg" />
              </div>
              <div className={styles.todoUserInfo}>
                <div>{todo.name}</div>
                <div>Appointment Id:{todo.app_id}</div>
                <a href="#">Intake Comprehension Assessment</a>
              </div>
              <div className={styles.todoDetailInfo}>
                <div className={styles.todoDetailD}>
                  <div className={styles.todoDetailT}>Taskid:</div>
                  <div className={styles.todoDetailA}>{todo.task_id}</div>
                </div>
                <div className={styles.todoDetailD}>
                  <div className={styles.todoDetailT}>
                    {completedRoute ? "Completed on:" : "Date and time:"}
                  </div>
                  <div className={styles.todoDetailA}>
                    {todo.date}
                    {todo.time}
                  </div>
                </div>
                <div className={styles.todoDetailD}>
                  <div className={styles.todoDetailT}>Duration:</div>
                  <div className={styles.todoDetailA}>{todo.duration}</div>
                </div>
              </div>

              <div className={styles.todoStatus}>
                {!completedRoute ? (
                  <div className={styles.todoStatusInfo}>
                    <span>Status : </span>
                    <span
                      className={
                        todo.status === "Overdue" ? styles.red : styles.green
                      }
                    >
                      {todo.status}
                    </span>
                  </div>
                ) : (
                  <div></div>
                )}
                <div className={styles.todoStart}>
                  {completedRoute ? "View Assesment" : "Start Assesment"}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoCard;
