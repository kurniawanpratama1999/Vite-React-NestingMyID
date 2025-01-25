import Wrapper from "../Wrapper/Wrapper";
import Button from "../Button/Button";
import popupStyles from "./popup";
import { useEffect } from "react";

const Popup = ({ state_props, popup_props, btnpopup_props }) => {
  const { response, handleClose } = popup_props;
  const {
    REPEAT_TIME_BTN_POPUP,

    timeBtnBackPopup,
    setTimeBtnBackPopup,

    lastClickBtnPopup,
    setLastClickBtnPopup,

    timeIntervalBtnPopup,
  } = btnpopup_props;
  const { setResponse, setShowMessage } = state_props;
  const isLoading = response.message.toString().includes("loading");

  useEffect(() => {
    if (timeBtnBackPopup <= 1) {
      setTimeBtnBackPopup(REPEAT_TIME_BTN_POPUP);
      clearInterval(timeIntervalBtnPopup.current);
      setShowMessage(false);
      setResponse({ success: null, message: "loading" });
      setLastClickBtnPopup(null);
    }

    return () => clearInterval(timeBtnBackPopup.current);
  }, [timeBtnBackPopup]);

  useEffect(() => {
    clearInterval(timeIntervalBtnPopup.current);
    if (lastClickBtnPopup) {
      timeIntervalBtnPopup.current = setInterval(() => {
        setTimeBtnBackPopup((prev) => prev - 1);
      }, 1000);

      if (timeBtnBackPopup <= 1) {
        clearInterval(timeIntervalBtnPopup.current);
        setShowMessage(false);
        setResponse({ success: null, message: "loading" });
        setLastClickBtnPopup(null);
      }
    } else {
      clearInterval(timeIntervalBtnPopup.current);
      setTimeBtnBackPopup(REPEAT_TIME_BTN_POPUP);
    }
    return () => clearInterval(timeIntervalBtnPopup.current);
  }, [lastClickBtnPopup, timeBtnBackPopup]);
  return (
    <>
      <Wrapper position="fixed top-0 left-0" width="full" height="h-full" bgColor="bg-black/30 backdrop-blur-sm" />
      <Wrapper
        position="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        display="grid grid-rows-[auto_1fr_auto] items-center"
        width="w-[calc(100vw-2rem)] tablet:max-w-[400px]"
        height="min-h-96 max-h-96"
        bgColor="auto"
        className={popupStyles.wrapper}
      >
        {isLoading ? (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl">
            <p className="animate-bounce">Loading</p>
          </div>
        ) : (
          <>
            <div className={popupStyles.wrapperHeading({ cMessage: response.success })}>
              <h4 className={popupStyles.heading({ cMessage: response.success })}>
                {response.success === null ? "Notification" : response.success ? "Success" : "Failed"}
              </h4>
            </div>
            <p className={popupStyles.message}>{response.message}</p>
            <Button
              onClick={handleClose}
              bgColor="bg-zinc-500 text-white"
              label={`Kembali ${timeBtnBackPopup}`}
              className={popupStyles.btnClose}
            />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Popup;
