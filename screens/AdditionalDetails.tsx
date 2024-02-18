import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  import Spacing from "../constants/Spacing";
  import FontSize from "../constants/FontSize";
  import Colors from "../constants/Colors";
  import Font from "../constants/Font";
  import { Ionicons } from "@expo/vector-icons";
  import { NativeStackScreenProps } from "@react-navigation/native-stack";
  import { RootStackParamList } from "../types";
  import AppTextInput from "../components/AppTextInput";
import Dropdown from "../components/Dropdown";
  
  type Props = NativeStackScreenProps<RootStackParamList, "Additional">;
  
  const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
      <SafeAreaView>
        <View
          style={{
            padding: Spacing * 2,
          }}
        >
          <View
            style={{
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigate("Register")}
                style={{
                  padding: Spacing,
                  borderRadius: Spacing / 2,
                  marginHorizontal: Spacing,
                  alignSelf: "flex-start",
                }}
              >
                <Ionicons
                  name="arrow-back-outline"
                  color={Colors.text}
                  size={Spacing * 2}
                />
              </TouchableOpacity>
            <Text
              style={{
                fontSize: FontSize.xLarge,
                color: Colors.primary,
                fontFamily: Font["poppins-bold"],
                marginVertical: Spacing * 3,
              }}
            >
              Additional Details
            </Text>
            <Text
              style={{
                fontFamily: Font["poppins-regular"],
                fontSize: FontSize.small,
                maxWidth: "80%",
                textAlign: "center",
              }}
            >
              Join the Fine Financial Family and Secure Your Financial Future!
            </Text>
          </View>
          <View
            style={{
              marginVertical: Spacing * 1,
            }}
          >
            <AppTextInput placeholder="First Name" />
            <AppTextInput placeholder="Last Name" />
            <AppTextInput placeholder="Date of Birth" />
            <AppTextInput placeholder="Mobile" />
            <AppTextInput placeholder="Address" />
          </View>
  
          <TouchableOpacity
          onPress={() => navigate("Financial")}
            style={{
              padding: Spacing * 2,
              backgroundColor: Colors.primary,
              marginVertical: Spacing * 3,
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: Colors.onPrimary,
                textAlign: "center",
                fontSize: FontSize.large,
              }}
            >
              Next
            </Text>
          </TouchableOpacity>
  
          
        </View>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;
  