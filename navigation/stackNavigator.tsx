import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pages from "@/app/pages/_layout";
import NotFound from "@/app/notFound";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="pages"
        component={Pages}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="notFound"
        component={NotFound}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
