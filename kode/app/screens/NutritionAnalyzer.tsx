import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';

const NutritionAnalyzerScreen = ({navigation}) => {
	return(
		<>
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Nutrition Analyzer Screen</Text>
				</View>
				<ScrollNavigation />
			</View>
		</>
	);
};

export default NutritionAnalyzerScreen;
