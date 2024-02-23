import { ResultData } from '@models/Result';
import { paths } from './paths';

export const resultPropsData: { [key: string]: ResultData } = {
    SUCCESS: {
        status: 'success',
        title: 'Регистрация успешна',
        subtitle:
            'Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.',
        btnText: 'Войти',
        btnNavigatePath: paths.REGISTRATION,
    },
    ERROR: {
        status: 'error',
        title: 'Данные не сохранились',
        subtitle: 'Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.',
        btnText: 'Повторить',
        btnNavigatePath: paths.REGISTRATION,
    },
    ERROR_USER_EXIST: {
        status: 'error',
        title: 'Данные не сохранились',
        subtitle:
            'Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.',
        btnText: 'Назад к регистрации',
        btnNavigatePath: paths.REGISTRATION,
    },
    ERROR_LOGIN: {
        status: 'warning',
        title: 'Вход не выполнен',
        subtitle: 'Что-то пошло не так. Попробуйте еще раз',
        btnText: 'Повторить',
        btnNavigatePath: paths.AUTH,
    },
    ERROR_CHECK_EMAIL: {
        status: '500',
        title: 'Что-то пошло не так',
        subtitle: 'Произошла ошибка, попробуйте отправить форму ещё раз.',
        btnText: 'Назад',
        btnNavigatePath: paths.REGISTRATION,
    },
    ERROR_CHECK_EMAIL_NO_EXIST: {
        status: 'error',
        title: 'Такой e-mail не зарегистрирован',
        subtitle: 'Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.',
        btnText: 'Попробовать снова',
        btnNavigatePath: paths.AUTH,
    },
    ERROR_CHANGE_PASSWORD: {
        status: 'error',
        title: 'Данные не сохранились',
        subtitle: 'Что-то пошло не так. Попробуйте ещё раз',
        btnText: 'Повторить',
        btnNavigatePath: '',
    },
    SUCCESS_CHANGE_PASSWORD: {
        status: 'success',
        title: 'Пароль успешно изменен',
        subtitle: 'Теперь можно войти в аккаунт, используя свой логин и новый пароль',
        btnText: 'Вход',
        btnNavigatePath: paths.AUTH,
    },
};
