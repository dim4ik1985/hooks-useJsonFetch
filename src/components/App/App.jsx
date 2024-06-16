import { Data } from "../Data/Data.jsx";

export const App = () => {
  const url = "http://localhost:7070/";
  return (
    <>
      <Data url={url} opts={"data"} />
      <Data url={url} opts={"error"} />
      <Data url={url} opts={"loading"} />
    </>
  );
};
