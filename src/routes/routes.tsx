import { Navigate, Route, Routes } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';
import { AuthPage } from '@pages/AuthPage';
import { paths } from '@utils/constants/paths';
import { AuthTabs } from '@components/Auth/AuthTabs';
import { AuthResult } from '@components/Auth/Result';
import { resultPropsData } from '@utils/constants/resultPropsData';
import { ConfirmEmail } from '@components/Auth/ConfirmEmail';
import { ChangePassword } from '@components/Auth/ChangePassword';

export const routes = (
    <Routes>
        <Route
            path={paths.AUTH}
            element={
                <AuthPage>
                    <AuthTabs />
                </AuthPage>
            }
        />
        <Route
            path={paths.REGISTRATION}
            element={
                <AuthPage>
                    <AuthTabs />
                </AuthPage>
            }
        />
        <Route
            path={paths.CHANGE_PASSWORD}
            element={
                <AuthPage>
                    <ChangePassword />
                </AuthPage>
            }
        />
        <Route
            path={paths.CONFIRM_EMAIL}
            element={
                <AuthPage>
                    <ConfirmEmail />
                </AuthPage>
            }
        />
        <Route path={paths.MAIN} element={<MainPage />} />
        <Route
            path={paths.RESULT.SUCCESS}
            element={
                <AuthPage>
                    <AuthResult resultData={resultPropsData.SUCCESS} />
                </AuthPage>
            }
        />
        <Route
            path={paths.RESULT.ERROR}
            element={
                <AuthPage>
                    <AuthResult resultData={resultPropsData.ERROR} />
                </AuthPage>
            }
        />
        <Route
            path={paths.RESULT.ERROR_USER_EXIST}
            element={
                <AuthPage>
                    <AuthResult resultData={resultPropsData.ERROR_USER_EXIST} />
                </AuthPage>
            }
        />
        <Route
            path={paths.RESULT.ERROR_LOGIN}
            element={
                <AuthPage>
                    <AuthResult resultData={resultPropsData.ERROR_LOGIN} />
                </AuthPage>
            }
        />
        <Route
            path={paths.RESULT.ERROR_CHECK_EMAIL}
            element={
                <AuthPage>
                    <AuthResult resultData={resultPropsData.ERROR_CHECK_EMAIL} />
                </AuthPage>
            }
        />
        <Route
            path={paths.RESULT.ERROR_CHECK_EMAIL_NO_EXIST}
            element={
                <AuthPage>
                    <AuthResult resultData={resultPropsData.ERROR_CHECK_EMAIL_NO_EXIST} />
                </AuthPage>
            }
        />
        <Route
            path={paths.RESULT.SUCCESS_CHANGE_PASSWORD}
            element={
                <AuthPage>
                    <AuthResult resultData={resultPropsData.SUCCESS_CHANGE_PASSWORD} />
                </AuthPage>
            }
        />
        <Route path={paths.BASE} element={<Navigate to={paths.AUTH} />} />
    </Routes>
);
