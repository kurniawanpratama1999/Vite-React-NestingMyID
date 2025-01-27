import cj from "../../Utils/cj";

const formStyles = {
  form: cj({
    base: "bg-zinc-200/60 p-3 border border-zinc-400 rounded",
    phone: ["grid grid-flow-row gap-4 min-w-[calc(100vw-2rem)]"],
    tablet: ["tablet:min-w-[400px]"],
  }),
};

export default formStyles;
