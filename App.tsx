import React from 'react';
import { Provider } from 'react-redux';
import { store } from './android/src/redux/store';
import AppNavigator from './android/src/navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
