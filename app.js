import React from "react";
import ReactDOM from "react-dom/client";

// React Functional Component:
const Title = () => <h1 className="title" >Title:</h1>;

// React Functional Component:
// Component Composition
const HeadingComponent = () => (
    <div className="container" >
        <Title />
        <h1 className="heading">React Functional Component</h1>;   
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("text"));

// root.render(jsxHeading);

root.render(<HeadingComponent />);
