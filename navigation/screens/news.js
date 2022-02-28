import React from "react";
import {View, Text, ScrollView,ImageBackground,StyleSheet, TouchableOpacity,Alert} from "react-native";
import { useState, useEffect } from 'react';
import axios from "axios";



const styles = StyleSheet.create({
  container: {
      paddingTop: 23,
      justifyContent: 'center',
   textAlign: "center",
       margin: 20,
       fontSize:60,
       color:"white",
        backgroundColor:"green",
       
   },
   input: {
      margintop: 15,
    borderColor: 'white',
    fontSize:20,
    padding:15,
      borderWidth: 3,
      color:"white",
   },
   submitButton: {
 
      backgroundColor:"darkgreen",
      borderWidth: 1,
      borderRadius:5,
      borderColor:"white",
      padding: 10,
      margin: 25,
      textAlign: "center",
      justifyContent: 'center',
      fontSize:30,
      color:"white",
      alignItems:"flex-start",
      
   },
   submitButtonText:{
      color:"white",
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
    
     
    
   },
   btn: {
     marginTop:20,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"flex-end",
    backgroundColor: "white",
    margin:15,
    padding: 8,
    textAlign: "center" ,
    borderRadius: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  img:{
    width:100,
    margin:10,


  },
  text:{
    textAlign: "center",
    margin:30,
    padding:20,
    fontSize:20,
    color:"white"
  },
 
 })


 

//  function  Data(){
//     const [news, setnews] = useState();
// const img="https://img.pngio.com/png-logo-design-transparent-logo-design-165796-png-images-pngio-logo-design-png-897_898.png"
// const newsApi="https://newsapi.org/v2/top-headlines?country=us&apiKey=6cfc99e05d2b45cbb6b217080e5c7d24"
//     useEffect(() => {
//         getData();
    
        // we will use async/await to fetch this data
        // async function getData() {
        //   const response = await fetch(newsApi);
        //   const data = await response.json();
        //     console.log(data)
          // store the data into our books variable
      //     setnews(data) ;
      //   }
      // }, []); // <- you may need to put the setBooks function in this array
    
      // return (
      //   <View style={styles.container}>
         
      //     <Text style={styles.text}>Game of Thrones Books</Text>
      //     <TouchableOpacity style={styles.btn}>
      //       <Text style={{ color: "black", fontSize: 25, textAlign: "center" }}>Saved</Text>
      //     </TouchableOpacity>
        
          {/* display books from the API */}
          //  {newsApi &&(
          //    <ImageBackground
     
          //    source={{
          //      uri:
          //        'https://t3.ftcdn.net/jpg/01/60/24/02/360_F_160240280_sxDQh3O97wv7Rp2IhH9WlzXN4t8JOC26.jpg',
          //    }}>
          //         <Text style={styles.text}>Game of Thrones Books</Text>
          //   <ScrollView>
          //   <View className="books">
      
              {/* loop over the books */}
              
      //         {news.map((news, index) => (
      //           <>
                  

                
      //           <View key={index}>
      //             <View style={styles.submitButton}>
      //            <Text>{img}</Text>
      //             <Text>TEXT</Text>
                 
      //             <Text style={styles.submitButton}>{news.title}</Text>
      //             <Text>{news.id}</Text>
                  
      //             <Text>{news.name}</Text>
      //             <Text>{news.content}</Text>
                 
      //             <Text>{news.author}</Text>
      //             <Text>{news.publisher}</Text>
      //             </View>
      //           </View>
                
      //          </>  
      //         ))}
      
      //       </View>
      //       </ScrollView>
      //       </ImageBackground>
      //      )} 
      //   </View>
      // )
      //         }


      function Data() {
          const[data,setData]=useSate();

          const[singleData,setSingleData]=useSate();
        const [books, setBooks] = useState(null);


        const apiHandle = axios.create({
            baseURL: 'https://newsapi.org/v2/everything?q=tesla&from=2021-12-08&sortBy=publishedAt&apiKey=6cfc99e05d2b45cbb6b217080e5c7d24'
          });
          let getData =(props,id)=>{
              apiHandle.get(`/${props},/${id}`)
              .then(sucess=>{
                  console.log(sucess)
              })
              .catch(err =>{console.lo(err)})
          }
          useEffect(()=>{
              getData("news")
              
      },[])
      
     
     
        return (
          <View style={styles.container}>
            <View >
             <Text style={styles.text}>News</Text>
             </View>
        
              <ImageBackground
     
     source={{
      uri:
        'https://t3.ftcdn.net/jpg/01/60/24/02/360_F_160240280_sxDQh3O97wv7Rp2IhH9WlzXN4t8JOC26.jpg',
     }}>
           
        
            {/* display books from the API */}
            {books && (
              <ScrollView>
              <View>
        
                {/* loop over the books */}
                {books.map((book, index) => (
                  
                  <View key={index} style={styles.submitButton}>
               
                    <Text style={styles.submitButton}>( {book.name} . )</Text>

                    <Text style={{color:"white"}}>AUTHOR:   {book.authors} .</Text>

                    <Text style={{color:"white"}}>PUBLISHER:   {book.publisher} .</Text>

                    <Text style={{color:"white"}}>COUNTRY:   {book.country} .</Text>

                    <Text style={{color:"white"}}>MEDIATYPE:   {book.mediaType} .</Text>

                    <Text style={{color:"white"}}>NO OF PAGES:   {book.numberOfPages}  .</Text>

                    <Text style={{color:"white"}}>RELAESED:  {book.released}  .</Text>

                    <TouchableOpacity  title="Show alert" onPress={showAlert} style={styles.btn}>
                    <Text style={{ color: "black", fontSize: 25, textAlign: "center" }}>+</Text>
                 </TouchableOpacity>
                   
                  </View>
                  
                  
                ))}
                
        
              </View>
              </ScrollView>
            )}
            </ImageBackground>
          </View>
        )}

      

export default Data;