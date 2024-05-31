import React from 'react';
import {AppProvider, UserProvider} from '@realm/react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {schemas} from './models';
import {LoginScreen} from './components/LoginScreen';
import colors from './styles/colors';
import {AppSync} from './AppSync';

import {RealmProvider} from '@realm/react';
import {OpenRealmBehaviorType, OpenRealmTimeOutBehavior} from 'realm';

import { NativeWindStyleSheet } from 'nativewind'
import { useFonts, Rajdhani_700Bold } from "@expo-google-fonts/rajdhani";
import { Kanit_400Regular, Kanit_500Medium } from "@expo-google-fonts/kanit";
import { WorkSans_400Regular, WorkSans_600SemiBold, WorkSans_700Bold } from "@expo-google-fonts/work-sans";

// For Web platform
NativeWindStyleSheet.setOutput({
  default: 'native',
})

export const AppWrapperSync: React.FC<{
  appId: string;
}> = ({appId}) => {
  // If we are logged in, add the sync configuration the the RealmProvider and render the app
  const [fontsLoaded] = useFonts({
		Kanit_400Regular,
		Kanit_500Medium,
		Rajdhani_700Bold,
		WorkSans_400Regular,
		WorkSans_600SemiBold,
		WorkSans_700Bold,
	});
	if (!fontsLoaded) {
		console.log('loading');
	}

  return (
    <SafeAreaView className='bg-white' style={{flex:1}}>
      <AppProvider id={appId}>
        <UserProvider fallback={<LoginScreen />}>
          <RealmProvider
            schema={schemas}
            sync={{
              flexible: true,
              existingRealmFileBehavior: {
                type: OpenRealmBehaviorType.DownloadBeforeOpen,
                timeOut: 1000,
                timeOutBehavior:
                  // In v11 the enums are not set up correctly, so we need to use the string values
                  OpenRealmTimeOutBehavior?.OpenLocalRealm ?? 'openLocalRealm',
              },
            }}>
            <AppSync />
          </RealmProvider>
        </UserProvider>
      </AppProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
});

export default AppWrapperSync;
