import React from 'react';
import { Button, Checkbox, Form, Input, Image, Tabs } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';

export const LoginForm: React.FC = () => {
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
