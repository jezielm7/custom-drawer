import React from 'react';
import { StatusBar } from 'react-native';

import Routes from './src/routes';

export default function drawerNavigator() {
  return (
    <>
      <StatusBar backgroundColor="#492da8" />
      <Routes />
    </>
  );
}