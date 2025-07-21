import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, spacing, typography, borderRadius } from '../../constants/theme';
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder, onSearch, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.text.light}
        onChangeText={onChangeText}
      />
      <TouchableOpacity style={styles.searchButton} onPress={onSearch}>
        <Text style={styles.searchIcon}>🔍</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: spacing.lg,
    backgroundColor: '#eeeeee',
    borderRadius: 6,
    paddingHorizontal: spacing.md,
  },
  input: {
    flex: 1,
    paddingVertical: spacing.md,
    fontSize: typography.sizes.lg,
    color: colors.text.primary,
  },
  searchButton: {
    padding: spacing.xs,
  },
  searchIcon: {
    fontSize: typography.sizes.xxl,
  },
});

export default SearchBar;