import { useState } from "react";

export default function App() {
  return (
    <>
      <h1>Hello World!! </h1>
      <Hello />
    </>
  );
}

function Hello() {
  const [username, setUsername] = useState("");
  const [userPass, setPass] = useState("");

  const handleName = (e) => {
    const newName = e.target.value;
    setUsername(newName);
  };
 
  const handlePass = (e) => {
    const newPass = e.target.value;
    setPass(newPass);
  };

  return (
    <>
      <input type="text" value={username} onChange={handleName} />
      <input type="password" value={userPass} onChange={handlePass} />
      <h1>
        {username} {userPass}{" "}
      </h1>
    </>
  );
}
