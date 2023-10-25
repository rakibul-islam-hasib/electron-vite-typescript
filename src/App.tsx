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
  const [isLoaderOn, setIsLoaderOn] = React.useState<boolean>(true);

  window.ipcRenderer.on('main-process-message', (_event, message) => {
    console.log(message, 'message from main process')
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