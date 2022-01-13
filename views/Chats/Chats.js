import React from 'react';
import { SafeAreaView, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Chat from './Chat';
import users from '../../helpers/Data';

const Chats = () => {
    const renderItem = ({item}) => {
        return (
            <>
                <Chat
                    user={item}
                />
            </>
        )
    }
    return (  
        <>
            <SafeAreaView>
                <View style={{ marginTop: 15}}>
                    <FlatList
                        data={users}
                        keyExtractor={ data => data.id}
                        renderItem={renderItem}
                    />
                </View>
            </SafeAreaView>
        </>
    );
}

export default Chats;