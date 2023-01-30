import { ScrollView, View, StyleSheet, Alert, Text, Image } from "react-native";
import { useState } from "react";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";

import Input from "../AddLost/Input";
import Button from "../UI/Button";

function Form({ onCancel, onSubmit }) {
  const [input, setInput] = useState({
    item: "",
    location: "",
    date: "",
    time: "",
    contact: "",
    question: "",
  });

  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission(); // will open a dialog to ask users permission

      return permissionResponse.granted;
    }

    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );

      return false;
    }

    return true;
  }

  function inputChangeHandler(inputIdentifier, enteredValue) {
    setInput((curInputValues) => {
      return {
        ...curInputValues,
        [inputIdentifier]: enteredValue,
      };
    });
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    //console.log(image);
    setPickedImage(image.uri);
  }

  function submitHandler() {
    const foundData = {
      item: input.item,
      location: input.location,
      date: new Date(input.date),
      time: input.time,
      contact: input.contact,
      question: input.question,
      image: image,
    };
    onSubmit(foundData);
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image style={styles.image} source={{ uri: pickedImage }} />;
  }

  return (
    <ScrollView style={styles.form}>
      <Input
        label="Found Item"
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, "item"),
          value: input.item,
        }}
      />
      <Input
        label="Found Location"
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, "location"),
          value: input.location,
        }}
      />
      <Input
        label="Found Date"
        textInputConfig={{
          placeholder: "YYYY-MM-DD",
          onChangeText: inputChangeHandler.bind(this, "date"),
          value: input.date,
        }}
      />
      <Input
        label="Found Time"
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, "time"),
          value: input.time,
        }}
      />
      <Input
        label="Your Contact (Your contact will be given under your permission)"
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, "contact"),
          value: input.contact,
        }}
      />
      <Input
        label="Verify Question (To verify owner)"
        textInputConfig={{
          onChangeText: inputChangeHandler.bind(this, "question"),
          value: input.contact,
        }}
      />
      <View style={styles.imagePreview}>{imagePreview}</View>
      <Button onPress={takeImageHandler}>upload item photo(optional)</Button>

      <View style={styles.buttons}>
        <Button onPress={onCancel}>Cancel</Button>
        <Button onPress={submitHandler}>Submit</Button>
      </View>
    </ScrollView>
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
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f1ded4",
    borderRadius: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
