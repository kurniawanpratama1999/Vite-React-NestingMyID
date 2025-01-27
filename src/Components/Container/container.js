import cj from "../../Utils/cj";

const containerStyles = cj({
  base: ["bg-zinc-300", "w-full min-h-[calc(100vh-4rem)]", "p-5"],
  display: {
    grid: "grid",
    flex: "flex",
    block: "block",
    inline: "inline",
    "inline-block": "inline-block",
  },
});

export default containerStyles;
