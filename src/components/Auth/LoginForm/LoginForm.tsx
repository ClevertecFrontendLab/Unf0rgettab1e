import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@hooks';
import { login } from '@actions/authAction';
import { push } from 'redux-first-history';
import { Paths } from '@utils/constants/Paths';

export const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    const loginFinishHandler = async () => {
        await dispatch(login(email, password));
        await dispatch(push(Paths.MAIN));
    };

    return (
        <Form
            name='login'
            initialValues={{ remember: true }}
            className='login-form'
            onFinish={loginFinishHandler}
        >
            <Form.Item
                name='email'
                className='auth-form__item'
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input
                    className='auth-form__input'
                    addonBefore='e-mail:'
                    size='large'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                name='password'
                className='auth-form__item'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password
                    className='auth-form__input'
                    placeholder='Пароль'
                    size='large'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item className='auth-form__item auth-form__features'>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <Button type='link' className='auth-form__features-forgot' href=''>
                    Забыли пароль?
                </Button>
            </Form.Item>
            <Form.Item className='auth-form__item'>
                <Button type='primary' htmlType='submit' className='auth-form__submit' size='large'>
                    Войти
                </Button>
            </Form.Item>
            <Form.Item className='auth-form__item'>
                <Button className='auth-form__submit' size='large'>
                    <GooglePlusOutlined />
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
