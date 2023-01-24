import {
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  StyleSheet,
} from "react-native";

const DUMMY_FOUND = [
  {
    id: "f1",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "I found a wallet",
    location: "4th floor lobby",
    date: "2022-12-27",
  },
  {
    id: "f2",
    image:
      "https://images.unsplash.com/photo-1491013516836-7db643ee125a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNoaWxkfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    title: "I found a baby",
    location: "park playground",
    date: "2022-12-28",
  },
];

function FoundScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DUMMY_FOUND}
        renderItem={(itemData) => (
          <View style={styles.itemContainer}>
            <Pressable
              style={({ pressed }) => (pressed ? styles.pressedItem : null)}
              onPress={() => {}}
            >
              <Image
                source={{ uri: itemData.item.image }}
                style={styles.image}
              />
              <Text>Title: {itemData.item.title}</Text>
              <Text>Location: {itemData.item.location}</Text>
              <Text>Date: {itemData.item.date}</Text>
            </Pressable>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

export default FoundScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#f07b54",
    borderWidth: 2,
    alignItems: "center",
  },
  pressedItem: {
    opacity: 0.5,
  },
  itemContainer: {
    borderColor: "#f07b54",
    borderWidth: 2,
    padding: 8,
    margin: 10,
    backgroundColor: "#efba9d",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
