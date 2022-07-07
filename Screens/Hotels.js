import React from 'react'
import { StatusBar } from 'expo-status-bar'
import FruitsCard from '../Components/FruitsCard'
import { getFruits } from '../Data/fruitCartData'
import { useState,useEffect } from 'react'


import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity
    ,Alert,TextInput ,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart,Paypal,Confirmation_icon,Increment,Decrement,Cash

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
  import { Feather,Ionicons ,Entypo ,MaterialCommunityIcons,AntDesign,MaterialIcons} from '@expo/vector-icons'; 
import { color } from 'react-native-elements/dist/helpers'

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

const Hotels = ({navigation}) => {
    const[Confrimed,setconfirmed]=useState(false);
  return (

    <ScrollView style={{ ...styles.container }}>

      <StatusBar auto />
   <NativeBaseProvider>
      <Header containerStyle={{  borderWidth:0 ,
      
     height:99
    
    }}


     backgroundColor={'#700B97'}
      
     leftComponent={
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.goBack()} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
            </TouchableOpacity>

     }

     centerComponent={


      <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-4%",marginLeft:"2%"}}>
Hotels
</Text>
     }
  
     
    
     
/>
<View style={{flex:1}}>
<VStack  style={{width:width*0.9}}   mx='auto' mt='5%' paddingBottom='5%' >
         <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Hotelcheckin')}>     
               <VStack  >
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%',color:'#9CA3AF'}} >
                   Check in and Check out 
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='20/10/2021 - 21/10/2021'
                  placeholderTextColor='#9CA3Af'
                  mt='4%'
                  
                />


               </VStack>
               </TouchableOpacity>
               <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Hotelcart')}>     
               <VStack  >
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%',color:'#9CA3AF'}} >
                Select Country
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:12,}}
                  placeholder='Jordan'
                  placeholderTextColor='#9CA3Af'
                  mt='4%'
                  InputLeftElement={<Image
                  
                   source={require("../Images/uae.png")}
                     style={{width:25,height:17.3}}
                     ml='2%'
                     alt="description of image"

                  />}
                  InputRightElement={


                    <MaterialIcons name="navigate-next" size={24} color="#B9BDC5"
                     style={{marginRight:"4%"}}
                    
                    />
                  }
                  
                />


                  
                
                  

            </VStack>
               </TouchableOpacity>
               <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('City')}> 
            <VStack  >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%',color:'#9CA3AF'}} >
                  Select City
                  </Text>
                      
                  <Input
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:12,}}
                    placeholder='Amman'
                    placeholderTextColor='#9CA3Af'
                    mt='4%'
                    
                    InputRightElement={
  
  
                      <MaterialIcons name="navigate-next" size={24} color="#B9BDC5"
                       style={{marginRight:"4%"}}
                      
                      />
                    }
                    
                  />
  
  
                    
                  
                    
  
              </VStack>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Hotel_name')}>    
              <VStack  >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%',color:'#9CA3AF'}} >
                  Select Hotel
                  </Text>
                      
                  <Input
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:12,}}
                    placeholder='Hotel Name'
                    placeholderTextColor='#9CA3Af'
                    mt='4%'
                    
                    InputRightElement={
  
  
                      <MaterialIcons name="navigate-next" size={24} color="#B9BDC5"
                       style={{marginRight:"4%"}}
                      
                      />
                    }
                    
                  />
  
  
                    
                  
                    
  
              </VStack>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Rooms')}>   
              <VStack  >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%',color:'#9CA3AF'}} >
                  Select Room
                  </Text>
                      
                  <Input
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:12,}}
                    placeholder='Deluxe King Room with City View'
                    placeholderTextColor='#9CA3Af'
                    mt='4%'
                    
                    InputRightElement={
  
  
                      <MaterialIcons name="navigate-next" size={24} color="#B9BDC5"
                       style={{marginRight:"4%"}}
                      
                      />
                    }
                    
                  />
  
  
                    
                  
                    
  
              </VStack>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Meals')}>   
              <VStack  >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%',color:'#9CA3AF'}} >
                  Select Meals
                  </Text>
                      
                  <Input
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:12,}}
                    placeholder='Breakfast'
                    placeholderTextColor='#9CA3Af'
                    mt='4%'
                    
                    InputRightElement={
  
  
                      <MaterialIcons name="navigate-next" size={24} color="#B9BDC5"
                       style={{marginRight:"4%"}}
                      
                      />
                    }
                    
                  />
  
  
                    
                  
                    
  
              </VStack>
            </TouchableOpacity>
              <VStack  >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%',color:'#9CA3AF'}} >
                  Description
                  </Text>
                      
                  <TextArea
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:12,height:124}}
                    placeholder='Description'
                    placeholderTextColor='#9CA3Af'
                    mt='4%'
                    
                    
                    
                    
                    
                  />
  
  
                    
                  
                    
  
              </VStack>
                 
              <TouchableOpacity activeOpacity={1}   onPress={()=>{setconfirmed(true)}} >
<LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn, width:width*0.8,marginLeft:"auto",marginRight:"auto" }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>
                          Send </Text>
                    </LinearGradient>
                    </TouchableOpacity>

                
               
               
               
              
            </VStack>

</View>
<Modal isVisible={Confrimed} 
         
         avoidKeyboard={false}
         onBackButtonPress=  { () =>setconfirmed(false)}
         style={{marginTop:"10%" , marginLeft:"auto",marginRight:"auto"}}
       >
           
          <VStack style={styles.modalContentconfrimed}   >
                 
                 <VStack mx='auto' mt='-30%'>
                 <Confirmation_icon/>
                 </VStack>
                 <VStack mx='auto'>
    <Text style={{fontFamily:'arabicRegular',fontSize:24,color:"#374151", marginLeft:"auto"
    ,marginRight:"auto" }}>
 Order Send
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#6B7280", marginLeft:"auto"
    ,marginRight:"auto" }}>
 we will talk to you later
</Text>
 
          <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('Dashboard'),setconfirmed(false)}} style={{
              
            }}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn ,  }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}> Go To Home  </Text>
                    </LinearGradient>
                    </TouchableOpacity>
         
         
  
  
                 </VStack>
   </VStack>
       </Modal>
</NativeBaseProvider> 
</ScrollView>

 )
}

export default Hotels
const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f6f6f6",
      flex: 1,
      paddingBottom:"5%"
    },
    cardContainer: {
      padding: 20,
      margin: 10,
      backgroundColor: '#fff',
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,
  
      elevation: 3,
  
    },
    quantityContainer: {
      flexDirection: "row",
      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#979797'
    },
    totalContainer: {
      position: "absolute",
      bottom: 0,
      zIndex: 2,
      height: 120,
      width: "100%",
      backgroundColor: "#FF9D52",
      justifyContent: "center",
      alignItems: "baseline",
      flexDirection: 'row',
      paddingTop: 10
    },
    decrementContainer: {
      borderRightWidth: 1,
      borderColor: '#979797',
      alignItems: 'center',
      justifyContent: "center",
      height: 25,
      width: 25
    },
    incrementContainer: {
      borderLeftWidth: 1,
      borderColor: '#979797',
      alignItems: 'center',
      justifyContent: "center",
      height: 25,
      width: 25
    },
    cartQuantity: {
      justifyContent: "center",
      alignItems: "center",
      width: 40
    },
    createBtn: {
    
      height: 49,
      borderRadius: 10,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      
      marginTop:'4%',
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
  height:343,
  marginLeft:"auto",
  marginRight:"auto",
  width:343,
  
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