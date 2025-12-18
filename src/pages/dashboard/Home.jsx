import { useContext } from "react";
import Navigation from "../../components/navigation/Navigation";
import { UserContext } from "../../context/UserContext";

export default function Home() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="layout">
      <Navigation />
      <main className="content">
        <h1>Welcome back, {currentUser?.username || "User"}</h1>
      </main>
    </div>
  );
}
