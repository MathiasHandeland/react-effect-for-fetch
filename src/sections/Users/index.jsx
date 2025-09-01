import { useEffect, useState } from "react";
import UsersList from "./components/UsersList";

function UsersSection() {

  const url = "https://boolean-uk-api-server.fly.dev/MathiasHandeland/contact";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, [url]);

  return (
    <section>
      <h2>Users Section</h2>
        <UsersList users={data} />
    </section>
  )
}

export default UsersSection
