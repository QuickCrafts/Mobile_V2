import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Text, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Summary from "./summary";
import Transaction from "./transaction";
import Budgtes from "./budgets";
import Settings from "./settings";

const Tabs = createBottomTabNavigator();
const Home = <Icon name="home" size={30} color="#000" />;
const Transactions = <Icon name="chart-line" size={30} color="#000" />;
const Budgets = <Icon name="piggy-bank" size={30} color="#000" />;
const Setting = <Icon name="cog" size={30} color="#000" />;

export default function Index() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen
        name="Resumen"
        component={Summary}
        options={{
          headerShown: false,
          tabBarIcon: () => Home,
        }}
      />
      <Tabs.Screen
        name="Transacciones"
        component={Transaction}
        options={{ headerShown: false, tabBarIcon: () => Transactions }}
      />
      <Tabs.Screen
        name="."
        component={Transaction}
        options={{ headerShown: false, tabBarIcon: () => <></> }}
      />
      <Tabs.Screen
        name="Presupuestos"
        component={Budgtes}
        options={{ headerShown: false, tabBarIcon: () => Budgets }}
      />
      <Tabs.Screen
        name="Ajustes"
        component={Settings}
        options={{ headerShown: false, tabBarIcon: () => Setting }}
      />
    </Tabs.Navigator>
  );
}
