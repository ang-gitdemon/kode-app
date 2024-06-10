import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';

const MealPlannerScreen = ({navigation}) => {
	return(
		<>
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Meal Planner Screen</Text>
				</View>
				<ScrollNavigation />
			</View>
		</>
	);
};

export default MealPlannerScreen;
