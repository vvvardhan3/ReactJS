import React from 'react';
import ReactDOM from 'react-dom/client';

// singleElement
const header = React.createElement("h1", {}, "Hello World from React!!");
// const head = ReactDOM.createRoot(document.getElementById("text"));
// head.render(header);

// MultipleElements
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1-tag"),
    React.createElement("h2", {}, "I'm h2-tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1-tag"),
    React.createElement("h2", {}, "I'm h2-tag"),
  ]),
);

console.log(parent);
const head = ReactDOM.createRoot(document.getElementById("text"));
head.render(parent);
