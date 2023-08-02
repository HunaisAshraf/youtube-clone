import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utilities/constants";
import { useEffect, useState } from "react";
import ResultCard from "./ResultCard";

const Results = () => {
  const [results, setResults] = useState([]);

  const [searchParams] = useSearchParams();

  const getResults = async () => {
    let data = await fetch(
      YOUTUBE_SEARCH_API + searchParams.get("search_query")
    );
    let json = await data.json();
    let results = json?.items?.filter(
      (result) => result?.id?.kind !== "youtube#channel"
    );
    setResults(results);
  };
  console.log(results);

  useEffect(() => {
    getResults();
  }, []);
  return (
    <div className="w-full">
      {results?.map((result) => (
        <Link to={"/watch?v=" + result?.id?.videoId} key={result?.etag}>
          <ResultCard info={result} />
        </Link>
      ))}
    </div>
  );
};

export default Results;
