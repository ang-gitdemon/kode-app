import React, {useCallback} from 'react';
import {Pressable, Alert, View, Text, StyleSheet} from 'react-native';
import { useAuth } from '@realm/react';

type LogoutProps = {
}

export const LogoutButton = ({}) => {
    const { logOut } = useAuth();

    // // The signOut function calls the logOut function on the currently
    // // logged in user and then navigates to the welcome screen
    // const signOut = useCallback(() => {
    //     user?.logOut();
    // }, [user]);

    return (
        <Pressable
        onPress={() => {
            Alert.alert('Log Out', '', [
            {
                text: 'Yes, Log Out',
                style: 'destructive',
                onPress: () => logOut(),
            },
            {text: 'Cancel', style: 'cancel'},
            ]);
        }}>
            <Text>Log Out</Text>
        </Pressable>
    );
}
