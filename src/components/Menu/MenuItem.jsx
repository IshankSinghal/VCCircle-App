import React, { useState } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Animated,
} from 'react-native';
import { colors, spacing, typography } from '../../constants/theme';
import { INDUSTRY_ITEMS } from '../../constants/menuItems';

const MenuItem = ({ item, onPress, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const getTextStyle = () => {
    switch (item.type) {
      case 'special':
        return [styles.text, styles.specialText];
      default:
        return styles.text;
    }
  };

  const handlePress = () => {
    if (item.hasDropdown) {
      const toValue = isExpanded ? 0 : 1;
      setIsExpanded(!isExpanded);

      Animated.timing(animation, {
        toValue,
        duration: 300,
        useNativeDriver: false,
      }).start();
    } else {
      onPress && onPress();
    }
  };

  const dropdownHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 295], // Adjust this value based on your dropdown content height
  });

  const arrowRotation = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemContainer} onPress={handlePress}>
        <View style={styles.content}>
          <Text style={getTextStyle()}>
            {item.icon && `${item.icon} `}
            {item.title}
          </Text>
          {item.hasDropdown && (
            <Animated.Text
              style={[styles.arrow, { transform: [{ rotate: arrowRotation }] }]}
            >
              ▼
            </Animated.Text>
          )}
        </View>
      </TouchableOpacity>

      {item.hasDropdown && (
        <Animated.View style={[styles.dropdown, { height: dropdownHeight }]}>
          <View style={styles.dropdownContent}>
            {children || (
              <View style={styles.defaultDropdownContent}>
                {INDUSTRY_ITEMS.map(industry => (
                  <TouchableOpacity
                    key={industry.id}
                    onPress={() => {
                      setIsExpanded(false);
                      onPress && onPress();
                    }}
                  >
                    <Text style={styles.dropdownText}>{industry.title}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border.medium,
  },
  itemContainer: {
    paddingVertical: spacing.md,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: typography.sizes.xl,
    color: colors.text.primary,
    fontWeight: typography.weights.small,
  },
  specialText: {
    color: colors.secondary,
  },
  arrow: {
    fontSize: typography.sizes.lg,
    color: colors.text.secondary,
  },
  dropdown: {
    overflow: 'hidden',
    backgroundColor: 'white',
  },
  dropdownContent: {
    paddingLeft: spacing.md,
  },
  defaultDropdownContent: {
    paddingVertical: spacing.sm,
  },
  dropdownText: {
    fontSize: typography.sizes.xl,
    color: colors.text.primary,
    paddingVertical: spacing.sm,
    borderBottomColor: colors.border.medium,
    borderBottomWidth: 1,
  },
});

export default MenuItem;
