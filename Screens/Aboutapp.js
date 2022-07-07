import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart,Card,Instagram,Snapchat,Facebook

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

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;


const Aboutapp = ({navigation}) => {
  return (
    <ScrollView ScrollView style={styles.conatainer}>
    <StatusBar style="dark"/>
<NativeBaseProvider>

<View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",flex:0.2,width:width}}>
            <HStack mt='20%' width='90%' mx='auto'>
            <TouchableOpacity activeOpacity={1} onPress={()=>navigation.goBack()} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
                About App
</Text>
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",height:height*1.2}}>
              <VStack  mx='auto' mt='5%' space='2%'>
                  
                  <Card style={{width:width*0.9}}/>
                   <Box style={{height:199,backgroundColor:"#fff",borderRadius:20}} borderWidth='1' 
                    shadow='2'
                   borderColor='gray.50'>
                    
                   <VStack width='90%' mx='auto'>
                   <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" }}>
 About the application
</Text>
  
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#9E9E9E" }}>
 
An application program (app or application for short) is a computer program designed to carry out a specific task other than one relating to the operation of the computer itself.
</Text>
  

                   </VStack>


                   </Box>
                   <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" ,marginLeft:"2%" }}>
 Contact information
</Text>
                   <VStack>
       
<Box style={{height:54,width:width*0.9,borderRadius:15}}  bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
<HStack width='90%' mx='auto' my='auto'>
<Center>
<Email/>
</Center>
<Center ml='5%' mt='-2%'>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" }}>
 Info@tikramm.com
</Text>
</Center>
</HStack>


</Box>
<Box style={{height:54,width:width*0.9,borderRadius:15}} mt='7%' bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
<HStack width='90%' mx='auto' my='auto'>
<Center>
<Phonecall/>
</Center>
<Center ml='5%' mt='-2%'>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" }}>
 +92 7999999999
</Text>
</Center>
</HStack>


</Box>


</VStack>


                   <HStack justifyContent='space-between' >

                      <Box style={{width:102,height:97,backgroundColor:"#fff",borderRadius:20}} borderWidth='1' 
                    shadow='2'
                   borderColor='gray.50'>

                <VStack mx='auto' my='auto'>
                  <Instagram/>
                </VStack>
               </Box> 
               <Box style={{width:102,height:97,backgroundColor:"#fff",borderRadius:20}} borderWidth='1' 
                    shadow='2'
                   borderColor='gray.50'>

                <VStack mx='auto' my='auto'>
                  <Snapchat/>
                </VStack>
               </Box> 
               <Box style={{width:102,height:97,backgroundColor:"#fff",borderRadius:20}} borderWidth='1' 
                    shadow='2'
                   borderColor='gray.50'>

                <VStack mx='auto' my='auto'>
                  <Facebook/>
                </VStack>
               </Box>  
                 </HStack>      
                  </VStack>  



            </View>
    </View>



    </NativeBaseProvider>
    </ScrollView>
  )
}

export default Aboutapp
const styles = StyleSheet.create({
   
    conatainer:{
        
     backgroundColor:"blue"
    
        
    },
})