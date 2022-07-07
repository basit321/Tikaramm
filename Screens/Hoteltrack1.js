import React from 'react'
import { StatusBar } from 'expo-status-bar'
import FruitsCard from '../Components/FruitsCard'
import { getFruits } from '../Data/fruitCartData'
import { useState,useEffect } from 'react'
import { Booking } from '../Components/Cards'


import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert
,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart,Paypal,Confirmation_iconLive_location,Map_point,Map_nav,
  Hotels

} from '../Components/Icons';
import { Visa,Mastercard,Apple} from '../Components/Images';

import {
    Box,
    FlatList,
    Image,
    HStack,
    VStack,
    Center,
    NativeBaseProvider,

    ArrowBackIcon,
    Button,
    Radio,
    Select,
    CheckIcon,
    Link,
    
  
    Heading,
    Input,
    Form,
    FormControl,
    Item,
    Label,
    ArrowDownIcon,
    TextArea
  

  } from "native-base"
  import Modal from 'react-native-modal'; 
  import {Header} from "react-native-elements"
  import { Feather,Ionicons ,Entypo ,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons'; 
import { Navigation } from 'react-native-navigation'
import { BackgroundImage } from 'react-native-elements/dist/config'

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

const Hoteltrack1 = ({navigation}) => {
  
  return (
    <ScrollView style={{

        backgroundColor: 'white',
        flex:1,
        
        
        borderRadius: 0,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        
        
        
                   }}>
                    <NativeBaseProvider>
        
                     <View style={{backgroundColor:"#fff",height:130,}}>
                    <HStack  width='90%' mx='auto' mt='20%'>
                    <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.goBack()}} >
                    <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
                    </TouchableOpacity>
                    <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
        Hotel Booking
        </Text>
                      </HStack>
                      
                    </View>
                    <View style={{backgroundColor:"#F6F6F6",flex:1}}>
                       <VStack mt='5%' mx='auto'>
                       <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Hoteltrack2')}>
                          <ImageBackground
                           source={require('../Images/Rectangle.png')}
                           style={{width:335,height:169,marginLeft:"auto",marginRight:"auto"}}
                           alt="description of image"
                          > 
                            <VStack mx='auto' my='auto'>
                           <Hotels style={{marginLeft:"auto",marginRight:"auto"}}/>
                           <Text style={{fontFamily:'arabicMedium',fontSize:18,color:"#fff", marginTop:"2%",marginLeft:"2%"}}>
                Secretions have been sent. Please{'\n    '}select one of the reservations
        </Text> 
        
                            </VStack>
        
                          </ImageBackground>
                          </TouchableOpacity>
                          <Box style={{height:102,width:335,borderRadius:15}} bgColor='white' borderWidth='1' mt='5%'  
borderColor='gray.50' shadow='2' mx='auto'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Image source={require('../Images/Hotel.png')}
style={{width:72,height:72}}
alt="des"
/>
<VStack ml='4%'>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
 Hotel Name
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#9E9E9E",}}>
  Amman-Jordan
</Text>


</VStack>


</HStack>
</Box>
        <Box style={{height:256,width:335,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'  
         shadow='2' mt='5%' mx='auto'
          
        >  
           
        
            <View  style={{flex:1,borderBottomWidth:1,borderColor:"#E1E1E1"}}>
               <VStack width='90%' mx='auto' mt='10%'>
               <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Check in and Check out

</Text>
        
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
20/10/2021 - 21/10/2021

</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Room

</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Deluxe King Room with City View

</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Select Meals

</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Breakfast

</Text>





               </VStack>
            </View>
            <View style={{flex:0.4,justifyContent:"center"}}>
              
            <VStack justifyContent='space-between' width='90%' mx='auto'>
            <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Description

</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Description

</Text>
        
                </VStack>
            </View>
                
        
        
        
        
            </Box>

                              <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"black"  ,marginLeft:"5%"
}}>
Quotes

</Text>    

<Booking/>


           
                       </VStack>
                    </View>

                    </NativeBaseProvider>
            </ScrollView>
  )
}

export default Hoteltrack1
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f6f6f6",
        minHeight: height,
    },
    searchContainer: {
        backgroundColor: '#00CBA4',
        paddingBottom: 15,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 10
    },
    searchSubContainer: {
        marginVertical: 5,
        backgroundColor: '#fff',
        marginLeft: 5,
        marginRight: 20,
        borderRadius: 5,
        paddingLeft: 10,
        alignItems: 'center',
        flexDirection: "row"
    },
    searchInput: {
        height: 40,
        width: "90%",
        paddingLeft: 5
    },
    cardContainer: {
        padding: 10,
        height:613,
    },
    categoryContainer: {
        flexDirection: "row",
        backgroundColor: '#fff',
        padding: 10
    },
    active: {
        borderWidth: 1,
        borderColor: "#FA9755",
        width: 100,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 10
    },
    nActive: {
        backgroundColor: "#E4E4E4",
        width: 100,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 10
    },
    totalContainer: {
      bottom:0,
    
        height: 90,
      
        
        width: "100%",
        backgroundColor: "#00CBA4",
        justifyContent: "center",
        alignItems: "baseline",
        flexDirection: 'row',
        paddingTop: 10
    },
    createBtn: {
  
        height: 49,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingBottom: 4
      },  
      loginBtn: {
        
        height: 49,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width:256,
        marginLeft:"auto",
        marginRight:"auto",
     
      
        borderWidth: 1,
        borderColor: '#C40000',
        paddingBottom: 4
      },    
      slidemodelcontent:{
        backgroundColor: 'white',
        flex:1,
        padding: 22,
       
        borderRadius: 0,
        borderColor: 'rgba(0, 0, 0, 0.1)',
      
      
      
      
      },  
      bottomModal: {
        justifyContent: 'flex-end',
        margin: 0,
        position:"absolute",
        width: width,
      height: height  
      
      
      },
      modalContentlogin: {
        backgroundColor: 'white',
      
        
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height:222,
        borderRadius:20
        
      },
      modalContentchnagepass: {
        backgroundColor: 'white',
      
        
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height:412,
        position:"absolute",
        width:343,
        
        borderRadius:20
        
      },
      logoutbtn: {
        
        height: 49,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingBottom: 4,
        width:129,
      },
      Btn: {
          
        height: 49,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingBottom: 4,
        marginTop:"10%",
      
        marginLeft:"auto" ,
        marginRight:"auto",
        width:256
        
      },
          
      modalContentlanguage: {
        backgroundColor: 'white',
      
        
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        height:290,
        borderRadius:20
        
      },   
      slidemodel:{
    
      
        margin: 0,
        
        width: width,
    height: height  
    
    
  },
  modalContentconfrimed: {
    backgroundColor: 'white',
  
    
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height:390,
   
    width:343,
    marginLeft:'auto',
    marginRight:"auto",
    
    borderRadius:20
    
  },
  Btn1: {
          
    height: 49,
    borderRadius: 10,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 4,
  
  
    marginLeft:"auto" ,
    marginRight:"auto",
    width:256,
    marginTop:"5%",
    
  },
            
            
            
})