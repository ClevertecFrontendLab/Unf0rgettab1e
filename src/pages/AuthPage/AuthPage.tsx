import React from 'react';
import { Layout } from 'antd';
import { AuthTabs } from '@components/Auth/AuthTabs';

import './AuthPage.scss';

type AuthPageProps = {
    children: React.ReactNode;
};
export const AuthPage: React.FC<AuthPageProps> = ({ children }) => {
    return (
        <Layout className='auth-layout'>
            <Layout.Content>{children}</Layout.Content>
        </Layout>
    );
};
