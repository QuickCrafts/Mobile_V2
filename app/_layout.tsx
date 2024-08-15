import React from "react";
import StackNavigator from "@/navigation/stackNavigator";
import {
  useFonts,
  BalooBhai2_400Regular,
  BalooBhai2_500Medium,
  BalooBhai2_600SemiBold,
  BalooBhai2_700Bold,
  BalooBhai2_800ExtraBold,
} from '@expo-google-fonts/baloo-bhai-2';
import { Text, SafeAreaView } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    BalooBhai2_400Regular,
    BalooBhai2_500Medium,
    BalooBhai2_600SemiBold,
    BalooBhai2_700Bold,
    BalooBhai2_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Loading...</Text>
    </SafeAreaView>;
  }
  return <StackNavigator />;
}
