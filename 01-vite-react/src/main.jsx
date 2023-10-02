import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Can write compone here as well but for better project structure we write component in different folder
function MyApp() {
  return <h1>Dhrumit | MyAPP</h1>;
}

const anotherElemenet = (
  <a href="https://google.com" target="_blank">
    Visit Google
  </a>
);

// In 4th(My code - 04-customer-react) video we create our react lib. At there, we followed our convention. Now react follows its own convention.
const reactElement = React.createElement(
  "a",
  { href: "https://google,com", target: "_blank" },
  "Click Me to Visit Google | With reactElement"
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  // This is also valid. Just see the above declaration and find diff. You will get idea how react works.
  // reactElement

  // Comment - Directly send the tag. This is also valid
  // anotherElemenet

  // Below Syntax is also okay but we will not use because need to follow convention
  // MyApp()
);
