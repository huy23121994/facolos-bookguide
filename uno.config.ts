import { defineConfig } from "unocss";
import presetWind4 from "@unocss/preset-wind4";
import presetWebFonts from "@unocss/preset-web-fonts";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  presets: [
    presetWind4(),
    presetWebFonts({
      fonts: {
        display: {
          name: "Cormorant Garamond",
          weights: [400, 600, 700],
          italic: true,
          provider: "google",
        },
        body: {
          name: "DM Sans",
          weights: [300, 400, 500, 600, 700],
          italic: true,
          provider: "google",
        },
      },
    }),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      white: "#ffffff",
      "off-white": "#f9f8f5",
      cream: "#f3f1ec",
      charcoal: "#1a1a1e",
      dark: "#0d0d10",
      "mid-gray": "#6b6b73",
      "light-gray": "#c4c3be",
      accent: {
        DEFAULT: "#b8965a",
        light: "#d4bc8a",
        dark: "#96783e",
      },
      "green-court": "#2d6a4f",
    },
  },
  shortcuts: {
    container: "w-full max-w-[1100px] mx-auto px-5",
    "section-label":
      "inline-block text-[.7rem] font-semibold tracking-[.16em] uppercase text-accent mb-3.5",
    "section-title":
      "font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.15] text-charcoal mb-5 tracking-tight",
    "section-desc":
      "text-base text-mid-gray max-w-[600px] leading-[1.75] font-light",
    "map-link":
      "inline-flex items-center gap-1.5 text-[.82rem] font-semibold text-accent-dark no-underline tracking-[.03em] transition-all duration-250 hover:text-charcoal hover:gap-2.5",
  },
});
