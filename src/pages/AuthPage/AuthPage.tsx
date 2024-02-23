import React, { useEffect } from 'react';
import { Layout } from 'antd';
import { paths } from '@utils/constants/paths';
import { push } from 'redux-first-history';
import { useAppDispatch } from '@hooks';
import './AuthPage.scss';

type AuthPageProps = {
    children: React.ReactNode;
};
export const AuthPage: React.FC<AuthPageProps> = ({ children }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        localStorage.getItem('token') ? dispatch(push(paths.MAIN)) : '';
    }, [dispatch]);

    return (
        <Layout className='auth-layout'>
            <Layout.Content>
                <div className='container'>{children}</div>
            </Layout.Content>
        </Layout>
    );
};
