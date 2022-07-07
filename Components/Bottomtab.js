import React from 'react';
import { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { View, Text, LogBox, ImageBackground,TouchableOpacity } from 'react-native';

import { Button, HStack } from 'native-base'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SimpleLineIcons, Entypo, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();


import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import Home from '../Screens/Home';

import Menu from '../Screens/Menu';
import Order from '../Screens/Order';
import { Bellicon, Shoppingcart } from './Icons';


const Stack = createStackNavigator();
const AppStack = createStackNavigator();
LogBox.ignoreAllLogs();




const BottomTabs = (props, navigation) => {

  // this is where my app navigator can see if modal is open from child's state
  // if modal is open, hide bottom tab

  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: { borderTopRightRadius: 20, borderTopLeftRadius: 20, },
      //  headerShown: false,
      tabBarInactiveTintColor: "#1F2937",
      tabBarActiveTintColor: '#3783A9',
    }} >
      <Tab.Screen name="Home" options={{
        headerStyle: {
          backgroundColor: '#F6F6F6',
          borderBottomWidth: 0,
          shadowColor: "#F6F6F6",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0,
          shadowRadius: 0,

          elevation: 0,
        },
        headerTintColor: "#37B3A9",
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'arabicRegular', fontSize: 24,
        },
        title: 'Tikramm',
        headerLeft: () => (
          <HStack>
            <Bellicon />
            <ImageBackground
              source={require("../Images/circle.png")}
              style={{ width: 15.85, height: 15.85, marginLeft: '-10%' }}
              alt="description of image"
            >
              <Text style={{ fontFamily: 'arabicRegular', fontSize: 10, color: "#fff", textAlign: "center", marginTop: '-15%' }}>
                3
              </Text>

            </ImageBackground>

          </HStack>
        ),
        headerRight: () => (
          <TouchableOpacity activeOpacity={1} onPress={()=>props.navigation.navigate('FruitCart')}>
          <Shoppingcart style={{ marginRight: 10 }} />
          </TouchableOpacity>
        ),

        tabBarIcon: ({ focused }) => (
          <SimpleLineIcons name="home" size={30} color={focused ? '#3783A9' : '#1F2937'} />
        ),


      }}>
        {screenProps => (
          <Home
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}


      </Tab.Screen>
      <Tab.Screen name="orders" options={{
        headerShown:false,
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons name="checkbox-blank" size={30} color={focused ? '#3783A9' : '#1F2937'} />
        ),


      }}


      >
        {screenProps => (
          <Order
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}
      </Tab.Screen>
      <Tab.Screen name="Menu" options={{

        headerShown: false,

        tabBarIcon: ({ focused }) => (
          <Entypo name="menu" size={30} color={focused ? '#3783A9' : '#1F2937'} />
        ),


      }}>
        {screenProps => (
          <AppNavigator
            {...screenProps}
            updateAuthState={props.updateAuthState}
          />
        )}

      </Tab.Screen>


    </Tab.Navigator>

  );



}

const AppNavigator = props => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // this is where my app navigator can see if modal is open from child's state
  // if modal is open, hide bottom tab
  if (modalIsOpen) {
    props.navigation.setOptions({ tabBarStyle: { display: 'none' } });
  } else {
    props.navigation.setOptions({ tabBarStyle: { display: 'flex', borderTopRightRadius: 20, borderTopLeftRadius: 20 } });
  }

  return (
    <AppStack.Navigator initialRouteName="Menu">
      <AppStack.Screen
        name="Menu"
        options={{
          headerShown: false,
        }}>
        {screenprops => (
          <Menu
            {...screenprops}
            setModalIsOpen={setModalIsOpen}
            modalIsOpen={modalIsOpen}
          />
        )}
      </AppStack.Screen>
    </AppStack.Navigator>
  )
}

export default BottomTabs;

