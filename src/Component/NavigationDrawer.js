import React from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

export default function NavigationDrawer(props) {
    const toggleDrawer = () => {
        props.navigationProps.toggleDrawer();
    };

    return (
        <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.navigator} onPress={() => toggleDrawer()}>
                <Icon
                    name='bars'
                    type='font-awesome'
                    color='white'
                    style={styles.navigatorButton}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    navigator: {
        marginTop: 10,
        marginLeft: 20
    },
    navigatorButton: {
        padding: 10,
        borderRadius: 8,
    },
});