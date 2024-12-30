import React from 'react';
import { View, Text, ScrollView } from "react-native";
import { ArrowUpDown, FileType, TabletSmartphone, Cable, DollarSign, MonitorPlay, School, HardDriveDownload, WalletCards } from 'lucide-react-native';

const Features = () => {
  const featuresData = [
    { name: "Data & Bundle", icon: <ArrowUpDown size={40} color="white" /> },
    { name: "Recharge2Cash", icon: <FileType size={40} color="white" /> },
    { name: "Airtime", icon: <TabletSmartphone size={40} color="white" /> },
    { name: "Electricity", icon: <Cable size={40} color="white" /> },
    { name: "Refer & Earn", icon: <DollarSign size={40} color="white" /> },
    { name: "Cable", icon: <MonitorPlay size={40} color="white" /> },
    { name: "Exam", icon: <School size={40} color="white" /> },
    { name: "Data Card", icon: <HardDriveDownload size={40} color="white" /> },
    { name: "Recharge Card", icon: <WalletCards size={40} color="white" /> },
  ];

  return (
    <ScrollView className="bg-white mt-6 p-5 rounded-xl shadow-lg  m-[-0.5rem] ]">
    <Text className="text-[1.5rem] font-semibold mb-6 text-gray-800">Features</Text>

    {/* Feature Flexbox Layout */}
    <View className="flex flex-wrap flex-row justify-between ">
      {featuresData.map((feature, index) => (
        <View key={index} className="flex flex-col items-center w-[30%] mb-6">
          <View className="bg-[#500073] w-[80px] h-[80px] rounded-full flex items-center justify-center border-4 border-white">
            {feature.icon}
          </View>
          <Text className="mt-3 font-medium text-md text-gray-800 text-center">{feature.name}</Text>
        </View>
      ))}
    </View>
  </ScrollView>
  );
};

export default Features;
