import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Details from "../screens/Details";
import Icon from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs(){
    return(
        <Tab.Navigator 
            initialRouteName="Home"
            screenOptions={{headerShown:false, tabBarStyle:{backgroundColor:'#242A32', borderTopColor:'#0296E5'}}}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon:({size,color}) =>(
                        <Icon name="home" size={size} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarIcon:({size,color}) =>(
                        <Icon name="search" size={size} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
    )    
}



export default function Route(){
    return(
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="HomeScreen" component={Tabs}/>
                <Stack.Screen name="Details" component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}