import React, { useEffect } from 'react';

const Loading: React.FC = () => {
    const [loadingLength, setLoadingLength] = React.useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingLength((prev) => {
                if (prev === 89) {
                    clearInterval(interval);
                    window.ipcRenderer.send('main-process-message', false);
                }
                return prev + 1;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    if (loadingLength === 90) {
        window.ipcRenderer.send('main-process-message', false);
    }
    return (
        <div id='loader' className='h-screen w-screen overflow-hidden flex justify-center items-center'>
            <div className="h-7 relative rounded-full w-[90%] mx-auto ">
                <div style={{ width: `${loadingLength}%` }} className="absolute top-0 left-0 rounded-full bg-green-500 h-full"></div>
            </div>
        </div>
    );
};

export default Loading;