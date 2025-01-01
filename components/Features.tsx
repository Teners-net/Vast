import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { ArrowUpDown, FileType, TabletSmartphone, Cable, DollarSign, MonitorPlay, School, HardDriveDownload, WalletCards } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define the types for your navigation
type RootStackParamList = {
  DataBundleDetail: undefined;
  Recharge2CashDetail: undefined;
  AirtimeDetail: undefined;
  ElectricityDetail: undefined;
  ReferEarnDetail: undefined;
  CableDetail: undefined;
  ExamDetail: undefined;
  DataCardDetail: undefined;
  RechargeCardDetail: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const Features = () => {
  const navigation = useNavigation<NavigationProp>();
  
  const featuresData = [
    { name: "Data & Bundle", icon: <ArrowUpDown size={40} color="white" />, route: "features/DataBundleDetail" as keyof RootStackParamList },
    { name: "Recharge2Cash", icon: <FileType size={40} color="white" />, route: "features/Recharge2CashDetail" as keyof RootStackParamList },
    { name: "Airtime", icon: <TabletSmartphone size={40} color="white" />, route:  "features/AirtimeDetail" as keyof RootStackParamList  },
    { name: "Electricity", icon: <Cable size={40} color="white" />, route: "features/ElectricityDetail" as keyof RootStackParamList },
    { name: "Refer & Earn", icon: <DollarSign size={40} color="white" />, route: "ReferEarnDetail" as keyof RootStackParamList },
    { name: "Cable", icon: <MonitorPlay size={40} color="white" />, route: "CableDetail" as keyof RootStackParamList },
    { name: "Exam", icon: <School size={40} color="white" />, route: "ExamDetail" as keyof RootStackParamList },
    { name: "Data Card", icon: <HardDriveDownload size={40} color="white" />, route: "DataCardDetail" as keyof RootStackParamList },
    { name: "Recharge Card", icon: <WalletCards size={40} color="white" />, route: "RechargeCardDetail" as keyof RootStackParamList },
  ];

  const handleFeatureClick = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };
  return (
    <ScrollView className="bg-white mt-4 p-5 rounded-xl shadow-lg m-[-0.5rem]">
      <Text className="text-[1.5rem] font-semibold mb-6 text-gray-800">Features</Text>
      
      <View className="flex flex-wrap flex-row justify-between">
        {featuresData.map((feature, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleFeatureClick(feature.route)}
            className="flex flex-col items-center w-[30%] mb-6"
          >
            <View className="bg-[#500073] w-[80px] h-[80px] rounded-full flex items-center justify-center border-4 border-white">
              {feature.icon}
            </View>
            <Text className="mt-3 font-medium text-md text-gray-800 text-center">
              {feature.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default Features;