import { useContext, useEffect, useState } from "react";
import Navigation from "../../components/navigation/Navigation";
import { UserContext } from "../../context/UserContext";
import styles from "./Home.module.css";
import planet from "../../assets/cyberspace.png"

export default function Home() {
  const { currentUser } = useContext(UserContext);
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://dummyjson.com/quotes/random");
        const data = await res.json();
        setQuote(data);
      } catch (error) {
        console.error("Failed to fetch quote", error);
      }
    };

    fetchQuote();
  }, []);

  return (
    <div className="layout">
      <Navigation />
      <main className="content">
        <h1 className={styles.welcome}>Welcome back, <span className={styles.username}>{currentUser?.username || "User"}</span></h1>
        <img src={planet} alt="planet drawing" className={styles.planet}/>
        {quote && (
          <div className={styles.quote}>
            <h2>{quote.quote}</h2> — <p>{quote.author}</p>
          </div>
        )}
      </main>
    </div>
  );
}
