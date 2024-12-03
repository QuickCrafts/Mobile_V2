import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Pages from "@/app/pages/_layout";
import NotFound from "@/app/notFound";
import Login from "@/app/login";
import LoginOther from "@/app/loginOther";
import LoginEmail from "@/app/loginEmail";
import Register from "@/app/register";

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  const isSignedIn = false; //@todo auth state

  return (
    <Stack.Navigator>
      {isSignedIn ? (
        <>
          <Stack.Screen
            name="pages"
            component={Pages}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="login"
            component={Login /*@todo create layout for not logged in pages */}
            options={{ headerShown: false }}
          />
        </>
      )}
      <Stack.Screen
        name="notFound"
        component={NotFound}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
