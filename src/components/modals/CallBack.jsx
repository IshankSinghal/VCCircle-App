import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const Callback = ({ visible, onClose, onSubmit }) => {
  const [slideAnim] = useState(new Animated.Value(-height));
  const [formData, setFormData] = useState({
    organisation: '',
    name: '',
    designation: '',
    email: '',
    mobile: '',
    message: '',
  });

  useEffect(() => {
    if (visible) {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: -height,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, slideAnim]);

  const handleSubmit = () => {
    onSubmit(formData);
    // Reset form
    setFormData({
      organisation: '',
      name: '',
      designation: '',
      email: '',
      mobile: '',
      message: '',
    });
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <Animated.View
          style={[
            styles.modalContainer,
            {
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          {/* Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Have a Query? Get a call back</Text>
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
              <Text style={styles.closeButtonText}>×</Text>
            </TouchableOpacity>
          </View>

          {/* Form */}
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Organisation*"
              placeholderTextColor="#c1c1c1"
              value={formData.organisation}
              onChangeText={text => handleInputChange('organisation', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Name*"
              placeholderTextColor="#c1c1c1"
              value={formData.name}
              onChangeText={text => handleInputChange('name', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Designation*"
              placeholderTextColor="#c1c1c1"
              value={formData.designation}
              onChangeText={text => handleInputChange('designation', text)}
            />

            <TextInput
              style={styles.input}
              placeholder="Official/Business Email ID*"
              placeholderTextColor="#c1c1c1"
              value={formData.email}
              onChangeText={text => handleInputChange('email', text)}
              keyboardType="email-address"
            />

            <TextInput
              style={styles.input}
              placeholder="Mobile Number*"
              placeholderTextColor="#c1c1c1"
              value={formData.mobile}
              onChangeText={text => handleInputChange('mobile', text)}
              keyboardType="phone-pad"
            />

            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Message"
              placeholderTextColor="#c1c1c1"
              value={formData.message}
              onChangeText={text => handleInputChange('message', text)}
              multiline={true}
              numberOfLines={4}
              textAlignVertical="top"
            />

            <TouchableOpacity
              style={styles.submitButton}
              onPress={handleSubmit}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = {
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: width * 0.9,
    maxHeight: height * 0.8,
    // Remove: alignSelf: 'center',
    // Remove: marginTop: 50,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalHeader: {
    backgroundColor: '#2d2d2d',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  modalTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  closeButton: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    marginBottom: 15,
    color: '#333',
  },
  messageInput: {
    height: 100,
    paddingTop: 12,
  },
  submitButton: {
    backgroundColor: '#e53e3e',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
};

export default Callback;
