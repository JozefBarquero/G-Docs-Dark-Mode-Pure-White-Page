// ==UserScript==

// @name Google Docs Dark Mode (Pure White Page)
// @namespace Violentmonkey Scripts
// @icon https://ssl.gstatic.com/docs/documents/images/docs-favicon-2026-v2.ico
// @version 1.0.0
// @match https://docs.google.com/*
// @grant none
// @author Blunnix
// @license MIT
// @description Applies a comfortable dark theme to the Google Docs interface while keeping the paper page crisp pure white.

// ==/UserScript==

(function () {
    'use strict';

    const styles = `
        html {
            filter: invert(1) hue-rotate(180deg) !important;
            background-color: #000000 !important;
        }

        .kix-page-paginated,
        .kix-page {
            filter: invert(1) hue-rotate(180deg) !important;
        }

        .kix-cursor-caret {
            border-color: #ffffff !important;
            border-left-color: #ffffff !important;
        }

        .kix-appview-editor {
            background-color: #e0e0e0 !important;
        }

        .gb_A, .gb_Ca, img[src*="googleusercontent.com"] {
            filter: invert(1) hue-rotate(180deg) !important;
        }
    `;

    if (typeof GM_addStyle !== 'undefined') {
        GM_addStyle(styles);
    } else {
        const style = document.createElement('style');
        style.textContent = styles;
        (document.head || document.documentElement).appendChild(style);
    }
})();
