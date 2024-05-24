import React from 'react';
import { View, Text } from 'react-native';
import {useUser} from '@realm/react';

const HomeScreen = ({navigation}) => {
	const user = useUser();
	const currentTime = new Date().toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", });

    const renderTime = (getCurrentTime:number) => {
        let salut = '';
        if( getCurrentTime >= 5 && getCurrentTime <= 12 ) {
            salut = 'Morning';
        } else if( getCurrentTime > 12 && getCurrentTime <= 18 ) {
            salut = 'Afternoon';
        } else if( getCurrentTime > 18 && getCurrentTime <= 21 ) {
            salut = 'Evening';
        } else {
            salut = 'Hi';
        }
        return salut;
    }    

	return(
		<>
			<View>
				<Text>{`${renderTime(parseInt(currentTime))} ${user?.profile.email}`}</Text>
			</View>
		</>
	);
};

export default HomeScreen;
