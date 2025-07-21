import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SearchBar from '../UI/SearchBar';
import { colors, spacing, typography } from '../../constants/theme';

const MenuHeader = ({ onClose }) => {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity onPress={onClose} style={styles.closeButton}>
          <Text style={styles.closeText}>×</Text>
        </TouchableOpacity>

        <Text style={styles.logo}>VCCIRCLE</Text>
      </View>
      <SearchBar placeholder="Search..." />
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
    paddingVertical: spacing.lg,
    position: 'relative',
    backgroundColor: '#fff', // Ensure white background

    // iOS Bottom Shadow Only
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 }, // Reduced height for subtle effect
    shadowOpacity: 0.18, // Much lighter opacity
    shadowRadius: 2, // Smaller radius for sharper shadow

    // Android Bottom Shadow Only
    elevation: 2, // Reduced elevation for subtle effect
  },

  logo: {
    fontSize: typography.sizes.xxxl,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    letterSpacing: 1,
  },
  closeButton: {
    position: 'absolute',
    right: spacing.xl,
    padding: spacing.sm,
  },
  closeText: {
    fontSize: 30,
    color: colors.text.secondary,
  },
});

export default MenuHeader;