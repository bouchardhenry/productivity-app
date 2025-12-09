import { Link } from "react-router-dom";
import errorIcon from "../../assets/Triskelion-Symbol.png";
import styles from "./ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.content}>
      <img src={errorIcon} alt="" />
      <h1>Oops! It looks like this page has gone missing.</h1>
      <button>
        <Link to="/dashboard">Back to start</Link>
      </button>
    </div>
  );
}
