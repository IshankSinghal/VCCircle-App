import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { colors, spacing } from '../../constants/theme';

const HamburgerButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: spacing.sm,
  },
  line: {
    width: 24,
    height: 3,
    backgroundColor: colors.text.primary,
    marginVertical: 2,
    borderRadius: 2,
  },
});

export default HamburgerButton;