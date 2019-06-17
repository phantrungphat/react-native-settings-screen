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
            case 'separator':
                return <SeparatorLine item={item} />
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

    constructor(props) {
        super(props)
        this.toggleAirplaneMode = this.toggleAirplaneMode.bind(this);
        this.state = {
            items: [
                {type: 'space', height: 35, isTop: false},
                {type: 'separator'},
                {type: 'account', height: 80, title: 'Stanislau Baranouski', subtitle: 'Apple ID, iCloud, iTunes & App Store', avatarUrl: 'https://i.ibb.co/SwdrRjG/Screen-Shot-2019-05-30-at-16-59-01.png'},
                {type: 'separator'},
                {type: 'space', height: 36},
                {type: 'separator'},
                {type: 'switch', title:'Airplane Mode', isOn:false, toggleHandler:(this.toggleAirplaneMode), icon: require('../assets/icons/icon-airplane-mode.svg')},
                {type: 'separator', isIcon:'true'},
                {type: 'disclosure', title:'Wi-Fi', rightText: 'Oozou', icon: require('../assets/icons/icon-wifi.svg')},
                {type: 'separator', isIcon:'true'},
                {type: 'disclosure', title:'Bluetooth', rightText: 'On', icon: require('../assets/icons/icon-bluetooth.png')},
                {type: 'separator', isIcon:'true'},
                {type: 'disclosure', title: 'Mobile Data', icon: require('../assets/icons/icon-mobiledata.svg')},
                {type: 'separator', isIcon:'true'},
                {type: 'disclosure', title: 'Personal Hotspot', rightText: 'Off', icon: require('../assets/icons/icon-hotspot.svg')},
                {type: 'separator', isIcon:'true'},
                {type: 'disclosure', title: 'VPN', rightText: 'Not Connected', icon: require('../assets/icons/icon-vpn.svg')},
                {type: 'separator'},
                {type: 'space', height: 36},
                {type: 'separator'},
                {type: 'disclosure', title: 'Notifications', icon: require('../assets/icons/icon-notifications.svg')},
                {type: 'separator', isIcon:'true'},
                {type: 'disclosure', title: 'Control Center', icon: require('../assets/icons/icon-control-center.svg')},
                {type: 'separator', isIcon:'true'},
                {type: 'disclosure', title: 'Do Not Disturb', icon: require('../assets/icons/icon-dnd.svg')},
                {type: 'separator'},
                {type: 'space', height: 35},
            ],
        };
    }

    toggleAirplaneMode = (isOn, item) => {
        const newItems = [...this.state.items];
        item.isOn = isOn;
        newItems[item] = item;
        this.setState({items: newItems});
    };

    renderItem = (item) => {
        return (
            <View style={{backgroundColor: GlobalStyle.colors.white}}>
            <SettingsItemContainer item={item}/>
            </View>
        )
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