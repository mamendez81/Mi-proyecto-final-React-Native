import React, {useEffect, useState} from "react";
import { StyleSheet, Text, View, Button, Image, Dimensions } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { StackScreenProps } from "@react-navigation/stack";
import { getFirestore } from "firebase/firestore";
import app from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const db = getFirestore(app);

const ViewScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

  const { user } = useAuthentication();
  
  const [texto, setTexto]= useState('');
    const consult = async () => {
        const querySnapshot = await getDocs(collection(db, "students"));
        querySnapshot.forEach((doc) => {        
            setTexto(texto + `${doc.data().name}, ${doc.data().score}, ${doc.data().date}`)
        });
    };
    useEffect(() => {
    consult()
    }, [])
        
  return (
    <View style={styles.container}>
      <Text>Consult {user?.email}</Text>
     
      <View>
            <Text style={styles.student}>
                {texto}
            </Text>
        </View>
      
    </View>
  );

}

const deviceWidth = Math.round(Dimensions.get('window').width);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 40,
    alignContent: "space-around"
  },
  student: {
    fontSize: 20,
    marginTop: 15
  },
  imageStyle :{
      height: 300,
      width: deviceWidth -25,
      opacity: 0.9,
      alignContent: 'center',
      alignSelf: 'center',
  },
});
export default ViewScreen;