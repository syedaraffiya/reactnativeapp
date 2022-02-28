import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet ,ImageBackground, ScrollView} from 'react-native';

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
      borderColor:"black",
      padding: 5,
      margin: 25,
      
   },
   submitButtonText:{
      color: 'black',
      fontSize:25,
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

//  https://image.freepik.com/free-vector/dark-geometric-background_1409-925.jpg
function Login({ navigation }){

 return(
  <ImageBackground
      
      source={{
        uri:
          "https://i.pinimg.com/originals/2f/2d/9c/2f2d9c95c6ab50fdb83ca1b65228623f.jpg",
      }}>


  <View style={styles.screen}>
    <View>

  

 <Text style={styles.container}>
    Log In 
  </Text>
  </View>
  <ScrollView>
 
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
  <TouchableOpacity style={styles.submitButton}
   title="submit"
   onPress={() => navigation.navigate('news App')} >

    <Text style={styles.submitButtonText}>News App</Text>

  </TouchableOpacity>

  </View>
  </ScrollView>



   </View>
   </ImageBackground>
   
 )
}
export default Login;