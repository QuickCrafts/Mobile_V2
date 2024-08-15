import { createDrawerNavigator } from "@react-navigation/drawer";
import { View, Text, Image } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import Summary from "@/app/pages/summary";
import Transaction from "@/app/pages/transaction";
import Settings from "@/app/pages/settings";
import Home from "@/app/pages/home";

const Drawer = createDrawerNavigator();

const iconHome = <Icon name="list-alt" size={20} color="#076a77" />;
const iconTransactions = <Icon name="exchange" size={20} color="#076a77" />;
const iconPayment = <Icon name="credit-card-alt" size={20} color="#076a77" />;
const iconBudgets = <Icon name="shopping-bag" size={20} color="#076a77" />;
const iconGoals = <Icon name="university" size={20} color="#076a77" />;
const iconSetting = <Icon name="gear" size={20} color="#076a77" />;

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Inicio", drawerIcon: () => <></> }}
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
      source={require("@/assets/images/imagotipo.png")}
      style={{ width: 250, height: 80 }}
      resizeMode="contain"
    />
  );
}
