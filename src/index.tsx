import React from "react";
import ReactDOM from "react-dom/client";

import { I18nProvider } from "./lib/i18n";
import { ThemeProvider } from "./context/theme-provider";

import "./globals.css";
import AppRouter from "./routes/router";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement!);

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <AppRouter />
        <Analytics />
        <SpeedInsights />
      </I18nProvider>
    </ThemeProvider>
  </React.StrictMode>
);
