import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { colors, spacing, typography } from '../../constants/theme';
import { industries } from '../../data/industryData';


const NavigationBar = ({ selectedCategory, onCategoryPress }) => {

  return (
    <View style={styles.container}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {industries.map((industry, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.industryItem,
              selectedCategory === industry && styles.selectedIndustryItem
            ]}
            onPress={() => onCategoryPress(industry)}
          >
            <Text style={[
              styles.industryText,
              selectedCategory === industry && styles.selectedIndustryText
            ]}>
              {industry}
            </Text>
            {selectedCategory === industry && (
              <View style={styles.selectedIndicator} />
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    paddingVertical: spacing.sm,
},
scrollContent: {
    paddingHorizontal: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.text.light,
  },
  industryItem: {
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.sm,
    marginRight: spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
    position: 'relative',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  selectedIndustryItem: {
    borderBottomColor: colors.primary,
  },
  industryText: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.medium,
    color: colors.text.secondary,
  },
  selectedIndustryText: {
    color: colors.primary,
    fontWeight: typography.weights.bold,
  },
});

export default NavigationBar;