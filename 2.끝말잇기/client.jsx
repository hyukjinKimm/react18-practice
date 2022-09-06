const React = require('react')
const WordRealy = require('./WordRelay-class')
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<WordRealy />);