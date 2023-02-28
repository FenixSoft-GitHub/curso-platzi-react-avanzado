import React from 'react';
import ReactDOM from 'react-dom';

// ReactDOM.render(<h1>'Seguimos con el curso Avanzado!!!'</h1>, document.getElementById('app'));

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<h1>Seguimos con el curso Avanzado!!!...</h1>);
