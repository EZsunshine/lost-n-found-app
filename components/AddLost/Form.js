import { View, StyleSheet } from "react-native";
import { useState } from "react";

import Input from "./Input";
import Button from '../UI/Button';

function Form({onCancel, onSubmit}) {
  const [input, setInput] = useState({
    item: "",
    location: "",
    date: "",
    time: "",
    contact: "",
  });

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInput((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  function submitHandler() {
    const lostData = {
        item: input.item,
        location: input.location,
        date: new Date(input.date),
        time: input.time,
        contact: input.contact
    }
    onSubmit(lostData)
  }

  return (
    <View style={styles.form}>
      <Input
        label="Lost Item"
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, "item"),
          value: input.item,
        }}
      />
      <Input
        label="Possible Lost Location"
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, "location"),
          value: input.location,
        }}
      />
      <Input
        label="Possible Lost Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          onChangeText: inputChangeHandler.bind(this, "date"),
          value: input.date,
        }}
      />
      <Input
        label="Possible Lost Time"
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, "time"),
          value: input.time,
        }}
      />
      <Input
        label="Please Contact"
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, "contact"),
          value: input.contact,
        }}
      />
      <View style={styles.buttons}>
        <Button onPress={onCancel}>Cancel</Button>
        <Button onPress={submitHandler}>Submit</Button>
      </View>
    </View>
  );
}

export default Form;

const styles = StyleSheet.create({
  form: {
    margin: 40,
  },
  buttons: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
