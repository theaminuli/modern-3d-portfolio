/**
 * Entry point for the React application.
 * 
 * This file sets up the root of the React application and renders the main App component
 * within a StrictMode wrapper for highlighting potential problems in the application.
 * 
 * Imports:
 * - StrictMode: A tool for highlighting potential problems in an application.
 * - createRoot: A method from react-dom/client to create a root for rendering the React component tree.
 * - App: The main application component.
 * - index.css: The global CSS file for styling the application.
 * 
 * The createRoot method is used to create a root container for the React component tree,
 * and the render method is used to render the App component within the StrictMode wrapper.
 * 
 * @file /D:/wampserver/www/modern-3d-portfolio/src/main.jsx
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<App />
	</StrictMode>
);
