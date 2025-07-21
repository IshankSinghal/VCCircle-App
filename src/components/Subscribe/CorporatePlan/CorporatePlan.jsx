import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import styles from './corporate.styles';

const CorporatePlan = () => {
  const [instituteName, setInstituteName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = text => {
    // Remove all non-numeric characters
    const numericOnly = text.replace(/[^0-9]/g, '');

    // Limit to 10 digits
    if (numericOnly.length <= 10) {
      setPhoneNumber(numericOnly);
    }
  };

  const isPhoneValid = phoneNumber.length === 10;

  const handleGetOTP = () => {
    // Handle OTP generation here
    console.log('Getting OTP for:', phoneNumber);
    // Add your OTP logic here
  };

  const handleSendDetails = () => {
    // Handle form submission here
    console.log({
      instituteName,
      email,
      phoneNumber,
    });
  };

  return (
    <View style={styles.container}>
      {/* Background Color Division */}
      <View style={styles.backgroundContainer}>
        <View style={styles.blackBackground} />
        <View style={styles.whiteBackground} />
      </View>

      {/* Content on top of background */}
      <ScrollView
        style={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>
            Equip your team with exclusive content on Alternative Investment
            Ecosystem
          </Text>
          <View style={styles.underline} />
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.formSubtitle}>
            Share us your details and we will contact you shortly
            {/* <View style={styles.underline} /> */}
          </Text>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Institute/Corporate name*</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Institute/Corporate name"
              placeholderTextColor="#A0A0A0"
              value={instituteName}
              onChangeText={setInstituteName}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Business Email address*</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your Business Email address"
              placeholderTextColor="#A0A0A0"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone number*</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your mobile number"
              placeholderTextColor="#A0A0A0"
              value={phoneNumber}
              onChangeText={handlePhoneNumberChange}
              keyboardType="numeric"
            //   maxLength={10}
            />
            {phoneNumber.length > 0 && phoneNumber.length < 10 && (
              <Text style={styles.errorText}>
                Phone number must be 10 digits
              </Text>
            )}
          </View>

          {isPhoneValid && (
            <View style={styles.otpButtonContainer}>
              <TouchableOpacity style={styles.otpButton} onPress={handleGetOTP}>
                <Text style={styles.otpButtonText}>Get OTP</Text>
              </TouchableOpacity>
            </View>
          )}

          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSendDetails}
          >
            <Text style={styles.submitButtonText}>Send Details</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CorporatePlan;
