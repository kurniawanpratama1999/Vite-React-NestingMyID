import cj, { cja } from "../../utils/cj";

const headerStyles = (props = {}) => ({
  header: cja("bg-zinc-300", "w-full h-16 px-5", "grid grid-cols-[1fr_auto] items-center", 'border-b border-zinc-400',"relative"),
  heading1: cja("text-2xl", "font-bold"),
  btn_showNav: cja("desktop:hidden", 'text-2xl'),
  nav: cj({
    Boolean: [props?.isShowNav ? "flex" : "hidden"],
    phone: ["absolute top-20 right-5", "bg-zinc-200 w-32 p-3", "flex-col gap-3 items-end"],
    desktop: [
      "desktop:static",
      "desktop:bg-transparent",
      "desktop:w-auto desktop:p-0",
      "desktop:flex desktop:flex-row desktop:items-center",
    ],
  }),
  btn_list: cj({
    base: ['capitalize', 'desktop:px-2'],
    Boolean: [props?.pathname?.includes(props?.label) ? "font-extrabold text-emerald-600" : "font-normal"],
  }),
});

export default headerStyles;
