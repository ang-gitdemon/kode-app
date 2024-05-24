
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import RecipeBookScreen from '../screens/RecipeBookScreen';
import ConnectScreen from '../screens/ConnectScreen';
import { Text, View } from 'react-native';

export const BottomNavigation: React.FC = () => {

    const Tabs = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <Tabs.Navigator
                initialRouteName='Today'>
                <Tabs.Screen name="Today" component={ HomeScreen } />
                <Tabs.Screen name="Explore" component={ ExploreScreen } />
                <Tabs.Screen name="RecipeBook" component={ RecipeBookScreen } />
                <Tabs.Screen name="Connect" component={ ConnectScreen } />
            </Tabs.Navigator>
        </NavigationContainer>
    )
}