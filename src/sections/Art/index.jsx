import { useEffect, useState } from "react";

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
        <ul className="art-list">
          <li>
            
            {data.map((artwork) => (
              <div key={artwork.id} className="artwork">
                <div className="frame">
                  <img
                    src={`${baseUrl}${artwork.imageURL}`}
                    alt={artwork.title}
                  />
                </div>
                <h3>{artwork.title}</h3>
                <p>Artist: {artwork.artist}</p>
                <h4>Publication History:</h4>
                <ul>
                  {artwork.publicationHistory.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </li>
        </ul>
    </section>
  )
}

export default ArtsSection
