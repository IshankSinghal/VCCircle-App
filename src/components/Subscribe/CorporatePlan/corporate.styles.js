import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'column',
  },
  blackBackground: {
    flex: 0.3,
    backgroundColor: '#1a1a1a',
  },
  whiteBackground: {
    flex: 0.7,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 28,
    marginBottom: 10,
  },
  underline: {
    width: 60,
    height: 3,
    backgroundColor: '#FF0000',
    marginTop: 10,
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#F5F5F5',
    border: '2px solid',
    borderColor: '#000000',
    borderRadius: 5,
    padding: 20,
    // marginTop: 20,
    marginBottom: 20,
  },
  formSubtitle: {
    color: '#666666',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#FFFFFF',
    height: 50,
  },
  otpButtonContainer: {
    alignItems: 'flex-end',
  },
  otpButton: {
    backgroundColor: '#000000',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 4,
  },
  otpButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  errorText: {
    color: '#FF3B30',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 8,
  },
  submitButton: {
    backgroundColor: '#E57373',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
