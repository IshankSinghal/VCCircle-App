import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  colors,
  spacing,
  typography,
  borderRadius,
} from '../../constants/theme';

const ProBadge = ({ badge, style }) => {
  if (!badge) return null;

  // const badgeText = badge.toUpperCase();

  if (badge === 'PREMIUM') {
    return (
      <LinearGradient
        colors={['#FFC371', '#FF5F6D']} // red to orange gradient
        style={[styles.badge, style]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.text}>{badge}</Text>
      </LinearGradient>
    );
  }

  return (
    <View style={[styles.badge, style]}>
      <Text style={styles.text}>{badge}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
  },
  text: {
    color: colors.white,
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.bold,
  },
});

export default ProBadge;
