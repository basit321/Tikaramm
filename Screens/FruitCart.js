
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import FruitsCard from '../Components/FruitsCard'
import { getFruits } from '../Data/fruitCartData'
import { useState,useEffect } from 'react'


import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert } from 'react-native';
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

export default function FruitCart({navigation}) {
    const data = getFruits()
    const[Paymentmodal,setpaymentmodal]=useState(false);
    
    const[Locationmodal,setlocationmodal]=useState(false);
    const[Confirmation,setconfirmation]=useState(false);
    const[Confrimed,setconfirmed]=useState(false);
    
    const[Selectpayment,Setselectpayment]=useState(false);
    const[Addnewaddress,Setsaddnewaddress]=useState(false);
    const[ChooseLocation,setChooselocation]=useState(false);
    
    const[bordercolor,Setbordorclor]=useState(false);
    const[bordercolor1,Setbordorclor1]=useState(false);
    const[bordercolor2,Setbordorclor2]=useState(false);
   const[Selected,setselect]= useState(false);
   const[PaymentSelected,setpayemntselect]= useState(false);
   const[Trackorder,settrackorder]=useState(false);
   const[Cancelorder,setcancelorder]=useState(false);
   const[Response,setResponse]=useState(false);
   const Delay=()=>{
 
    setTimeout(function(){
 
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
           setpaymentmodal(false)
           setlocationmodal(false)
           setconfirmation(false)
           setconfirmed(false);
           Setselectpayment(false);
           setselect(false);
           setpayemntselect(false);
         
    }, 2000);
  }
  const Delay2=()=>{
 
    setTimeout(function(){
 
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
           setpaymentmodal(false)
           setlocationmodal(false)
           setconfirmation(false)
           setconfirmed(false);
           Setselectpayment(false);
           setselect(false);
           setpayemntselect(false);
           settrackorder(false);
         
    }, 2000);
  }



    return (
        <View style={{ ...styles.container }}>
            <NativeBaseProvider>
            <StatusBar auto />

            <View style={{ ...styles.cardContainer ,flex:1}}>

                <FlatList
                    numColumns={2}
                    data={data}
                    contentContainerStyle={{ justifyContent: 'space-between' }}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <FruitsCard title={item.title} icon={item.img} price={item.price} />
                    )}
                />

                
            </View>
            <View style={{ ...styles.totalContainer,flex:0.2}}>
                <TouchableOpacity activeOpacity={1} onPress={()=>setlocationmodal(true)}   >
                <Text style={{ color: "#fff", marginRight: 100 }}>Order Now</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ backgroundColor: "rgba(000,000,000,0.4)", paddingHorizontal: 30, paddingVertical: 5, borderRadius: 50 }}>
                    <Text style={{ color: "#fff" }}>20.0 JD</Text>
                </TouchableOpacity>
            </View>

            <Modal isVisible={Locationmodal} style={styles.slidemodel}
           animationIn={'slideInLeft'}
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

             <View style={{backgroundColor:"#00CBA4",height:80,}}>
            <HStack my='auto' width='90%' mx='auto' justifyContent='space-between'>
            <TouchableOpacity activeOpacity={1} onPress={()=>setlocationmodal(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-5%",}}>
 Select Address
</Text>
<TouchableOpacity activeOpacity={1} onPress={()=>setlocationmodal(false)} >
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff", marginTop:"-5%",}}>
 cancel
</Text>
</TouchableOpacity>    
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
               <VStack mt='10%' mx='auto'    space='5%'>
         
               <TouchableOpacity activeOpacity={1}   onPress={()=>{Setsaddnewaddress(true)}} >
                        <Text style={{ color: "#00CBA4", fontFamily: 'arabicBold', fontSize:14 ,
                         marginLeft:'auto',marginRight:'auto'
                    
                    }}>
                          + Add  New Address</Text>
                
                    </TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setselect(!Selected)}>
                    <Box style={{height:86,width:width*0.9,borderRadius:15,borderColor:Selected?'#707070':'#fff'}} bgColor='white' borderWidth='1'  
 shadow='2'
  
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
{Selected?(
<HStack ml='auto' mt='2%'>
<Checkbox  style={{width:24,height:24}}/>
</HStack>
):null}
</HStack>


</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>setselect(!Selected)}>
                    <Box style={{height:86,width:width*0.9,borderRadius:15,borderColor:Selected?'#707070':'#fff'}} bgColor='white' borderWidth='1'  
 shadow='2'
  
