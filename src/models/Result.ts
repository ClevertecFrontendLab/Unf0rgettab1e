export type ResultDataStatus = 'success' | 'error' | 'info' | 'warning' | '404' | '403' | '500';

export type ResultData = {
    status: ResultDataStatus;
    title: string;
    subtitle: string;
    btnText: string;
    btnNavigatePath: string;
};
