import cj, { cja } from "../../Utils/cj";

const inputStyles = {
  label: cj({
    base: [
      "bg-zinc-200",
      "p-2",
      "flex flex-col",
      "gap-y-1",
      "outline outline-0 outline-zinc-400 rounded-sm",
      "focus-within:outline-1",
      "[&_span]:focus-within:font-bold",
    ],
    focus: {
      green:
        "focus-within:outline-emerald-500 [&_span]:focus-within:text-emerald-500",
      blue: "focus-within:outline-blue-500 [&_span]:focus-within:text-blue-500",
      yellow:
        "focus-within:outline-yellow-500 [&_span]:focus-within:text-yellow-500",
      red: "focus-within:outline-red-500 [&_span]:focus-within:text-red-500",
    },
  }),
  input: cja("grow", "outline-none border-0", "bg-transparent", "p-1"),
  labelHeading: cja("text-xs"),
  labelCheck: cja("flex gap-2", "justify-end items-center", "text-xs"),
};

export default inputStyles;
