import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  offersContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  offersTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  offersSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
  },
  offersList: {
    marginTop: 10,
  },
  offerItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e9ecef',
  },
  iconContainer: {
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 20,
  },
  offerText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  dealsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
    letterSpacing: 1,
  },
  premiumDescription: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    marginBottom: 20,
    lineHeight: 20,
    paddingHorizontal: 10,
  },
  dealsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  dealItem: {
    width: '48%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
  },
  dealIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  dealIconText: {
    fontSize: 16,
  },
  dealText: {
    flex: 1,
    fontSize: 12,
    color: '#333',
    lineHeight: 16,
  },
});

export default styles;