import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';

const YourNutritionScreen = ({navigation}) => {
	return(
		<>
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Your Nutrition Screen</Text>
				</View>
				<ScrollNavigation />
			</View>
		</>
	);
};

export default YourNutritionScreen;
