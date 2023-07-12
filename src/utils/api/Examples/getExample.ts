import { httpApi } from '../../infra/http/httpApi';

export const getExample = async () => {
    try {
        const { data } = await httpApi.get(`url`);
        return Promise.resolve({ data });
    } catch (err) {
        return Promise.reject(err);
    }
};
