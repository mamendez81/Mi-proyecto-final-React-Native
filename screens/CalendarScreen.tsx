import { StyleSheet, Text, View } from "react-native";
import { useAuthentication } from "../utils/hooks/useAuthentication";
import { StackScreenProps } from "@react-navigation/stack";
import { Calendar } from 'react-native-calendars';

const CalendarScreen: React.FC<StackScreenProps<any>> = ({ navigation }) => {

  const { user } = useAuthentication();
  const callEvaluacion = () => navigation.navigate('Evaluation');
  
  return (
    
    <View style={styles.container}>
      <Text>Calendar {user?.email}</Text>
      <View style={{ paddingTop: 50, flex: 10 }}>
        <Calendar
          onDayPress={day => {
            console.log('selected day', day);
            callEvaluacion();
          }}
          monthFormat={'yyyy MM'}
          onMonthChange={month => {
            console.log('month changed', month);
          }}
          hideArrows={false}
          hideExtraDays={false}
          disableMonthChange={false}
          firstDay={1}
        />
      </View>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 10,
  },
});
export default CalendarScreen;