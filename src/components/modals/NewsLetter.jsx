import React, { useState } from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Platform,
} from 'react-native';
import styles from './newsletter.styles';

const Newsletter = ({ visible, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    companyName: '',
    designation: '',
    region: 'All',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Basic validation
    if (!formData.email || !formData.name || !formData.companyName) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // Handle form submission
    console.log('Form submitted:', formData);
    Alert.alert('Success', 'Thank you for subscribing!');
    onClose();
  };

  const RegionOption = ({ value, label, selected, onSelect }) => (
    <TouchableOpacity
      style={styles.radioContainer}
      onPress={() => onSelect(value)}
    >
      <View
        style={[styles.radioButton, selected && styles.radioButtonSelected]}
      >
        {selected && <View style={styles.radioButtonInner} />}
      </View>
      <Text style={styles.radioLabel}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>
              Subscribe to our newletter for free!
            </Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={false}
          >
            {/* Email Field */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>
                Email <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={text => handleInputChange('email', text)}
                placeholder=""
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Name Field */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>
                Name <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={text => handleInputChange('name', text)}
                placeholder=""
              />
            </View>

            {/* Company Name Field */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>
                Company Name <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={formData.companyName}
                onChangeText={text => handleInputChange('companyName', text)}
                placeholder=""
              />
            </View>

            {/* Designation Field */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>
                Designation <Text style={styles.required}>*</Text>
              </Text>
              <TextInput
                style={styles.input}
                value={formData.designation}
                onChangeText={text => handleInputChange('designation', text)}
                placeholder=""
              />
            </View>

            {/* Region Selection */}
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>
                Region <Text style={styles.required}>*</Text>
              </Text>
              <View style={styles.radioGroup}>
                <View style={styles.radioRow}>
                  <RegionOption
                    value="All"
                    label="All"
                    selected={formData.region === 'All'}
                    onSelect={value => handleInputChange('region', value)}
                  />
                  <RegionOption
                    value="India"
                    label="India"
                    selected={formData.region === 'India'}
                    onSelect={value => handleInputChange('region', value)}
                  />
                </View>
                <RegionOption
                  value="MEA"
                  label="MEA (Middle East and Africa)"
                  selected={formData.region === 'MEA'}
                  onSelect={value => handleInputChange('region', value)}
                />
              </View>
            </View>

            {/* Submit Button */}
            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default Newsletter;
