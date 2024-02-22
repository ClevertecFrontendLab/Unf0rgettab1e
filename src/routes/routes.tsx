import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';
import { AuthPage } from '@pages/AuthPage';
import { Paths } from '@utils/constants/Paths';
import { AuthTabs } from '@components/Auth/AuthTabs';

export const routes = (
    <Routes>
        <Route
            path={Paths.AUTH}
            element={
                <AuthPage>
                    <AuthTabs />
                </AuthPage>
            }
        />
        <Route
            path={Paths.AUTH + Paths.REGISTRATION}
            element={
                <AuthPage>
                    <AuthTabs />
                </AuthPage>
            }
        />
        <Route path={Paths.MAIN} element={<MainPage />} />
        <Route path={Paths.BASE} element={<Navigate to={Paths.AUTH} />} />
    </Routes>
);
