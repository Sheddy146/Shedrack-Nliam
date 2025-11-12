import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Analytics } from "@vercel/analytics/react"

// allow importing plain CSS files in TypeScript
declare module "*.css";

import "./index.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";


// Get the root element
const rootElement = document.getElementById("root") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    
    </BrowserRouter>
 <Analytics />
  </React.StrictMode>
   
);
