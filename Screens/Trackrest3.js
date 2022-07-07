import React from 'react'
import { StatusBar } from 'expo-status-bar'
import FruitsCard from '../Components/FruitsCard'
import { getFruits } from '../Data/fruitCartData'
import { useState,useEffect } from 'react'
import { Cards,Review,Review1 } from '../Components/Cards'


import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert
,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart,Paypal,Confirmation_icon

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

const Trackrest3 = ({navigation}) => {
    const[Cancelorder,setcancelorder]=useState(false);
  return (
    < ScrollView style={{

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
         Restaurant Order
        </Text>
                      </HStack>
                      
                    </View>
                    <View style={{backgroundColor:"#F6F6F6",flex:1}}>
                       <VStack mt='5%' mx='auto' pb='2%'>
                       <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Dashboard')}>
                          <ImageBackground
                           source={require('../Images/Rectangle.png')}
                           style={{width:335,height:169,marginLeft:'auto',marginRight:"auto"}}
                           alt="description of image"
                          > 
                            <VStack mx='auto' my='auto'>
                           <Image
                            source={require('../Images/package1.png')}
                            style={{width:76,height:76,marginLeft:"auto",marginRight:"auto"}}
                            alt="description of image"
                           
                           />
                <Text style={{fontFamily:'arabicMedium',fontSize:18,color:"#fff", marginTop:"2%",marginLeft:"2%"}}>
                The order has been delivered
        </Text> 
        
                            </VStack>
        
                          </ImageBackground>
                         </TouchableOpacity>
                           <VStack mx='auto'>
                              <Review/> 
                              <Review1/>
                          <Box style={{height:86,width:335,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'  
         shadow='2' mt='5%'
         
          mx='auto'
        >
         
        <HStack width='90%' mx='auto' >
        
         <HStack my='auto' >
         <Mark style={{width:25,height:25}}/>
           
         </HStack>
        
        <VStack  ml='5%'>
        
        <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151"}}>
         Home
        </Text>
        
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#9E9E9E",marginTop:'-5%'}}>
         Khalda-Amman-jordan
        </Text>
        
        </VStack>
        
        </HStack>
        
        
        </Box>
        <Box style={{height:256,width:335,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'  
         shadow='2' mt='5%' mx='auto'
          
        >  
        
        
            <View  style={{flex:1,borderBottomWidth:1,borderColor:"#E1E1E1"}}>
              <VStack width='90%' mx='auto' mt='10%' space='18%'>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", marginTop:"-5%",}}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", marginTop:"-5%",}}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", marginTop:"-5%",}}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", marginTop:"-5%",}}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", marginTop:"-5%",}}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", marginTop:"-5%",}}>
         2.30JD 
        </Text> 
                </HStack>
                <HStack justifyContent='space-between'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", marginTop:"-5%",}}>
         Food name 
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", marginTop:"-5%",}}>
         2.30JD 
        </Text> 
                </HStack>
        
              </VStack>
        
            </View>
            <View style={{flex:0.35,justifyContent:"center"}}>
              
            <HStack justifyContent='space-between' width='90%' mx='auto'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", marginTop:"-5%",}}>
         Total
        </Text>
        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#00A27F", marginTop:"-5%",}}>
         9.30JD 
        </Text> 
                </HStack>
            </View>
                
        
        
        
        
            </Box>
            </VStack>
                   
                       </VStack>
                    </View>

                    </NativeBaseProvider>
            
        
        </ScrollView>
  )
}

export default Trackrest3
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