import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';

const ReverseLookupScreen = ({navigation}) => {
	return(
		<>
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Reverse Lookup Screen</Text>
				</View>
				<ScrollNavigation />
			</View>
		</>
	);
};

export default ReverseLookupScreen;
