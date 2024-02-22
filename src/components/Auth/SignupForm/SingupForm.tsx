import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useAppDispatch } from '@hooks';
import { registration } from '@actions/authAction';

export const SignupForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();

    const signupFinishHandler = () => {
        dispatch(registration(email, password));
    };
    return (
        <Form
            name='signup'
            initialValues={{ remember: true }}
            className='login-form'
            onFinish={signupFinishHandler}
        >
            <Form.Item
                name='email'
                className='auth-form__item'
                rules={[
                    {
                        required: true,
                        type: 'email',
                        message: '',
                    },
                ]}
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
                rules={[
                    {
                        required: true,
                        pattern: new RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/),
                    },
                ]}
                help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
            >
                <Input.Password
                    className='auth-form__input'
                    placeholder='Пароль'
                    size='large'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item
                name='confirm'
                className='auth-form__item'
                dependencies={['password']}
                rules={[
                    {
                        required: true,
                        message: '',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Пароли не совпадают'));
                        },
                    }),
                ]}
            >
                <Input.Password
                    className='auth-form__input'
                    placeholder='Повторить пароль'
                    size='large'
                />
            </Form.Item>
            <Form.Item className='auth-form__item'>
                <Button type='primary' htmlType='submit' className='auth-form__submit' size='large'>
                    Войти
                </Button>
            </Form.Item>
            <Form.Item className='auth-form__item'>
                <Button className='auth-form__submit' size='large'>
                    <GooglePlusOutlined />
                    Регистрация через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
