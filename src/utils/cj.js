const cj = (settings = {}) => {
  return (variants = {}, className = "") => {
    const settingMap = Object.entries(settings)
      .map(([key, value]) => {
        if (typeof value === "string" || Array.isArray(value)) return Array.isArray(value) ? value.join(" ") : value;
        if (key.includes("Boolean")) return Array.isArray(value) ? value.join(" ") : value;

        return Object.entries(variants).map(
          ([key, value]) =>
            !settings[key] // if key not found then
              ? "" // empty
              : !settings[key][value] // if key and value not found then
              ? value // value of variant
              : !Array.isArray(settings[key][value]) // if result is not an array then
              ? settings[key][value] // string
              : settings[key][value].join(" ") // array to string
        ).join(' ');
      })
      .join(" ");

    return `${settingMap} ${className}`.trim();
  };
};

export const cja = (...array) => array.join(" ");

export default cj;
