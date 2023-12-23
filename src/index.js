import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import { ModalContextProvider } from './store/modal-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ModalContextProvider>
        <App />
    </ModalContextProvider>
);
