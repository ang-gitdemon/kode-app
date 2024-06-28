import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import ScrollNavigation from '../navigation/ScrollNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../components/Icon';
import colors from '../ui/colors';
import {useUser} from '@realm/react';
import { RearrangeScrollNavigation } from '../components/RearrangeScrollNavigation';

const SettingsScreen = ({navigation}) => {
	
	const user = useUser();

	return(
		<ScrollView style={{ flex: 1, backgroundColor: '#f8f8f8', padding: 16, }}>
			<View style={{marginBottom: 20}}>
				<Text style={{color: colors.gray500, marginBottom: 5, fontSize: 12, textTransform: 'uppercase'}}>Account</Text>
				<View style={{
					backgroundColor: colors.white,
					padding: 12,
					borderRadius: 10,
					shadowColor: colors.gray600,
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.2,
					shadowRadius: 2,
					elevation: 5,
					flexDirection: 'row',
					alignItems: 'center'}}>
					<Icon name={'user'} active={false} size={30} height={30} color={colors.black} />
					<View style={{marginLeft: 10}}>
						<Text>{user?.profile.email}</Text>
					</View>
				</View>
			</View>

			<View style={{marginBottom: 20}}>
				<Text style={{color: colors.gray500, marginBottom: 5, fontSize: 12, textTransform: 'uppercase'}}>Customize</Text>
				<View style={{
					backgroundColor: colors.white,
					padding: 12,
					borderRadius: 10,
					shadowColor: colors.gray600,
					shadowOffset: { width: 0, height: 2 },
					shadowOpacity: 0.2,
					shadowRadius: 2,
					elevation: 5,
					flexDirection: 'row',
					alignItems: 'center'}}>
					<View>
						<Pressable onPress={ () => {
                            navigation.navigate('List')
                        }}>
							<Text>Scroll Navigation</Text>
						</Pressable>
					</View>
				</View>
			</View>

		</ScrollView>
	);
};

export default SettingsScreen;
