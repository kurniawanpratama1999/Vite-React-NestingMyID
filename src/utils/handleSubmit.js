import { fetcher } from "./fetcher";

// {getFetcher, }
const handleSubmit = (e, fetcher_props, state_props, callback) => {
  const { method, net, body } = fetcher_props;
  const { setShowMessage, setCMessage, setMessage, timeOutID } = state_props;
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
