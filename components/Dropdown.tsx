import React, { useState } from 'react';
  import { StyleSheet, Text, View } from 'react-native';
  import { Dropdown } from 'react-native-element-dropdown';
  import AntDesign from '@expo/vector-icons/AntDesign';
  import Colors from "../constants/Colors";
import Font from "../constants/Font";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontSize";


  const data = [
    { label: 'Full Time', value: '1' },
    { label: 'Part Time', value: '2' },
    { label: 'Self Employed', value: '3' }
  ];

  const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Employment Type
          </Text>
        );
      }
      return null;
    };

    return (
      <View style={styles.container}>
        {renderLabel()}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: Colors.primary }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Employment Type' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
      
        />
      </View>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({

    
    container: {
      backgroundColor: Colors.lightPrimary,
      padding: 16,
      borderRadius: Spacing,
      
    },
    dropdown: {
      
      height: 50,
      borderColor: 'gray',
      borderWidth: 0.5,
      borderRadius: Spacing,
      paddingHorizontal: 8,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      fontFamily: Font["poppins-regular"],
      position: 'absolute',
      backgroundColor: Colors.lightPrimary,
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      
      fontSize: FontSize.small,
    },
    selectedTextStyle: {
      fontFamily: Font["poppins-regular"],
      fontSize: 16,backgroundColor: Colors.lightPrimary,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
  });