import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { Home, PlusCircle, User, Wallet  } from "lucide-react-native";
import { useAuth } from "@/context/AuthContext";

type TabIconProps = {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
};
const TabIcon = ({ icon: Icon, color, name, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center">
      <Icon color={color} size={24} strokeWidth={focused ? 2.5 : 1.5} />
      <Text
        className={`text-xs ${focused ? "font-semibold" : "font-normal"} mt-1`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const { authState } = useAuth();
  
  if (!authState?.authenticated) {
    return <Redirect href="/" />;
  }

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "fff",
          borderTopWidth: 1,
          borderTopColor: "#ffff",
          height: 84,
          paddingTop: 10,
          paddingBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={Home} color={color} name="Home" focused={focused} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="create"
        options={{
          title: "Wallet",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={PlusCircle} color={color} name="Wallet" focused={focused} />
          ),
        }}
      />
      
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={User} color={color} name="Profile" focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};
export default TabsLayout;
