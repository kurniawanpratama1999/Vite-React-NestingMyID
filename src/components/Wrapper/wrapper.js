import cj from "../../utils/cj";

const wrapperStyles = {
  wrapper: cj({
    bgColor: {
      auto: "bg-zinc-300",
      red: "bg-red-400",
      green: "bg-green-400",
      blue: "bg-blue-400",
      amber: "bg-amber-400",
    },
    width: {
      auto: "w-auto",
      fit: "w-fit",
      full: "w-full",
    },
    height: {
      auto: "h-auto",
      fit: "h-fit",
      full: "min-h-[calc(100vh-4rem)]",
    },
    display: {
      grid: "grid",
      flex: "flex",
      block: "block",
      inline: "inline",
      "inline-block": "inline-block",
    },
    position: {
      relative: "relative",
      static: "static",
      absolute: "absolute",
      fixed: "fixed",
      sticky: "sticky",
    },
  }),
};

export default wrapperStyles;
