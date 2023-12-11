import React from "react";
import { Text, Button, View, TextInput, Alert, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>

        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 80, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>INFINITY BOOKS</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginTop: 30 }}>Login to your account!</Text>

        <Text style={{ textAlign: 'center', paddingBottom: 7, marginTop: 20, fontWeight: 'bold', fontSize: 20 }}>Username :-</Text>
        <TextInput placeholder="Enter Your Username Here..." 
        style={{ height: 35, width: 300, borderColor: 'black', borderWidth: 2, marginBottom: 10, padding: 10, borderRadius: 10, marginLeft: 'auto', marginRight: 'auto' }} />

        <Text style={{ textAlign: 'center', paddingBottom: 7, fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>Password :-</Text>
        <TextInput placeholder="Enter Your Password Here..." secureTextEntry={true} 
        style={{ height: 35, width: 300, borderColor: 'black', borderWidth: 2, marginBottom: 10, padding: 10, borderRadius: 10, marginLeft: 'auto', marginRight: 'auto' }} />

        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', marginTop: 30, width: '100%' }}>
          <Button color="midnightblue" title="Log in" onPress={() => navigation.navigate('End')} />
        </View>
        <Text style={{ fontWeight: 'bold', fontSize: 14, textAlign: 'center', marginTop: 30 }}>If you don't have an account, register from here first!</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
          <Button color="midnightblue" title="Register" onPress={() => navigation.navigate('Register')} />
        </View>
      </LinearGradient>
    </View>
  );
};

const RegScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>

      <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 50, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>WELCOME TO INFINITY BOOKS!</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', marginTop: 20 }}>Register as a New User!</Text>

        <Text style={{ textAlign: 'center', paddingBottom: 7, fontWeight: 'bold', marginTop: 20, fontSize: 20 }}>Email :-</Text>
        <TextInput placeholder="Enter Your Email Here..." 
        style={{ height: 35, width: 300, borderColor: 'black', borderWidth: 2, marginBottom: 30, padding: 10, borderRadius: 10, marginLeft: 'auto', marginRight: 'auto' }} />

        <Text style={{ textAlign: 'center', paddingBottom: 7, marginTop: -15, fontWeight: 'bold', fontSize: 20 }}>Username :-</Text>
        <TextInput placeholder="Enter Your Username Here..." 
        style={{ height: 35, width: 300, borderColor: 'black', borderWidth: 2, marginBottom: 30, padding: 10, borderRadius: 10, marginLeft: 'auto', marginRight: 'auto' }} />

        <Text style={{ textAlign: 'center', paddingBottom: 7, marginTop: -15, fontWeight: 'bold', fontSize: 20 }}>Password :-</Text>
        <TextInput placeholder="Enter Your Password Here..." secureTextEntry={true} 
        style={{ height: 35, width: 300, borderColor: 'black', borderWidth: 2, marginBottom: 30, padding: 10, borderRadius: 10, marginLeft: 'auto', marginRight: 'auto' }} />

        <Text style={{ textAlign: 'center', paddingBottom: 7, marginTop: -15, fontWeight: 'bold', fontSize: 20 }}>Confirm Password :-</Text>
        <TextInput placeholder="Re-Enter Your Password Here..." secureTextEntry={true} 
        style={{ height: 35, width: 300, borderColor: 'black', borderWidth: 2, marginBottom: 30, padding: 10, borderRadius: 10, marginLeft: 'auto', marginRight: 'auto' }} />

        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%' }}>
          <Button color="midnightblue" title="Register" onPress={() => Alert.alert('Check your email for the confirmation link!')} />
        </View>

      </LinearGradient>
    </View>
  );
};

