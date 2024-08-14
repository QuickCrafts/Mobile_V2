import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Summary from "./summary";
import Transaction from "./transaction";
import Budgtes from "./budgets";
import Settings from "./settings";

const Tabs = createBottomTabNavigator();
const Home = <Icon name="home" size={25} color="#000" />;
const Transactions = <Icon name="exchange" size={25} color="#000" />;
const Budgets = <Icon name="shopping-bag" size={25} color="#000" />;
const Setting = <Icon name="gear" size={25} color="#000" />;

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
        options={{ headerShown: false, tabBarIcon: () => Fins() }}
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

function Fins() {
  return (
    <Image
      source={require("../../assets/images/App_icon_v1.png")}
      style={{ width: 60, height: 60, top: -15 }}
    />
  );
}
