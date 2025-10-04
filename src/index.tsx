import React from "react";
import ReactDOM from "react-dom/client";

import { I18nProvider } from "./lib/i18n";
import { ThemeProvider } from "./components/theme-provider";

import "./globals.css";
import AppRouter from "./routes/router";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

import { Analytics } from "@vercel/analytics/next";

root.render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <I18nProvider>
        <AppRouter />
        <Analytics />
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>
);
