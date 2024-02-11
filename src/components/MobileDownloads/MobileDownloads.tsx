import { AndroidFilled, AppleFilled } from '@ant-design/icons';
import { Button, Card, Divider, Space, Typography } from 'antd';
import React from 'react';

export const MobileDownloads = () => {
    return (
        <Card bordered={false} bodyStyle={{ padding: 0 }}>
            <Card bodyStyle={{ padding: '12px 24px' }}>
                <Typography.Title
                    level={5}
                    style={{ color: '#2F54EB', fontWeight: 400, textAlign: 'start' }}
                >
                    Скачать на телефон
                </Typography.Title>
                <Typography.Text style={{ color: '#8C8C8C', textAlign: 'start' }}>
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
