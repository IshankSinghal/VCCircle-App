import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../components/Header/Header';
import MainHeader from '../components/Header/MainHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import IndustryContent from '../components/Content/IndustryContent';
import SideMenu from '../components/Menu/SideMenu';

export default function Industry({ navigate, params }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { category } = params || {};

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <MainHeader onMenuPress={handleMenuToggle} navigate={navigate} />
      <IndustryContent category={category} />
      <SideMenu visible={isMenuOpen} onClose={handleMenuClose} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
