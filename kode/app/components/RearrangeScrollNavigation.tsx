import React, {useState} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import DraggableFlatList, { ScaleDecorator } from "react-native-draggable-flatlist";
import colors from '../ui/colors';

const NUM_ITEMS = 10;
function getColor(i: number) {
    const multiplier = 255 / (NUM_ITEMS - 1);
    const colorVal = i * multiplier;
    return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
}

type Item = {
    key: string;
    label: string;
    height: number;
    width: number;
    // backgroundColor: string;
};
type ItemType = {
	id: string;
	title: string;
	target: string;
	icon: string;
	size: number;
};

const initialData: Item[] = [...Array(NUM_ITEMS)].map((d, index) => {
    const backgroundColor = getColor(index);
    return {
        key: `item-${index}`,
        label: 't',
        height: 100,
        width: 60 + Math.random() * 40,
    };
});

const ScrollNavigationData:ItemType[] = [
    {
        id: '01',
        title: 'Nutriton Analyzer',
        target: 'NutritionAnalyzerScreen',
        icon: 'wellness',
        size: 18
    },
    {
        id: '02',
        title: 'Meal Planner',
        target: 'MealPlannerScreen',
        icon: 'planner',
        size: 18
    },
    {
        id: '004',
        title: 'Reverse Lookup',
        target: 'ReverseLookupScreen',
        icon: 'reverse',
        size: 18
    },
    {
        id: '005',
        title: 'Grocery Shopper',
        target: 'GroceriesScreen',
        icon: 'cart',
        size: 18
    },
    {
        id: '006',
        title: 'Nutrition Tracker',
        target: 'YourNutrition',
        icon: 'tracker',
        size: 16
    },
    {
        id: '007',
        title: 'Expense Tracker',
        target: 'ExpenseTrackerScreen',
        icon: 'expense',
        size: 18
    },
    {
        id: '008',
        title: 'Party Organizer',
        target: 'PartyOrganizerScreen',
        icon: 'party',
        size: 18
    }
];
  

export const RearrangeScrollNavigation = ({}) => {
    const [data, setData] = useState(ScrollNavigationData);

    const renderItem = ({ item, drag, isActive }) => {
        return (
            <ScaleDecorator>
                <TouchableOpacity
                    onLongPress={drag}
                    disabled={isActive}
                    style={{
                        margin: 10,
                        padding: 10,
                        backgroundColor: colors.gray100
                    }}
                >
                    <Text style={{
                        fontSize: 14,
                    }}>{item.title}</Text>
                </TouchableOpacity>
            </ScaleDecorator>
        );
    };

    return (
        <View>
            <Text style={{margin: 10}}>Press and hold to drag</Text>
            <DraggableFlatList
                data={data}
                onDragEnd={({ data }) => setData(data)}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rowItem: {
      height: 100,
      width: 100,
      alignItems: "center",
      justifyContent: "center",
    },
    text: {
      color: "white",
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
    },
});