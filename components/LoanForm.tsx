import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CarLoanFields = () => {
  return (
    <View>
      <TextInput placeholder="Car Model" />
      <TextInput placeholder="Car Manufacturer" />
      {/* Add more car loan fields as needed */}
    </View>
  );
};

const HomeLoanFields = () => {
  return (
    <View>
      <TextInput placeholder="Home Address" />
      <TextInput placeholder="Property Value" />
      {/* Add more home loan fields as needed */}
    </View>
  );
};

const LoanForm = () => {
  const [selectedLoan, setSelectedLoan] = useState('');
  const [additionalInputVisible, setAdditionalInputVisible] = useState(false);

  const handleLoanChange = (loanType) => {
    setSelectedLoan(loanType);
    if (loanType === 'carLoan' || loanType === 'homeLoan') {
      setAdditionalInputVisible(true);
    } else {
      setAdditionalInputVisible(false);
    }
  };

  let additionalFields;
  if (selectedLoan === 'carLoan') {
    additionalFields = <CarLoanFields />;
  } else if (selectedLoan === 'homeLoan') {
    additionalFields = <HomeLoanFields />;
  }

  return (
    <View>
      <Picker
        selectedValue={selectedLoan}
        onValueChange={(itemValue) => handleLoanChange(itemValue)}
      >
        <Picker.Item label="Select a Loan Type" value="" />
        <Picker.Item label="Car Loan" value="carLoan" />
        <Picker.Item label="Home Loan" value="homeLoan" />
        {/* Add more options if needed */}
      </Picker>

      {additionalInputVisible && additionalFields}
    </View>
  );
};

export default LoanForm;
