import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css';
import 'normalize.css';
import './index.scss';

import { store } from '@redux/configure-store';
import { MainPage } from './pages';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                </Routes>
            </HashRouter>
        </Provider>
    </React.StrictMode>,
);
