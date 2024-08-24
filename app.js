import React from "react";
import ReactDOM from "react-dom/client";

// React Element:
// Element inside a Element!
const welcome = <span>Welcome</span>;

const element = <h2 className="blog">{welcome} to my blogs!</h2>

// React Functional Component:
const Title = () => <h1 className="title" >Title:</h1>;

// React Functional Component:
// Component Composition => Component inside a Component!
const HeadingComponent = () => (
    <div className="container" >
        <Title />
        <h1 className="heading">React Functional Component</h1>;
        {element}
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("text"));

// root.render(jsxHeading);

root.render(<HeadingComponent />);
