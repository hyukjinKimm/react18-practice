const React = require('react')
//import NumberBaseball from './NumberBaseball-function';
import Test from './rendertest';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Test />);