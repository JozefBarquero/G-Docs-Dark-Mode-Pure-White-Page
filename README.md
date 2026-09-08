# Google Docs Dark Mode (Pure White Page)

*README.md by Gemini IA*

A lightweight Userscript that applies a sleek, comfortable dark theme to the Google Docs user interface while preserving the document canvas in crisp, pure white for optimal reading and editing.

---

## Features

- **Dark Interface, Crisp Canvas:** Inverts the Google Docs top bars, toolbars, side panels, and background to dark mode, while keeping the document page strictly white.
- **Enhanced Caret Visibility:** Customizes the text editing cursor (`kix-cursor-caret`) to stand out clearly in dark high-contrast mode.
- **Profile & Image Protection:** Preserves profile pictures and key user interface icons so they display naturally without inverted colors.
- **Ultra Lightweight & Fast:** Built with clean native JavaScript without heavy dependencies or extra runtime overhead.

<img width="1919" height="1010" alt="Cap" src="https://github.com/user-attachments/assets/8713b182-7ef4-4712-a1eb-efe40e750379" />
---

## Installation

1. Install a userscript manager browser extension:
   - [Violentmonkey](https://violentmonkey.github.io/) (Recommended)
   - [Tampermonkey](https://www.tampermonkey.net/)
2. Open your userscript manager dashboard and create a new script.
3. Paste the contents of `Google Docs Dark Mode (Pure White Page).user.js` into the editor.
4. Save the script.

---

## How It Works

1. **Target Inversion:** Utilizes CSS `filter: invert(1) hue-rotate(180deg)` on the main HTML container to create a unified dark mode across the Google Docs application interface.
2. **Selective Page Restoring:** Re-applies the inversion filter specifically to `.kix-page` and `.kix-page-paginated` elements, effectively returning the paper page to its original pure white canvas with black text.
3. **Element Correction:** Prevents profile images and interface elements (`gb_A`, `gb_Ca`, `img[src*="googleusercontent.com"]`) from turning into color-inverted negatives.

---

## Compatibility

- **Supported Domain:** Works across all Google Docs documents (`https://docs.google.com/*`).
- **Browsers:** Compatible with Chrome, Firefox, Edge, Brave, Safari, or any browser running a userscript manager.

---

## License

[MIT](LICENSE) - Free for personal, open-source, and educational use. Created by **Blunnix**.
