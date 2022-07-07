

import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground, TouchableOpacity,Alert,ScrollView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
    Avatar,
  
    Heading,
    Input,
    Form,
    FormControl,
    Item,
    Label,
    ArrowDownIcon
  

  } from "native-base"
  import Modal from 'react-native-modal'; 

  import { Ionicons } from '@expo/vector-icons';

import Logo from "../Components/Logo"

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;





const Userapp =({navigation})=> {
    const[design,setdesin]=useState(false);
    const[forgetdesin,setforgetdesin]=useState(false);
    const[successmodal,setsucessmodal]=useState(false);
    const[disapper,setdisapper]=useState(true);
    
const[visible,setvisible]=useState(false);
const[loginvisible,selogintvisible]=useState(false);
const[createaccount,setcreateaccount]=useState(true);
const[modallogin,setmodallogin]=useState(false);
const[Forgetpaswwordmodel,setforgetpaswordmodel]=useState(false);
const[Otpmodal,setotpmodal]=useState(false);



const Delay=()=>{
 
    setTimeout(function(){
 
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      setcreateaccount(true)
      setmodallogin(false)
      
 
    }, 1000);
 
 
  }
  const navigatedelay=()=>{
 
    setTimeout(function(){
 
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      setcreateaccount(false)
        setmodallogin(false)
        setvisible(false) 
        setotpmodal(false)
        selogintvisible(false)
 
    }, 2000);
 
 
  }

  const forDelay=()=>{
 
    setTimeout(function(){
 
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      setcreateaccount(false)
      setmodallogin(true)
      
      
 
    }, 1000);
 
 
  }
  const back=()=>{


    setvisible(false),
    setcreateaccount(false),
    setmodallogin(false),
    selogintvisible(false)
  }
  
  
    return (
        <NativeBaseProvider>
            
             <StatusBar style="auto" />
        <ImageBackground source={require('../Images/gradient.png')} style={{flex: 1,
            width: width,
            height: height * 1.1,
            alignItems: 'center',
            justifyContent: 'center',
            
          
            }}
            alt="description of image"   
            
            >
    
            <VStack mb='15%' mr='10%'>
                <Logo />
            </VStack>
            <View style={styles.box}>
                <View style={{ ...styles.textContainer }}>
                    <Text style={{ fontFamily: 'arabicRegular', fontSize: 24, marginBottom: 7 }}>
                        Welcome
                    </Text>
                    <Text style={{ fontFamily: 'arabicRegular', color: "#4B5563", fontSize: 14, lineHeight: 15 }}>
                        Before enjoying Tikramm services
                    </Text>
                    <Text style={{ fontFamily: 'arabicRegular', color: "#4B5563", fontSize: 14, lineHeight: 15 }}>
                        Please register first
                    </Text>
                </View>
                <TouchableOpacity activeOpacity={1} onPress={()=>{setvisible(true),setcreateaccount(true)}}>
                    <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.createBtn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Create Account</Text>
                    </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity  activeOpacity={1}  style={{ ...styles.loginBtn }} 
                onPress={()=>{selogintvisible(true),setcreateaccount(false),setmodallogin(true)}}
                
                >
                    <Text style={{ color: '#37B3A9', fontFamily: 'arabicBold' }}>Login</Text>
                </TouchableOpacity>
            </View>
           
        </ImageBackground>

        <Modal isVisible={visible} style={styles.bottomModal}
           animationInTiming={300}
         animationOutTiming={600}
          backdropTransitionOutTiming={1000}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>back()}
        >
           <View style={styles.modalContent}>
        
           <ImageBackground source={require('../Images/gradient.png')} style={{
            width: width,
            height: height * 1.1,
            alignItems: 'center',
            justifyContent: 'center',
            
            }}
            alt="description of image"
            >
            
            <View style={styles.child}>
            <View  style={{flex:modallogin?0.5:0.35}}>
            <VStack opacity={0.5} mt='30%'  mx='auto' >
                <Logo />
            </VStack>
            </View>
            {createaccount?(

            <Box style={{backgroundColor:"#fff",flex:1,borderTopRightRadius:32,borderTopLeftRadius:32}}   >
            <TouchableOpacity activeOpacity={1} onPress={()=>{setvisible(false)}}>
              <VStack  mx='auto'  mt='5%'  width='20%'  borderTopWidth='8'  borderColor='gray.300'
               borderRadius='3xl'
              >
                    

              </VStack>
              </TouchableOpacity>
            
              
               <VStack mt='5%'>
               
               <HStack width='80%' mx='auto' justifyContent='space-between'>
               
               <VStack borderBottomWidth='4' width='50%' pb='5%' style={{borderColor:"#37B3A9"}}>
                <Center>
                <Text style={{fontSize:18,color:"#37B3A9"}} >
                    Create Account 
                </Text>
</Center>
               </VStack>
             
               <VStack  width='50%' pb='5%'>
                <Center>
                <TouchableOpacity activeOpacity={1}  onPress={()=>{setcreateaccount(false),setmodallogin(true)}}>
                <Text style={{fontSize:18,color:"#89909E"}} >
                    Login 
                </Text>
                </TouchableOpacity>
</Center>
               </VStack>


               </HStack>


            <VStack width='85%' mx='auto'>
               
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
              <TouchableOpacity activeOpacity={1} onPress={()=>{setotpmodal(true),forDelay()}}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Resgister</Text>
                    </LinearGradient>
</TouchableOpacity>
            </VStack>
            

               </VStack>





            </Box>
            ):null}

{modallogin?(
            <Box style={{backgroundColor:"#fff",flex:1,borderTopRightRadius:32,borderTopLeftRadius:32}}   >
            <TouchableOpacity activeOpacity={1} onPress={()=>{setvisible(false),setdesin(false), Delay()
            }}>
              <VStack  mx='auto'  mt='5%'  width='20%'  borderTopWidth='8'  borderColor='gray.300'
               borderRadius='3xl'
              >
                    

              </VStack>
              </TouchableOpacity>
            
              
               <VStack mt='5%'>
               
               <HStack width='80%' mx='auto' justifyContent='space-between'>
               
             
               <VStack  width='50%' pb='5%'>
                <Center>
                <TouchableOpacity activeOpacity={1}  onPress={()=>{setcreateaccount(true),setmodallogin(false)}}>
                <Text style={{fontSize:18,color:"#89909E"}} >
                    Create Account
                </Text>
                </TouchableOpacity>
</Center>
               </VStack>
               <VStack borderBottomWidth='4' width='50%' pb='5%' style={{borderColor:"#37B3A9"}}>
                <Center>
                <Text style={{fontSize:18,color:"#37B3A9"}} >
                    Login
                </Text>
</Center>
               </VStack>
             

               </HStack>


            <VStack width='85%' mx='auto'>
               
               
                
               <VStack mt='5%'>
                  
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
                 <HStack ml='auto'>
                <TouchableOpacity activeOpacity={1} onPress={()=> {setforgetpaswordmodel(true),setdisapper(true)}}>
                 <Text style={{fontFamily: 'arabicRegular',fontSize:12,color:"#59A599"}} >
                    Forget Password ?
                </Text>
                   </TouchableOpacity> 
                 </HStack>


               </VStack>
<TouchableOpacity activeOpacity={1} onPress={()=>  {navigation.navigate('Dashboard'),navigatedelay()} }>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Login</Text>
                    </LinearGradient>
                    </TouchableOpacity>

            </VStack>
            

               </VStack>





            </Box>
            ):null}
             


            <View>

            </View>

            
            <StatusBar style="auto" />
            </View>
        </ImageBackground>

    </View>
        </Modal>
        <Modal isVisible={loginvisible} style={styles.bottomModal}
           animationInTiming={300}
         animationOutTiming={600}
          backdropTransitionOutTiming={1000}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>back()}
        >
           <View style={styles.modalContent}>
        
           <ImageBackground source={require('../Images/gradient.png')} style={{
            width: width,
            height: height * 1.1,
            alignItems: 'center',
            justifyContent: 'center',
            
            }}>
            
            <View style={styles.child}>
            <View  style={{flex:modallogin?0.5:0.35}}>
            <VStack opacity={0.5} mt='30%'  mx='auto' >
                <Logo />
            </VStack>
            </View>
            {createaccount?(
            <Box style={{backgroundColor:"#fff",flex:1,borderTopRightRadius:32,borderTopLeftRadius:32}}   >
            <TouchableOpacity activeOpacity={1} onPress={()=>{selogintvisible(false),setdesin(false)}}>
              <VStack  mx='auto'  mt='5%'  width='20%'  borderTopWidth='8'  borderColor='gray.300'
               borderRadius='3xl'
              >
                    

              </VStack>
              </TouchableOpacity>
            
              
               <VStack mt='5%'>
               
               <HStack width='80%' mx='auto' justifyContent='space-between'>
               
               <VStack borderBottomWidth='4' width='50%' pb='5%' style={{borderColor:"#37B3A9"}}>
                <Center>
                <Text style={{fontSize:18,color:"#37B3A9"}} >
                    Create Account 
                </Text>
</Center>
               </VStack>
             
               <VStack  width='50%' pb='5%'>
                <Center>
                <TouchableOpacity activeOpacity={1}  onPress={()=>{setcreateaccount(false),setmodallogin(true)}}>
                <Text style={{fontSize:18,color:"#89909E"}} >
                    Login 
                </Text>
                </TouchableOpacity>
</Center>
               </VStack>


               </HStack>


            <VStack width='85%' mx='auto'>
               
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
                  onFocus={() => {
                    updateBorderColor({ borderColor: 'red' });
                  }}
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
              <TouchableOpacity onPress={()=>{setotpmodal(true),forDelay()}}>
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Resgister</Text>
                    </LinearGradient>
</TouchableOpacity>
            </VStack>
            

               </VStack>





            </Box>
            ):null}

