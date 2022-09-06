const { GuGudan }  = require('./GuGudan-function')
const React = require('react')
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<GuGudan />);