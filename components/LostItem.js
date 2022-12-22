import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet } from "react-native";

function LostItem({ item, location, date, time, contact }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Lost item: {item}</Text>
      <Text style={styles.text}>Possible lost location: {location}</Text>
      <Text style={styles.text}>Possible lost date: {date}</Text>
      <Text style={styles.text}>Possible lost time: {time}</Text>
      <Text style={styles.text}>Please contact: {contact}</Text>
    </View>
  );
}

export default LostItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    padding: 15,
    height: 150,
    borderRadius: 8,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20
  }
});
