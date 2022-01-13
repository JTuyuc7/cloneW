import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableWithoutFeedback, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('screen');
const Chat = ({user}) => {
    //console.log(user, 'from Chat')
    return (  
        <>
            <SafeAreaView style={ styles.mainC}>
                <TouchableWithoutFeedback
                    onPress={ () => console.log('chat opened', user.name)}
                    onLongPress={ () => console.log('more options for', user.name)}
                >
                    <View style={styles.secondC}>
                        <View style={styles.imgC}>
                            <TouchableWithoutFeedback>
                                <Text>Imagen?</Text>
                            </TouchableWithoutFeedback>
                        </View>

                        <View style={styles.contentC}>
                            <View style={styles.infoC}>
                                <Text>numero</Text>
                                <Text>Fecha</Text>
                            </View>
                            <View>
                                <Text>mensaje</Text>
                            </View>
                        </View>
                    </View>

                </TouchableWithoutFeedback>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    mainC: {
        //backgroundColor: 'gray',
        paddingHorizontal: 10,
        height: 45,
    },
    secondC: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    imgC: {
        backgroundColor: 'gray',
        width: width * 0.12,
    },
    contentC: {
        backgroundColor: 'pink',
        width: width * 0.82
    },
    infoC: {
        flexDirection:'row',
        justifyContent: 'space-between',
    }
})

export default Chat;