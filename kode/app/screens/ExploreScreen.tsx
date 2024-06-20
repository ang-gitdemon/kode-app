import React from 'react';
import { View, Text } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';
import colors from '../ui/colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from '../components/Icon';

const ExploreScreen = ({navigation}) => {
	return(
		<>
			<SafeAreaProvider style={{flex: 1}}>
				<View style={{flex: 1}}>
					<View style={{
						paddingHorizontal: 20,
						paddingVertical: 12,
						// flexDirection: 'row',
						// alignItems: 'center',
						// columnGap: 10,
					}}>
						<Icon name={'explore'} active={false} color={colors.black} />
						<Text>Explore Screen</Text>
					</View>
				</View>
				
				<ScrollNavigation />
			</SafeAreaProvider>
		</>
	);
};

export default ExploreScreen;
