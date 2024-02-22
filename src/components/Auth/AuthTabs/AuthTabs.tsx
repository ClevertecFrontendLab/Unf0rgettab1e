import React from 'react';
import { Image, Tabs, Row, Col } from 'antd';
import { push } from 'redux-first-history';

import './AuthTabs.scss';
import { LoginForm } from '../LoginForm';
import { SignupForm } from '../SignupForm';
import { useLocation } from 'react-router-dom';
import { useAppDispatch } from '@hooks/typed-react-redux-hooks';

export const AuthTabs: React.FC = () => {
    const location = useLocation();
    const dispatch = useAppDispatch();
    const activeForm = location.pathname === '/auth/registration' ? '2' : '1';
    const changeHandler = (activeKey: string) => {
        activeKey === '1' ? dispatch(push('/auth')) : dispatch(push('/auth/registration'));
    };

    return (
        <div className='auth-form'>
            <Row>
                <Col span={24} className='auth-form__logo'>
                    <Image src='/public/Logo.svg' preview={false} width={310} />
                </Col>
            </Row>
            <Row className='auth-form__tabs'>
                <Col span={24}>
                    <Tabs
                        activeKey={activeForm}
                        onChange={changeHandler}
                        centered
                        tabBarStyle={{ width: '100%' }}
                        items={[
                            {
                                label: `Вход`,
                                key: '1',
                                children: <LoginForm />,
                                className: 'auth-tab',
                            },
                            {
                                label: `Регистрация`,
                                key: '2',
                                children: <SignupForm />,
                                className: 'auth-tab',
                            },
                        ]}
                    />
                </Col>
            </Row>
        </div>
    );
};
