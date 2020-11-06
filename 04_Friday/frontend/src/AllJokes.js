import { useState, useEffect } from "react";

const AllJokes = () => {
  const [joke, setJoke] = useState("");

  const FetchAllJokes = () => {
    fetch("http://localhost:8080/jokeFetcher/api/jokes/")
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
      <p>Chuck joke: {joke.joke1}</p>
      <p>reference: {joke.joke1Reference}</p>
      <br />
      <hr />
      <br />
      <p>Dad joke: {joke.joke2}</p>
      <p>reference: {joke.joke2Reference}</p>
      <br />
      <hr />
      <br />
      <button onClick={() => FetchAllJokes()}>Fetch new jokes</button>
    </div>
  );
};
export default AllJokes;
