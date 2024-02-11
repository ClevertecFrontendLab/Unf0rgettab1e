import { Button, Card } from 'antd';
import React, { ReactNode } from 'react';

import './MainCard.scss';

type MainCardProps = {
    title: string;
    icon: ReactNode;
    linkText: string;
};

export const MainCard = (props: MainCardProps) => {
    return (
        <Card title={props.title} className='main-card'>
            {props.icon}
            <Button type='link'>{props.linkText}</Button>
        </Card>
    );
};
