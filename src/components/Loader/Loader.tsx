import React from 'react';
import Lottie from 'lottie-react';
import animationData from './loader.json';
import { useAppSelector } from '@hooks';

import './Loader.scss';

export const Loader: React.FC = () => {
    const { isLoading } = useAppSelector((state) => state.user);
    return isLoading ? (
        <div className='loader'>
            <Lottie animationData={animationData}></Lottie>
        </div>
    ) : null;
};
