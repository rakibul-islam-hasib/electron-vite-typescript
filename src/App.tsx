import React from 'react';
import Loading from './pages/Loading';
import Home from './pages/home/Home';

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
    // console.log(message, 'message from main process')
    setIsLoaderOn(message);
  });

  return isLoaderOn ? <Loading /> :<Home />;
};

export default App;