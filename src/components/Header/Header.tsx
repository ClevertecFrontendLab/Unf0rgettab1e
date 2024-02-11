import { Breadcrumb, Button, Layout, Space, Typography } from 'antd';
import React from 'react';
import './Header.scss';
import { SettingOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title } = Typography;

export const MainHeader: React.FC = () => {
    return (
        <Header className='header'>
            <Breadcrumb>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className='content'>
                <Title>
                    Приветствуем тебя в CleverFit — приложении,
                    <br />
                    которое поможет тебе добиться своей мечты!
                </Title>
                <Button type='text'>
                    <SettingOutlined />
                    Настройки
                </Button>
            </div>
        </Header>
    );
};
