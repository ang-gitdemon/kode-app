
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ConnectScreen from '../screens/ConnectScreen';
import { Pressable, Text, View } from 'react-native';
import { LogoutButton } from '../components/LogoutButton';
import Icon from '../components/Icon';
import colors from '../ui/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExpenseTrackerScreen from '../screens/ExpenseTracker';
import RecipeBookScreen from '../screens/RecipeBookScreen';
import PartyOrganizerScreen from '../screens/PartyOrganizer';
import GroceriesScreen from '../screens/Groceries';
import ReverseLookupScreen from '../screens/ReverseLookup';
import MealPlannerScreen from '../screens/MealPlanner';
import NutritionAnalyzerScreen from '../screens/NutritionAnalyzer';
import YourNutritionScreen from '../screens/YourNutrition';
import RecipeScreen from '../screens/Recipe';
import SettingsScreen from '../screens/Settings';

const Stack = createNativeStackNavigator();

const TodayScreenStack = ({ navigation, route }) => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Today" component={HomeScreen} options={{
                    headerTitle: () => <Text style={{ fontFamily: 'Kanit_500Medium', fontSize: 14 }}>Home</Text>,
                    headerLeft: () => (
                        <Pressable onPress={ () => ( navigation.navigate('SettingsScreen') ) }>
                            <Icon name={'user'} active={true} size={20} color={colors.primaryDarker}  />
                        </Pressable>
                    ),
                }} />
            <Stack.Group
                screenOptions={({ navigation, route }) => ({
                    animation: 'none',
                    headerLeft: () => (
                        <Pressable onPress={ () => ( navigation.navigate('SettingsScreen') ) }>
                            <Icon name={'user'} active={true} size={20} color={colors.primaryDarker}  />
                        </Pressable>
                    ),
                })}>
                <Stack.Screen name="Recipe" component={RecipeScreen}  options={{
                    headerTitle: () => <Text>Recipe</Text>,
                    headerShown: false,
                    headerBackTitleVisible: true,
                    headerBackTitleStyle: {fontFamily: 'WorkSans_400Regular'} }} />
                <Stack.Screen name="NutritionAnalyzerScreen" component={NutritionAnalyzerScreen} options={{
                    headerTitle: () => <Text style={{ fontFamily: 'Kanit_500Medium', fontSize: 14 }}>Nutrition Analyzer</Text>,
                }} />
                <Stack.Screen name="MealPlannerScreen" component={MealPlannerScreen} options={{
                    title: 'Meal Planner' }} />
                <Stack.Screen name="ReverseLookupScreen" component={ReverseLookupScreen} options={{
                    title: 'Reverse Lookup' }} />
                <Stack.Screen name="GroceriesScreen" component={GroceriesScreen} />
                <Stack.Screen name="YourNutrition" component={YourNutritionScreen} options={{
                    title: 'Your Nutrition' }} />
                <Stack.Screen name="ExpenseTrackerScreen" component={ExpenseTrackerScreen} options={{
                    title: 'Expense Tracker' }} />
                <Stack.Screen name="PartyOrganizerScreen" component={PartyOrganizerScreen} options={{
                    title: 'Party Organizer' }} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{
                    title: 'Settings' }} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export const BottomNavigation: React.FC = () => {

    const BottomTabs = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <BottomTabs.Navigator
                initialRouteName='Home'
                screenOptions={({ navigation, route }) => ({
                    headerTitle:  (props) => {
                        let screenTitle = props.children;
                        screenTitle = screenTitle === 'Browse' ? 'ABC App' : screenTitle;
                        return (
                            <Text>{screenTitle}</Text>
                        );   
                    },
                    
                    headerRight: () => (
                        <LogoutButton />
                    ),
                    tabBarActiveTintColor: colors.white,
                    tabBarInactiveTintColor: colors.white,
                    tabBarLabelStyle: {
                        fontFamily: 'Kanit_600SemiBold',
                        fontSize: 12
                    },
                    tabBarStyle: {
                        backgroundColor: colors.primaryDarker,
                        paddingVertical: 10,
                        minHeight: 80,
                    }
                })}>
                <BottomTabs.Screen
                    name="Home"
                    component={ TodayScreenStack }
                    options={{
                        tabBarIcon: ({ color, focused }) => (<Icon name={'home'} active={focused} />),
                        title: 'Today',
                        headerShown: false
                    }}
                />
                <BottomTabs.Screen
                    name="Explore"
                    component={ ExploreScreen }
                    options={{
                        tabBarIcon: ({ color, focused }) => (<Icon name={'explore'} active={focused} size={23} />),
                        title: 'Explore',
                    }}
                />
                <BottomTabs.Screen
                    name="RecipeBook"
                    component={ RecipeBookScreen }
                    options={{
                        tabBarIcon: ({ color, focused }) => (<Icon name={'bookmark'} active={focused} />),
                        title: 'Recipe Book',
                    }}
                />
                <BottomTabs.Screen
                    name="Connect"
                    component={ ConnectScreen }
                    options={{
                        tabBarIcon: ({ color, focused }) => (<Icon name={'connect'} active={focused} size={23} />),
                        title: 'Connect',
                    }}
                />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}