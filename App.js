import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { GlobalStyles } from "./constants/styles";

import LostScreen from "./screens/lost/LostScreen";
import FoundScreen from "./screens/found/FoundScreen";
import MyAccount from "./screens/MyAccount";
import AddLostItem from "./screens/lost/AddLostItem";
import AddFoundItem from "./screens/found/AddFoundItem";
import AddIcon from "./components/UI/AddIcon";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Bottom() {
  return (
    <BottomTabs.Navigator
      screenOptions={() => ({
        headerStyle: { backgroundColor: GlobalStyles.primary100 },
        headerTintColor: "white",
        tabBarStyle: { backgroundColor: GlobalStyles.primary100 },
      })}
    >
      <BottomTabs.Screen
        name="Lost"
        component={LostScreen}
        options={({ navigation }) => ({
          title: "Lost Items",
          tabBarLabel: "Lost",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-sad-outline" size={size} color={color} />
          ),
          headerRight: ({ tintColor }) => (
            <AddIcon
              icon="add"
              size={30}
              color={tintColor}
              onPress={() => {
                navigation.navigate("AddLost");
              }}
            />
          ),
        })}
      />
      <BottomTabs.Screen
        name="Found"
        component={FoundScreen}
        options={({ navigation }) => ({
          title: "Found Items",
          tabBarLabel: "Found",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-happy-outline" size={size} color={color} />
          ),
          headerRight: ({ tintColor }) => (
            <AddIcon
              icon="add"
              size={30}
              color={tintColor}
              onPress={() => {
                navigation.navigate("AddFound");
              }}
            />
          ),
        })}
      />
      <BottomTabs.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          title: "My Account",
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Bottom"
            component={Bottom}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AddLost"
            component={AddLostItem}
            options={{ title: 'Add Lost Item', presentation: "modal" }}
          />
          <Stack.Screen
            name="AddFound"
            component={AddFoundItem}
            options={{ title: 'Add Found Item', presentation: "modal" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
