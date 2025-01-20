import Wrapper from "../Wrapper/Wrapper";
import Button from "../Button/Button";
import popupStyles from "./popup";

const Popup = ({ message = "Lorem ipsum dolor sit amet!", cMessage = null, handleClose }) => {
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
        <div className={popupStyles.wrapperHeading({ cMessage })}>
          <h4 className={popupStyles.heading({ cMessage })}>
            {cMessage === null ? "Notification" : cMessage ? "Failed" : "Success"}
          </h4>
        </div>
        <p className={popupStyles.message}>"{message}"</p>
        <Button
          onClick={handleClose}
          bgColor="bg-zinc-500 text-white"
          label="Kembali"
          className={popupStyles.btnClose}
        />
      </Wrapper>
    </>
  );
};

export default Popup;
