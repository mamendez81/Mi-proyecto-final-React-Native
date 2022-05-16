import { StyleSheet, Text, View, Button, Image, Dimensions, TouchableOpacity } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { StackScreenProps } from "@react-navigation/stack";
import { getFirestore } from "firebase/firestore";
import app from "../config/firebase";

const db = getFirestore(app);

import { collection, addDoc } from "firebase/firestore";


const evTrue = async () => {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      name: "José Pérez",
      score: 'Present',
      date: 2022
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};
const evFalse = async () => {
  try {
    const docRef = await addDoc(collection(db, "students"), {
      name: "José Pérez",
      score: 'Absent',
      date: 2022
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};


const EvaluationsScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

  const { user } = useAuthentication();
  
  let student = 0;
  return (
    <View style={styles.container}>
      <Text>Evaluation {user?.email}</Text>
      <Text style={styles.student}>José Pérez</Text>
      <TouchableOpacity onPress={() => navigation.navigate('ViewScreen')}>
        <Image 
          style={styles.imageStyle}
          source={require('../assets/addUser.png')}
        />
      </TouchableOpacity>
      
      <View style={styles.button}>
      <Button  
         title="Present"
         disabled={false}
         onPress={() => (
            evTrue(),
            navigation.navigate('Evaluation')
         )}
       />
        
      </View>
      <View style={styles.button}>
      <Button  
          title="Absent"
          disabled={false}
           onPress={() => (
            evFalse(),
            navigation.navigate('Evaluation')
            )}
         />
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
    fontSize: 30,
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
export default EvaluationsScreen;