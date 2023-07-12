import { httpApi } from '../../infra/http/httpApi';

export const editExample = async (exampleUser: any) => {
    try {
        await httpApi.put(`url/${exampleUser.id}`, exampleUser);
        return Promise.resolve();
    } catch (err) {
        return Promise.reject(err);
    }
};
