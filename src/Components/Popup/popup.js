import cj from "../../Utils/cj";

const popupStyles = {
  wrapper: "p-3 z-50",
  wrapperHeading: cj({
    base: "border-b-[3px] pb-3 text-center",
    cMessage: {
      null: "border-blue-500",
      false: "border-red-500",
      true: "border-emerald-500",
    },
  }),
  heading: cj({
    base: "text-3xl font-bold py-2 rounded text-zinc-200",
    cMessage: {
      null: "bg-blue-500",
      false: "bg-red-500",
      true: "bg-emerald-500",
    },
  }),
  message: "px-5 py-2",
  btnClose: "h-fit py-3 uppercase font-bold",
};

export default popupStyles;
