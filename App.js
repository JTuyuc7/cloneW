import React from 'react';
import { SafeAreaView, View, Text, Stylesheet, TouchableOpacity} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Global from './styles/GStyles';

//Icons
import Icon from 'react-native-vector-icons/EvilIcons';
import DIcon from 'react-native-vector-icons/Entypo';

// Styles
import Global from './styles/GStyles';

//Screens
import Home from './views/Home';
import Calls from './views/Calls';
import Chats from './views/Chats/Chats';
import Status from './views/Status';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const TopNavigator = ( ) => {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: Global.darkMode},
        //tabBarLabelStyle: { color: Global.textDark, fontWeight: 'bold' },
        tabBarIndicatorStyle: { backgroundColor: Global.activeTab},
        tabBarInactiveTintColor: Global.textDark,
        tabBarActiveTintColor: Global.activeTab
      }}
    >
      <Tab.Screen name='Chats' component={Chats} />
      <Tab.Screen name='Status' component={Status}/>
      <Tab.Screen name="calls" component={Calls} />
    </Tab.Navigator>
  )
}

const App = () => {
  return (  
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={ ({ navigation, route}) => ({
              title: 'WhatsApp',
              headerTitleStyle: {
                color: Global.textDark
              },
              headerStyle: {
                backgroundColor: Global.darkMode,
              },
              headerRight: () => {
                return(
                  <View style={ Global.TopBar}>
                    <TouchableOpacity>
                      <Icon name="search" size={35} color={Global.textDark} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <DIcon name="dots-three-vertical" size={25} color={Global.textDark} />
                    </TouchableOpacity>
                  </View>
                )
              }
            })}
            name='home'
            component={TopNavigator}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
//lucia Mayen

export default App;