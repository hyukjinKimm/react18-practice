const React = require('react')
import ResponseCheck from './ResponseCheck-function';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ResponseCheck />);