import React from 'react'
 import { createStackNavigator, HeaderStyleInterpolators} from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from './screens/Home'
import MeetingRoom from './screens/MeetingRoom';

function Navigation() {
    const Stack = createStackNavigator();

        return (
        <NavigationContainer>
            <Stack.Navigator intialRouteName={Home}>
                <Stack.Screen 
                    name="Home"
                    component={Home}
                    option={{
                        headerShown: false
                     }}
                />
                <Stack.Screen
                name="Room"
                component={MeetingRoom}
                option={{
                    tittle: 'Meeting Room',
                    headerstle: {
                        backgroundColor: "#icicic",
                        headerTintColor: "white"
                    }
                }}
                />

            </Stack.Navigator>
        </NavigationContainer>
        
        )
   
}

export default Navigation
