import cj from "../../utils/cj";

const buttonStyles = cj({
  base: ["w-full", "py-2 px-6", "rounded", "transition"],
  bgColor: {
    green: ["bg-green-400 text-green-950", "hover:bg-green-500"],
    red: ["bg-red-400 text-red-950", "hover:bg-red-500"],
    blue: ["bg-blue-400 text-blue-950", "hover:bg-blue-500"],
    yellow: ["bg-yellow-400 text-yellow-950", "hover:bg-yellow-500"],
    amber: ["bg-amber-400 text-amber-950", "hover:bg-amber-500"],
  },
});

export default buttonStyles;
