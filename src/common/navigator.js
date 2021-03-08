import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Dashboard from "../screens/dashboard";
import Welcome from "../screens/welcome";
import { COLORS } from "../styles/colors";

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === "Welcome") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "Search") {
              iconName = "search";
            }
            return <Ionicons name={iconName} size={size} color={COLORS.blue} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: COLORS.black,
          inactiveTintColor: COLORS.light_grey,
        }}
      >
        <Tab.Screen name="Welcome" component={Welcome} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}