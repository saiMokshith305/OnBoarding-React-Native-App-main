import { Text, View, Image,TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";
import Colors from "../constants/Colors";
import Font from "../constants/Font";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;
const Home: React.FC<Props> = ({ navigation: { navigate } }) => {
   {
    return (
      <View style={{}} >
        <Image source={require('../assets/images/home.png')}>
        </Image>
        <TouchableOpacity
             onPress={() => navigate("Appointment")}
            style={{
              backgroundColor: Colors.primary,
              paddingVertical: Spacing * 1,
              paddingHorizontal: Spacing * 1.5,
              marginTop:50,
              width: "48%",
              borderRadius: Spacing,
              shadowColor: Colors.primary,
              shadowOffset: {
                width: 0,
                height: Spacing,
              },
              shadowOpacity: 0.3,
              shadowRadius: Spacing,
              alignSelf: "center"
            }}
          >
            <Text
              style={{
                fontFamily: Font["poppins-bold"],
                color: Colors.onPrimary,
                fontSize: FontSize.large,
                textAlign: "center",
              }}
            >
              Book Appointment
            </Text>
          </TouchableOpacity>
    
      </View>
    )
  }
}
export default Home;

// export default class Home extends Component {
  
// }