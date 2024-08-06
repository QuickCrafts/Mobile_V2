import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./home";
import Summary from "./summary";
import Transaction from "./transaction";
import Budgets from "./budgets";
import Goals from "./goals";
import Payment from "./payment";
import Settings from "./settings";

const Drawer = createDrawerNavigator();

export default function PagesLayout() {
  return (
    <Drawer.Navigator initialRouteName="Inicio">
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen name="Resumen" component={Summary} />
      <Drawer.Screen name="Transacciones" component={Transaction} />
      <Drawer.Screen name="Presupuestos" component={Budgets} />
      <Drawer.Screen name="Metas" component={Goals} />
      <Drawer.Screen name="Metodos de Pago" component={Payment} />
      <Drawer.Screen name="Ajustes" component={Settings} />
    </Drawer.Navigator>
  );
}
