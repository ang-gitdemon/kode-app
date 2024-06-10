
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation, useRoute } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import RecipeBookScreen from '../screens/RecipeBookScreen';
import ConnectScreen from '../screens/ConnectScreen';
import { FlatList, Text, View } from 'react-native';
import { LogoutButton } from '../components/LogoutButton';
import Icon from '../components/Icon';
import colors from '../ui/colors';

const DATA = [
    {
		id: '001',
		title: 'more',
		target: '',
		isButton: false,
		icon: 'Ellipsis2',
		iconFilled: null,
		sizeHeight: 10,
		sizeWidth: 14,
    },
    {
		id: '002',
		title: 'Nutriton Analyzer',
		target: 'NutritionAnalyzer',
		isButton: true,
		icon: 'Wellness',
		iconFilled: 'Wellness',
		sizeHeight: 16,
		sizeWidth: 16,
    },
    {
        id: '003',
        title: 'Meal Planner',
		target: 'MealPlanner',
        isButton: true,
		icon: 'PlannerFilled',
		iconFilled: 'PlannerFilled',
		sizeHeight: 16,
		sizeWidth: 16,
    },
    {
        id: '004',
        title: 'Reverse Lookup',
        target: 'ReverseLookup',
        isButton: true,
		icon: 'Reverse',
		iconFilled: 'Reverse',
		sizeHeight: 12,
		sizeWidth: 16,
    },
    {
        id: '005',
        title: 'Grocery Shopper',
		target: 'Groceries',
        isButton: true,
		icon: 'ShoppingFilled',
		iconFilled: 'ShoppingFilled',
		sizeHeight: 14,
		sizeWidth: 16,
    },
    {
        id: '006',
        title: 'Nutrition Tracker',
		target: 'YourNutrition',
        isButton: true,
		icon: 'EatFilled',
		iconFilled: 'EatFilled',
		sizeHeight: 16,
		sizeWidth: 16,
    },
    {
        id: '007',
        title: 'Expense Tracker',
		target: 'ExpenseTracker',
        isButton: true,
		icon: 'DollarFilled',
		iconFilled: 'DollarFilled',
		sizeHeight: 16,
		sizeWidth: 16,
    },
    {
        id: '008',
        title: 'Party Organizer',
		target: 'PartyOrganizer',
        isButton: true,
		icon: 'EventFilled',
		iconFilled: 'EventFilled',
		sizeHeight: 16,
		sizeWidth: 16,
    },
];

export const ScrollNavigation: React.FC = () => {

    // const navigation = useNavigation();
	const route = useRoute();

    console.log(route.name);
    

    return(
        <View style={{
			borderTopWidth: 1,
			borderColor: colors.primaryDarker,
			paddingVertical: 0,
			backgroundColor: colors.white,
		}}>
			<FlatList
				style={{
					paddingVertical: 10
				}}
				data={DATA}
				horizontal={true}
				keyExtractor={item => item.id}
				renderItem={({item}) => {
                    const isNavActive = route.name === item.target;
					if(item.target.length > 0) {
						return (
							<Text>{item.title}</Text>
						)
					} else {
						return (
							<Text>{item.title}</Text>
						)
					}
				}} />
		</View>
    )
}

export default ScrollNavigation;