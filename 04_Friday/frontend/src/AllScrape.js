import { useState, useEffect } from "react";

const AllScrape = () => {
  const [joke, setJoke] = useState("");

  const FetchAllJokes = () => {
    fetch("http://localhost:8080/jokeFetcher/api/jokes/sequental")
      .then((res) => res.json())
      .then((data) => {
        setJoke(data);
      });
  };

  useEffect(() => {
    FetchAllJokes();
  }, []);

  return (
    <div>
      <p>Chuck joke: {joke.url}</p>
      <p>reference: {joke.joke1}</p>
      <br />
      <hr />
      <br />
      <br />
      <hr />
      <br />
      <button onClick={() => FetchAllJokes()}>Fetch new jokes</button>
    </div>
  );
};
export default AllScrape;
