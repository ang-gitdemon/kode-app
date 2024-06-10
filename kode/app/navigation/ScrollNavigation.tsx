
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ConnectScreen from '../screens/ConnectScreen';
import { FlatList, Pressable, Text, View } from 'react-native';
import { LogoutButton } from '../components/LogoutButton';
import Icon from '../components/Icon';
import colors from '../ui/colors';


type ItemType = {
	id: string;
	title: string;
	target: string;
};

const ScrollNavigationData:ItemType[] = [
    // {
	// 	id: '001',
	// 	title: 'more',
	// 	target: '',
    // },
    {
		id: '002',
		title: 'Nutriton Analyzer',
		target: 'NutritionAnalyzerScreen',
    },
    {
        id: '003',
        title: 'Meal Planner',
		target: 'MealPlannerScreen'
    },
    {
        id: '004',
        title: 'Reverse Lookup',
        target: 'ReverseLookupScreen'
    },
    {
        id: '005',
        title: 'Grocery Shopper',
		target: 'GroceriesScreen'
    },
    {
        id: '006',
        title: 'Nutrition Tracker',
		target: 'YourNutritionScreen'
    },
    {
        id: '007',
        title: 'Expense Tracker',
		target: 'ExpenseTrackerScreen'
    },
    {
        id: '008',
        title: 'Party Organizer',
		target: 'PartyOrganizerScreen'
	}
];

export const ScrollNavigation: React.FC = () => {

    const navigation = useNavigation();
	const route = useRoute();    

    return(
        <View style={{
			borderTopWidth: 1,
			borderColor: colors.primaryDarker,
			paddingVertical: 0,
			backgroundColor: colors.grayLightest,
		}}>
			<FlatList
				style={{
					paddingVertical: 10,
					paddingLeft: 10,
				}}
				ItemSeparatorComponent={() => {
					return (
						<View
							style={{
								height: "100%",
								width: 10,
							}} />
					);
				}}
				data={ScrollNavigationData}
				horizontal={true}
				keyExtractor={item => item.id}
				renderItem={({item}) => {
                    const isNavActive = route.name === item.target;
					console.log(item.target)
					if( isNavActive ) {
						return (
							<View style={{
								paddingHorizontal: 12,
								paddingVertical: 8,
							}}>
								<Text style={{fontSize: 12}}>{item.title}</Text>
							</View>
						)
					} else {
						return (
							<Pressable onPress={ () => ( navigation.navigate(item.target as never) ) }>
								<View style={{
										backgroundColor: colors.white,
										paddingHorizontal: 12,
										paddingVertical: 8,
										borderRadius: 4,
										shadowColor: '#000',
										shadowOffset: { width: 0, height: 2 },
										shadowOpacity: 0.2,
										shadowRadius: 2,
										elevation: 5
									}}>
									<Text style={{fontSize: 12}}>{item.title}</Text>
								</View>
							</Pressable>
						)
					}
				}} />
		</View>
    )
}

export default ScrollNavigation;