import React, { useState } from 'react';
import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Platform,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './registerForm.styles';
import {
  designations,
  industries,
  countries,
  states,
} from '../../../data/registrayionData';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    mobileNumber: '',
    firstName: '',
    lastName: '',
    companyName: '',
    designation: '',
    industry: '',
    jobTitle: '',
    country: '',
    state: '',
    city: '',
    pinCode: '',
    address: '',
    gstNumber: '',
  });

  const [errors, setErrors] = useState({});

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = mobile => {
    const mobileRegex = /^[6-9]\d{9}$/;
    return mobileRegex.test(mobile);
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: '',
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile number is required';
    } else if (!validateMobile(formData.mobileNumber)) {
      newErrors.mobileNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.companyName) {
      newErrors.companyName = 'Company name is required';
    }

    if (
      !formData.designation ||
      formData.designation === 'Select Designation'
    ) {
      newErrors.designation = 'Please select a designation';
    }

    if (!formData.industry || formData.industry === 'Select Industry') {
      newErrors.industry = 'Please select an industry';
    }

    if (!formData.jobTitle) {
      newErrors.jobTitle = 'Job title is required';
    }

    if (!formData.country || formData.country === 'Select Country') {
      newErrors.country = 'Please select a country';
    }

    if (!formData.state || formData.state === 'Select State') {
      newErrors.state = 'Please select a state';
    }

    if (!formData.city) {
      newErrors.city = 'City is required';
    }

    if (!formData.pinCode) {
      newErrors.pinCode = 'Pin code is required';
    }

    if (!formData.address) {
      newErrors.address = 'Address is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert('Success', 'Form submitted successfully!', [
        {
          text: 'OK',
          onPress: () => console.log('Form Data:', formData),
        },
      ]);
    } else {
      Alert.alert('Error', 'Please fix the errors and try again.');
    }
  };

  return (
    <ScrollView style={styles.scrollview} showsVerticalScrollIndicator={false}>
      <TouchableOpacity style={styles.editPlan}>
        <Text style={styles.editPlanText}>Edit Plan</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.planContainer}>
            <Text style={styles.planText}>3 YEAR PLAN</Text>
          </View>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>VCCIRCLE PREMIUM</Text>
            <Text style={styles.logoSubtext}>+</Text>
            <Text style={styles.journalText}>THE WALL STREET JOURNAL</Text>
          </View>
        </View>

        {/* Instructions */}
        <Text style={styles.instructionText}>
          Please enter the following to details to continue
        </Text>

        {/* Email Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Email<Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, errors.email && styles.inputError]}
            placeholder="Enter your email address"
            placeholderTextColor="#999"
            value={formData.email}
            onChangeText={text => handleInputChange('email', text)}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        {/* Mobile Number Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Mobile Number<Text style={styles.required}>*</Text>
          </Text>
          <View style={styles.mobileContainer}>
            <View style={styles.countryCode}>
              <Text style={styles.flagText}>🇮🇳</Text>
              <Text style={styles.codeText}>+91</Text>
            </View>
            <TextInput
              style={[
                styles.mobileInput,
                errors.mobileNumber && styles.inputError,
              ]}
              placeholder="Enter your mobile number"
              placeholderTextColor="#999"
              value={formData.mobileNumber}
              onChangeText={text => handleInputChange('mobileNumber', text)}
              keyboardType="numeric"
              maxLength={10}
            />
          </View>
          <Text style={styles.noteText}>
            *Note: Only Indian mobile number allowed. Don't write +91.
          </Text>
          {errors.mobileNumber && (
            <Text style={styles.errorText}>{errors.mobileNumber}</Text>
          )}
        </View>

        {/* First Name Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            First name<Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, errors.firstName && styles.inputError]}
            placeholder="First Name*"
            placeholderTextColor="#999"
            value={formData.firstName}
            onChangeText={text => handleInputChange('firstName', text)}
            autoCapitalize="words"
          />
          {errors.firstName && (
            <Text style={styles.errorText}>{errors.firstName}</Text>
          )}
        </View>

        {/* Last Name Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Last name</Text>
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            placeholderTextColor="#999"
            value={formData.lastName}
            onChangeText={text => handleInputChange('lastName', text)}
            autoCapitalize="words"
          />
        </View>

        {/* Company Name Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Company name<Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, errors.companyName && styles.inputError]}
            placeholder="Company Name*"
            placeholderTextColor="#999"
            value={formData.companyName}
            onChangeText={text => handleInputChange('companyName', text)}
            autoCapitalize="words"
          />
          {errors.companyName && (
            <Text style={styles.errorText}>{errors.companyName}</Text>
          )}
        </View>

        {/* Designation Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Designation</Text>
          <View
            style={[
              styles.pickerContainer,
              errors.designation && styles.inputError,
            ]}
          >
            <Picker
              selectedValue={formData.designation}
              onValueChange={value => handleInputChange('designation', value)}
              style={styles.picker}
              mode="dropdown"
            >
              {designations.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item}
                  enabled={index !== 0}
                />
              ))}
            </Picker>
          </View>
          {errors.designation && (
            <Text style={styles.errorText}>{errors.designation}</Text>
          )}
        </View>

        {/* Industry Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Industry<Text style={styles.required}>*</Text>
          </Text>
          <View
            style={[
              styles.pickerContainer,
              errors.industry && styles.inputError,
            ]}
          >
            <Picker
              selectedValue={formData.industry}
              onValueChange={value => handleInputChange('industry', value)}
              style={styles.picker}
              mode="dropdown"
            >
              {industries.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item}
                  enabled={index !== 0}
                />
              ))}
            </Picker>
          </View>
          {errors.industry && (
            <Text style={styles.errorText}>{errors.industry}</Text>
          )}
        </View>

        {/* Job Title Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Job title<Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, errors.jobTitle && styles.inputError]}
            placeholder="Job Title"
            placeholderTextColor="#999"
            value={formData.jobTitle}
            onChangeText={text => handleInputChange('jobTitle', text)}
            autoCapitalize="words"
          />
          {errors.jobTitle && (
            <Text style={styles.errorText}>{errors.jobTitle}</Text>
          )}
        </View>

        {/* Country Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Country<Text style={styles.required}>*</Text>
          </Text>
          <View
            style={[
              styles.pickerContainer,
              errors.country && styles.inputError,
            ]}
          >
            <Picker
              selectedValue={formData.country}
              onValueChange={value => handleInputChange('country', value)}
              style={styles.picker}
              mode="dropdown"
            >
              {countries.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item}
                  enabled={index !== 0}
                />
              ))}
            </Picker>
          </View>
          {errors.country && (
            <Text style={styles.errorText}>{errors.country}</Text>
          )}
        </View>

        {/* State Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            State<Text style={styles.required}>*</Text>
          </Text>
          <View
            style={[styles.pickerContainer, errors.state && styles.inputError]}
          >
            <Picker
              selectedValue={formData.state}
              onValueChange={value => handleInputChange('state', value)}
              style={styles.picker}
              mode="dropdown"
            >
              {states.map((item, index) => (
                <Picker.Item
                  key={index}
                  label={item}
                  value={item}
                  enabled={index !== 0}
                />
              ))}
            </Picker>
          </View>
          {errors.state && <Text style={styles.errorText}>{errors.state}</Text>}
        </View>

        {/* City Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            City<Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, errors.city && styles.inputError]}
            placeholder="City"
            placeholderTextColor="#999"
            value={formData.city}
            onChangeText={text => handleInputChange('city', text)}
            autoCapitalize="words"
          />
          {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
        </View>

        {/* Pin Code Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Pin Code<Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[styles.input, errors.pinCode && styles.inputError]}
            placeholder="Pin Code"
            placeholderTextColor="#999"
            value={formData.pinCode}
            onChangeText={text => handleInputChange('pinCode', text)}
            keyboardType="numeric"
            maxLength={6}
          />
          {errors.pinCode && (
            <Text style={styles.errorText}>{errors.pinCode}</Text>
          )}
        </View>

        {/* Address Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>
            Address<Text style={styles.required}>*</Text>
          </Text>
          <TextInput
            style={[
              styles.input,
              styles.addressInput,
              errors.address && styles.inputError,
            ]}
            placeholder="Address"
            placeholderTextColor="#999"
            value={formData.address}
            onChangeText={text => handleInputChange('address', text)}
            multiline={true}
            numberOfLines={3}
            textAlignVertical="top"
            autoCapitalize="sentences"
          />
          {errors.address && (
            <Text style={styles.errorText}>{errors.address}</Text>
          )}
        </View>

        {/* GST Number Field */}
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>GST Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your GST number"
            placeholderTextColor="#999"
            value={formData.gstNumber}
            onChangeText={text =>
              handleInputChange('gstNumber', text.toUpperCase())
            }
            autoCapitalize="characters"
            maxLength={15}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default RegisterForm;
