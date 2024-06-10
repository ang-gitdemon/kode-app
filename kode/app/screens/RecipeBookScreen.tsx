import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';

const RecipeBookScreen = ({navigation}) => {
	return(
		<>
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Reipce Book Screen</Text>
				</View>
				<ScrollNavigation />
			</View>
		</>
	);
};

export default RecipeBookScreen; 
