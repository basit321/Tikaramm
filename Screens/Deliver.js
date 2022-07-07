import React from 'react'
import { StatusBar } from 'expo-status-bar'
import FruitsCard from '../Components/FruitsCard'
import { getFruits } from '../Data/fruitCartData'
import { useState,useEffect } from 'react'


import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity
    ,Alert,TextInput ,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart,Paypal,Confirmation_icon,Increment,Decrement,Cash,
  Weekdays,Mark1,Mark2,PAth,Live_location,Map_point,Map_nav

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

const Delivery = ({navigation}) => {
    const[Fromlocation,setfromlocation]=useState(false);
    const[Tolocation,settolocation]=useState(false);
    const[Order,setorder]=useState(false);
    const Delay=()=>{
 
        setTimeout(function(){
     
          //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
        
setfromlocation(false)
settolocation(false)
setorder(false)
      
          
     
        }, 1000);
      }
    
  
  return (
    <View style={{ ...styles.container }}>

    <StatusBar auto />
 <NativeBaseProvider>
    <Header containerStyle={{  borderWidth:0 ,
    
   height:99
  
  }}


   backgroundColor={'#628395'}
    
   leftComponent={
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.goBack()} >
          <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
          </TouchableOpacity>

   }

   centerComponent={


    <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-4%",marginLeft:"2%"}}>
 Deliver Anything
</Text>
   }
rightComponent={
    <TouchableOpacity activeOpacity={1} onPress={()=>{   navigation.navigate('Dashboard')}}>
    <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff"}}>
               Cancel
</Text>
</TouchableOpacity>
}
  
  
   
/>
<View style={{flex:1}}>
 <VStack mt='2%' style={{width:width*0.9}} mx='auto'>
 <Text style={{fontFamily: 'arabicRegular',fontSize:16,color:'#9CA3AF', marginLeft:'2%'}} >
                   Size 
                </Text>
    <HStack justifyContent='space-between'>

    <VStack style={{width:101}} >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,color:'#9CA3AF',marginLeft:'5%'}} >
                     Height
                  </Text>
                      
                  <Input
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                    placeholder=''
                    placeholderTextColor='#9CA3Af'
                    mt='7%'
                    
                  />
  
  
                 </VStack>
                 <VStack style={{width:101}} >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,color:'#9CA3AF',marginLeft:'5%'}} >
                     Width
                  </Text>
                      
                  <Input
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                    placeholder=''
                    placeholderTextColor='#9CA3Af'
                    mt='7%'
                    
                  />
  
  
                 </VStack>
                 <VStack style={{width:101}} >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,color:'#9CA3AF',marginLeft:'5%'}} >
                     Length
                  </Text>
                      
                  <Input
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                    placeholder=''
                    placeholderTextColor='#9CA3Af'
                    mt='7%'
                    
                  />
  
  
                 </VStack>
    
    

    </HStack>

    <VStack  >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%',color:'#9CA3AF'}} >
                     Weight 
                  </Text>
                      
                  <Input
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                    placeholder='weight'
                    placeholderTextColor='#9CA3Af'
                    mt='4%'
                   
                    InputRightElement={
                        <Text style={{fontFamily: 'arabicRegular',fontSize:12,marginRight:'3%',color:'#9CA3AF'}} >
                        KG
                     </Text>
                    }
    
                  />

  
  
                 </VStack>
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
                 
              <TouchableOpacity activeOpacity={1}   onPress={()=>{setfromlocation(true)}} >
<LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn, width:width*0.8,marginLeft:"auto",marginRight:"auto",marginTop:"60%" }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>
                          Next </Text>
                    </LinearGradient>
                    </TouchableOpacity>

                
               
  
 </VStack>



