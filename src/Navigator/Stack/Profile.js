import React from 'react';
import { Image, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../../Screen/Profile';
import NavigationDrawer from '../../Component/NavigationDrawer';

const Stack = createStackNavigator();

export default function ProfileStack({ navigation }) {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerLeft: () =>
                        <NavigationDrawer
                            navigationProps={navigation}
                        />,
                    headerStyle: {
                        backgroundColor: '#161616', //Set Header color
                    },
                    headerTitle: () =>
                        <View style={{
                            justifyContent: 'flex-end',
                            alignItems: 'flex-end',
                        }}>
                            <Image
                                source={require('../../Assets/logo.png')}
                                style={{ width: "60%", resizeMode: 'contain' }}
                            />
                        </View>
                    ,
                    headerTintColor: '#fff', //Set Header text color
                }}
            />
        </Stack.Navigator>
    );
}