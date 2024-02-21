import React from 'react';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
import { store, history } from '@redux/configure-store';
import { routes } from './routes/routes';

export const App: React.FC = () => {
    return (
        <Provider store={store}>
            <HistoryRouter history={history}>{routes}</HistoryRouter>
        </Provider>
    );
};
