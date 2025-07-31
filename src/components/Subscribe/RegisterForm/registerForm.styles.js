import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    backgroundColor: '#fff',
  },
  editPlan: {
    flex: 1,
    alignItems: 'flex-end',
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  editPlanText: { fontSize: 15 },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    margin: 15,
    borderRadius: 5,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 0,
        },
        shadowOpacity: 0.55,
        shadowRadius: 8,
      },
      android: {
        elevation: 5,
      },
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
    paddingBottom: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  planContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 5,
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0',
  },
  planText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
    letterSpacing: 1,
  },
  logoContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#333',
    letterSpacing: 0.5,
  },
  logoSubtext: {
    fontSize: 20,
    fontWeight: '300',
    color: '#666',
    marginVertical: 2,
  },
  journalText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    letterSpacing: 1.5,
  },
  instructionText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 25,
    lineHeight: 22,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginBottom: 8,
  },
  required: {
    color: '#e74c3c',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  addressInput: {
    minHeight: 80,
    paddingTop: Platform.OS === 'ios' ? 15 : 12,
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  mobileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    backgroundColor: '#fff',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 12,
    borderRightWidth: 1,
    borderRightColor: '#ddd',
    backgroundColor: '#f8f9fa',
  },
  flagText: {
    fontSize: 16,
    marginRight: 5,
  },
  codeText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  mobileInput: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 12,
    fontSize: 16,
    color: '#333',
  },
  noteText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 5,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    backgroundColor: '#fff',
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 1,
      },
    }),
  },
  picker: {
    height: Platform.OS === 'ios' ? 50 : 50,
    width: '100%',
    color: '#333',
    ...Platform.select({
      android: {
        backgroundColor: 'transparent',
      },
    }),
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 5,
    fontStyle: 'italic',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#007bff',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});

export default styles;
