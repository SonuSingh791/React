import React from "react";
import ReactDOM  from "react-dom/client";

const h1 = React.createElement('h1', { id: 'title' }, 'Heading');
const h2 = React.createElement('h2', { id: 'title' }, 'Heading');
const div = React.createElement('div', { id: 'container' }, [h1, h2]); // this will create div element with id 'container' and h1 and h2 will be inserted
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div); // this method will override all the child elements inside root element with React elements
// h1 is javascript object 
// {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//          "id": "title",
//          "children": "Heading"
//     },
//     "_owner": null,
//         "_store": { }
// }
console.log(h1);
console.log(root);