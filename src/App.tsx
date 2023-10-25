import React from 'react';
import { Link } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello</h1>
      <Link to={'/loading'}>GO </Link>
    </div>
  );
};

export default App;