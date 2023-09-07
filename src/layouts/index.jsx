import styles from "./index.module.css";
import Aside from "./Aside.jsx";
import Content from "./Content.jsx";

const Layouts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.aside}>
        <Aside />
      </div>
      <div>
        <Content />
      </div>
    </div>
  );
};

export default Layouts;
