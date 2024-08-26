import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";
import React from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import Settings from "@/app/pages/settings";
import Home from "@/app/pages/home";
import Header from "./header";
import { colors } from "@/styles/stylesGlobal";

//@todo
export type DrawerParamList = {
  Home: undefined;
  Summary: undefined;
  Transaction: undefined;
  Settings: undefined;
};

const Drawer = createDrawerNavigator<DrawerParamList>();

const iconHome = <Icon name="home" size={30} color={`${colors.primaryMain}`} />;
const iconTransactions = <Icon name="exchange" size={30} color={`${colors.primaryMain}`} />;
const iconPayment = <Icon name="credit-card-alt" size={30} color={`${colors.primaryMain}`} />;
const iconBudgets = <Icon name="shopping-bag" size={30} color={`${colors.primaryMain}`} />;
const iconGoals = <Icon name="university" size={30} color={`${colors.primaryMain}`} />;
const iconSetting = <Icon name="gear" size={30} color={`${colors.primaryMain}`} />;

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Settings"
      screenOptions={({ navigation }) => ({
        header: () => <Header navigation={navigation} hasIcon hasMenu/>,
        drawerType: 'front',
        drawerActiveTintColor: colors.primaryMain,
        drawerActiveBackgroundColor: '#042E33',
        drawerInactiveTintColor: colors.secondaryMain,
        drawerItemStyle:{
          borderRadius: 20,
        },
        drawerStyle: {
          backgroundColor: 'rgba(37, 23, 54, 0.95)',
          width: 63,
          height: 200,
          padding: 0,
          marginTop: 40,
          borderBottomRightRadius: 20,
          borderTopRightRadius: 20,
        },
      })}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{ title: "Inicio", drawerIcon: () => iconHome }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: "Ajustes", drawerIcon: () => iconSetting }}
      />
    </Drawer.Navigator>
  );
}
