import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './pages/Loading';

declare global {
  interface Window {
    test: {
      test: () => void;
    };
  }
}

const App: React.FC = () => {
  const [isLoaderOn, setIsLoaderOn] = React.useState<boolean>(false);

  window.ipcRenderer.on('main-process-message', (_event, message) => {
    setIsLoaderOn(message);
  });

  return isLoaderOn ? <Loading /> : (
    <div>
      <h1>Hello</h1>
      <Link to={'/loading'}>GO </Link>


    </div>
  );
};

export default App;