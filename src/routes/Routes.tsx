import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import * as views from '~/pages';
import { inTest } from '../../app.json';

const Stack = createStackNavigator();

const App = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="App"
      component={views.Test}
    />
  </Stack.Navigator>
);

const Test = () => (
  <Stack.Navigator>
    <Stack.Screen
      options={{
        headerShown: false,
      }}
      name="Test"
      component={views.Test}
    />
  </Stack.Navigator>
);

export default function Routes() {
  return inTest ? <Test /> : <App />;
}
