import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset, presetAutoprefix()],
    preflight: {
      "@import":
        "url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');",
    },
    rules: [
      ["custom-scrollbar", {
        "&::-webkit-scrollbar-thumb": {
          "background-color": "lightblue",
          outline: "1px solid blue",
          "outline-offset": "-0.1rem",
          "border-radius": "0.5rem",
        },
        "&::-webkit-scrollbar": {
          width: "0.8em",
        },
        "&::-webkit-scrollbar-track": {
          "background-color": "transparent",
        },
      }],
    ],
  }),
  selfURL: import.meta.url,
};
