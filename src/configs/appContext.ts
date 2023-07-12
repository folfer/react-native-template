import { client, base } from '../../app.json';
import { IAppContext, IClientsContext, IBaseContext, IClient } from '~/utils';

const clients: IClientsContext = {
  outback: {
    pro: 'https://api-andromeda.homolog.somosdx.co',
    // pro: 'https://api-andromeda.somosdx.co',
    dev: 'http://localhost:3000/', // SEU IP AQUI
    socket: 'https://jsonplaceholder.typicode.com',
    theme: 'outback',
  },
};

const defineContext = (client: IClient, base: IBaseContext): IAppContext => {
  return {
    api: clients[client][base],
    socket: clients[client].socket,
    theme: clients[client].theme,
  };
};

export const appContext = defineContext(
  client as IClient,
  base as IBaseContext
);
