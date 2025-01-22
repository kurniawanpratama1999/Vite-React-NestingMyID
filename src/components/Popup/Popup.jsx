import Wrapper from "../Wrapper/Wrapper";
import Button from "../Button/Button";
import popupStyles from "./popup";
import { useEffect } from "react";

const Popup = ({ state_props, popup_props, btnpopup_props }) => {
  const { message, cMessage, handleClose } = popup_props;
  const { timeBtnBackPopup, timeIntervalBtnPopup, lastClickBtnPopup, setTimeBtnBackPopup } = btnpopup_props;
  const { setMessage, setShowMessage } = state_props;
  const isLoading = message.toString().includes("loading");

  useEffect(() => {
    clearInterval(timeIntervalBtnPopup.current);
    if (lastClickBtnPopup) {
      timeIntervalBtnPopup.current = setInterval(() => {
        setTimeBtnBackPopup((prev) => ({ ...prev, start: prev.start - 1 }));
        if (timeBtnBackPopup.start <= 1) {
          setShowMessage(false);
          setMessage("loading");
          clearInterval(timeIntervalBtnPopup.current);
          setTimeBtnBackPopup((prev) => ({ ...prev, start: prev.repeat }));
        }
      }, 1000);
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
            <div className={popupStyles.wrapperHeading({ cMessage })}>
              <h4 className={popupStyles.heading({ cMessage })}>
                {cMessage === null ? "Notification" : cMessage ? "Success" : "Failed"}
              </h4>
            </div>
            <p className={popupStyles.message}>{message}</p>
            <Button
              onClick={handleClose}
              bgColor="bg-zinc-500 text-white"
              label={`Kembali ${timeBtnBackPopup.start}`}
              className={popupStyles.btnClose}
            />
          </>
        )}
      </Wrapper>
    </>
  );
};

export default Popup;
