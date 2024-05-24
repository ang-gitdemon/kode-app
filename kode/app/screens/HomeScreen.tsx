import React from 'react';
import { View, Text } from 'react-native';

const HomeScreen = ({navigation}) => {
	return(
		<>
			<View style={{flex: 1, paddingHorizontal: 20,}}>
				<Text>Home Screen</Text>
				<Text>Today Screen</Text>
			</View>
		</>
	);
};

export default HomeScreen;
