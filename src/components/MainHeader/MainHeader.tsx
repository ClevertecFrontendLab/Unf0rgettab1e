import React from 'react';
import { Breadcrumb, Button, Layout, Typography } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import './MainHeader.scss';

const { Header } = Layout;
const { Title, Text } = Typography;

export const MainHeader: React.FC = () => {
    return (
        <Header className='header'>
            <Breadcrumb className='header__breadcrumb'>
                <Breadcrumb.Item>Главная</Breadcrumb.Item>
            </Breadcrumb>
            <div className='header__content'>
                <Title className='header__title'>
                    Приветствуем тебя в CleverFit — приложении,
                    <br />
                    которое поможет тебе добиться своей мечты!
                </Title>
                <Button type='text' className='header__settings'>
                    <SettingOutlined className='header__settings-icon' />
                    <Text className='header__settings-text'>Настройки</Text>
                </Button>
            </div>
        </Header>
    );
};
