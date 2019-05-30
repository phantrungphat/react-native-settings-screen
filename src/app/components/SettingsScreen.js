import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { itemStyles, styles } from './SettingsStyles';
import { SpaceItem, AccountItem, DisclosureItem, SwitchItem } from './items';
import NavBarTitle from './NavBarTitle';

class SettingsItemContainer extends Component {

    renderItem(item) {
        switch (item.type) {
            case 'account':
                return <AccountItem item={item} />
            case 'switch':
                return <SwitchItem item={item} />
            case 'disclosure':  
                return <DisclosureItem item={item} />
            case 'space':
                return <SpaceItem style={{height: 150}} item={item} />
            default:
                return <Text>Unexpected item type</Text>
        }
    }

    render() {
        return (
            <View style={itemStyles.itemContainer}>
                {this.renderItem(this.props.item)}
            </View>
        );
    }
};

export default class SettingsScreen extends Component {

    state = {
        items: [
            {type: 'space', height: 50},
            {type: 'account', title: 'Stanislau Baranouski', subtitle: 'Apple ID, iCloud, iTunes & App Store'},
            {type: 'space', height: 120},
            {type: 'switch', title:'Airplane Mode'},
            {type: 'disclosure', title:'Wi-Fi', subtitle: 'Oozou'},
            {type: 'disclosure', title:'Bluetooth', subtitle: 'On'},
            {type: 'disclosure', title: 'Mobile Data'},
            {type: 'disclosure', title: 'Personal Hotspot', subtitle: 'Off'},
            {type: 'disclosure', title: 'VPN', subtitle: 'Not Connected'},
            {type: 'space', height: 20},
            {type: 'disclosure', title: 'Notifications'},
            {type: 'disclosure', title: 'Sound & Haptics'},
            {type: 'disclosure', title: 'Do Not Disturb'},
            {type: 'disclosure', title: 'Screen Time'},
        ]
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBarTitle />
                <FlatList
                data={this.state.items}
                showsVerticalScrollIndicator={true}
                renderItem={({item}) => 
                    <SettingsItemContainer item={item}/>
                }
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
};