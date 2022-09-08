const React = require('react')
import ResponseCheck from './ResponseCheck-class';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<ResponseCheck />);