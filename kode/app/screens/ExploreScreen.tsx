import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';

const ExploreScreen = ({navigation}) => {
	return(
		<>
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Explore Screen</Text>
				</View>
				<ScrollNavigation />
			</View>
		</>
	);
};

export default ExploreScreen;
