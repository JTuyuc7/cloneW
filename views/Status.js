import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Global from '../styles/GStyles';

const { height, width } = Dimensions.get('screen')

const Status = () => {
    return (  
        <>
            <SafeAreaView style={styles.mainC}>
                <View style={styles.secondC}>
                    <View style={styles.myStatus}>
                        <TouchableOpacity
                            onPress={ () => console.log('add Status')}
                        >
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: height * 0.065}}>
                                <View style={{ width: width * 0.15, flexDirection: 'column', justifyContent: 'center' }}>
                                    <Image
                                        style={{ height: height * 0.060, width: width * 0.12, borderRadius: 50}}
                                        source={require('../helpers/imgs/myProfile.jpg')}
                                    />
                                    <Icon
                                        name='pluscircle'
                                        size={30}
                                        color={Global.status}
                                        style={{ position: 'absolute', marginLeft: 25, top: 25}}
                                    />
                                </View>
                                <View style={{ width: width * 0.77}}>
                                    <Text style={styles.textStatus}>My status</Text>
                                    <Text style={styles.statusU}>Tap to add status update</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* temp data for active status which are not seen yet */}
                    <View style={{ marginTop: 25}}>
                        <Text style={{ marginBottom: 20, color: Global.textMessage}}>Recent updates</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: height * 0.070, alignItems: 'center'}}>
                            <View style={{ width: width * 0.15, flexDirection: 'column', justifyContent: 'center' }}>
                                <Image
                                    style={{ height: height * 0.060, width: width * 0.12, borderRadius: 50}}
                                    source={require('../helpers/imgs/myProfile.jpg')}
                                />
                            </View>

                            <View style={{ width: width * 0.77}}>
                                <Text style={{ color: Global.textMessage, fontWeight: 'bold', fontSize: 17}}>Frida Sarai Larios Villatoro</Text>

                                <Text style={{ color: Global.textMessage}}>Just now</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 25}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: height * 0.070, alignItems: 'center'}}>
                            <View style={{ width: width * 0.15, flexDirection: 'column', justifyContent: 'center' }}>
                                <Image
                                    style={{ height: height * 0.060, width: width * 0.12, borderRadius: 50}}
                                    source={require('../helpers/imgs/myProfile.jpg')}
                                />
                            </View>

                            <View style={{ width: width * 0.77}}>
                                <Text style={{ color: Global.textMessage, fontWeight: 'bold', fontSize: 17}}>Cristian Hernandez</Text>

                                <Text style={{ color: Global.textMessage}}>Today, 3:45 PM</Text>
                            </View>
                        </View>
                    </View>
                    {/* Viewed Updates */}
                    <View style={{ marginTop: 25}}>
                        <Text style={{ marginBottom: 20, color: Global.textMessage}}>Viewed updates</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: height * 0.070, alignItems: 'center'}}>
                            <View style={{ width: width * 0.15, flexDirection: 'column', justifyContent: 'center' }}>
                                <Image
                                    style={{ height: height * 0.060, width: width * 0.12, borderRadius: 50}}
                                    source={require('../helpers/imgs/myProfile.jpg')}
                                />
                            </View>

                            <View style={{ width: width * 0.77}}>
                                <Text style={{ color: Global.textMessage, fontWeight: 'bold', fontSize: 17}}>Frida Sarai Larios Villatoro</Text>

                                <Text style={{ color: Global.textMessage}}>Yeterday, 10:05 PM</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ marginTop: 25}}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: height * 0.070, alignItems: 'center'}}>
                            <View style={{ width: width * 0.15, flexDirection: 'column', justifyContent: 'center' }}>
                                <Image
                                    style={{ height: height * 0.060, width: width * 0.12, borderRadius: 50}}
                                    source={require('../helpers/imgs/myProfile.jpg')}
                                />
                            </View>

                            <View style={{ width: width * 0.77}}>
                                <Text style={{ color: Global.textMessage, fontWeight: 'bold', fontSize: 17}}>Adele Adkins</Text>

                                <Text style={{ color: Global.textMessage}}>Today, 3:45 PM</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    mainC: {
        flex: 1,
        backgroundColor: Global.darkBackground
    },
    secondC: {
        flex: 1,
        paddingHorizontal: 10,
        //backgroundColor: 'gray'
    },
    myStatus: {
        marginTop: 10
    },
    textStatus: {
        fontWeight: 'bold',
        fontSize: 17,
        color: Global.textMessage
    },
    statusU: {
        marginTop: 5,
        color: Global.textMessage
    }
})
export default Status;