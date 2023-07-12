import { httpApi } from '../../infra/http/httpApi';

export const deleteExample = async (id: string) => {
    try {
        await httpApi.delete(`url/${id}`);
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
};
