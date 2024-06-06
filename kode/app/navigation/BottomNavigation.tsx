
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ExploreScreen from '../screens/ExploreScreen';
import RecipeBookScreen from '../screens/RecipeBookScreen';
import ConnectScreen from '../screens/ConnectScreen';
import { Text, View } from 'react-native';
import { LogoutButton } from '../components/LogoutButton';
import Icon from '../components/Icon';
import colors from '../ui/colors';

export const BottomNavigation: React.FC = () => {

    const BottomTabs = createBottomTabNavigator();

    return(
        <NavigationContainer>
            <BottomTabs.Navigator
                initialRouteName='Today'
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
                    tabBarStyle: {
                        backgroundColor: colors.primaryDarker
                    }
                })}>
                <BottomTabs.Screen
                    name="Today"
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
                        tabBarIcon: ({ color, focused }) => (<Icon name={'explore'} active={focused} />),
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
                        tabBarIcon: ({ color, focused }) => (<Icon name={'connect'} active={focused} />),
                        title: 'Connect',
                    }}
                />
            </BottomTabs.Navigator>
        </NavigationContainer>
    )
}