{modallogin?(
            <Box style={{backgroundColor:"#fff",flex:1,borderTopRightRadius:32,borderTopLeftRadius:32}}   >
            <TouchableOpacity activeOpacity={1} onPress={()=>{selogintvisible(false),setdesin(false),Delay()}}>
              <VStack  mx='auto'  mt='5%'  width='20%'  borderTopWidth='8'  borderColor='gray.300'
               borderRadius='3xl'
              >
                    

              </VStack>
              </TouchableOpacity>
            
              
               <VStack mt='5%'>
               
               <HStack width='80%' mx='auto' justifyContent='space-between'>
               
             
               <VStack  width='50%' pb='5%'>
                <Center>
                <TouchableOpacity activeOpacity={1}  onPress={()=>{setcreateaccount(true),setmodallogin(false)}}>
                <Text style={{fontSize:18,color:"#89909E"}} >
                    Create Account
                </Text>
                </TouchableOpacity>
</Center>
               </VStack>
               <VStack borderBottomWidth='4' width='50%' pb='5%' style={{borderColor:"#37B3A9"}}>
                <Center>
                <Text style={{fontSize:18,color:"#37B3A9"}} >
                    Login
                </Text>
</Center>
               </VStack>
             

               </HStack>


            <VStack width='85%' mx='auto'>
               
               
                
               <VStack mt='5%'>
                  
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
                                    <HStack ml='auto'>
                <TouchableOpacity activeOpacity={1} onPress={()=>{ setforgetpaswordmodel(true),setdisapper(true)}} >
                 <Text style={{fontFamily: 'arabicRegular',fontSize:12,color:"#59A599"}} >
                    Forget Password ?
                </Text>
                   </TouchableOpacity> 
                 </HStack>




               </VStack>
               <TouchableOpacity activeOpacity={1}  onPress={()=>  {navigation.navigate('Dashboard'),navigatedelay()} }>

               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Login</Text>
                    </LinearGradient>
</TouchableOpacity>
            </VStack>
               

               </VStack>





            </Box>
            ):null}
             


            <View>

            </View>

            
            <StatusBar style="auto" />
            </View>
        </ImageBackground>

    </View>
        </Modal>
{disapper?(
        <Modal isVisible={Forgetpaswwordmodel} style={styles.slidemodel}
           animationIn={'slideInLeft'}
           animationOut={'slideOutLeft'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={300}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setforgetpaswordmodel(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,
padding: 22,

borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>
            <VStack style={{marginTop:24}}>
            <TouchableOpacity activeOpacity={1} onPress={()=>setforgetpaswordmodel(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
          
             <VStack style={{marginTop:12}}>
                <Text style={{fontFamily: 'arabicRegular',fontSize:24 ,color:"#374151" ,}} >
                    Forget Paswword
                </Text>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#9CA3AF" ,}} >
                    Enter your resgister email below 
                </Text>
                  

                 <VStack mt='5%'>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:14,marginLeft:'3%'}} >
                    Email address
                </Text>
                   
                     
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='Ab967464@gmail.com '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  type='text'
                  
                />
      
      <Text style={{fontFamily: 'arabicRegular',fontSize:15,marginLeft:'5%',marginTop:"5%" 
      ,color:'#9CA3AF'}} >
                    Remember the Password ? {' '}
                    <Text style={{color:'#37B3A9' ,marginLeft:2}}>
                     Sign in
                    </Text>
                </Text>

               </VStack>
                
             </VStack>
              <TouchableOpacity activeOpacity={1} onPress={()=>{setsucessmodal(true)}}>
             <VStack mt='95%'>
                
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Submit</Text>
                    </LinearGradient>
                  </VStack>
                  </TouchableOpacity>

            </VStack>

    </View>
        </Modal>
):null}

        <Modal isVisible={successmodal} style={styles.bottomModal}
           animationInTiming={500}
         animationOutTiming={600}
          backdropTransitionOutTiming={1000}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setsucessmodal(false)}
        >
           <View style={styles.modalContent}>
              <Image
               source={require('../Images/Icon.png')}
              style={{width:180,height:180}}
              alt="description of image"
              
              />  
              <VStack>
              <Text style={{fontFamily: 'arabicRegular',fontSize:24 ,color:"#374151", marginLeft:"auto",
              marginRight:"auto"
                
            
            }} >
                    Success
                </Text>
                <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#374151",}} >
                    Please check your email for create {'\n               '} a new password


                </Text>
              </VStack>
                        <VStack mt='80%'>
             <Text style={{fontFamily: 'arabicRegular',fontSize:16
      ,color:'#9CA3AF',marginLeft:"auto",marginRight:"auto"}} >
                    Can't get email ? {' '}
                    <Text style={{color:'#37B3A9'}}>
                     Resubmit
                    </Text>
                </Text>
                <TouchableOpacity activeOpacity={1} onPress={()=>{setdisapper(false),setforgetdesin(false),setsucessmodal(false)}}>
 
               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Back Email</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                  </VStack>
                  


    </View>
        </Modal>
        <Modal isVisible={Otpmodal} style={styles.slidemodel}
           animationIn={'slideInRight'}
           animationOut={'slideOutRight'}
          backdropTransitionOutTiming={1000}
          animationInTiming={500}
          animationOutTiming={500}
          avoidKeyboard={false}
          onBackButtonPress=  { () =>setotpmodal(false)}
        >
           <View style={{

backgroundColor: 'white',
flex:1,
padding: 22,

borderRadius: 0,
borderColor: 'rgba(0, 0, 0, 0.1)',



           }}>
            <VStack style={{marginTop:24}}>
            <TouchableOpacity activeOpacity={1} onPress={()=>setotpmodal(false)} >
            <Ionicons name="ios-arrow-back-sharp" size={24} color="#374151" /> 
            </TouchableOpacity>
          
             <VStack style={{marginTop:12}}>
                <Text style={{fontFamily: 'arabicRegular',fontSize:24 ,color:"#374151" ,}} >
                    Enter the code 
                </Text>
                  
                <Text style={{fontFamily: 'arabicRegular',fontSize:16 ,color:"#9CA3AF" ,}} >
                    Enter the code we  send to your {'\n'}phone please check and fill it
                </Text>
                  

                 <VStack mt='5%'>
                  <HStack justifyContent='space-between'>
                  <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:21
                 ,fontFamily: 'robotoRegular',textAlign:"center"}}
                  placeholder=' 1 '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  width='20%'
                   py='20%'
                   keyboardType='decimal-pad'
                
                  
                />
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:21
                 ,fontFamily: 'robotoRegular',textAlign:"center"}}
                  placeholder=' 1 '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  width='20%'
                   py='20%'
                   keyboardType='decimal-pad'
                
                  
                />
                <Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:21
                 ,fontFamily: 'robotoRegular',textAlign:"center"}}
                  placeholder=' 1 '
                  placeholderTextColor='#9CA3Af'
                  mt='3%'
                  width='20%'
                   py='20%'
                   keyboardType='decimal-pad'
                
                  
                /><Input
                borderRadius='xl'
                style={{borderColor:"#BEC5D1",color:"#9CA3Af",fontSize:21
                ,fontFamily: 'robotoRegular',textAlign:"center"}}
                 placeholder=' 1 '
                 placeholderTextColor='#9CA3Af'
                 mt='3%'
                 width='20%'
                  py='20%'
                  keyboardType='decimal-pad'
               
                 
               />
                </HStack>
      
               </VStack>
                
             </VStack>
              
             <VStack mt='90%'>
             <Text style={{fontFamily: 'arabicRegular',fontSize:17
      ,color:'#9CA3AF',marginLeft:"auto",marginRight:"auto"}} >
                    I didnt receive the code  {'\n         '}
                    <Text style={{color:'#37B3A9'}}>
                     Resend code 
                    </Text>
                </Text>
                <TouchableOpacity activeOpacity={1} onPress={()=>  {navigation.navigate('Dashboard'),navigatedelay()} }>

               <LinearGradient
                        colors={['#37B3A9', '#37B3A9', '#E8E6A5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={{ ...styles.Btn }}
                    >
                        <Text style={{ color: "white", fontFamily: 'arabicBold', }}>Keep going</Text>
                    </LinearGradient>
                    </TouchableOpacity>
                  </VStack>
            

            </VStack>

    </View>
        </Modal>
        </NativeBaseProvider>
    );
}
export default Userapp;
const styles = StyleSheet.create({
    backImage: {
        flex: 1,
        width: width,
        height: height * 1.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100,
        marginBottom: 100
    },
    box: {
        borderRadius: 10,
        backgroundColor: "#fff",
        textAlign: 'center',
        alignItems: 'center',
        width: width * 0.9,
        height: height * 0.6
    },
    createBtn: {
        width: width * 0.6,
        height: 40,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        paddingBottom: 4
    },
    loginBtn: {
        width: width * 0.6,
        height: 40,
        borderRadius: 10,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 1,
        borderColor: '#37B3A9',
        paddingBottom: 4
    },
    
  bottomModal: {
    justifyContent: 'flex-end',
    margin: 0,
    position:"absolute",
    width: width,
height: height  

  
  },

  slidemodel:{
    
        justifyContent: 'flex-end',
        margin: 0,
        
        width: width,
    height: height  
    
    
  },
  slidemodelcontent:{
    backgroundColor: 'white',
    flex:1,
    padding: 22,
   
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0.1)',



  },

  modalContent: {
    backgroundColor: 'white',
    flex:1,
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
    borderColor: 'rgba(0, 0, 0, 0.1)',

  },
  createaccountmodel:{

    backgroundColor: 'white',
    
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'rgba(0, 0, 0, 0.1)',
    height:"40%",

  },
  child: {
    flex: 1,
    width: width,
    height: height * 1.1,
    backgroundColor: 'rgba(0,0,0,0.4)'
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
   
});
