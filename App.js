import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {useEffect} from "react";
import TestScreen from "./TestScreen";
import {SystemBars} from "react-native-edge-to-edge";

const Stack = createNativeStackNavigator();

export default function App() {

  useEffect(() => {
    SystemBars.setHidden(true);
  })

  return (
      <NavigationContainer>
        <Stack.Navigator id="Test">
          <Stack.Screen
              name="TestScreen"
              component={TestScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
