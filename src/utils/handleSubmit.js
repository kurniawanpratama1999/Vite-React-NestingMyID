import { useEffect } from "react";
import { fetcher } from "./fetcher";

// {getFetcher, }
const handleSubmit = async ({ e, fetcher_props, state_props, btnpopup_props, callback }) => {
  e.preventDefault();
  const { method, net, body } = fetcher_props;
  const { setShowMessage, setCMessage, setMessage, timeOutID } = state_props;
  const { setLastClickBtnPopup } = btnpopup_props;
  clearTimeout(timeOutID.current);

  setShowMessage(true);
  setLastClickBtnPopup(new Date());
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
    });
};

export default handleSubmit;
