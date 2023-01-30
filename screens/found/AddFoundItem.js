import { View } from "react-native";
import Form from "../../components/AddFound/Form";
import { LostItemContext } from "../../store/lost-context";

function AddFoundItem({ navigation }) {
  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(lostData) {
    navigation.goBack();
  }
  return (
    <View>
      <Form onCancel={cancelHandler} onSubmit={confirmHandler} />
    </View>
  );
}

export default AddFoundItem;
