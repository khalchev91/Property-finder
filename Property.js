'use strict';

import React,{Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    TouchableHighlight,
    FlatList,
    Text,
} from 'react-native';


export default class Property extends Component{


    static navigationOptions = {
        title: 'Details'
    };

    render(){
        const {params} = this.props.navigation.state;
        const item = params.item;
        return(
            <View>
                <Image style={styles.thumb} source={{ uri: item.img_url }}/>
                <Text>
                    {item.title}
                </Text>
            </View>
        );

    };
}

const styles = StyleSheet.create({
    thumb: {
        width: 300,
        height: 300,
        marginRight: 10
    },
});