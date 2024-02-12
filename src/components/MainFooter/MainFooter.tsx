import React from 'react';
import { Button, Layout } from 'antd';
import { MobileDownloads } from '@components/MobileDownloads';

import './MainFooter.scss';

export const MainFooter: React.FC = () => {
    return (
        <Layout.Footer style={{ padding: '24px 24px 42px' }}>
            <Button type='link'>Смотреть отзывы</Button>
            <MobileDownloads />
        </Layout.Footer>
    );
};
