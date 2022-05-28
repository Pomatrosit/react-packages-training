import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";

interface Person {
  name: string;
}

const SECOND = 1000;

const fetchPeople = () => axios.get("https://swapi.dev/api/people");

const ReactQueryPage = () => {
  const { isLoading, isError, data, isFetching } = useQuery(
    "swapi_people",
    fetchPeople,
    {
      refetchOnWindowFocus: false,
      staleTime: 10 * SECOND,
    }
  );

  useEffect(() => {
    console.log("FETCHING DATA", isFetching);
  }, [isFetching]);

  return (
    <div>
      {isLoading ? (
        <p>Loading ....</p>
      ) : isError ? (
        <p>An Error has occured</p>
      ) : (
        data?.data.results.map((person: Person) => (
          <p key={person.name}>{person.name}</p>
        ))
      )}
    </div>
  );
};

export default ReactQueryPage;
