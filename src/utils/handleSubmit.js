import { fetcher } from "./fetcher";

// {getFetcher, }
const handleSubmit = async ({ e, fetcher_props, state_props, btnpopup_props, callback }) => {
  e.preventDefault();
  const { method, net, body } = fetcher_props;
  const { setShowMessage, setResponse, timeOutID } = state_props;
  const { setLastClickBtnPopup } = btnpopup_props;
  clearTimeout(timeOutID.current);

  setShowMessage(true);
  setLastClickBtnPopup(new Date());
  fetcher({ method, net, body })
    .then((res) => {
      setResponse(res);
      if (res.success) {
        clearTimeout(timeOutID.current);
        timeOutID.current = setTimeout(() => callback(), 2000);
      }
      return;
    })
    .catch((err) => {
      setResponse({ success: null, message: `Error: ${err.message}` });
    });
};

export default handleSubmit;
