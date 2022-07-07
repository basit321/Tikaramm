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


const Flyingcheckin = ({navigation}) => {
    const[Checkout,setchecout]=useState(false);
    const[Logoutmodal,setlogoutmodal]=useState(false);
    const Delay=()=>{
 
      setTimeout(function(){
   
        //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
       navigation.navigate('Dashboard')
       setchecout(false)
        
   
      }, 3000);
    }
    const Dey=()=>{
 
      setTimeout(function(){
   
        //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
  
       setchecout(false)
        
   
      }, 3000);
    }

  return (
    <View style={{ ...styles.container }}>

    <StatusBar auto />
 <NativeBaseProvider>
    <Header containerStyle={{  borderWidth:0 ,
    
   height:99
  
  }}


   backgroundColor={'#3DB2FF'}
    
   leftComponent={
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.goBack()} >
          <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
          </TouchableOpacity>

   }

   centerComponent={


    <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-4%",marginLeft:"2%"}}>
Flying Tickets
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
<VStack mt='3%'>

</VStack>

<Text style={{fontFamily:'arabicBold',fontSize:18,color:"black",marginLeft:"5%"}}>
Departure Date
</Text>

<TouchableOpacity activeOpacity={1} onPress={()=>setchecout(true)} >
<ImageBackground source={require('../Images/Date.png')}
       style={{width:width,height:311,marginTop:'5%'}}
       alt="description of image"
       resizeMode='stretch'

/>
</TouchableOpacity>

</View>
<Modal isVisible={Checkout} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setchecout(false)}
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
 
 
    backgroundColor={'#3DB2FF'}
     
    leftComponent={
 <TouchableOpacity activeOpacity={1} onPress={()=>setchecout(false)} >
           <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
           </TouchableOpacity>
 
    }
 
    centerComponent={
 
 
     <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-4%",marginLeft:"2%"}}>
 Flying Tickets
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
 <View style={{height:700}}>
<VStack mt='3%'>

</VStack>
<Text style={{fontFamily:'arabicBold',fontSize:18,color:"black",marginLeft:"5%"}}>
Return Date 
</Text>
 <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('Flyingcart'),Dey()}} >
<Image source={require('../Images/Date.png')}
       style={{width:width,height:311,marginTop:'5%'}}
       alt="description of image"
       resizeMode='stretch'

/>
</TouchableOpacity>

</View>
             
            
    </View>
        </Modal>
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
</NativeBaseProvider>
</View>
  )
}

export default Flyingcheckin
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