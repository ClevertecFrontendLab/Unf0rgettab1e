import { MobileDownloads } from '@components/MobileDownloads/MobileDownloads';
import { Button, Layout, Space } from 'antd';
import React from 'react';

import './MainFooter.scss';

export const MainFooter = () => {
    return (
        <Layout.Footer style={{ padding: '24px 24px 42px' }}>
            <Button type='link'>Смотреть отзывы</Button>
            <MobileDownloads />
        </Layout.Footer>
    );
};
