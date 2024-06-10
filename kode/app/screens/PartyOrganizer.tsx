import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';

const PartyOrganizerScreen = ({navigation}) => {
	return(
		<>
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<Text>Party Organizer Screen</Text>
				</View>
				<ScrollNavigation />
			</View>
		</>
	);
};

export default PartyOrganizerScreen;
