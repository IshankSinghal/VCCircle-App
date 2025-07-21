import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HamburgerButton from '../UI/HamburgerButton';
import {
  spacing,
  colors,
  typography,
  borderRadius,
} from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const MainHeader = ({ onMenuPress }) => {

  const navigation = useNavigation();

  const handleLogoPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogoPress}>
        <Text style={styles.logo}>VCCIRCLE</Text>
      </TouchableOpacity>
      <HamburgerButton onPress={onMenuPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
    backgroundColor: colors.background.primary,
  },
  logo: {
    fontSize: typography.sizes.xxxl,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    letterSpacing: 1,
  },
});

export default MainHeader;
