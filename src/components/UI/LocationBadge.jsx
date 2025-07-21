import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import {
  colors,
  spacing,
  typography,
  borderRadius,
} from '../../constants/theme';

const LocationBadge = () => {
  const [selectedLocation, setSelectedLocation] = useState('IND');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.option,
          selectedLocation === 'IND' && styles.selectedOption,
        ]}
        onPress={() => setSelectedLocation('IND')}
      >
        <Text
          style={[
            styles.text,
            selectedLocation === 'IND' && styles.selectedText,
          ]}
        >
          IND
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.option,
          selectedLocation === 'MEA' && styles.selectedOption,
        ]}
        onPress={() => setSelectedLocation('MEA')}
      >
        <Text
          style={[
            styles.text,
            selectedLocation === 'MEA' && styles.selectedText,
          ]}
        >
          MEA
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#333',
    borderRadius: borderRadius.md,
    padding: 2,
  },
  option: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: borderRadius.sm,
    minWidth: 40,
    alignItems: 'center',
  },
  selectedOption: {
    minWidth: 40,
    backgroundColor: colors.primary,
  },
  text: {
    color: '#999',
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.medium,
  },
  selectedText: {
    color: colors.white,
  },
});

export default LocationBadge;
