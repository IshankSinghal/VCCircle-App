import React, { useEffect, useRef } from 'react';
import { Modal, View, StyleSheet, Animated, Dimensions } from 'react-native';
import MenuHeader from './MenuHeader';
import MenuContent from './MenuContent';
import { colors } from '../../constants/theme';

const { width: screenWidth } = Dimensions.get('window');

const SideMenu = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(-screenWidth)).current;
  const overlayOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Animate in
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start();
    } else {
      // Animate out
      Animated.parallel([
        Animated.timing(slideAnim, {
          toValue: -screenWidth,
          duration: 350,
          useNativeDriver: true,
        }),
        Animated.timing(overlayOpacity, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [visible, slideAnim, overlayOpacity]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none" // Disable built-in animation
      onRequestClose={onClose}
    >
      <Animated.View style={[styles.overlay, { opacity: overlayOpacity }]}>
        <Animated.View 
          style={[
            styles.menuContainer,
            {
              transform: [{ translateX: slideAnim }],
            },
          ]}
        >
          <MenuHeader onClose={onClose} />
          <MenuContent onItemPress={onClose} />
        </Animated.View>
      </Animated.View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.background.overlay,
  },
  menuContainer: {
    flex: 1,
    backgroundColor: colors.background.primary,
    width: '100%',
    maxWidth: 415,
  },
});

export default SideMenu;