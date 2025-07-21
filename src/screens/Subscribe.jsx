import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FAQPage from '../components/Subscribe/FAQPage';
import KnowTeam from '../components/Subscribe/KnowTeam';
import ChoosePlan from '../components/Subscribe/ChoosePlan/ChoosePlan';
import { useNavigation, useRoute } from '@react-navigation/native';
import CorporatePlan from '../components/Subscribe/CorporatePlan/CorporatePlan';

const Subscribe = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  const subscriptionType = route.params?.type || 'regular';

  const renderContent = () => {
    if (subscriptionType === 'corporate') {
      return <CorporatePlan />;
    } else {
      return (
        <>
          <ChoosePlan />
          <KnowTeam />
          <FAQPage />
        </>
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.logo}>VCCIRCLE</Text>
        </TouchableOpacity>
        <View style={styles.emailContainer}>
          <Text style={styles.mailIcon}>📧</Text>
          <Text style={styles.email}>subscription@vccircle.com</Text>
        </View>
      </View>

      {/* Content Container with Fixed Footer */}
      <View style={styles.contentContainer}>
        {/* Scrollable Content */}
        <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
          {renderContent()}
        </ScrollView>

        {/* Fixed Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>PRIVACY POLICY</Text>
          <Text style={styles.footerText}>TERMS AND CONDITIONS</Text>
        </View>
      </View>
    </View>
  );
};

// Include the updated styles here
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  header: {
    backgroundColor: '#212529',
    paddingHorizontal: 16,
    paddingVertical: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
  },
  scrollContainer: {
    flex: 1,
    marginBottom: 60, // Add padding to prevent content from going under footer
  },
  logo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
  emailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mailIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  email: {
    color: 'white',
    fontSize: 14,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#3a3a3a',
    flexDirection: 'row',
    gap: 20,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: 64, // Fixed height for the footer
  },
  footerText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: -0.5,
  },
});

export default Subscribe;