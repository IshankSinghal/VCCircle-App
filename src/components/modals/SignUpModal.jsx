import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';

const SignUpModal = ({ visible, onClose }) => {
  const [loginMethod, setLoginMethod] = useState('password'); // 'password' or 'otp'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    // Handle sign in logic here
    console.log('Sign in pressed', { email, password, rememberMe });
    // You can add your authentication logic here
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>✕</Text>
          </TouchableOpacity>

          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Logo/Title */}
            <Text style={styles.logo}>VCCiRCLE</Text>

            {/* Subtitle */}
            <Text style={styles.subtitle}>
              Please enter your details to login
            </Text>

            {/* Radio Buttons */}
            <View style={styles.radioContainer}>
              <TouchableOpacity
                style={styles.radioOption}
                onPress={() => setLoginMethod('password')}
              >
                <View style={styles.radioButton}>
                  {loginMethod === 'password' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </View>
                <Text style={styles.radioText}>Login With Password</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.radioOption}
                onPress={() => setLoginMethod('otp')}
              >
                <View style={styles.radioButton}>
                  {loginMethod === 'otp' && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </View>
                <Text style={styles.radioText}>Login With OTP</Text>
              </TouchableOpacity>
            </View>

            {/* Email Input */}
            <Text style={styles.inputLabel}>Mobile number</Text>
            <TextInput
              keyboardType="numeric"
              style={styles.input}
              placeholder="Enter your mobile number"
              value={email}
              onChangeText={setEmail}
              // keyboardType="email-address"
              type="number-pad"
            />

            {/* Password Input - only show if password method selected */}
            {loginMethod === 'password' && (
              <>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
                />
              </>
            )}

            {/* Remember Me and Forgot Password */}
            {loginMethod === 'password' ? (
              <View style={styles.checkboxContainer}>
                <TouchableOpacity
                  style={styles.checkboxOption}
                  onPress={() => setRememberMe(!rememberMe)}
                >
                  <View style={styles.checkbox}>
                    {rememberMe && <Text style={styles.checkboxTick}>✓</Text>}
                  </View>
                  <Text style={styles.checkboxText}>Remember me</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.forgotPassword}>Forgot Password</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View>
                <Text>*Note: Don't prefix 91 before the mobile number.</Text>
              </View>
            )}

            {/* Sign In Button */}
            <TouchableOpacity
              style={styles.signInButton}
              onPress={handleSignIn}
            >
              <Text style={styles.signInButtonText}>SIGN IN</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default SignUpModal;

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    maxWidth: 400,
    maxHeight: '90%',
    padding: 20,
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#666',
    fontWeight: 'bold',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 30,
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  radioContainer: {
    marginBottom: 30,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4285F4',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4285F4',
  },
  radioText: {
    fontSize: 16,
    color: '#333',
  },
  inputLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
    backgroundColor: '#f9f9f9',
  },
  checkboxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkboxOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 3,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxTick: {
    color: '#4285F4',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxText: {
    fontSize: 14,
    color: '#333',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#4285F4',
    textDecorationLine: 'underline',
  },
  signInButton: {
    backgroundColor: '#4285F4',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  signInButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
