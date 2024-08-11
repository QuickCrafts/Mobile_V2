import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import Home from "./home";
import Summary from "./summary";
import Transaction from "./transaction";
import Budgets from "./budgets";
import Goals from "./goals";
import Payment from "./payment";
import Settings from "./settings";

const Drawer = createDrawerNavigator();

const iconHome = <Icon name="list-alt" size={20} color="#076a77" />;
const iconTransactions = <Icon name="exchange" size={20} color="#076a77" />;
const iconPayment = <Icon name="credit-card-alt" size={20} color="#076a77" />;
const iconBudgets = <Icon name="shopping-bag" size={20} color="#076a77" />;
const iconGoals = <Icon name="university" size={20} color="#076a77" />;
const iconSetting = <Icon name="gear" size={20} color="#076a77" />;

export default function PagesLayout() {
  return (
    <Drawer.Navigator initialRouteName="Summary">
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "", drawerIcon: () => FinsLogo() }}
      />
      <Drawer.Screen
        name="Summary"
        component={Summary}
        options={{ title: "Resumen", drawerIcon: () => iconHome }}
      />
      <Drawer.Screen
        name="Transaction"
        component={Transaction}
        options={{ title: "Transacciones", drawerIcon: () => iconTransactions }}
      />
      <Drawer.Screen
        name="Payment"
        component={Payment}
        options={{ title: "Medios de Pago", drawerIcon: () => iconPayment }}
      />
      <Drawer.Screen
        name="Budgets"
        component={Budgets}
        options={{ title: "Presupuestos", drawerIcon: () => iconBudgets }}
      />
      <Drawer.Screen
        name="Goals"
        component={Goals}
        options={{ title: "Metas", drawerIcon: () => iconGoals }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Ajustes", drawerIcon: () => iconSetting }}
      />
    </Drawer.Navigator>
  );
}

function FinsLogo() {
  return (
    <Image
      source={require("../../assets/images/imagotipo.png")}
      style={{ width: 250, height: 80 }}
      resizeMode="contain"
    />
  );
}
