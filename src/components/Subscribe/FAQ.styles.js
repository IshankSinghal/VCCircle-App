import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    marginBottom: 10,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  faqList: {
    paddingHorizontal: 20,
  },
  faqItem: {
    backgroundColor: '#ffffff',
    marginBottom: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    flex: 1,
    marginRight: 15,
    lineHeight: 22,
  },
  faqAnswerContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  faqAnswer: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginTop: 15,
  },
  plusIcon: {
    width: 24,  
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    border: '1px solid #4A90E2',
    borderRadius: 12,
  },
  plusIconExpanded: {
    transform: [{ rotate: '45deg' }],
  },
  plusHorizontal: {
    width: 16,
    height: 2,
    backgroundColor: '#4A90E2',
    position: 'absolute',
  },
  plusHorizontalExpanded: {
    backgroundColor: '#4A90E2',
  },
  plusVertical: {
    width: 2,
    height: 16,
    backgroundColor: '#4A90E2',
    position: 'absolute',
  },
  plusVerticalExpanded: {
    backgroundColor: '#4A90E2',
  },
});

export default styles;