import "./data.css";
import useJsonFetch from "../UseJsonFetch/UseJsonFetch.jsx";

export const Data = (props) => {
  const { url, opts } = props;
  const [data, error, loading] = useJsonFetch(url, opts);

  return (
    <>
      {loading ? (
        <div className={"loader"}></div>
      ) : (
        data && <div>Успешное получение данных:{data.status}</div>
      )}

      {error && <div>Получение 500 ошибки:{error.message}</div>}
    </>
  );
};
