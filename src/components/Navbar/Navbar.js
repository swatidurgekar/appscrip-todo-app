import styles from "./Navbar.module.css";

const Navbar = () => {
  let navTabs = [
    "Dashboard",
    "Patients",
    "Human Resources",
    "Clinical",
    "Compliance",
    "Billing",
    "Rep",
  ];
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbarlogo}>lOGO</div>
        <div className={styles.navbaritems}>
          <div className={styles.navbarlinks}>
            {navTabs.map((tabName) => (
              <div key={tabName}>{tabName}</div>
            ))}
          </div>
          <div className={styles.navbaricons}>
            <button className={styles.navbarbutton}>
              <img src="/samplestructure/button.svg" alt="button" />
              <div>Clocked In</div>
            </button>

            <div>
              <img src="/samplestructure/question.svg" alt="question" />
            </div>
            <div>
              <img src="/samplestructure/notification.svg" alt="notification" />
            </div>
            <div></div>
            <div>Account</div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
