import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Button, Card, Divider, Space, Typography } from 'antd';
import React from 'react';

import './MobileDownloads.scss';

export const MobileDownloads = () => {
    return (
        <Card className='downloads' bordered={false} bodyStyle={{ padding: 0, minWidth: 240 }}>
            <Card bodyStyle={{ padding: '12px 24px' }}>
                <Typography.Title className='downloads__title' level={5}>
                    Скачать на телефон
                </Typography.Title>
                <Typography.Text
                    className='downloads__text'
                    style={{ color: '#8C8C8C', textAlign: 'start' }}
                >
                    Доступно в PRO-тарифе
                </Typography.Text>
            </Card>
            <Card type='inner' bodyStyle={{ padding: '12px 0' }}>
                <Button type='text'>
                    <AndroidFilled />
                    Android OS
                </Button>
                <Button type='text'>
                    <AppleFilled />
                    Apple iOS
                </Button>
            </Card>
        </Card>
    );
};
