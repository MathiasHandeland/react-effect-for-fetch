import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {

  const baseUrl = "https://boolean-uk-api-server.fly.dev";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await  fetch(`${baseUrl}/art`);
      const jsonData = await response.json();
      setData(jsonData);
    }
    fetchData();
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
        <ArtList artwork={data} baseUrl={baseUrl} />
    </section>
  )
}

export default ArtsSection
