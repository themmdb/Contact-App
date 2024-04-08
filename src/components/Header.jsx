import styles from "./Header.module.css";
function Header() {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href="#">MMD.B Project-1</a>
      </p>
    </div>
  );
}

export default Header;
