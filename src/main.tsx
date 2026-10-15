import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"

import "./styles/tailwind.css";
import "./main.js";

import Home from "./pages/Home.js"

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HelmetProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </BrowserRouter>
        </HelmetProvider>
    </React.StrictMode>
)
