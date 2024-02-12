import { useState } from "react";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    localStorage.getItem("isLoggedIn")
  );
  console.log(isLoggedIn);
  return <div>Hello Dashboard</div>;
}
