import React, { useState } from 'react';
import { Button, Form, Input, Space } from 'antd';
import { useAppDispatch } from '@hooks';

import './ChangePassword.scss';

export const ChangePassword: React.FC = () => {
    const [password, setPassword] = useState('');

    const dispatch = useAppDispatch();
    const changePasswordHandler = () => {
        // dispatch(registration(email, password));
    };

    return (
        <Form
            name='change-password'
            initialValues={{ remember: true }}
            className='change-pswd-form'
            onFinish={changePasswordHandler}
        >
            <Form.Item>
                <div className='change-pswd-form__title'>Восстановление аккауанта</div>
            </Form.Item>
            <Form.Item
                name='new-password'
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
                name='confirm-new-password'
                className='auth-form__item'
                dependencies={['new-password']}
                rules={[
                    {
                        required: true,
                        message: '',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('new-password') === value) {
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
                    Сохранить
                </Button>
            </Form.Item>
        </Form>
    );
};
