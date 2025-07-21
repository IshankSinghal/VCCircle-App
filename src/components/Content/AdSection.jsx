import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius } from '../../constants/theme';

const AdSection = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Advertisement</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.secondary,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: spacing.lg,
    borderRadius: borderRadius.sm,
  },
  text: {
    color: colors.text.light,
    fontSize: typography.sizes.md,
  },
});

export default AdSection;