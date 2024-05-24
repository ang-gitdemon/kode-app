import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import colors from './styles/colors';
import {AppNonSync} from './AppNonSync';

import {RealmProvider} from '@realm/react';
import {schemas} from './models';

export const AppWrapperNonSync = () => {
  // If sync is disabled, setup the app without any sync functionality and return early
  return (
    <SafeAreaView style={{flex: 1}}>
      <RealmProvider schema={schemas}>
        <AppNonSync />
      </RealmProvider>
    </SafeAreaView>
  );
};