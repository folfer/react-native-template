import { httpApi } from '../../infra/http/httpApi';

export const postExample = async (collaborator: any) => {
    try {
        await httpApi.post('/collaborator', collaborator);
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
};
