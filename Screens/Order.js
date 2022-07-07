import React from 'react';
import { useState,useEffect } from 'react'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, ImageBackground,BackHandler, TouchableOpacity,Alert,ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Location,Bellicon,Payment,Shoppingcart,Heart,Info,Language,Phonecall,Email,Avatar
  ,Checkbox,Mark,Circles,Map_mark,Filledheart,AeroPlane,Hotels,Package

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
  import { Feather,Ionicons ,Entypo ,MaterialCommunityIcons,AntDesign,EvilIcons} from '@expo/vector-icons'; 
import { Navigation } from 'react-native-navigation';

  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  
  
  


const Order = ({navigation}) => {
  const[Currentorder,setcurrentorder]=useState(true);
  const[Previousorder,setpreviousorder]=useState(false);

  useEffect(() => {
   setcurrentorder(true);
   setpreviousorder(false);
  },[]);

  return (
    <View style={styles.conatainer}>
       <StatusBar style="dark"/>
<NativeBaseProvider> 

<VStack style={{flex:0.45,backgroundColor:"#fff"}} shadow='2'>

<Header containerStyle={{  borderWidth:0 }}

     backgroundColor={"#fff"}
     

     
    
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
<VStack width='90%' mx='auto'>
<Input
                 borderRadius='xl'
                 style={{borderColor:"#BEC5D1",color:"#9CA3Af"}}
                  placeholder='search'
                  placeholderTextColor='#9CA3Af'
                  mt='4%'
                  InputLeftElement={
                     
                    <EvilIcons name="search" size={24} color="gray" />
                  }  />


</VStack>
<HStack mt='4%' justifyContent='space-between'>

<VStack borderBottomWidth={Currentorder?'4':'0'} width='40%' pb='3%' style={{borderColor:Currentorder?"#37B3A9":'#89909E'}}>
           <TouchableOpacity activeOpacity={1}  onPress={()=>{setcurrentorder(!Currentorder),setpreviousorder(!Previousorder)}}>
              <Center>
              <Text style={{fontSize:18,color:Currentorder?"#37B3A9":'#89909E',fontFamily: 'arabicRegular'}} >
              Current Orders
              </Text>
</Center>
</TouchableOpacity>
             </VStack>
             <VStack borderBottomWidth={Previousorder?'4':'0'} width='43%' pb='3%' style={{borderColor:Previousorder?"#37B3A9":'#89909E'}}>
           <TouchableOpacity activeOpacity={1} onPress={()=>{setpreviousorder(!Previousorder),setcurrentorder(!Currentorder)}}>
              <Center>
              <Text style={{fontSize:18,color:Previousorder?"#37B3A9":'#89909E',fontFamily: 'arabicRegular'}} >
              Previous Orders
              </Text>
</Center>
</TouchableOpacity>
             </VStack>
             
             
           
</HStack>
</VStack>

{Currentorder?(
<ScrollView style={{flex:1,}}>

<VStack  mx='auto' mt='5%' space='3%' style={{height:1400}} >
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Trackresturant')}>
<Box style={{height:154,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<VStack width='100%' mx='auto'>
 
<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <Image
 source={require('../Images/supermarket2.png')}
 style={{width:20,height:17.19}}
 alt='123'
 />
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
SuperMarket
</Text>
 </HStack>

</VStack>

<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
19 -10- 2020- 02:00AM
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Number
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
12739430493
</Text>
</VStack>
 </HStack>



</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Order status
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Total : 120 JOD
</Text>


 </HStack>


</VStack>

</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Trackresturant1')}>
<Box style={{height:208,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<VStack width='100%' mx='auto'>
 
<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <Image
 source={require('../Images/Resturant(3).png')}
 style={{width:20,height:17.19}}
 alt='123'
 />
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Restaurants
</Text>
 </HStack>

</VStack>

<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' mt='2%'>
<Image
 source={require('../Images/Resturant4.png')}
 style={{width:40,height:40}}
 alt='123'
 />
 <Center>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
  Resturant name 
</Text>
</Center>
</HStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
19 -10- 2020- 02:00AM
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Number
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
12739430493
</Text>
</VStack>
 </HStack>



</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Order status
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Total : 120 JOD
</Text>


 </HStack>


</VStack>

</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Trackflying')}>
<Box style={{height:273,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<VStack width='100%' mx='auto'>
 
<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <AeroPlane/>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Flying tickets
</Text>
 </HStack>

</VStack>

<VStack  borderBottomWidth='1' borderColor='gray.100'>
<VStack width='90%' mx='auto' mt='2%'>

 
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
  Departure and Return date  
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",marginTop:"-2%" 
}}>
  20/10/2021 - 21/10/2021
</Text>



</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
From
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
Amman-Jordan
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
To
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
Amman-Jordan
</Text>
</VStack>
 </HStack>
 <HStack width='90%' mx='auto'  justifyContent='space-between'>

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
19 -10- 2020- 02:00AM
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Number
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
12739430493
</Text>
</VStack>
 </HStack>




</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Order status
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Total : 120 JOD
</Text>


 </HStack>


</VStack>

</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Hoteltrack')}>
<Box style={{height:273,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<VStack width='100%' mx='auto'>
 
<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <Hotels/>
 <Center>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Hotels
</Text>
</Center>
 </HStack>

</VStack>

<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <Image
 source={require('../Images/Hotel.png')}
 style={{width:40,height:40}}
 alt='123'
 />
 <Center>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Hotel name 
</Text>
</Center>
 </HStack>

<VStack width='90%' mx='auto' mt='2%'>

 
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
  Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",marginTop:"-2%" 
}}>
  20/10/2021 - 21/10/2021
</Text>



</VStack>

 <HStack width='90%' mx='auto'  justifyContent='space-between'>

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
19 -10- 2020- 02:00AM
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Number
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
12739430493
</Text>
</VStack>
 </HStack>




</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Order status
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Total : 120 JOD
</Text>


 </HStack>


</VStack>

</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Trackorder')}>
<Box style={{height:273,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<VStack width='100%' mx='auto'>
 
<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <Package/>
 <Center>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Deliver Anything
</Text>
</Center>
 </HStack>

</VStack>

<VStack  borderBottomWidth='1' borderColor='gray.100'>
<VStack width='90%' mx='auto' mt='2%'>



</VStack>
<VStack width='90%' mx='auto' my='3%' space="2%">

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
From
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
Amman-Jordan
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
To
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
Amman-Jordan
</Text>
</VStack>
 </VStack>
 <HStack width='90%' mx='auto'  justifyContent='space-between'>

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
19 -10- 2020- 02:00AM
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Number
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
12739430493
</Text>
</VStack>
 </HStack>




</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Order status
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Total : 120 JOD
</Text>


 </HStack>


</VStack>

</Box>
</TouchableOpacity>





</VStack>


</ScrollView>
):null}
{Previousorder?(
  <ScrollView style={{flex:1,}}>

<VStack  mx='auto' mt='5%' space='3%' style={{height:1400}} >
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Trackresturant1')}>
<Box style={{height:208,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<VStack width='100%' mx='auto'>
 
<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <Image
 source={require('../Images/Resturant(3).png')}
 style={{width:20,height:17.19}}
 alt='123'
 />
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Restaurants
</Text>
 </HStack>

</VStack>

<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' mt='2%'>
<Image
 source={require('../Images/Resturant4.png')}
 style={{width:40,height:40}}
 alt='123'
 />
 <Center>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
  Resturant name 
</Text>
</Center>
</HStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
19 -10- 2020- 02:00AM
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Number
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
12739430493
</Text>
</VStack>
 </HStack>



</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Order status
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Total : 120 JOD
</Text>


 </HStack>


</VStack>

</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Trackresturant')}>
<Box style={{height:154,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<VStack width='100%' mx='auto'>
 
<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <Image
 source={require('../Images/supermarket2.png')}
 style={{width:20,height:17.19}}
 alt='123'
 />
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
SuperMarket
</Text>
 </HStack>

</VStack>

<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
19 -10- 2020- 02:00AM
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Number
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
12739430493
</Text>
</VStack>
 </HStack>



</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Order status
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Total : 120 JOD
</Text>


 </HStack>


</VStack>

</Box>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Hoteltrack')}>
<Box style={{height:273,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<VStack width='100%' mx='auto'>
 
<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <Hotels/>
 <Center>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Hotels
</Text>
</Center>
 </HStack>

</VStack>

<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <Image
 source={require('../Images/Hotel.png')}
 style={{width:40,height:40}}
 alt='123'
 />
 <Center>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Hotel name 
</Text>
</Center>
 </HStack>

<VStack width='90%' mx='auto' mt='2%'>

 
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
  Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",marginTop:"-2%" 
}}>
  20/10/2021 - 21/10/2021
</Text>



</VStack>

 <HStack width='90%' mx='auto'  justifyContent='space-between'>

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
19 -10- 2020- 02:00AM
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Number
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
12739430493
</Text>
</VStack>
 </HStack>




</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Order status
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Total : 120 JOD
</Text>


 </HStack>


</VStack>

</Box>
</TouchableOpacity>
<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Trackorder')}>
<Box style={{height:273,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<VStack width='100%' mx='auto'>
 
<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <Package/>
 <Center>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Deliver Anything
</Text>
</Center>
 </HStack>

</VStack>

<VStack  borderBottomWidth='1' borderColor='gray.100'>
<VStack width='90%' mx='auto' mt='2%'>



</VStack>
<VStack width='90%' mx='auto' my='3%' space="2%">

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
From
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
Amman-Jordan
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
To
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
Amman-Jordan
</Text>
</VStack>
 </VStack>
 <HStack width='90%' mx='auto'  justifyContent='space-between'>

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
19 -10- 2020- 02:00AM
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Number
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
12739430493
</Text>
</VStack>
 </HStack>




</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Order status
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Total : 120 JOD
</Text>


 </HStack>


</VStack>

</Box>
</TouchableOpacity>

<TouchableOpacity activeOpacity={1} onPress={()=>navigation.navigate('Trackflying')}>
<Box style={{height:273,width:width*0.9,borderRadius:15}} bgColor='white' borderWidth='1'  
borderColor='gray.50' shadow='2'

  
>
<VStack width='100%' mx='auto'>
 
<VStack  borderBottomWidth='1' borderColor='gray.100'>
<HStack width='90%' mx='auto' my='3%'>
 <AeroPlane/>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" ,marginLeft:"2%"
}}>
Flying tickets
</Text>
 </HStack>

</VStack>

<VStack  borderBottomWidth='1' borderColor='gray.100'>
<VStack width='90%' mx='auto' mt='2%'>

 
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
  Departure and Return date  
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"#9E9E9E",marginTop:"-2%" 
}}>
  20/10/2021 - 21/10/2021
</Text>



</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
From
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
Amman-Jordan
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
To
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
Amman-Jordan
</Text>
</VStack>
 </HStack>
 <HStack width='90%' mx='auto'  justifyContent='space-between'>

<VStack>
 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Date
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
19 -10- 2020- 02:00AM
</Text>
</VStack>
<VStack>

 <Text style={{fontFamily:'arabicRegular',fontSize:16,color:"black",marginTop:"-2%" 
}}>
Order Number
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:12,color:"#9E9E9E",marginTop:"-2%" 
}}>
12739430493
</Text>
</VStack>
 </HStack>




</VStack>
<HStack width='90%' mx='auto' my='3%' justifyContent='space-between'>
 <Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Order status
</Text>
<Text style={{fontFamily:'arabicRegular',fontSize:14,color:"black",marginTop:"-2%" 
}}>
Total : 120 JOD
</Text>


 </HStack>


</VStack>

</Box>
</TouchableOpacity>





</VStack>


</ScrollView>
):null}
</NativeBaseProvider>
</View>
  )
}


export default Order
const styles = StyleSheet.create({
   
  conatainer:{
      flex:1,
    
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
height:412,

width:343,
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