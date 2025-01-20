import { fetcher } from "./fetcher";

const handleSubmit = (e, method, net, body, setShowMessage, setCMessage, setMessage, timeOutID, callback) => {
  e.preventDefault();
  clearTimeout(timeOutID.current);

  setShowMessage(true);
  fetcher({ method, net, body })
    .then((res) => {
      setCMessage(res.success);
      setMessage(res.message);
      if (res.success) {
        clearTimeout(timeOutID.current);
        timeOutID.current = setTimeout(() => callback(), 2000);
      }
    })
    .catch((err) => {
      setCMessage(null);
      setMessage(err.message);
    })
    .finally(() => {
      timeOutID.current = setTimeout(() => {
        setShowMessage(false);
        setMessage("loading");
      }, 10000);
    });
};

export default handleSubmit;
