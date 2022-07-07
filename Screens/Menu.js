import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart

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
  
  
  

const Menu = (props,navigation) => {
    const [isStoriesOpen, setIsStoriesOpen] = useState(false);
    const[usermodal,setusermodal]=useState(false);
    const[Logoutmodal,setlogoutmodal]=useState(false);
    const[Changepassword,setchangepassword]=useState(false);
    const[Editmodal,seteditmodal]=useState(false);
    const[Paymentmodal,setpaymentmodal]=useState(false);
    
    const[Locationmodal,setlocationmodal]=useState(false);
    const[Favourites,setfavourites]=useState(false);
    const[Lang,setlang]=useState(false);
    
    const[Selectpayment,Setselectpayment]=useState(false);
    const[Addnewaddress,Setsaddnewaddress]=useState(false);
    const[ChooseLocation,setChooselocation]=useState(false);
    const[bordercolor,Setbordorclor]=useState(false);
    const[bordercolor1,Setbordorclor1]=useState(false);
    const[bordercolor2,Setbordorclor2]=useState(false);
    const[bgcolor,setbgcolor]=useState(false);
    useEffect(() => {
      const backAction = () => {
        
          props.navigation.goBack()

          

        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      return () => backHandler.remove();
    }, []);
  

    if (isStoriesOpen) {
      props.setModalIsOpen(true);
    } else {
      props.setModalIsOpen(false);
    }

    useEffect(() => {

      setIsStoriesOpen(true)
      
      // Update the document title using the browser API
      
    });
    const Delay=()=>{
 
      setTimeout(function(){
   
        //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
        setlogoutmodal(false)
        
   
      }, 2000);
    }


   
  return (
    <View style={styles.conatainer}>
       <StatusBar style="dark"/>
<NativeBaseProvider> 

<View>

<Header containerStyle={{  borderWidth:0 }}

     backgroundColor={bgcolor?"#fff":"#F6F6F6"}
     

     
    
      leftComponent={
      <HStack mt='20%'>
<Bellicon/>
<ImageBackground 
 source={require("../Images/circle.png")}
 style={{width:15.85,height:15.85,marginLeft:'-20%'}}
 alt="description of image"
 
 >
<Text style={{fontFamily:'arabicRegular',fontSize:10,color:"#fff",textAlign:"center",marginTop:'-15%'}}>
3
</Text>

 </ImageBackground>
        
</HStack>

   
}
centerComponent={
<Text style={{fontFamily:'arabicRegular',fontSize:24,color:"#37B3A9"}}>
Tikramm
</Text>

}
rightComponent={
<VStack mt='20%'>
  <Shoppingcart/>
</VStack>

}
/>
</View>
<VStack  mx='auto'  style={{flex:1} }  mt='2%' space='3%' >
<TouchableOpacity activeOpacity={1} onPress={()=>{setusermodal(true),setbgcolor(true)}}>
<Box style={{height:86,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
 
<HStack width='90%' mx='auto' my='auto'>

 
<Box style={{height:63,width:58,borderRadius:5,borderColor:"#C9C9C9"}}  borderWidth='1'  

  
>

<Image
source={require('../Images/pic.png')}
 my='auto'
 mx='auto'
 alt="description of image"
/>


</Box>
<VStack style={{marginLeft:"3%"}} >
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
 User Name 
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#9E9E9E",marginTop:'-5%'}}>
 name@info.com
</Text>
</VStack>
</HStack>


</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>{setpaymentmodal(true),setbgcolor(true)}}>
<Box style={{height:50,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
<HStack width='90%' mx='auto' my='auto'>
<Center>
<Payment/>
</Center>
<Center ml='5%' mt='-2%'>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" }}>
 Payment method
</Text>
</Center>
</HStack>


</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>{setlocationmodal(true),setbgcolor(true)}}>
<Box style={{height:50,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
<HStack width='90%' mx='auto' my='auto'>
<Center>
<Location/>
</Center>
<Center ml='5%' mt='-2%'>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" }}>
 My Address
</Text>
</Center>
</HStack>


</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>{setfavourites(true),setbgcolor(true)}}>
<Box style={{height:50,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
<HStack width='90%' mx='auto' my='auto'>
<Center>
<Heart/>
</Center>
<Center ml='5%' mt='-2%'>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" }}>
 Favorite List
</Text>
</Center>
</HStack>


</Box>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=>{props.navigation.navigate('Aboutapp')}}>
<Box style={{height:50,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
<HStack width='90%' mx='auto' my='auto'>
<Center>
<Info/>
</Center>
<Center ml='5%' mt='-2%'>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" }}>
 About App
</Text>
</Center>
</HStack>


</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>{setlang(true)}}>
<Box style={{height:50,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
<HStack width='90%' mx='auto' my='auto'>
<Center>
<Language/>
</Center>
<Center ml='5%' mt='-2%'>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" }}>
 Language
</Text>
</Center>
<Center ml='auto' mt='-2%'>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" }}>
 English
</Text>
</Center>
</HStack>


</Box>
</TouchableOpacity>
</VStack>



<Modal isVisible={usermodal} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
        onBackButtonPress=  { () =>setusermodal(false)}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",height:80,}}>
            <HStack my='auto' width='90%' mx='auto'>
            <TouchableOpacity activeOpacity={1} onPress={()=>setusermodal(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
 My Profile
</Text>
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
               <VStack mt='5%' mx='auto'  space='3%'>
                 <Center>
               <Box style={{height:133,width:122,borderRadius:20,borderColor:"#C9C9C9"
               ,backgroundColor:"#fff"}}  borderWidth='1'  

                      
>

<Image
source={require('../Images/pic.png')}
 my='auto'
 mx='auto'
 style={{width:54,height:76}}
 alt="description of image"
/>


</Box>
</Center>

<Box style={{height:50,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
<HStack width='90%' mx='auto' my='auto'>
<Center>
<Avatar style={{width:20,height:23.47}}/>
</Center>
<Center ml='5%' mt='-2%'>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151" }}>
 Mohmod Alnotour
</Text>
</Center>
</HStack>


</Box>
<Box style={{height:50,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
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
<Box style={{height:50,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
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


<VStack style={{width:width*0.8}} mx='auto' space='6%' mt='20%'>


<TouchableOpacity          style={{ ...styles.loginBtn }} activeOpacity={1}   onPress={()=>{setlogoutmodal(true)}}    >
                    <Text style={{ color: '#37B3A9', fontFamily: 'arabicBold' }}>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={1} style={{ ...styles.loginBtn }} onPress={()=>{setchangepassword(true)}}   >
                    <Text style={{ color: '#37B3A9', fontFamily: 'arabicBold' }}>Change Password</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1}   onPress={()=>{seteditmodal(true)}} >
<LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Edit Proifle</Text>
                    </LinearGradient>
                    </TouchableOpacity>

</VStack>


               </VStack>
               
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
 you want Logout
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
                      
                      onPress={()=>{props.navigation.navigate('Userapp'),Delay()} } 
                    >
<Text style={{ color: "white", fontFamily: 'arabicBold',marginTop:"-10%" }}>Yes</Text>
                    </Button>
                


</HStack>




                    </VStack>

          

    </View>
        </Modal>
        <Modal isVisible={Changepassword} 
         
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setchangepassword(false)}
          style={{ marginLeft:"auto",marginRight:"auto"}}
        >
           <VStack style={styles.modalContentchnagepass}  ml='-3%' mt='2%'>
             <VStack width='90%' mx='auto'>
           <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#374151", }}>
 Change Password
</Text>
<TouchableOpacity activeOpacity={1} onPress={()=>setchangepassword(false)}>
<VStack ml='auto' mt='-5%'>
<Entypo name="cross" size={30} color="#C4C4C4"  />

</VStack>
</TouchableOpacity>
<VStack >
               
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                    Old Password
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='**** **** ****'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  
                />


               </VStack>
                
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                   New Password
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='*** **** ****'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                 
                  
                />


               </VStack>
                
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                    Confirm New Password
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='*** **** ****'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                 
                />


               </VStack>
                
           
            </VStack>
            <TouchableOpacity activeOpacity={1} onPress={()=>setchangepassword(false)}>
            <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn, width:256, marginLeft:'auto',marginRight:"auto",marginTop:'7%' }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Confirm </Text>
                    </LinearGradient>
                    </TouchableOpacity>
</VStack>

    </VStack>
        </Modal>
      
<Modal isVisible={Editmodal} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>seteditmodal(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",height:80,}}>
            <HStack my='auto' width='90%' mx='auto'>
            <TouchableOpacity activeOpacity={1} onPress={()=>seteditmodal(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
                Edit Profile
</Text>
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
               <VStack mt='5%'  width='90%'  mx='auto' >
                 <HStack>
               <Box style={{height:133,width:122,borderRadius:20,borderColor:"#C9C9C9"
               ,backgroundColor:"#fff"}}  borderWidth='1'  

                      
>
<VStack mx='auto' my='auto'>
<Avatar
 style={{width:67,height:78,}}

/>
</VStack>

</Box>
<Center>
<Text style={{fontFamily: 'arabicRegular',fontSize:24 ,color:"#37B3A9",marginLeft:"10%"}} >
                    Edit Profile
                </Text>
                    
</Center>

</HStack>

        <VStack >
               
               <VStack mt='5%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                    Full name 
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='Enter your full name '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  
                />


               </VStack>
                
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                   Phone Number 
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='+92012010213'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  InputLeftElement={<Image
                  
                   source={require("../Images/uae.png")}
                     style={{width:25,height:17.3}}
                     ml='2%'
                     alt="description of image"
                  />}
                  
                />


               </VStack>
                
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                    Email address
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='Ab967464@gmail.com '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  
                />


               </VStack>
                
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                    Password
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='********S '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  type='password'
                  
                
                  
                />


               </VStack>
              <TouchableOpacity activeOpacity={1} onPress={()=>{seteditmodal(false)}}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn, width:width*0.9}}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Edit</Text>
                    </LinearGradient>
</TouchableOpacity>
            </VStack>
               

 
          </VStack>
               
            </View>
    </View>
        </Modal>





        <Modal isVisible={Paymentmodal} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setpaymentmodal(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",height:80,}}>
            <HStack my='auto' width='90%' mx='auto'>
            <TouchableOpacity activeOpacity={1} onPress={()=>setpaymentmodal(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
 Payment method
</Text>
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
               <VStack mt='10%' mx='auto'    space='5%'>
         
               <TouchableOpacity activeOpacity={1}   onPress={()=>{Setselectpayment(true)}} >
<LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn, width:width*0.8,marginLeft:"auto",marginRight:"auto" }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>
                          + Add New Payment Method</Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    <Box style={{height:105,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
 
<HStack width='90%' mx='auto' my='auto'>
<HStack ml='60%' style={{position:"absolute"}} mt='-1%' space='4%' >
<Feather name="edit" size={20} color="#7F7F7F" />
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#7F7F7F",marginTop:"-3%"}}>
  Edit
</Text >

<Text style={{color:"#D8D8D8"}}>
│
</Text>
<MaterialCommunityIcons name="delete" size={20} color="#7F7F7F" />
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#7F7F7F",marginTop:"-3%"}}>
  Delete
</Text>

</HStack>

<Box style={{height:73,width:73,borderRadius:5,borderColor:"#C9C9C9"}}  borderWidth='1'  

  
>
<VStack mx='auto'my='auto'>
<Visa  style={{width:55,height:17}}  />
</VStack>
</Box>
<VStack my='auto'  ml='3%'>

<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151"}}>
 Visa
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#9E9E9E",marginTop:'-5%'}}>
 000 - 000 - 000- 000
</Text>
</VStack>

</HStack>


</Box>
<Box style={{height:105,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
 
<HStack width='90%' mx='auto' my='auto'>
<HStack ml='60%' style={{position:"absolute"}} mt='-1%' space='4%' >
<Feather name="edit" size={20} color="#7F7F7F" />
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#7F7F7F",marginTop:"-3%"}}>
  Edit
</Text >

<Text style={{color:"#D8D8D8"}}>
│
</Text>
<MaterialCommunityIcons name="delete" size={20} color="#7F7F7F" />
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#7F7F7F",marginTop:"-3%"}}>
  Delete
</Text>

</HStack>

<Box style={{height:73,width:73,borderRadius:5,borderColor:"#C9C9C9"}}  borderWidth='1'  

  
>
<VStack mx='auto'my='auto'>
<Mastercard style={{width:60,height:36}}/>
</VStack>
</Box>
<VStack my='auto'  ml='3%'>

<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151"}}>
 Master Card
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#9E9E9E",marginTop:'-5%'}}>
 000 - 000 - 000- 000
</Text>
</VStack>

</HStack>


</Box>

     
               </VStack>
               
            </View>
    </View>
        </Modal>
        <Modal isVisible={Selectpayment} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>Setselectpayment(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",height:80,}}>
            <HStack my='auto' width='90%' mx='auto'>
            <TouchableOpacity activeOpacity={1} onPress={()=>Setselectpayment(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" style={{marginTop:"15%"}} /> 
            </TouchableOpacity>

            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-4%",marginLeft:"2%"}}>
               Add New Payment Method 
</Text>
<TouchableOpacity activeOpacity={1} style={{marginLeft:"auto"}} onPress={()=>Setselectpayment(false)}>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#C40000"}}>
               Cancel
</Text>
</TouchableOpacity>
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#fff",flex:1}}>
               <VStack mt='2%' mx='auto' width='90%'   space='5%'>
         
               <HStack justifyContent='space-between'>
             
                          <TouchableOpacity activeOpacity={1} onPress={()=>{Setbordorclor(!bordercolor),Setbordorclor1(false),Setbordorclor2(false)}}>
  <Box style={{height:76,width:95.33,borderRadius:6,borderColor:bordercolor?'#53BCB3':'#C9C9C9'}}  borderWidth='1'  

  
>
{bordercolor?(
                <HStack>
<Checkbox style={{marginLeft:"90%",marginTop:"-10%",width:18,height:18}}   />

                 
                   </HStack>
                   ):null}
<VStack mx='auto'my='auto'>
<Image source={require('../Images/apple.png')} style={{width:34,height:39.04}} alt="description of image"/>
</VStack>
</Box>

</TouchableOpacity>
<TouchableOpacity activeOpacity={1}  onPress={()=>{Setbordorclor1(!bordercolor1),Setbordorclor(false),Setbordorclor2(false)}}>

  <Box style={{height:76,width:95.33,borderRadius:6,borderColor:bordercolor1?'#53BCB3':'#C9C9C9'}}  borderWidth='1'  

  
>
{bordercolor1?(
                <HStack>
<Checkbox style={{marginLeft:"90%",marginTop:"-10%",width:18,height:18}}   />

                 
                   </HStack>
                   ):null}
<VStack mx='auto'my='auto'>

<Visa  style={{width:55,height:17}}  />
</VStack>
</Box>

</TouchableOpacity>
<TouchableOpacity activeOpacity={1}  onPress={()=>{Setbordorclor2(!bordercolor2),Setbordorclor1(false),Setbordorclor(false)}}>
  <Box style={{height:76,width:95.33,borderRadius:6,borderColor:bordercolor2?'#53BCB3':'#C9C9C9'}}  borderWidth='1'  

  
>
{bordercolor2?(
                <HStack>
<Checkbox style={{marginLeft:"90%",marginTop:"-10%",width:18,height:18}}   />

                 
                   </HStack>
                   ):null}
<VStack mx='auto'my='auto'>
<Mastercard style={{width:60,height:36}}/>
</VStack>
</Box>

</TouchableOpacity>



        </HStack>
                
        <VStack >
               
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                    Cardholder's name 
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='Cardholder name'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  
                />


               </VStack>
                
               <VStack mt='3%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                   Card Number
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='Card Number'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                 
                  
                />


               </VStack>
                <HStack mt='3%' style={{justifyContent:"space-between"}}  >
               <VStack style={{width:82}} >
                
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,}} >
                    CVC
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='000'
                  placeholderTextColor='#9CA3Af'
                  keyboardType='decimal-pad'
                  mt='4%'
                 
                />


               </VStack>
               <VStack style={{width:229}}  >
                
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'2%'}} >
                    Expiration date
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='*** **** ****'
                  placeholderTextColor='#9CA3Af'
                  mt='2%'
                  
                 
                />


               </VStack>
                </HStack>
           
            </VStack>

            <TouchableOpacity activeOpacity={1} onPress={()=>{Setselectpayment(false)}} style={{
              marginTop:"40%"
            }}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>ADD</Text>
                    </LinearGradient>
                    </TouchableOpacity>
               </VStack>
               
            </View>
    </View>
        </Modal>
        <Modal isVisible={Locationmodal} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setlocationmodal(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",height:80,}}>
            <HStack my='auto' width='90%' mx='auto'>
            <TouchableOpacity activeOpacity={1} onPress={()=>setlocationmodal(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
 My Address
</Text>
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
               <VStack mt='10%' mx='auto'    space='5%'>
         
               <TouchableOpacity activeOpacity={1}   onPress={()=>{Setsaddnewaddress(true)}} >
<LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn, width:width*0.8,marginLeft:"auto",marginRight:"auto" }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>
                          + Add  New Address</Text>
                    </LinearGradient>
                    </TouchableOpacity>

                    <Box style={{height:105,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
 
<HStack width='90%' mx='auto' my='auto'>
<HStack ml='60%' style={{position:"absolute"}} mt='-1%' space='4%' >
<Feather name="edit" size={20} color="#7F7F7F" />
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#7F7F7F",marginTop:"-3%"}}>
  Edit
</Text >

<Text style={{color:"#D8D8D8"}}>
│
</Text>
<MaterialCommunityIcons name="delete" size={20} color="#7F7F7F" />
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#7F7F7F",marginTop:"-3%"}}>
  Delete
</Text>

</HStack>
 <HStack my='auto'>
 <Mark style={{width:25,height:25}}/>
 </HStack>

<VStack my='auto'  ml='5%'>

<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151"}}>
 Home
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#9E9E9E",marginTop:'-5%'}}>
 Khalda-Amman-jordan
</Text>
</VStack>

</HStack>


</Box>
<Box style={{height:105,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
 
<HStack width='90%' mx='auto' my='auto'>
<HStack ml='60%' style={{position:"absolute"}} mt='-1%' space='4%' >
<Feather name="edit" size={20} color="#7F7F7F" />
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#7F7F7F",marginTop:"-3%"}}>
  Edit
</Text >

<Text style={{color:"#D8D8D8"}}>
│
</Text>
<MaterialCommunityIcons name="delete" size={20} color="#7F7F7F" />
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#7F7F7F",marginTop:"-3%"}}>
  Delete
</Text>

</HStack>
 <HStack my='auto'>
 <Mark style={{width:25,height:25}}/>
 </HStack>

<VStack my='auto'  ml='5%'>

<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151"}}>
 Work
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#9E9E9E",marginTop:'-5%'}}>
 Khalda-Amman-jordan
</Text>
</VStack>

</HStack>


</Box>

               </VStack>
               
            </View>
    </View>
        </Modal>

        <Modal isVisible={Addnewaddress} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>Setsaddnewaddress(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",height:80,}}>
            <HStack my='auto' width='90%' mx='auto'>
            <TouchableOpacity activeOpacity={1} onPress={()=>Setsaddnewaddress(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" style={{marginTop:"15%"}} /> 
            </TouchableOpacity>

            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-4%",marginLeft:"2%"}}>
               Add New Address
</Text>
<TouchableOpacity activeOpacity={1} style={{marginLeft:"auto"}} onPress={()=>Setsaddnewaddress(false)}>
<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#C40000"}}>
               Cancel
</Text>
</TouchableOpacity>
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#fff",flex:1}}>
               <VStack  mx='auto' width='90%' >
         
            <VStack ml='2%' space='5%'>
            <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#374151" }}>
 Choose the location on the map 
</Text>
  <TouchableOpacity onPress={()=> setChooselocation(true)}>
   <Box style={{height:133,borderColor:'#707070',borderRadius:20}}  borderWidth='3' >
   
     <ImageBackground
     source={require('../Images/location.png')}
     alt="description of image"
      
   style={{width:width*0.83,height:127,borderRadius:20}}
    
     >
       <VStack mx='auto' my='auto'>
      
      <Circles/>


         
        </VStack>
       </ImageBackground>
   
   </Box>
</TouchableOpacity>
              </VStack>    
        <VStack >
               
               <VStack >
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                   Location type 
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='Home'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  
                />


               </VStack>
                
               <VStack mt='1%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                   Building Number
                </Text>
                    
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='Building Number'
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                 
                  
                />


               </VStack>
               <VStack mt='1%'>
                  
                  <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                     More Note 
                  </Text>
                      
                  <TextArea
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af",height:111}}
                    placeholder='Note ...........'
                    placeholderTextColor='#9CA3Af'
                    mt='3%'
                    
                   
                    
                  />
  
  
                 </VStack>
                
              
            </VStack>

            <TouchableOpacity activeOpacity={1} onPress={()=>{Setsaddnewaddress(false)}} style={{
              marginTop:"5%"
            }}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn , width:width*0.8 }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>ADD</Text>
                    </LinearGradient>
                    </TouchableOpacity>
               </VStack>
               
            </View>
    </View>
        </Modal>
        <Modal isVisible={ChooseLocation} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setChooselocation(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",height:181,}}>
              <VStack width='90%' my='auto' mx='auto'>
            <HStack >
            <TouchableOpacity activeOpacity={1} onPress={()=>setChooselocation(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
 Choose Location
</Text>
              </HStack>
              <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='current location'
                  placeholderTextColor='#9CA3Af'
                  mt='5%'
                 
                  
                />
              </VStack>
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
            <ImageBackground
     source={require('../Images/location.png')}
     alt="description of image"
      
   style={{width:width,height:height}}
    
     >
       <VStack mx='auto' my='auto'>
      
      <Circles/>


         
        </VStack>
       </ImageBackground>
   
                
            </View>
    </View>
        </Modal>
        <Modal isVisible={Favourites} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setfavourites(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",height:80,}}>
            <HStack my='auto' width='90%' mx='auto'>
            <TouchableOpacity activeOpacity={1} onPress={()=>setfavourites(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
 Favourite List 
</Text>
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
               <VStack mt='5%' mx='auto'    space='10%'>
         

                    <Box style={{height:73,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
 
<HStack width='90%' mx='auto' my='auto'>

<Box style={{height:42,width:42,borderRadius:5,borderColor:"#C9C9C9"}}  borderWidth='1'  

  
>
<VStack mx='auto'my='auto'>
<Image
source={require('../Images/Resturant1.png')}
style={{width:31.5,height:30}}
alt="description of image"
/>
</VStack>
</Box>
<HStack my='auto'  ml='3%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
 Resturant Name 
</Text>

</HStack>
<Center ml='auto'>
<Filledheart   style={{width:25,height:22.5}}/>
</Center>
</HStack>


</Box>
<Box style={{height:73,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'
  
>
 
<HStack width='90%' mx='auto' my='auto'>

<Box style={{height:42,width:42,borderRadius:5,borderColor:"#C9C9C9"}}  borderWidth='1'  

  
>
<VStack mx='auto'my='auto'>
<Image
source={require('../Images/Supermarkit1.png')}
style={{width:31.5,height:30}}
alt="description of image"
/>
</VStack>
</Box>
<HStack my='auto'  ml='3%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151"}}>
 Supermarket Name 
</Text>

</HStack>
<Center ml='auto'>
<Filledheart   style={{width:25,height:22.5}}/>
</Center>
</HStack>


</Box>
     
               </VStack>
               
            </View>
    </View>
        </Modal>

        <Modal isVisible={Lang} 
         
         avoidKeyboard={false}
         onBackButtonPress=  { () =>setlang(false)}
         
       >
          <View style={styles.modalContentlanguage}>
          <VStack width='90%' mx='auto'>
           <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#374151", }}>
 Change Language
</Text>
<TouchableOpacity activeOpacity={1} onPress={()=>setlang(false)}>
<VStack ml='auto' mt='-5%'>
<Entypo name="cross" size={30} color="#C4C4C4"  />

</VStack>
</TouchableOpacity>

</VStack>

      <VStack mx='auto' my='auto' space='15%' >

      <Box style={{height:48,width:width*0.8,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.300' 
  
>
 
<HStack mx='auto'>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF", }}>
 English
</Text>
</HStack>
<VStack width='95%' mt='-3%'>
<HStack  ml='auto'>
<Checkbox style={{width:18,height:18}}/>
</HStack>
</VStack>



</Box>
<Box style={{height:48,width:width*0.8,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.300' 
  
>
 
<HStack mx='auto'>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9CA3AF", }}>
عربي
</Text>
</HStack>


</Box> 

   
  
        </VStack>    
        <TouchableOpacity activeOpacity={1} onPress={()=>setlang(false)}>
            <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn, width:width*0.7, marginLeft:'auto',marginRight:"auto",marginTop:'7%' }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Confirm </Text>
                    </LinearGradient>
                    </TouchableOpacity>  

   </View>
       </Modal>
       
</NativeBaseProvider>




       
    </View>
  )
}

export default Menu
const styles = StyleSheet.create({
   
    conatainer:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:"#F6F6F6"
    
        
    },
    
    slidemodel:{
    
      
      margin: 0,
      
      width: width,
  height: height  
  
  
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

  borderWidth: 1,
  borderColor: '#37B3A9',
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
  height:height*0.6,

  width:width*0.9,
  marginLeft:'auto',
  marginRight:"auto",
  
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
      
      
      });