import { Text, TextInput, View, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/styles";

function Input({ label, textInputConfig }) {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} {...textInputConfig} />
    </View>
  );
}

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 4,
    marginVertical: 8,
  },
  label: {
    fontSize: 18,
    color: GlobalStyles.primary100,
    marginBottom: 4,
  },
  input: {
    backgroundColor: GlobalStyles.primary400,
    color: 'black',
    padding: 6,
    borderRadius: 6,
    fontSize: 18,
  }
});
