
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ConnectScreen from '../screens/ConnectScreen';
import { Pressable, Text, View } from 'react-native';
import { LogoutButton } from '../components/LogoutButton';
import Icon from '../components/Icon';
import colors from '../ui/colors';
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
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';


export const BottomNavigation: React.FC = () => {

    const BottomTabs = createBottomTabNavigator();
    const Stack = createNativeStackNavigator();

    const SettingsStack = ({ navigation, route }) => {
        return(
            <Stack.Navigator>
                <Stack.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={{
                        title: 'Settings',
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="List"
                    component={ListScreen}
                    options={{
                        title: 'Scroll Navigation'
                    }}
                />
            </Stack.Navigator>
        )
    }


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
                    headerLeft: () => (
                        <Pressable onPress={ () => ( navigation.navigate('SettingsScreen') ) }>
                            <Icon name={'user'} active={true} size={20} color={colors.primaryDarker}  />
                        </Pressable>
                    ),
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
                    
                <BottomTabs.Group>
                    <BottomTabs.Screen
                        name="Home"
                        component={ HomeScreen }
                        options={{
                            tabBarIcon: ({ color, focused }) => (<Icon name={'home'} active={focused} />),
                            title: 'Today',
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
                </BottomTabs.Group>
                
                <BottomTabs.Group>
                    <BottomTabs.Screen
                        name="Recipe"
                        component={RecipeScreen}
                        options={{
                            tabBarButton: (props) => null
                        }}
                    />
                    <BottomTabs.Screen
                        name="NutritionAnalyzerScreen"
                        component={NutritionAnalyzerScreen}
                        options={{
                            title: 'Nutrition Analyzer',
                            tabBarButton: (props) => null
                        }}
                    />
                    <BottomTabs.Screen
                        name="MealPlannerScreen"
                        component={MealPlannerScreen}
                        options={{
                            title: 'Meal Planner',
                            tabBarButton: (props) => null
                        }}
                    />
                    <BottomTabs.Screen
                        name="ReverseLookupScreen"
                        component={ReverseLookupScreen}
                        options={{
                            title: 'Reverse Lookup',
                            tabBarButton: (props) => null
                        }}
                    />
                    <BottomTabs.Screen
                        name="GroceriesScreen"
                        component={GroceriesScreen}
                        options={{
                            title: 'Groceries',
                            tabBarButton: (props) => null
                        }}
                    />
                    <BottomTabs.Screen
                        name="YourNutrition"
                        component={YourNutritionScreen}
                        options={{
                            title: 'Your Nutrition',
                            tabBarButton: (props) => null
                        }}
                    />
                    <BottomTabs.Screen
                        name="ExpenseTrackerScreen"
                        component={ExpenseTrackerScreen}
                        options={{
                            title: 'Expense Tracker',
                            tabBarButton: (props) => null
                        }}
                    />
                    <BottomTabs.Screen
                        name="PartyOrganizerScreen"
                        component={PartyOrganizerScreen}
                        options={{
                            title: 'Party Organizer',
                            tabBarButton: (props) => null
                        }}
                    />
                    <BottomTabs.Screen
                        name="SettingsScreen"
                        component={SettingsStack}
                        options={{
                            title: 'Settings',
                            tabBarButton: (props) => null
                        }}
                    />
                </BottomTabs.Group>

            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}