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
const SIDEBAR_MOBILE_MODE = 'vertical';
const SIDEBAR_DESKTOP_MODE = 'inline';

export const Sidebar: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const MENU_ITEMS = [
        {
            key: '1',
            icon: isMobile ? '' : <CalendarTwoTone twoToneColor='#061178' />,
            label: 'Календарь',
        },
        {
            key: '2',
            icon: isMobile ? '' : <HeartFilled style={{ color: '#061178' }} />,
            label: 'Тренировки',
        },
        {
            key: '3',
            icon: isMobile ? '' : <TrophyFilled style={{ color: '#061178' }} />,
            label: 'Достижения',
        },
        {
            key: '4',
            icon: isMobile ? '' : <IdcardOutlined style={{ color: '#061178' }} />,
            label: 'Профиль',
        },
    ];

    return (
        <Sider
            className='sidebar'
            trigger={null}
            collapsible
            collapsed={collapsed}
            breakpoint='sm'
            collapsedWidth={isMobile ? 0 : 80}
            onBreakpoint={(broken) => {
                broken ? setIsMobile(true) : setIsMobile(false);
            }}
            width={isMobile ? 106 : 208}
            theme='light'
        >
            <div className='logo'>
                {collapsed ? <img src={fitLogo} alt='Logo' /> : <img src={Logo} alt='Logo' />}
            </div>
            <Menu
                theme='light'
                mode={isMobile ? SIDEBAR_MOBILE_MODE : SIDEBAR_DESKTOP_MODE}
                items={MENU_ITEMS}
            />
            <Button className='logout'>
                {isMobile ? '' : <img src={Logout} alt='Logout' />}
                <Typography.Text style={{ marginLeft: '25px' }}>
                    {collapsed ? '' : 'Выйти'}
                </Typography.Text>
            </Button>
            <Space
                className='sidebar__trigger'
                data-test-id={`sider-switch${isMobile ? '-mobile' : ''}`}
                onClick={() => setCollapsed(!collapsed)}
            >
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Space>
        </Sider>
    );
};
