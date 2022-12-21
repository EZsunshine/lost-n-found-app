import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GlobalStyles } from './constants/styles';


import LostScreen from './screens/LostScreen';
import FoundScreen from './screens/FoundScreen';
import MyAccount from './screens/MyAccount';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function Bottom() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Lost" component={LostScreen} />
      <BottomTabs.Screen name="Found" component={FoundScreen} />
      <BottomTabs.Screen name="MyAccount" component={MyAccount} />
    </BottomTabs.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Bottom" component={Bottom} options={{headerShown: false}} />
            <Stack.Screen name="Lost" component={LostScreen} />
            <Stack.Screen name="Found" component={FoundScreen} />
            <Stack.Screen name="MyAccount" component={MyAccount} />
          </Stack.Navigator>
        </NavigationContainer>
      
    </>
  );
}

