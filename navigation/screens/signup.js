import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,ImageBackground, ScrollView,Alert} from 'react-native';

 const styles = StyleSheet.create({
  container: {
      paddingTop: 23,
      justifyContent: 'center',
   textAlign: "center",
       margin: 20,
       fontSize:60,
       color:"white"
   },
   input: {
      margin: 15,
    borderColor: 'white',
    fontSize:20,
    padding:15,
      borderWidth: 3,
      color:"white",
   },
   submitButton: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius:20,
      borderColor:"green",
      padding: 5,
      margin: 25,
      
   },
   submitButtonText:{
      color: 'black',
      fontSize:30,
      textAlign: "center",
     margin: 15,
   },
  screen:{
    
    textAlign: "center",
     justifyContent: 'center',
     height:800,
     width:350,
     margin:10,
    
     
    
   }
 })
//  6cfc99e05d2b45cbb6b217080e5c7d24
//  { navigation }
function SignUp({ navigation }){

  
  

 return(
  <ImageBackground
     
      source={{
        uri:
          'https://w0.peakpx.com/wallpaper/677/889/HD-wallpaper-black-stylish-background-green-neon-lines-green-light-effects-abstract-black-background.jpg',
      }}>


  <View style={styles.screen}>
    <View>

  

 <Text style={styles.container}>
    Sign Up
  </Text>
  </View>
  <ScrollView>
  <View>
   
<TextInput
  style={styles.input}
               
              placeholder = " Enter Name :"
                placeholderTextColor = "white" ></TextInput>
    </View>
  <View>

    <TextInput
  style={styles.input}
               
              placeholder = " Enter Email :"
                placeholderTextColor = "white" ></TextInput>
                </View>


<View>

  <TextInput 
 style={styles.input}
 placeholderTextColor = "white"
  placeholder=' Enter password :'></TextInput>
 </View>

<View>
  <TouchableOpacity  title="submit"
        onPress={() => navigation.navigate('login')}  
   style={styles.submitButton}
   >
  
    <Text style={styles.submitButtonText}>Sign Up</Text>

  </TouchableOpacity>

  </View>
  </ScrollView>



   </View>
   </ImageBackground>
   
 )
}
// onPress={() => navigation.navigate('login')}
export default SignUp;