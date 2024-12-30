import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BellRing, Eye, RotateCw, Copy, Ellipsis  } from 'lucide-react-native';
import Features from "@/components/Features";


const Home = () => {
  const [accountNumberVisible, setAccountNumberVisible] = useState(false); // State to toggle visibility


  return (
    <SafeAreaView className="flex-1 bg-[#2A004E]">
      {/* Profile Section */}
      <View className="flex-row items-center px-5 pt-10 mb-5">
        {/* Profile Image */}
        <Image
          source={require("@/assets/images/imageicon.jpg")}
          resizeMode="cover"
          className="w-16 h-16 rounded-full border-2 border-white"
        />
        {/* Text Section */}
        <View className="ml-4">
          <Text className="text-xl font-bold text-white">Hello Admin</Text>
          <Text className="text-sm text-gray-200">Experience Swift Bill Payment</Text>
        </View>
      </View>

      {/* Notification Bell */}
      <View className="absolute top-[7rem] right-6">
        <BellRing size={25} color="white" />
      </View>

      {/* Wallet Section */}
      <View className="mt-10 px-5 items-center">
        <Text className="text-[2rem] font-semibold text-red-500">Wallet</Text>
        <View className="flex-row items-center mt-2 gap-5">
          <Text className="text-lg font-bold text-gray-100">₦ 214.50</Text>
          <Eye size={25} color="white" />
          <RotateCw size={25} color="white" />
        </View>
      </View>
      

              {/* Account Information Section */}
      <View className="bg-white rounded-xl mx-12 p-4 mt-5 shadow-lg">

          <View className="flex flex-row justify-between items-center">
        <Text className="text-xl font-bold text-gray-400">Account Number</Text>
        <Ellipsis size={25} color="black" />
      </View>

        {/* Account Number Display */}
        <View className="mt-4 items-center">
          {/* Account Number */}
          <View className="flex flex-row justify-between items-center  gap-[1rem]">  
          <Text className="text-lg font-bold text-gray-800">
            23482834654
          </Text>

          {/* Copy Icon */}
          <TouchableOpacity className="mt-2">
            <Copy size={25} color="black" />
          </TouchableOpacity>
          </View>
        

          {/* Bank Name */}   <View className="flex flex-row justify-between items-center  gap-[1rem]"> 
             <Text className="mt-4 text-md text-gray-400">9spb</Text>
             <Text className="mt-4 text-md text-gray-900">Emmanual hussain </Text>
             </View>
       
         
          {/* Charges */}
          <View className="flex flex-row justify-between items-center  gap-[1rem]"> 
             <Text className="mt-4 text-md text-gray-400">Charges</Text>
             <Text className="mt-4 text-md text-gray-900">1% cappd at 50 </Text>
             </View>  
        </View>
      </View>
      

      <Features/>

    </SafeAreaView>
  );
};

export default Home;
