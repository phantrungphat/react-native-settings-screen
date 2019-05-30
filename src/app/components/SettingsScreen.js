import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { itemStyles, styles, GlobalStyle } from './SettingsStyles';
import { SpaceItem, AccountItem, DisclosureItem, SwitchItem } from './items';
import NavBarTitle, { SeparatorLine } from './NavBarTitle';

class SettingsItemContainer extends Component {

    renderItem(item) {
        switch (item.type) {
            case 'account':
                return <AccountItem style={itemStyles.itemContainer} item={item} />
            case 'switch':
                return <SwitchItem style={itemStyles.itemContainer} item={item} />
            case 'disclosure':  
                return <DisclosureItem style={itemStyles.itemContainer} item={item} />
            case 'space':
                return <SpaceItem style={itemStyles.itemContainer} item={item}/>
            default:
                return <Text>Unexpected item type</Text>
        }
    }

    render()  {
        return (
            <View>
                {this.renderItem(this.props.item)}
            </View>
        );
    }
};

export default class SettingsScreen extends Component {

    state = {
        items: [
            {type: 'space', height: 35, isTop: true},
            {type: 'account', height: 80, title: 'Stanislau Baranouski', subtitle: 'Apple ID, iCloud, iTunes & App Store', avatarUrl: 'https://i.ibb.co/SwdrRjG/Screen-Shot-2019-05-30-at-16-59-01.png'},
            {type: 'space', height: 36},
            {type: 'switch', title:'Airplane Mode'},
            {type: 'disclosure', title:'Wi-Fi', subtitle: 'Oozou'},
            {type: 'disclosure', title:'Bluetooth', subtitle: 'On'},
            {type: 'disclosure', title: 'Mobile Data'},
            {type: 'disclosure', title: 'Personal Hotspot', subtitle: 'Off'},
            {type: 'disclosure', title: 'VPN', subtitle: 'Not Connected'},
            {type: 'space', height: 36},
            {type: 'disclosure', title: 'Notifications'},
            {type: 'disclosure', title: 'Sound & Haptics'},
            {type: 'disclosure', title: 'Do Not Disturb'},
            {type: 'disclosure', title: 'Screen Time'},
        ]
    }

    renderItem = (item) => {
        switch (item.type) {
            case 'space':
                if (item.isTop) {
                    return (
                        <View>
                        <SettingsItemContainer item={item}/>
                        <SeparatorLine />
                        </View>
                    )
                } else {
                    return (
                        <View>
                        <SeparatorLine />
                        <SettingsItemContainer item={item}/>
                        <SeparatorLine />
                        </View>
                    )
                }
            default:
                return <SettingsItemContainer item={item}/>
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <NavBarTitle />
                <FlatList
                data={this.state.items}
                showsVerticalScrollIndicator={true}
                renderItem={(item) => this.renderItem(item.item)}
                keyExtractor={(item, index) => index.toString()}
                />
            </View>
        )
    }
};