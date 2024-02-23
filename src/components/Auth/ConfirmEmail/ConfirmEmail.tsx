import { Result } from 'antd';
import React from 'react';
import VerificationInput from 'react-verification-input';

import './ConfirmEmail.scss';

export const ConfirmEmail: React.FC = () => {
    return (
        <Result
            status='info'
            title='Введите код для восстановления аккауанта'
            subTitle='Мы отправили вам на e-mail victorbyden@gmail.com шестизначный код. Введите его в поле ниже.'
            extra={[
                <VerificationInput
                    placeholder=''
                    autoFocus={true}
                    classNames={{
                        container: 'verify-container',
                        character: 'verify-character',
                        characterInactive: 'verify-character_inactive',
                        characterSelected: 'verify-character_selected',
                        characterFilled: 'verify-character_filled',
                    }}
                />,
                <div className='verify-info'>Не пришло письмо? Проверьте папку Спам.</div>,
            ]}
        >
            {/* <div>Не пришло письмо? Проверьте папку Спам.</div> */}
        </Result>
    );
};
