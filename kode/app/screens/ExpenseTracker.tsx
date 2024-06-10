import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';

const ExpenseTrackerScreen = ({navigation}) => {
	return(
		<>
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Expense Tracker Screen</Text>
				</View>
				<ScrollNavigation />
			</View>
		</>
	);
};

export default ExpenseTrackerScreen;
