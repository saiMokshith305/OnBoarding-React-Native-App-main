import React, { useState } from 'react';
import { View, Text, TextInput, Picker } from 'react-native';

const LoanForm = () => {
  const [selectedLoan, setSelectedLoan] = useState('');
  const [additionalInputVisible, setAdditionalInputVisible] = useState(false);
  const [additionalInputValue, setAdditionalInputValue] = useState('');

  const handleLoanChange = (loanType) => {
    setSelectedLoan(loanType);
    setAdditionalInputValue(''); // Reset additional input value when loan type changes
    if (loanType === 'carLoan' || loanType === 'homeLoan') {
      setAdditionalInputVisible(true);
    } else {
      setAdditionalInputVisible(false);
    }
  };

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

      {additionalInputVisible && (
        <View>
          <TextInput
            placeholder="Additional Information"
            value={additionalInputValue}
            onChangeText={(text) => setAdditionalInputValue(text)}
          />
          {/* You can add more TextInput components based on the selected loan type */}
        </View>
      )}
    </View>
  );
};

export default LoanForm;
