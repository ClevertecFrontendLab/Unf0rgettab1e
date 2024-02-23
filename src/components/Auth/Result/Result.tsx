import React from 'react';
import { Button, Result } from 'antd';
import { ResultData } from '@models/Result';
import './Result.scss';
import { useAppDispatch } from '@hooks';
import { push } from 'redux-first-history';

type AuthResultProps = {
    resultData: ResultData;
};

export const AuthResult: React.FC<AuthResultProps> = ({ resultData }) => {
    const dispatch = useAppDispatch();
    return (
        <Result
            status={resultData.status}
            title={resultData.title}
            subTitle={resultData.subtitle}
            extra={[
                <Button type='primary' onClick={() => dispatch(push(resultData.btnNavigatePath))}>
                    {resultData.btnText}
                </Button>,
            ]}
        />
    );
};
