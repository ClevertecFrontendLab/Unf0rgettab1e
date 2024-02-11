import React, { useState } from 'react';
import { Button, Layout, Menu, Space, Typography } from 'antd';
import {
    CalendarTwoTone,
    HeartFilled,
    IdcardOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    TrophyFilled,
} from '@ant-design/icons';

import fitLogo from '/fit.svg';
import Logo from '/Logo.svg';
import Logout from '/Logout.svg';
import './Sidebar.scss';

const { Sider } = Layout;

export const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Sider
            className='sidebar'
            trigger={null}
            collapsible
            collapsed={collapsed}
            width={208}
            theme='light'
        >
            <div className='logo'>
                {collapsed ? <img src={fitLogo} alt='Logo' /> : <img src={Logo} alt='Logo' />}
            </div>
            <Menu
                theme='light'
                mode='inline'
                items={[
                    {
                        key: '1',
                        icon: <CalendarTwoTone twoToneColor='#061178' />,
                        label: 'Календарь',
                    },
                    {
                        key: '2',
                        icon: <HeartFilled style={{ color: '#061178' }} />,
                        label: 'Тренировки',
                    },
                    {
                        key: '3',
                        icon: <TrophyFilled style={{ color: '#061178' }} />,
                        label: 'Достижения',
                    },
                    {
                        key: '4',
                        icon: <IdcardOutlined style={{ color: '#061178' }} />,
                        label: 'Профиль',
                    },
                ]}
            />
            <Button className='logout'>
                <img src={Logout} alt='Logout' />
                <Typography.Text style={{ marginLeft: '25px' }}>
                    {collapsed ? '' : 'Выйти'}
                </Typography.Text>
            </Button>
            <Space className='sidebar__trigger' onClick={() => setCollapsed(!collapsed)}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Space>
        </Sider>
    );
};
