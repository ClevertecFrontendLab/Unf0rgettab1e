import React from 'react';
import { Button, Card } from 'antd';

import './MainCard.scss';

type MainCardProps = {
    title: string;
    icon: React.ReactNode;
    linkText: string;
};

export const MainCard: React.FC<MainCardProps> = (props) => {
    return (
        <Card size='small' title={props.title} className='main-card'>
            {props.icon}
            <Button type='link'>{props.linkText}</Button>
        </Card>
    );
};
