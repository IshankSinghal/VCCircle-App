import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header/Header';
import MainHeader from '../components/Header/MainHeader';
import ContentSection from '../components/Content/ContentSection';
import SideMenu from '../components/Menu/SideMenu';
import { colors } from '../constants/theme';

const HomeScreen = () => {
  // Remove navigate prop
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    console.log('Menu toggled');
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MainHeader onMenuPress={handleMenuToggle} />
      <ContentSection />
      <SideMenu visible={isMenuOpen} onClose={handleMenuClose} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.primary,
  },
});

export default HomeScreen;
