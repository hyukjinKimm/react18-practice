const React = require('react')
import MineSearch from './MineSearch';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<MineSearch />);