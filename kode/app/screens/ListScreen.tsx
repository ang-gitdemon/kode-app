import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';
import { RearrangeScrollNavigation } from '../components/RearrangeScrollNavigation';

const ListScreen = ({navigation, content}) => {
    console.log(content);
    
	return(
		<>
			<View style={{flex: 1}}>
				<View style={{flex: 1}}>
					<RearrangeScrollNavigation />
				</View>
                <ScrollNavigation />
			</View>
		</>
	);
};

export default ListScreen;
