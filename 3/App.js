import React from "react";
import ReactDOM  from "react-dom/client";

// React.createElement gives an Object which will render in the DOM

/** 
 * JSX has html like syntax (not html inside javascript)
 * How JSX is rendered on the HTML DOM?
 *  Babel is responsible for rendering JSX into DOM. JSX => React.createElement => Object => HTML(DOM)
 * 
 */

// JSX which is ReactElement
const title = 
<h1>
    Title
    <div>Child Div</div>
</h1>

const Nav = () => (
    <h1>Nav</h1>
)

// React Component

const Heading = () => (
    <div>
        <Nav /> {/* Component inside component called Component Composition*/}
        {title}
        <h1>Heading Component Div</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(<Heading/>) // we can pass Heading() this way as well because end of the React component is javascript function