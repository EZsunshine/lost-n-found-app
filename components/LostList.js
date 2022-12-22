import { FlatList } from "react-native";
import LostItem from "./LostItem";


function renderLostItem(itemData) {
    return <LostItem {...itemData.item} />
}

function LostList({ lostData }) {
  return (
    <FlatList
      data={lostData}
      renderItem={renderLostItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default LostList;