</View>
<Modal isVisible={Fromlocation} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setfromlocation(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>
  <Header containerStyle={{  borderWidth:0 ,
    
    height:60
   
   }}
 
 
    backgroundColor={'#628395'}
     
    leftComponent={
 <TouchableOpacity activeOpacity={1} onPress={()=>navigation.goBack()} >
           <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
           </TouchableOpacity>
 
    }
 
    centerComponent={
 
 
     <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-4%",marginLeft:"2%"}}>
  Deliver Anything
 </Text>
    }
 rightComponent={
     <TouchableOpacity activeOpacity={1} onPress={()=>{ navigation.navigate('Dashboard'),Delay()}}>
     <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff"}}>
                Cancel
 </Text>
 </TouchableOpacity>
 }
   
   
    
 />
 <VStack  width='90%' mx='auto' style={{height:108}} >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%',color:'#9CA3AF'}} >
                    From Location
                  </Text>
                      
                  <Input
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                    placeholder='Current location'
                    placeholderTextColor='#9CA3Af'
                    mt='4%'
                    
                  />
  
  
                 </VStack>
            
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
            <ImageBackground
     source={require('../Images/location.png')}
     alt="description of image"
      
   style={{width:width,height:height}}
    
     >
       <VStack mx='auto' my='auto'>
      
      <Circles style={{marginLeft:"auto",marginRight:'auto'}}/>

      <TouchableOpacity activeOpacity={1}   onPress={()=>{settolocation(true)}} >
<LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn1, width:width*0.8, }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>
                          Next </Text>
                    </LinearGradient>
                    </TouchableOpacity>


         
        </VStack>


       </ImageBackground>
   
                
            </View>
    </View>
        </Modal>
        
       < Modal isVisible={Tolocation} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>settolocation(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>
  <Header containerStyle={{  borderWidth:0 ,
    
    height:60
   
   }}
 
 
    backgroundColor={'#628395'}
     
    leftComponent={
 <TouchableOpacity activeOpacity={1} onPress={()=>navigation.goBack()} >
           <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
           </TouchableOpacity>
 
    }
 
    centerComponent={
 
 
     <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-4%",marginLeft:"2%"}}>
  Deliver Anything
 </Text>
    }
 rightComponent={
     <TouchableOpacity activeOpacity={1} onPress={()=>{ navigation.navigate('Dashboard'),Delay()}}>
     <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff"}}>
                Cancel
 </Text>
 </TouchableOpacity>
 }
   
   
    
 />
 <VStack  width='90%' mx='auto' style={{height:108}} >
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%',color:'#9CA3AF'}} >
                    To Location
                  </Text>
                      
                  <Input
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                    placeholder='Current location'
                    placeholderTextColor='#9CA3Af'
                    mt='4%'
                    
                  />
  
  
                 </VStack>
            
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
            <ImageBackground
     source={require('../Images/location.png')}
     alt="description of image"
      
   style={{width:width,height:height}}
    
     >
       <VStack mx='auto' my='auto'>
      
      <Circles style={{marginLeft:"auto",marginRight:'auto'}}/>

      <TouchableOpacity activeOpacity={1}   onPress={()=>{setorder(true)}} >
<LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn1, width:width*0.8, }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>
                          Next </Text>
                    </LinearGradient>
                    </TouchableOpacity>


         
        </VStack>


       </ImageBackground>
   
                
            </View>
    </View>
        </Modal>

        < Modal isVisible={Order} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setorder(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>
  <Header containerStyle={{  borderWidth:0 ,
    
    height:60
   
   }}
 
 
    backgroundColor={'#628395'}
     
    leftComponent={
 <TouchableOpacity activeOpacity={1} onPress={()=>navigation.goBack()} >
           <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
           </TouchableOpacity>
 
    }
 
    centerComponent={
 
 
     <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-4%",marginLeft:"2%"}}>
  Deliver Anything
 </Text>
    }
 rightComponent={
     <TouchableOpacity activeOpacity={1} onPress={()=>{ navigation.navigate('Dashboard'),Delay()}}>
     <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff"}}>
                Cancel
 </Text>
 </TouchableOpacity>
 }
   
   
    
 />
 
            
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
            <ImageBackground
     source={require('../Images/location.png')}
     alt="description of image"
      
   style={{flex:1}}
    
     >
       <HStack mx='auto' my='auto'>
          
<VStack space='10%'>

<Box style={{height:35,width:73,}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' borderRadius='3xl'>
<VStack mx='auto'my='auto'>
<Text style={{fontFamily: 'arabicRegular',fontSize:14,color:'#9CA3AF'}} >
                    5 min
                  </Text>
</VStack>
</Box>

<Center>
<Mark2/>  
</Center>
</VStack>
<PAth style={{marginTop:'30%',marginLeft:"-10%"}}  />
<VStack space='10%' style={{marginTop:"36%",marginLeft:"-10%"}}>

<Box style={{height:35,width:73,}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' borderRadius='3xl'>
<VStack mx='auto'my='auto'>
<Text style={{fontFamily: 'arabicRegular',fontSize:14,color:'black'}} >
                    Drop off
                  </Text>
</VStack>
</Box>

<Center>
<Mark1/>  
</Center>
</VStack>


        </HStack>
          
          <HStack width='95%' mb='10%' >
          <Box style={{height:40,width:40,}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' borderRadius='lg' ml='auto'
>
<VStack mx='auto'my='auto'>
<Live_location/>
</VStack>
</Box>

          </HStack>
       </ImageBackground>
       <View style={{height:256,backgroundColor:"#fff",width:width}} >
                  
                  <VStack  mx='auto' mt='10%' >
                  <Box style={{height:50,width:336,backgroundColor:"#E7E7E7",borderColor:"#707070"}}  borderWidth='1'  
shadow='1' borderRadius='lg' ml='auto'
>
<VStack mx='auto' my='auto'>
<Text style={{fontFamily:'arabicRegular',fontSize:15,color:"black"}}>
≈ JOD 2.00
 </Text>
</VStack>
</Box>

<HStack ml='4%' mt='5%' space='3%'>
<Center>
<Map_point/>
</Center>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#6F6F6F"}}>
 From: <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black"}}>
 Issa As Subeyei Street
 </Text>
 </Text>
</HStack>
<HStack ml='4%' mt='5%' space='3%'>
<Center>
<Map_nav/>
</Center>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#007BFF"}}>
 To: <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black"}}>
 Ahmad Ben Taymeyah Street
 </Text>
 </Text>
</HStack>
     

                            <TouchableOpacity activeOpacity={1}   onPress={()=>{Delay(),navigation.navigate('Dashboard')}} >
<LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn, width:256,marginLeft:"auto",marginRight:"auto"}}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>
                          Confirm </Text>
                    </LinearGradient>
                    </TouchableOpacity>

                
               
           
                  </VStack>
                 
  
  
                 </View>
                 

            </View>
    </View>
        </Modal>
</NativeBaseProvider>
</View>
  )
}
export default Delivery;
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
    createBtn1: {
    
        height: 49,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        
        marginTop:230,
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
