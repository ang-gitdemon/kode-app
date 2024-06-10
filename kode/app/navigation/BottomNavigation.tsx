
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ConnectScreen from '../screens/ConnectScreen';
import { Text, View } from 'react-native';
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

const TodayStack = createNativeStackNavigator();
const ExploreStack = createNativeStackNavigator();
const RecipeBookStack = createNativeStackNavigator();
const ConnectStack = createNativeStackNavigator();

const TodayScreenStack = () => {
    return(
        <TodayStack.Navigator>
            <TodayStack.Screen name="Today" component={HomeScreen} options={{
                title: 'Home' }} />
            <TodayStack.Screen name="Recipe" component={RecipeScreen}  options={{
                headerTitle: () => <Text>Recipe</Text>,
                headerShown: false,
                headerBackTitleVisible: true,
                headerBackTitleStyle: {fontFamily: 'WorkSans_400Regular'} }} />
            <TodayStack.Screen name="NutritionAnalyzerScreen" component={NutritionAnalyzerScreen} options={{
                title: 'Nutrition Analyzer' }} />
            <TodayStack.Screen name="MealPlannerScreen" component={MealPlannerScreen} options={{
                title: 'Meal Planner' }} />
            <TodayStack.Screen name="ReverseLookupScreen" component={ReverseLookupScreen} options={{
                title: 'Reverse Lookup' }} />
            <TodayStack.Screen name="GroceriesScreen" component={GroceriesScreen} />
            <TodayStack.Screen name="YourNutrition" component={YourNutritionScreen} options={{
                title: 'Your Nutrition' }} />
            <TodayStack.Screen name="ExpenseTrackerScreen" component={ExpenseTrackerScreen} options={{
                title: 'Expense Tracker' }} />
            <TodayStack.Screen name="PartyOrganizerScreen" component={PartyOrganizerScreen} options={{
                title: 'Party Organizer' }} />
        </TodayStack.Navigator>
    )
}

const ExploreScreenStack = () => {
    return(
        <TodayStack.Navigator>
            <TodayStack.Screen name="ExploreScreen" component={ExploreScreen} options={{
                title: 'Explore' }} />
            <TodayStack.Screen name="Recipe" component={RecipeScreen}  options={{
                headerTitle: () => <Text>Recipe</Text>,
                headerShown: false,
                headerBackTitleVisible: true,
                headerBackTitleStyle: {fontFamily: 'WorkSans_400Regular'} }} />
            <TodayStack.Screen name="NutritionAnalyzerScreen" component={NutritionAnalyzerScreen} options={{
                title: 'Nutrition Analyzer' }} />
            <TodayStack.Screen name="MealPlannerScreen" component={MealPlannerScreen} options={{
                title: 'Meal Planner' }} />
            <TodayStack.Screen name="ReverseLookupScreen" component={ReverseLookupScreen} options={{
                title: 'Reverse Lookup' }} />
            <TodayStack.Screen name="GroceriesScreen" component={GroceriesScreen} />
            <TodayStack.Screen name="YourNutrition" component={YourNutritionScreen} options={{
                title: 'Your Nutrition' }} />
            <TodayStack.Screen name="ExpenseTrackerScreen" component={ExpenseTrackerScreen} options={{
                title: 'Expense Tracker' }} />
            <TodayStack.Screen name="PartyOrganizerScreen" component={PartyOrganizerScreen} options={{
                title: 'Party Organizer' }} />
        </TodayStack.Navigator>
    )
}

export const BottomNavigation: React.FC = () => {

    const Stack = createNativeStackNavigator();
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
                    tabBarInactiveTintColor: colors.whiteOffset,
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
                    component={ ExploreScreenStack }
                    options={{
                        tabBarIcon: ({ color, focused }) => (<Icon name={'explore'} active={focused} />),
                        title: 'Explore',
                        headerShown: false
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
                        tabBarIcon: ({ color, focused }) => (<Icon name={'connect'} active={focused} />),
                        title: 'Connect',
                    }}
                />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}