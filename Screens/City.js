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
  Weekdays

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

const City = ({navigation}) => {
    const[City,setcity]=useState(false);
    const[Hotel,setHotel]=useState(false);
    const[Logoutmodal,setlogoutmodal]=useState(false);
    const[Rooms,setRooms]=useState(false);
    const[Breakfast,setBreakfast]=useState(false);
    const Delay=()=>{
 
        setTimeout(function(){
     
          //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
         navigation.navigate('Dashboard')
         setcity(false)
          
     
        }, 3000);
      }
      const Twodealy=()=>{
 
        setTimeout(function(){
     
          //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
         setcity(false)
         setBreakfast(false)
         setHotel(false)
         setRooms(false)
          
     
        }, 1000);
      }
  
  return (
    <View style={{ ...styles.container }}>

    <StatusBar auto />
 <NativeBaseProvider>
            
   <Header containerStyle={{  borderWidth:0 ,
    
    height:90
   
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
 rightComponent={
     <TouchableOpacity activeOpacity={1} onPress={()=>{setlogoutmodal(true),Delay()}}>
     <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff"}}>
                Cancel
 </Text>
 </TouchableOpacity>
 }
   
   
    
 />
<View style={{flex:1}}>
<VStack  mx='auto'>



<Text style={{fontFamily:'arabicBold',fontSize:18,color:"black",marginLeft:"5%",}}>
 Select City
</Text>
 <VStack mt='5%' space='2%'>
<TouchableOpacity activeOpacity={1} onPress={()=>setHotel(true)}>
<Box style={{height:54,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF",marginTop:"-5%"}}>
Amman
</Text>

</HStack>
</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setHotel(true)}>
<Box style={{height:54,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF",marginTop:"-5%"}}>
Irbid
</Text>

</HStack>
</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setHotel(true)}>
<Box style={{height:54,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF",marginTop:"-5%"}}>
Al Zarqa
</Text>

</HStack>
</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setHotel(true)}>
<Box style={{height:54,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF",marginTop:"-5%"}}>
Ajloun
</Text>

</HStack>
</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setHotel(true)}>
<Box style={{height:54,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF",marginTop:"-5%"}}>
Jerash
</Text>

</HStack>
</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setHotel(true)}>
<Box style={{height:54,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF",marginTop:"-5%"}}>
Aqaba
</Text>

</HStack>
</Box>
</TouchableOpacity>



<TouchableOpacity activeOpacity={1} onPress={()=>setHotel(true)}>
<Box style={{height:54,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF",marginTop:"-5%"}}>
Al Zarqa
</Text>

</HStack>
</Box>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=>setHotel(true)}>
<Box style={{height:54,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF",marginTop:"-5%"}}>
Ajloun
</Text>

</HStack>
</Box>
</TouchableOpacity>


<TouchableOpacity activeOpacity={1} onPress={()=>setHotel(true)}>
<Box style={{height:54,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF",marginTop:"-5%"}}>
Jerash
</Text>

</HStack>
</Box>
</TouchableOpacity>






</VStack>
</VStack>
</View>     
            
    
    
        <Modal isVisible={Logoutmodal} 
         
         avoidKeyboard={false}
         onBackButtonPress=  { () =>setlogoutmodal(false)}
       >
          <View style={styles.modalContentlogin}>
                   <VStack mx='auto'my='auto'>

                   <Text style={{fontFamily:'arabicRegular',fontSize:24,color:"#374151", marginLeft:"auto",marginRight:"auto" }}>
Are you sure 
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#6B7280", marginLeft:"auto",marginRight:"auto"}}>
you want Cancel
</Text>

<HStack space='5%' mt='10%' >
<TouchableOpacity activeOpacity={1} onPress={()=>setlogoutmodal(false)}>
<LinearGradient
                       colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                       start={{ x: 0, y: 0 }}
                       end={{ x: 1, y: 1 }}
                       style={{ ...styles.logoutbtn }}
                   >
                       <Text style={{ color: "white", fontFamily: 'arabicBold', }}>No</Text>
                   </LinearGradient>
</TouchableOpacity>
 
                   <Button
                     style={{ ...styles.logoutbtn,backgroundColor:"#707070" }}
                     
                     onPress={()=>{props.navigation.navigate('Hotels')} } 
                   >
<Text style={{ color: "white", fontFamily: 'arabicBold',marginTop:"-10%" }}>Yes</Text>
                   </Button>
               


</HStack>




                   </VStack>

         

   </View>
       </Modal>
       <Modal isVisible={Hotel} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setHotel(false)}
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
 
 
    backgroundColor={'#700B97'}
     
    leftComponent={
 <TouchableOpacity activeOpacity={1} onPress={()=>setHotel(false)} >
           <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
           </TouchableOpacity>
 
    }
 
    centerComponent={
 
 
     <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-4%",marginLeft:"2%"}}>
 Hotels
 </Text>
    }
 rightComponent={
     <TouchableOpacity activeOpacity={1} onPress={()=>{setlogoutmodal(true),Delay()}}>
     <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff"}}>
                Cancel
 </Text>
 </TouchableOpacity>
 }
   
   
    
 />
<View style={{flex:1}}>
<VStack  mx='auto'>



<Text style={{fontFamily:'arabicBold',fontSize:18,color:"black",marginLeft:"1%",}}>
 Select Hotel
</Text>
 <VStack mt='5%' space='2%'>
<TouchableOpacity activeOpacity={1} onPress={()=>setRooms(true)}>
<Box style={{height:102,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
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
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setRooms(true)}>
<Box style={{height:102,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
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
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setRooms(true)}>
<Box style={{height:102,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
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
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setRooms(true)}>
<Box style={{height:102,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
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
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setRooms(true)}>
<Box style={{height:102,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
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
</TouchableOpacity>


</VStack>
</VStack>
</View>     
            
    </View>
        </Modal>
        <Modal isVisible={Rooms} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setRooms(false)}
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
 
 
    backgroundColor={'#700B97'}
     
    leftComponent={
 <TouchableOpacity activeOpacity={1} onPress={()=>setRooms(false)} >
           <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
           </TouchableOpacity>
 
    }
 
    centerComponent={
 
 
     <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-4%",marginLeft:"2%"}}>
 Hotels
 </Text>
    }
 rightComponent={
     <TouchableOpacity activeOpacity={1} onPress={()=>{setlogoutmodal(true),Delay()}}>
     <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff"}}>
                Cancel
 </Text>
 </TouchableOpacity>
 }
   
   
    
 />
<View style={{flex:1}}>
<VStack  mx='auto'>



<Text style={{fontFamily:'arabicBold',fontSize:18,color:"black",marginLeft:"1%",}}>
 Select Room
</Text>
 <VStack mt='5%' space='2%'>
<TouchableOpacity activeOpacity={1} onPress={()=>setBreakfast(true)}>
<Box style={{height:77,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<VStack>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",}}>
Deluxe King Room with City View
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",}}>
1  Larg bed
</Text>


</VStack>


</HStack>
</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setBreakfast(true)}>
<Box style={{height:77,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<VStack>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",}}>
Superior King Room with City View
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",}}>
2 single beds
</Text>


</VStack>


</HStack>
</Box>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=>setBreakfast(true)}>
<Box style={{height:77,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<VStack>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",}}>
Premium King Room with City View
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",}}>
2 single beds
</Text>


</VStack>


</HStack>
</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setBreakfast(true)}>
<Box style={{height:77,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<VStack>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",}}>
Superior Twin Room with City View
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",}}>
1 Large beds
</Text>


</VStack>


</HStack>
</Box>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=>setBreakfast(true)}>
<Box style={{height:77,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
<VStack>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",}}>
Premium Twin Room with City 
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",}}>
1 Large beds
</Text>


</VStack>


</HStack>
</Box>
</TouchableOpacity>




</VStack>
</VStack>
</View>     
            
    </View>
        </Modal>
        <Modal isVisible={Breakfast} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setBreakfast(false)}
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
 
 
    backgroundColor={'#700B97'}
     
    leftComponent={
 <TouchableOpacity activeOpacity={1} onPress={()=>setBreakfast(false)} >
           <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
           </TouchableOpacity>
 
    }
 
    centerComponent={
 
 
     <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-4%",marginLeft:"2%"}}>
 Hotels
 </Text>
    }
 rightComponent={
     <TouchableOpacity activeOpacity={1} onPress={()=>{setlogoutmodal(true),Delay()}}>
     <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff"}}>
                Cancel
 </Text>
 </TouchableOpacity>
 }
   
   
    
 />
<View style={{flex:1}}>
<VStack  mx='auto'>



<Text style={{fontFamily:'arabicBold',fontSize:18,color:"black",marginLeft:"1%",}}>
 Select Meals
</Text>
 <VStack mt='5%' space='5%'>

<Box style={{height:77,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
 <Image
 source={require('../Images/Breakfast.png')}
 style={{width:50,height:50}}
 alt='des'
 
 />
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",marginLeft:"3%"}}>
 Breakfast
</Text>

 <Center ml='auto'>
 <Checkbox
  style={{width:22,height:22,}}
 
  />
  </Center>

</HStack>
</Box>
<Box style={{height:77,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
 <Image
 source={require('../Images/Lunch.png')}
 style={{width:50,height:50}}
 alt='des'
 />
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",marginLeft:"3%"}}>
 Lunch
</Text>

 <Center ml='auto'>
 <  Box      bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' borderRadius='full'
  style={{width:22,height:22,}}
 
  />
  </Center>

</HStack>
</Box>
<Box style={{height:77,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<HStack width='90%' mx='auto' my='auto' space='2%'>
    
 <Image
 source={require('../Images/Dinner.png')}
 style={{width:50,height:50}}
 alt='des'
 />
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151",marginLeft:"3%"}}>
 Dinner
</Text>

 <Center ml='auto'>
 <  Box      bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2' borderRadius='full'
  style={{width:22,height:22,}}
 
  />
  </Center>

</HStack>
</Box>




</VStack>
 
<TouchableOpacity activeOpacity={1}   onPress={()=>{navigation.navigate('Hotels')}} >
<LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn, width:width*0.8,marginLeft:"auto",marginRight:"auto" ,marginTop:"70%" }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>
                          Confirm </Text>
                    </LinearGradient>
                    </TouchableOpacity>

                
   
</VStack>
 
</View>     
            
    </View>
        </Modal>
</NativeBaseProvider>
</View>
  )
}

export default City
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