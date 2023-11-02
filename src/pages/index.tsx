import yayJpg from "../assets/yay.jpg";
import styles from "./index.less";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <h2>Yay! Welcome to umi!</h2>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
