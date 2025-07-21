import { StyleSheet, Platform, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: Platform.OS === 'ios' ? 12 : 8,
    width: width * 0.85,
    maxHeight: height * 0.85,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.25,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontFamily: 'Montserrat',
    fontSize: 20,
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
    color: '#1F2937',
    flex: 1,
    textAlign: 'center',
    // marginRight: 15,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: 24,
    color: '#6B7280',
    fontWeight: Platform.OS === 'ios' ? '300' : 'normal',
  },
  scrollView: {
    paddingHorizontal: 25,
    paddingVertical: 10,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: Platform.OS === 'ios' ? '500' : 'bold',
    color: '#374151',
    marginBottom: 8,
  },
  required: {
    color: '#EF4444',
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: Platform.OS === 'ios' ? 8 : 4,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 12 : 14,
    fontSize: 16,
    color: '#1F2937',
    backgroundColor: '#F9FAFB',
    minHeight: 48,
    ...Platform.select({
      android: {
        textAlignVertical: 'top',
      },
    }),
  },
  radioGroup: {
    marginTop: 8,
  },
  radioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
    ...Platform.select({
      android: {
        paddingVertical: 4,
      },
    }),
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#6B7280',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: '#3B82F6',
  },
  radioButtonInner: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3B82F6',
  },
  radioLabel: {
    fontSize: 16,
    color: '#374151',
    flex: 1,
  },
  submitButton: {
    backgroundColor: '#7C3AED',
    borderRadius: Platform.OS === 'ios' ? 8 : 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#7C3AED',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: Platform.OS === 'ios' ? '600' : 'bold',
  },
});

export default styles;
