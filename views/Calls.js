import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, TouchableWithoutFeedback, FlatList, Dimensions, Image, TouchableOpacity } from 'react-native';
import Global from '../styles/GStyles';
import calls from '../helpers/calls';
import Icon from 'react-native-vector-icons/Feather';
import IconPhone from 'react-native-vector-icons/FontAwesome';

const { height, width} = Dimensions.get('screen');

const Calls = () => {

    const renderItem = ({ item }) => {
        let contactInfo = '';
        if( item.name === ''){
            contactInfo = item.phone
        }else {
            contactInfo = item.name
        }

        let iconColor = '';
        if( item.type === 'recived'){
            iconColor = Global.arrowRecived
        }else if ( item.type === 'made'){
            iconColor = Global.arrowRecived
        }else {
            iconColor = Global.arrowMissed
        }

        const getArrow = ( type ) => {
            let arrow = '';
            if( type === 'made'){
                arrow = 'arrow-up-right'
            }else{
                arrow = 'arrow-down-left'
            }
            return arrow;
        }

        return(
            <>
                <TouchableOpacity
                    onPress={() => console.log('See details of the call')}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: height * 0.080, alignItems: 'center', marginTop: 15, paddingHorizontal: 10}}>
                        <View style={{ width: width * 0.15, flexDirection: 'column', justifyContent: 'center' }}>
                            <Image
                                style={{ height: height * 0.060, width: width * 0.12, borderRadius: 50}}
                                source={require('../helpers/imgs/myProfile.jpg')}
                            />
                        </View>

                        <View style={{ width: width * 0.77, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                            <View>
                                <Text style={{ color: Global.textMessage, fontWeight: 'bold', fontSize: 17}}>{contactInfo.toUpperCase()}</Text>

                                <View style={{ flexDirection: 'row'}}>
                                    <Icon name={getArrow(item.type)} size={20} color={iconColor} />
                                    <Text style={{ color: Global.textMessage}}>{item.date.toLocaleString()}</Text>
                                </View>
                            </View>

                            <View>
                                <TouchableWithoutFeedback 
                                    onPress={() => console.log('calling back')}
                                >
                                    <IconPhone name='phone' size={25} color={Global.arrowRecived} />
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </>
        )
    }

    return (  
        <>
            <SafeAreaView style={{ backgroundColor: Global.darkBackground, flex: 1}}>
                    <View >
                        <FlatList
                            data={calls}
                            renderItem={renderItem}
                            keyExtractor={ data => data.id}
                        />
                    </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    
})
export default Calls;


//wsl2 ubunto 
//feders
// inte core(TM) i7 8565U CPY 1.80GHz Mhz