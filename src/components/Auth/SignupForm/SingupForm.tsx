import React from 'react';
import { Form, Input, Button } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

export const SignupForm: React.FC = () => {
    const location = useLocation();

    return (
        <Form
            name='normal_login'
            initialValues={{ remember: true }}
            className='login-form'
            // onFinish={onFinish}
        >
            <Form.Item
                name='username'
                className='auth-form__item'
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input className='auth-form__input' addonBefore='e-mail:' size='large' />
            </Form.Item>
            <Form.Item
                name='password'
                className='auth-form__item'
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input.Password className='auth-form__input' placeholder='Пароль' size='large' />
                <span className='password-rules'>
                    Пароль не менее 8 символов, с заглавной буквой и цифрой
                </span>
            </Form.Item>
            <Form.Item
                name='confirm'
                className='auth-form__item'
                rules={[{ required: true, message: 'Please input your Password!' }]}
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
