import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';

const GroceriesScreen = ({navigation}) => {
	return(
		<>
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Groceries Screen</Text>
				</View>
				<ScrollNavigation />
			</View>
		</>
	);
};

export default GroceriesScreen;
