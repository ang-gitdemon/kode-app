
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
	icon: string;
};

const ScrollNavigationData:ItemType[] = [
    // {
	// 	id: '001',
	// 	title: 'more',
	// 	target: '',
    // },
	{
		id: '003',
		title: 'Meal Planner',
		target: 'MealPlannerScreen',
		icon: 'planner'
	},
    {
		id: '002',
		title: 'Nutriton Analyzer',
		target: 'NutritionAnalyzerScreen',
		icon: 'wellness'
    },
    {
        id: '004',
        title: 'Reverse Lookup',
        target: 'ReverseLookupScreen',
		icon: 'reverse'
    },
    {
        id: '005',
        title: 'Grocery Shopper',
		target: 'GroceriesScreen',
		icon: 'cart'
    },
    {
        id: '006',
        title: 'Nutrition Tracker',
		target: 'YourNutrition',
		icon: 'tracker'
    },
    {
        id: '007',
        title: 'Expense Tracker',
		target: 'ExpenseTrackerScreen',
		icon: 'expense'
    },
    {
        id: '008',
        title: 'Party Organizer',
		target: 'PartyOrganizerScreen',
		icon: 'party'
	}
];

export const ScrollNavigation: React.FC = () => {

    const navigation = useNavigation();
	const route = useRoute();    

    return(
        <View style={{
			borderTopWidth: 1,
			borderColor: colors.gray200,
			paddingVertical: 0,
			backgroundColor: colors.gray100,
		}}>
			<FlatList
				style={{
					paddingVertical: 10,
					paddingLeft: 10,
				}}
				ItemSeparatorComponent={() => {
					return <View style={{ height: "100%", width: 10, }} />;
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
								backgroundColor: colors.primaryDarker,
								borderRadius: 4,
								flexDirection: 'row',
								alignItems: 'center'
							}}>
								<Icon name={item.icon} active={isNavActive} size={16} color={colors.white}  />
								<View style={{height: '100%', marginLeft: 5}} />
								<Text style={{fontSize: 12, color: colors.white, fontFamily: 'Kanit_600SemiBold'}}>{item.title}</Text>
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
										elevation: 5,
										flexDirection: 'row',
										alignItems: 'center'

									}}>
									<Icon name={item.icon} active={isNavActive} size={16} color={colors.primaryDarker} />
									<View style={{height: '100%', marginLeft: 5}} />
									<Text style={{fontSize: 12, fontFamily: 'Kanit_400Regular'}}>{item.title}</Text>
								</View>
							</Pressable>
						)
					}
				}} />
		</View>
    )
}

export default ScrollNavigation;