const Books = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>CATEGORIES</Text>
        <TextInput
          placeholder={"Search for a book category..."}
          style={{ paddingHorizontal: 10, margin: 10, height: 50, width: 390, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5, marginTop: 30, marginBottom: 20, borderRadius: 10 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Select the book category you want</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Kids" onPress={() => navigation.navigate('Kids')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Science Fiction" onPress={() => navigation.navigate('Science Fiction')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Adventure" onPress={() => navigation.navigate('Adventure')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Horror" onPress={() => navigation.navigate('Horror')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Mystery" onPress={() => navigation.navigate('Mystery')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Kids = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>KIDS</Text>
        <TextInput
          placeholder={"Search for a book..."}
          style={{ paddingHorizontal: 10, margin: 10, height: 50, width: 390, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5, marginTop: 30, marginBottom: 20, borderRadius: 10 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Select the book you want</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Charlie and the Chocolate Factory" onPress={() => navigation.navigate('Charlie and the Chocolate Factory')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Alice in Wonderland" onPress={() => navigation.navigate('Alice in Wonderland')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Stuart Little" onPress={() => navigation.navigate('Stuart Little')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Peter Pan" onPress={() => navigation.navigate('Peter Pan')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="The Cat in the Hat" onPress={() => navigation.navigate('The Cat in the Hat')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 80 }}>
            <Button color="black" title="Back To Categories" onPress={() => navigation.navigate('Books')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const SciFi = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>SCIENCE FICTION</Text>
        <TextInput
          placeholder={"Search for a book..."}
          style={{ paddingHorizontal: 10, margin: 10, height: 50, width: 390, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5, marginTop: 30, marginBottom: 20, borderRadius: 10 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Select the book you want</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="2001: A Space Odyssey" onPress={() => navigation.navigate('2001: A Space Odyssey')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Dune" onPress={() => navigation.navigate('Dune')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="The War of the Worlds" onPress={() => navigation.navigate('The War of the Worlds')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="The Martian" onPress={() => navigation.navigate('The Martian')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Ender's Game" onPress={() => navigation.navigate("Ender's Game")} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 80 }}>
            <Button color="black" title="Back To Categories" onPress={() => navigation.navigate('Books')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Adventure = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>ADVENTURE</Text>
        <TextInput
          placeholder={"Search for a book..."}
          style={{ paddingHorizontal: 10, margin: 10, height: 50, width: 390, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5, marginTop: 30, marginBottom: 20, borderRadius: 10 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Select the book you want</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="The Lord of the Rings" onPress={() => navigation.navigate('The Lord of the Rings')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Around the Worlds in 80 Days" onPress={() => navigation.navigate('Around the Worlds in 80 Days')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Treasure Island" onPress={() => navigation.navigate('Treasure Island')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Jurassic Park" onPress={() => navigation.navigate('Jurassic Park')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Life of Pi" onPress={() => navigation.navigate('Life of Pi')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 80 }}>
            <Button color="black" title="Back To Categories" onPress={() => navigation.navigate('Books')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Horror = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>HORROR</Text>
        <TextInput
          placeholder={"Search for a book..."}
          style={{ paddingHorizontal: 10, margin: 10, height: 50, width: 390, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5, marginTop: 30, marginBottom: 20, borderRadius: 10 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Select the book you want</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="IT" onPress={() => navigation.navigate('IT')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Dracula" onPress={() => navigation.navigate('Dracula')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Frankenstein" onPress={() => navigation.navigate('Frankenstein')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="The Shinning" onPress={() => navigation.navigate('The Shinning')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="The Omen" onPress={() => navigation.navigate('The Omen')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 80 }}>
            <Button color="black" title="Back To Categories" onPress={() => navigation.navigate('Books')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Mystery = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>MYSTERY</Text>
        <TextInput
          placeholder={"Search for a book..."}
          style={{ paddingHorizontal: 10, margin: 10, height: 50, width: 390, borderColor: "black", borderWidth: 2, fontSize: 18, borderRadius: 5, marginTop: 30, marginBottom: 20, borderRadius: 10 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Select the book you want</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="The Da Vinci Code" onPress={() => navigation.navigate('The Da Vinci Code')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Murder on the Orient Express" onPress={() => navigation.navigate('Murder on the Orient Express')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="The Adventures of Sherlock Holmes" onPress={() => navigation.navigate('The Adventures of Sherlock Holmes')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="The Silent Patient" onPress={() => navigation.navigate('The Silent Patient')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '100%', marginBottom: 15 }}>
            <Button color="midnightblue" title="Gone Girl" onPress={() => navigation.navigate('Gone Girl')} />
        </View>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 80 }}>
            <Button color="black" title="Back To Categories" onPress={() => navigation.navigate('Books')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Charlie = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Charlie and the Chocolate Factory</Text>
        <Image style={{ width: '35%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://store.goodreads.lk/wp-content/uploads/2020/05/9780141371351-1.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Roald Dahl</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Charlie and the Chocolate Factory is a 1964 children's novel by British author Roald Dahl. 
          The story features the adventures of young Charlie Bucket inside the chocolate factory of eccentric chocolatier Willy Wonka.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.300.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
            <Button color="black" title="Back To Kids" onPress={() => navigation.navigate('Kids')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Alice = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Alice in Wonderland</Text>
        <Image style={{ width: '40%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://www.gutenberg.org/files/11/11-h/images/cover.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Lewis Carroll</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Alice's Adventures in Wonderland is an 1865 English novel by Lewis Carroll. A young girl named Alice falls through a rabbit hole into a fantasy world of anthropomorphic creatures. 
          It is seen as an example of the literary nonsense genre.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.500.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
            <Button color="black" title="Back To Kids" onPress={() => navigation.navigate('Kids')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Stuart = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Stuart Little</Text>
        <Image style={{ width: '40%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1552655131l/138959._SX318_.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- E.B. White</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Stuart Little is E.B. White's first children's book, and it is now widely recognized as a classic in children's literature. 
          Stuart Little was illustrated by the subsequently award-winning artist Garth Williams, also his first work for children.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.400.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
            <Button color="black" title="Back To Kids" onPress={() => navigation.navigate('Kids')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Peter = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Peter Pan</Text>
        <Image style={{ width: '40%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1302206750l/10951002.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- J.M. Barrie</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Peter Pan; or, the Boy Who Wouldn't Grow Up or Peter and Wendy, often known simply as Peter Pan, is a work by J. M. Barrie, in the form of a 1904 play and a 1911 novel.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.200.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
            <Button color="black" title="Back To Kids" onPress={() => navigation.navigate('Kids')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Cat = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>The Cat in tha Hat</Text>
        <Image style={{ width: '40%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://upload.wikimedia.org/wikipedia/en/1/10/The_Cat_in_the_Hat.png" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Dr. Seuss</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          The Cat in the Hat is a 1957 children's book written by the American author Theodor Geisel, using the pen name Dr. Seuss. 
          The story centers on a tall anthropomorphic cat who wears a red and white-striped top hat and a red bow tie.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.600.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
            <Button color="black" title="Back To Kids" onPress={() => navigation.navigate('Kids')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const A2001 = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>2001: A Space Odyssey</Text>
        <Image style={{ width: '35%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1432468943l/70535._SY475_.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Arthur C. Clarke</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          2001: A Space Odyssey is a 1968 science fiction novel by British writer Arthur C. Clarke. 
          It was developed concurrently with Stanley Kubrick's film version and published after the release of the film.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.400.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 1 }}>
            <Button color="black" title="Back To Science Fiction" onPress={() => navigation.navigate('Science Fiction')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Dune = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Dune</Text>
        <Image style={{ width: '40%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Frank Herbert</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Dune is a 1965 epic science fiction novel by American author Frank Herbert, originally published as two separate serials in Analog magazine. 
          It tied with Roger Zelazny's This Immortal for the Hugo Award in 1966 and it won the inaugural Nebula Award for Best Novel.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.450.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
            <Button color="black" title="Back To Science Fiction" onPress={() => navigation.navigate('Science Fiction')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const WW = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>The War of the Worlds</Text>
        <Image style={{ width: '40%', height: '32%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://cdn.shopify.com/s/files/1/0726/9203/products/War-of-Worlds_1024x1024_478ba00c-41e7-488d-b4ef-fcddb990a6e3_1024x1024.jpg?v=1614979097" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- H.G. Wells</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          The War of the Worlds is a science fiction novel by English author H. G. Wells, first serialised in 1897 by Pearson's Magazine in the UK and by Cosmopolitan magazine in the US. 
          The novel's first appearance in hardcover was in 1898 from publisher William Heinemann of London.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.250.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 1 }}>
            <Button color="black" title="Back To Science Fiction" onPress={() => navigation.navigate('Science Fiction')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Martian = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>The Martian</Text>
        <Image style={{ width: '40%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/81wFMY9OAFL.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Andy Weir</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          The Martian is a 2011 science fiction debut novel written by Andy Weir. The book was originally self-published on Weir's blog, in a serialized format. 
          In 2014, the book was re-released after Crown Publishing Group purchased the exclusive publishing rights.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- 600.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
            <Button color="black" title="Back To Science Fiction" onPress={() => navigation.navigate('Science Fiction')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Ender = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Ender's Game</Text>
        <Image style={{ width: '46%', height: '40%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1408303130l/375802._SY475_.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Orson Scott Card</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Ender's Game is a 1985 military science fiction novel by American author Orson Scott Card. 
          Set at an unspecified date in Earth's future, the novel presents an imperiled humankind after two conflicts with the Formics, an insectoid alien species they dub the "buggers".
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- 600.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 1 }}>
            <Button color="black" title="Back To Science Fiction" onPress={() => navigation.navigate('Science Fiction')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const LOTR = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>The Lord of the Rings</Text>
        <Image style={{ width: '40%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1566425108l/33.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- J.R.R. Tolkien</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          The Lord of the Rings is an epic high-fantasy novel by English author and scholar J. R. R. Tolkien. 
          Set in Middle-earth, intended to be Earth at some distant time in the past, the story began as a sequel to Tolkien's 1937 children's book The Hobbit, 
          but eventually developed into a much larger work.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.800.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 1 }}>
            <Button color="black" title="Back To Adventure" onPress={() => navigation.navigate('Adventure')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Around = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Around the World in 80 Days</Text>
        <Image style={{ width: '40%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://d28hgpri8am2if.cloudfront.net/book_images/cvr9781416939368_9781416939368_hr.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Jules Verne and Peter Holeinone</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Around the World in Eighty Days is an adventure novel by the French writer Jules Verne, first published in French in 1872. 
          In the story, Phileas Fogg of London and his newly employed French valet Passepartout attempt to circumnavigate the world in 80 days on a wager of £20,000 set by his friends at the Reform Club.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.500.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 1 }}>
            <Button color="black" title="Back To Adventure" onPress={() => navigation.navigate('Adventure')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Treasure = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Treasure Island</Text>
        <Image style={{ width: '40%', height: '35%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/71jX9SL21BL.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Robert Louis Stevenson</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Treasure Island is an adventure novel by Scottish author Robert Louis Stevenson, telling a story of "buccaneers and buried gold". 
          It is considered a coming-of-age story and is noted for its atmosphere, characters, and action.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.400.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
            <Button color="black" title="Back To Adventure" onPress={() => navigation.navigate('Adventure')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Jurassic = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Jurassic Park</Text>
        <Image style={{ width: '40%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://upload.wikimedia.org/wikipedia/en/3/33/Jurassicpark.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Michael Crichton</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Jurassic Park is a 1990 science fiction novel written by Michael Crichton. 
          A cautionary tale about genetic engineering, it presents the collapse of an amusement park showcasing genetically re-created 
          dinosaurs to illustrate the mathematical concept of chaos theory and its real-world implications.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.400.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
            <Button color="black" title="Back To Adventure" onPress={() => navigation.navigate('Adventure')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Life = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Life of Pi</Text>
        <Image style={{ width: '40%', height: '30%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1631251689l/4214._SY475_.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Yann Martel</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Life of Pi is a Canadian philosophical novel by Yann Martel published in 2001. 
          The protagonist is Piscine Molitor "Pi" Patel, an Indian boy from Pondicherry who explores issues of spirituality and metaphysics from an early age.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.300.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
            <Button color="black" title="Back To Adventure" onPress={() => navigation.navigate('Adventure')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const IT = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>IT</Text>
        <Image style={{ width: '40%', height: '31%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://images-na.ssl-images-amazon.com/images/I/71tFhdcC0XL.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Stephen King</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          It is a 1986 horror novel by American author Stephen King. It was his 22nd book and his 17th novel written under his own name. 
          The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.300.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 20 }}>
          <Button color="black" title="Back To Horror" onPress={() => navigation.navigate('Horror')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Dracula = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Dracula</Text>
        <Image style={{ width: '40%', height: '32%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/4/45/Dracula_1st_ed_cover_reproduction.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Bram Stoker</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Dracula is a novel by Bram Stoker, published in 1897. As an epistolary novel, the narrative is related through letters, diary entries, and newspaper articles. 
          It has no single protagonist, but opens with solicitor Jonathan Harker taking a business trip to stay at the castle of a Transylvanian noble, Count Dracula.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.400.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 20 }}>
          <Button color="black" title="Back To Horror" onPress={() => navigation.navigate('Horror')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Frankenstein = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Frankenstein</Text>
        <Image style={{ width: '42%', height: '35%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://pictures.abebooks.com/isbn/9781926444314-us.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Mary Shelley</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Frankenstein; or, The Modern Prometheus is an 1818 novel written by English author Mary Shelley. 
          Frankenstein tells the story of Victor Frankenstein, a young scientist who creates a sapient creature in an unorthodox scientific experiment.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.300.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 20 }}>
          <Button color="black" title="Back To Horror" onPress={() => navigation.navigate('Horror')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Shinning = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>The Shinning</Text>
        <Image style={{ width: '40%', height: '33%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1353277730l/11588.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Stephen King</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          The Shining is a 1977 horror novel by American author Stephen King. 
          It is King's third published novel and first hardback bestseller; its success firmly established King as a preeminent author in the horror genre.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.300.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
          <Button color="black" title="Back To Horror" onPress={() => navigation.navigate('Horror')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Omen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>The Omen</Text>
        <Image style={{ width: '50%', height: '45%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://pictures.abebooks.com/isbn/9780860073710-us.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- David Seltzer</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Mysterious deaths surround an American ambassador. Could the child that he is raising actually be the Antichrist? The Devil's own son?
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.200.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 1 }}>
            <Button color="black" title="Back To Horror" onPress={() => navigation.navigate('Horror')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const DVC = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>The Da Vinci Code</Text>
        <Image style={{ width: '40%', height: '35%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://jumpbooks.lk/onojyglu/2022/03/The-Da-Vinci-Code.jpeg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Dan Brown</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          The Da Vinci Code is a 2003 mystery thriller novel by Dan Brown. It is Brown's second novel to include the character Robert Langdon: the first was his 2000 novel Angels & Demons.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.400.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 20 }}>
          <Button color="black" title="Back To Mystery" onPress={() => navigation.navigate('Mystery')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Orient = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Murder on the Orient Express</Text>
        <Image style={{ width: '42%', height: '35%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1486131451l/853510._SY475_.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Agatha Christie</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Murder on the Orient Express is a work of detective fiction by English writer Agatha Christie featuring the Belgian detective Hercule Poirot. 
          It was first published in the United Kingdom by the Collins Crime Club on 1 January 1934.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 15}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.300.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 1 }}>
          <Button color="black" title="Back To Mystery" onPress={() => navigation.navigate('Mystery')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Sherlock = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>The Adventures of Sherlock Holmes</Text>
        <Image style={{ width: '42%', height: '35%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://almabooks.com/wp-content/uploads/2016/10/adventures-of-Sherlock-Holmes.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Sir Arthur Conan Doyle</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          The Adventures of Sherlock Holmes is a collection of twelve short stories by Arthur Conan Doyle, first published on 14 October 1892.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.500.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 20 }}>
          <Button color="black" title="Back To Mystery" onPress={() => navigation.navigate('Mystery')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Silent = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>The Silent Patient</Text>
        <Image style={{ width: '40%', height: '33%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1582759969l/40097951._SX318_.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Alex Michaelides</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          The Silent Patient is a 2019 psychological thriller novel written by British–Cypriot author Alex Michaelides. 
          The debut novel was published by Celadon Books, a division of Macmillan Publishers, on 5 February 2019. The audiobook version, released on the same date, is read by Louise Brealey and Jack Hawkins.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 20}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.500.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 30 }}>
          <Button color="black" title="Back To Mystery" onPress={() => navigation.navigate('Mystery')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

const Gone = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['lightblue', 'lightskyblue', 'skyblue', 'deepskyblue']} style={{ flex: 1 }}>
        <Text style={{ fontWeight: 'bold', textAlign: 'center', fontSize: 40, color: 'skyblue', marginTop: 40, backgroundColor: 'midnightblue' }}>Gone Girl</Text>
        <Image style={{ width: '55%', height: '45%', marginLeft: 'auto', marginRight: 'auto', marginTop: 20 }}
              source={{ uri: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1554086139l/19288043.jpg" }}>
        </Image>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 13}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Author:- Gillian Flynn</Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 13}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Description:- </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, paddingLeft: 30, paddingRight: 30}}>
          Gone Girl is a 2012 crime thriller novel by American writer Gillian Flynn. It was published by Crown Publishing Group in June 2012. 
          The novel became popular and made the New York Times Best Seller list.
        </Text>
        <Text style={{fontSize:15, fontWeight:'bold', padding:5, marginTop: 13}}>&nbsp;&nbsp;&nbsp;&nbsp;{'\u2B24' + ' '}Price:- Rs.400.00</Text>
        <View style={{ padding: 10, marginLeft: 'auto', marginRight: 'auto', width: '80%', marginBottom: 15, marginTop: 1 }}>
          <Button color="black" title="Back To Mystery" onPress={() => navigation.navigate('Mystery')}/>
        </View>
      </LinearGradient>
    </View>
  )
};

function Start() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function End() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Books" component={Books} options={{ headerShown: false }} />
      <Stack.Screen name="Kids" component={Kids} options={{ headerShown: false }} />
      <Stack.Screen name="Science Fiction" component={SciFi} options={{ headerShown: false }} />
      <Stack.Screen name="Adventure" component={Adventure} options={{ headerShown: false }} />
      <Stack.Screen name="Horror" component={Horror} options={{ headerShown: false }} />
      <Stack.Screen name="Mystery" component={Mystery} options={{ headerShown: false }} />

      <Stack.Screen name="Charlie and the Chocolate Factory" component={Charlie} options={{ headerShown: false }} />
      <Stack.Screen name="Alice in Wonderland" component={Alice} options={{ headerShown: false }} />
      <Stack.Screen name="Stuart Little" component={Stuart} options={{ headerShown: false }} />
      <Stack.Screen name="Peter Pan" component={Peter} options={{ headerShown: false }} />
      <Stack.Screen name="The Cat in the Hat" component={Cat} options={{ headerShown: false }} />

      <Stack.Screen name="2001: A Space Odyssey" component={A2001} options={{ headerShown: false }} />
      <Stack.Screen name="Dune" component={Dune} options={{ headerShown: false }} />
      <Stack.Screen name="The War of the Worlds" component={WW} options={{ headerShown: false }} />
      <Stack.Screen name="The Martian" component={Martian} options={{ headerShown: false }} />
      <Stack.Screen name="Ender's Game" component={Ender} options={{ headerShown: false }} />

      <Stack.Screen name="The Lord of the Rings" component={LOTR} options={{ headerShown: false }} />
      <Stack.Screen name="Around the Worlds in 80 Days" component={Around} options={{ headerShown: false }} />
      <Stack.Screen name="Treasure Island" component={Treasure} options={{ headerShown: false }} />
      <Stack.Screen name="Jurassic Park" component={Jurassic} options={{ headerShown: false }} />
      <Stack.Screen name="Life of Pi" component={Life} options={{ headerShown: false }} />

      <Stack.Screen name="IT" component={IT} options={{ headerShown: false }} />
      <Stack.Screen name="Dracula" component={Dracula} options={{ headerShown: false }} />
      <Stack.Screen name="Frankenstein" component={Frankenstein} options={{ headerShown: false }} />
      <Stack.Screen name="The Shinning" component={Shinning} options={{ headerShown: false }} />
      <Stack.Screen name="The Omen" component={Omen} options={{ headerShown: false }} />

      <Stack.Screen name="The Da Vinci Code" component={DVC} options={{ headerShown: false }} />
      <Stack.Screen name="Murder on the Orient Express" component={Orient} options={{ headerShown: false }} />
      <Stack.Screen name="The Adventures of Sherlock Holmes" component={Sherlock} options={{ headerShown: false }} />
      <Stack.Screen name="The Silent Patient" component={Silent} options={{ headerShown: false }} />
      <Stack.Screen name="Gone Girl" component={Gone} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator shifting={false} activeColor="white" inactiveColor="skyblue" barStyle={{ backgroundColor: 'midnightblue', borderColor: 'black', borderWidth: 1 }}>
        <Tab.Screen name="Start" component={Start} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={25} />) }} />
        <Tab.Screen name="End" component={End} options={{ tabBarLabel: 'Books', tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="book" color={color} size={25} />) }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;