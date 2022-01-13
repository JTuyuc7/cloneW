import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Global from '../../styles/GStyles';

const { height, width } = Dimensions.get('screen');
const Chat = ({user}) => {
    //console.log(user, 'from Chat')

    let contactInfo = '';
    if( user.name === ''){
        contactInfo = user.phone
    }else {
        contactInfo = user.name
    }
    return (  
        <>
            <SafeAreaView style={ styles.mainC}>
                <TouchableOpacity
                    onPress={ () => console.log('chat opened', user.name)}
                    onLongPress={ () => console.log('more options for', user.name)}
                >
                    <View style={styles.secondC}>
                        <View style={styles.imgC}>
                            <TouchableWithoutFeedback
                                onPress={ () => console.log('modal for image')}
                            >
                                <Image
                                    style={{ height: 45, width: width * 0.11, borderRadius: 45}}
                                    source={ require('../../helpers/imgs/user.jpg')}
                                />
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.contentC}>
                            <View style={styles.infoC}>
                                <Text style={{ fontSize: 17, color: Global.textName, fontWeight: 'bold'}}>{contactInfo.toUpperCase() }</Text>
                                <Text style={{ color: Global.textTime}}>{user.lastSeen}</Text>
                            </View>
                            <View style={ styles.textC}>
                                <Text style={{ marginRight: 3}}>{ user.saw ? <Icon name='check-double' size={10} color={Global.saw} /> : <Icon name='check-double' size={10} color={Global.delivered} /> }</Text>
                                <Text style={{ color: Global.textMessage}}>{user.lastMessage}</Text>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    mainC: {
        //backgroundColor: 'blue',
        paddingHorizontal: 10,
    },
    secondC: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    imgC: {
        //backgroundColor: 'gray',
        width: width * 0.11,
        borderRadius: 45,
        height: 45
    },
    contentC: {
        //backgroundColor: 'pink',
        width: width * 0.82
    },
    infoC: {
        flexDirection:'row',
        justifyContent: 'space-between',
    },
    textC: {
        flexDirection: 'row',
        alignItems: 'center',
    }
})

export default Chat;