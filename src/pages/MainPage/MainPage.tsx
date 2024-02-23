import React, { useEffect } from 'react';
import { Layout, Space, Typography } from 'antd';
import { CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import { Sidebar } from '@components/Sidebar';
import { MainHeader } from '@components/MainHeader';
import { MainCard } from '@components/MainCard';
import { MainFooter } from '@components/MainFooter';
import { push } from 'redux-first-history';
import { paths } from '@utils/constants/paths';
import { useAppDispatch } from '@hooks';
import './MainPage.scss';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

export const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        !localStorage.getItem('token') ? dispatch(push(paths.AUTH)) : '';
    }, [dispatch]);

    return (
        <Layout className='main-layout'>
            <Sidebar></Sidebar>
            <Layout className='content-layout'>
                <MainHeader></MainHeader>
                <Content className='content-layout__content'>
                    <Space className='content-layout__preview'>
                        <Paragraph className='content-layout__preview-text'>
                            С CleverFit ты сможешь:
                            <br />— планировать свои тренировки на календаре, выбирая тип и уровень
                            нагрузки;
                            <br />— отслеживать свои достижения в разделе статистики, сравнивая свои
                            результаты с нормами и рекордами;
                            <br />— создавать свой профиль, где ты можешь загружать свои фото, видео
                            и отзывы о тренировках;
                            <br />— выполнять расписанные тренировки для разных частей тела, следуя
                            подробным инструкциям и советам профессиональных тренеров.
                        </Paragraph>
                    </Space>
                    <Space className='content-layout__slogan'>
                        <Title level={4} className='content-layout__slogan-text'>
                            CleverFit — это не просто приложение, а твой личный помощник в&nbsp;мире
                            фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                        </Title>
                    </Space>
                    <div className='content-layout__features'>
                        <MainCard
                            title='Расписать тренировки'
                            icon={<HeartFilled style={{ color: '#2F54EB' }} />}
                            linkText='Тренировки'
                        ></MainCard>
                        <MainCard
                            title='Назначить календарь'
                            icon={<CalendarTwoTone twoToneColor={'#2F54EB'} />}
                            linkText='Календарь'
                        ></MainCard>
                        <MainCard
                            title='Заполнить профиль'
                            icon={<IdcardOutlined style={{ color: '#2F54EB' }} />}
                            linkText='Профиль'
                        ></MainCard>
                    </div>
                </Content>
                <MainFooter />
            </Layout>
        </Layout>
    );
};
