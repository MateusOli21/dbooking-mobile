import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import HomeScreen from "./screens/Home";
import BookingScreen from "./screens/Booking";
import DeliveryScreen from "./screens/Delivery";
import SettingsScreen from "./screens/Settings";

import { theme } from "./styles/global";

const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    lib: FontAwesome,
    name: "home",
  },
  Booking: {
    lib: MaterialCommunityIcons,
    name: "bookmark-multiple",
  },
  Delivery: {
    lib: FontAwesome,
    name: "shopping-cart",
  },
  Settings: {
    lib: Ionicons,
    name: "md-settings",
  },
};

export default function Navigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { lib: Icon, name } = icons[route.name];
          return <Icon name={name} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: theme.secondary,
          borderTopColor: "rgba(255,255,255,0.2)",
        },
        activeTintColor: theme.primaryLight,
        inactiveTintColor: theme.gray,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Início" }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{ title: "Reserva" }}
      />
      <Tab.Screen
        name="Delivery"
        component={DeliveryScreen}
        options={{ title: "Delivery" }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "Configurações" }}
      />
    </Tab.Navigator>
  );
}
