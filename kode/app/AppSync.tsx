import React, {useEffect, useState} from 'react';
import {useApp, useAuth, useQuery, useRealm, useUser} from '@realm/react';
import {Button, Pressable, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {Task} from './models/Task';
import {TaskManager} from './components/TaskManager';
import {buttonStyles} from './styles/button';
import {shadows} from './styles/shadows';
import colors from './styles/colors';
import {OfflineModeButton} from './components/OfflineModeButton';
import { BottomNavigation } from './navigation/BottomNavigation';

export const AppSync: React.FC = () => {
	const realm = useRealm();
	const user = useUser();
	const app = useApp();
	const {logOut} = useAuth();
	const [showDone, setShowDone] = useState(false);
	const Stack = createNativeStackNavigator();
	const tasks = useQuery(
		Task,
		collection =>
			showDone
				? collection.sorted('createdAt')
				: collection.filtered('isComplete == false').sorted('createdAt'),
		[showDone],
	);

	useEffect(() => {
		realm.subscriptions.update(mutableSubs => {
			mutableSubs.add(tasks);
		});
	}, [realm, tasks]);

	return (
		<>
			
			<Pressable onPress={logOut}>
				<Text>{`Logout ${user?.profile.email}`}</Text>
			</Pressable>
			<BottomNavigation />
			{/* <TaskManager
				tasks={tasks}
				userId={user?.id}
				setShowDone={setShowDone}
				showDone={showDone}
			/> */}
			{/* <OfflineModeButton /> */}
		</>
	);
};

const styles = StyleSheet.create({
	idText: {
		color: '#999',
		paddingHorizontal: 20,
	},
	authButton: {
		...buttonStyles.button,
		...shadows,
		backgroundColor: colors.purpleDark,
	},
	authButtonText: {
		...buttonStyles.text,
	},
});
