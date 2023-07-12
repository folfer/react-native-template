import * as React from 'react';
import { Text, View } from 'react-native';

import { ITestLayout } from '~/components/Test/data';

export const Test = ({ data }: ITestLayout) => (
  <View>
    <Text>{`Test`}</Text>
  </View>
);