>
 
<HStack width='90%' mx='auto' >

 <HStack my='auto' >
 <Mark style={{width:25,height:25}}/>
   
 </HStack>

<VStack  ml='5%'>

<Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151"}}>
 Work
</Text>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#9E9E9E",marginTop:'-5%'}}>
 Khalda-Amman-jordan
</Text>

</VStack>
{Selected?(
<HStack ml='auto' mt='2%'>
<Checkbox  style={{width:24,height:24}}/>
</HStack>
):null}
</HStack>


</Box>
</TouchableOpacity>

               </VStack>
                

               <TouchableOpacity activeOpacity={1} onPress={()=>{setpaymentmodal(true)}} style={{
              marginTop:"60%"
            }}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Choose</Text>
                    </LinearGradient>
                    </TouchableOpacity>
         
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

      
   style={{width:width*0.9,height:127,borderRadius:20}}
    alt="description of image"
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
                        style={{ ...styles.Btn }}
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
               <View style={{backgroundColor:"#00CBA4",height:80,}}>
            <HStack my='auto' width='90%' mx='auto' justifyContent='space-between'>
            <TouchableOpacity activeOpacity={1} onPress={()=>setpaymentmodal(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-5%",}}>
 Payment Method
</Text>
<TouchableOpacity activeOpacity={1} onPress={()=>setpaymentmodal(false)} >
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff", marginTop:"-5%",}}>
 cancel
</Text>
</TouchableOpacity>    
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
               <VStack mt='10%' mx='auto'    space='5%'>
               <TouchableOpacity activeOpacity={1}   onPress={()=>{Setselectpayment(true)}} >
                        <Text style={{ color: "#00CBA4", fontFamily: 'arabicBold', fontSize:14 ,
                         marginLeft:'auto',marginRight:'auto'
                    
                    }}>
                          + Add a new card</Text>
                
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1}   onPress={()=>{setpayemntselect(!PaymentSelected)}} >
 
                    <Box style={{height:61,width:width*0.9,borderRadius:15,borderColor:PaymentSelected?'#707070':'#fff'}} bgColor='white' borderWidth='1'
                    shadow='2'
                    
                    >
                           
<HStack width='90%'  my='auto' mx='auto'>



<Paypal/>
<VStack   ml='5%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
 Paypal
</Text>

</VStack>

{PaymentSelected?(
<HStack ml='auto'>
<Checkbox  style={{width:24,height:24}}/>
</HStack>
):null}
</HStack>


</Box>
</TouchableOpacity>

                    <Box style={{height:61,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'
                    shadow='2'
                    
                    >
                           
<HStack width='90%'  my='auto' mx='auto'>


<Visa  style={{width:33,height:30}}  />


<VStack   ml='5%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
 *** **** *** *213
</Text>

</VStack>


</HStack>


</Box>
<Box style={{height:61,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'
                    shadow='2'
                    
                    >
                           
<HStack width='90%'  my='auto' mx='auto'>


<Mastercard  style={{width:33,height:30}}  />


<VStack   ml='5%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
 **** **** *** *314
</Text>

</VStack>


</HStack>


</Box>


               </VStack>

               
               <TouchableOpacity activeOpacity={1} onPress={()=>{setconfirmation(true)}} style={{
              marginTop:"50%"
            }}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Choose</Text>
                    </LinearGradient>
                    </TouchableOpacity>
         
               
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
        <Modal isVisible={Confirmation} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setconfirmation(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>
               <View style={{backgroundColor:"#00CBA4",height:80,}}>
            <HStack my='auto' width='90%' mx='auto' justifyContent='space-between'>
            <TouchableOpacity activeOpacity={1} onPress={()=>setconfirmation(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#fff" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:20,color:"#fff", marginTop:"-5%",}}>
 Confirmation
</Text>
<TouchableOpacity activeOpacity={1} onPress={()=>setconfirmation(false)} >
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#fff", marginTop:"-5%",}}>
 cancel
</Text>
</TouchableOpacity>    
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
                
                 
                  <VStack  mx='auto'>
                    
                    <VStack mt='3%' >
                    <Text style={{fontFamily:'arabicBold',fontSize:18,color:"#374151",marginLeft:'2%'}}>
 Payment Method
</Text> 
<Box style={{height:61,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'
                    shadow='2' mt='5%'
                    
                    >
                           
<HStack width='90%'  my='auto' mx='auto'>


<Paypal />


<VStack   ml='5%'>

<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",}}>
 Paypal
</Text>

</VStack>


</HStack>


</Box>

                    </VStack>
                    <VStack mt='2%'  >
                    <Text style={{fontFamily:'arabicBold',fontSize:18,color:"#374151",marginLeft:'2%'}}>
 Address
</Text> 
<Box style={{height:86,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'  
 shadow='2' mt='5%'
  
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

                    </VStack>
                      
                    <Box style={{height:256,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'  
 shadow='2' mt='5%'
  
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
               
               <TouchableOpacity activeOpacity={1} onPress={()=>{setconfirmed(true)}} style={{
              
            }}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Confirm </Text>
                    </LinearGradient>
                    </TouchableOpacity>
         
               
            </View>
    </View>
        </Modal>
        <Modal isVisible={Confrimed} 
         
         avoidKeyboard={false}
         onBackButtonPress=  { () =>setconfirmed(false)}
         style={{marginTop:"10%", marginLeft:"auto",marginRight:"auto"}}
       >
           
          <VStack style={styles.modalContentconfrimed}  ml='-3%' >
                 
                 <VStack mx='auto' mt='-27%'>
                 <Confirmation_icon/>
                 </VStack>
                 <VStack mx='auto'>
    <Text style={{fontFamily:'arabicRegular',fontSize:24,color:"#374151", marginLeft:"auto"
    ,marginRight:"auto" }}>
 Order Confirmed 
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#6B7280", marginLeft:"auto"
    ,marginRight:"auto" }}>
 You can track the delivery at {'\n          '}Section "Requests"
</Text>
 
          <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('Dashboard'),Delay()}} style={{
              
            }}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}> Go To Home  </Text>
                    </LinearGradient>
                    </TouchableOpacity>
         
                    <TouchableOpacity activeOpacity={1} onPress={()=>{settrackorder(true)}} style={{
              
            }}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn1,width:width*0.8 }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Track the order</Text>
                    </LinearGradient>
                    </TouchableOpacity>
         
  
  
                 </VStack>
   </VStack>
       </Modal>
       <Modal isVisible={Trackorder} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>navigation.navigate('Dashboard')}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",height:80,}}>
            <HStack my='auto' width='90%' mx='auto'>
            <TouchableOpacity activeOpacity={1} onPress={()=>{navigation.navigate('Dashboard'),Delay2()}} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
 Supermarket Order
</Text>
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
               <VStack mt='5%' mx='auto'>
                  <ImageBackground
                   source={require('../Images/Rectangle.png')}
                   style={{width:width*0.9,height:169}}
                   alt="description of image"
                  > 
                    <VStack mx='auto' my='auto'>
                   <Image
                    source={require('../Images/supermarket2.png')}
                    style={{width:76,height:76,marginLeft:"auto",marginRight:"auto"}}
                    alt="description of image"
                   
                   />
        <Text style={{fontFamily:'arabicMedium',fontSize:18,color:"#fff", marginTop:"2%",marginLeft:"2%"}}>
        The request has been confirmed{'\n        '}and is being processed
</Text> 

                    </VStack>

                  </ImageBackground>
                  <Box style={{height:86,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'  
 shadow='2' mt='5%'
  
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
<Box style={{height:256,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'  
 shadow='2' mt='5%'
  
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
          
   <TouchableOpacity activeOpacity={1} onPress={()=>setcancelorder(true)}>
    <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#C40000", marginLeft:"auto",
    marginRight:"auto", marginTop:"5%"}}>

 Cancel order
</Text>
     </TouchableOpacity>
                  
               </VStack>
            </View>
    </View>
        </Modal>
        <Modal isVisible={Cancelorder} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setcancelorder(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,


borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>

             <View style={{backgroundColor:"#fff",height:80,}}>
            <HStack my='auto' width='90%' mx='auto'>
            <TouchableOpacity activeOpacity={1} onPress={()=>setcancelorder(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
            <Text style={{fontFamily:'arabicRegular',fontSize:18,color:"#374151", marginTop:"-5%",marginLeft:"2%"}}>
 Cancel Order
</Text>
              </HStack>
              
            </View>
            <View style={{backgroundColor:"#F6F6F6",flex:1}}>
                <VStack mt='3%' mx='auto' space='5%'>
                <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151", marginRight:"auto",marginLeft:"auto"}}>
                Are you sure you want to cancel the order?
</Text> 

<Box style={{height:50,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'
                    shadow='2' 
                    
                    >
                        <HStack my='auto' width='90%' mx='auto'>
                         <Center>
                        <Box style={{height:22,width:22,borderColor:'#C5C4D1'}} bgColor='white' borderWidth='1'
                    shadow='2' borderRadius='full'
                    
                    >
                        </Box>
                        </Center>
                        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",marginLeft:"2%"}}>
                        No response to the request

</Text>
                        </HStack>
                        </Box>
                        <Box style={{height:50,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'
                    shadow='2' 
                    
                    >
                        <HStack my='auto' width='90%' mx='auto'>
                         <Center>
                        <Box style={{height:22,width:22,borderColor:'#C5C4D1'}} bgColor='white' borderWidth='1'
                    shadow='2' borderRadius='full'
                    
                    >
                        </Box>
                        </Center>
                        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",marginLeft:"2%"}}>
                        No response to the request

</Text>
                        </HStack>
                        </Box><Box style={{height:50,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'
                    shadow='2' 
                    
                    >
                        <HStack my='auto' width='90%' mx='auto'>
                         <Center>
                        <Box style={{height:22,width:22,borderColor:'#C5C4D1'}} bgColor='white' borderWidth='1'
                    shadow='2' borderRadius='full'
                    
                    >
                        </Box>
                        </Center>
                        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",marginLeft:"2%"}}>
                        No response to the request

</Text>
                        </HStack>
                        </Box>
                        <Box style={{height:172,width:width*0.9,borderRadius:15,borderColor:'#fff'}} bgColor='white' borderWidth='1'
                    shadow='2' 
                    
                    >
                        <HStack  mt='2%' width='90%' mx='auto'>
                         <Center>
                      
                        <Checkbox style={{height:22,width:22,}}                 
                    
                    >
                        </Checkbox>
                        </Center>
                        <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"#374151",marginLeft:"2%"}}>
                          Another Response 

</Text>
                        </HStack>

                        <TextArea
                   borderRadius='xl'
                   style={{borderColor:"#BEC5D1",color:"#9CA3Af",height:111}}
                    placeholder='Response..'
                    placeholderTextColor='#9CA3Af'
                    mt='3%'
                    width='90%'
                    mx='auto'
                    
                   
                    
                  />
                        </Box>



                </VStack>
                    
                
                <TouchableOpacity  activeOpacity={1}  style={{ ...styles.loginBtn ,width:width*0.7 }} 
                onPress={()=>{navigation.navigate('Dashboard')}}
                
                >
                    <Text style={{ color: '#C40000', fontFamily: 'arabicBold' }}>Cancel Order</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={1} onPress={()=>{setcancelorder(false)}}>
                    <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn1,width:width*0.7}}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Dont Cancel Order</Text>
                    </LinearGradient>
                </TouchableOpacity>

            </View>
    </View>
        </Modal>

     
            </NativeBaseProvider>
        </View >

    )
}

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
        width:width*0.8
        
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
   
    width:width*0.9,
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