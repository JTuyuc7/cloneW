import React from 'react';
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Chat from './Chat';
import users from '../../helpers/Data';
import Global from '../../styles/GStyles';

const Chats = () => {
    const renderItem = ({item}) => {
        return (
            <>
                <View style={{ height: 65, justifyContent: 'center', marginVertical: 2}}>
                    <Chat
                        user={item}
                    />
                </View>
            </>
        )
    }
    return (  
        <>
            <SafeAreaView style={{ backgroundColor: Global.darkBackground}}>
                <View style={{ marginTop: 5, marginBottom: 10}}>
                    <FlatList
                        data={users}
                        keyExtractor={ data => data.id}
                        renderItem={renderItem}
                    />
                </View>
                <View style={{ position: 'absolute', backgroundColor: 'green', bottom: 25, right: 20, height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="chat" size={25} color="white" />
                </View>
            </SafeAreaView>
        </>
    );
}

export default Chats;