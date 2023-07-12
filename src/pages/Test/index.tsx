import * as React from 'react';

import { ITest } from '~/components/Test/data';
import { Test as Layout } from './Layout';

export const Test = (props: ITest ) => <Layout {...props} />;