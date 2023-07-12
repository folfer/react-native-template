import * as React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ITestLayout } from '~/components/Test/data';

export function Test({ data }: ITestLayout) {
  return (
    <SafeAreaView>
      <View>
        <Text>{`Test`}</Text>
      </View>
    </SafeAreaView>
  );
}
