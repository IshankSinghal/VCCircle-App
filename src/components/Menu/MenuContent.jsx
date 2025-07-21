import React, { useState } from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import MenuItem from './MenuItem';
import { MENU_ITEMS, CATEGORY_ITEMS } from '../../constants/menuItems';
import { spacing } from '../../constants/theme';
import SignUpModal from '../modals/SignUpModal';
import { useNavigation } from '@react-navigation/native';
import NewsLetter from '../modals/NewsLetter';

const MenuContent = ({ onItemPress }) => {
  const navigation = useNavigation();

  const [SignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [NewsletterModal, setNewsletterModal] = useState(false);

  const handleItemPress = item => {
    if (item.id === 'signup') {
      setSignUpModalOpen(true);
    } else if (item.id === 'newsletter') {
      setNewsletterModal(true);
    } else if (item.id === 'subscribe') {
      navigation.navigate('Subscribe', { type: 'regular' });
    } else if (item.id === 'corporate') {
      navigation.navigate('Subscribe', { type: 'corporate' });
    } else {
      onItemPress?.(item);
    }
  };

  const handleCloseSignupModal = () => {
    setSignUpModalOpen(false);
  };

  const handleCloseNewsletterModal = () => {
    setNewsletterModal(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {MENU_ITEMS.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            onPress={() => handleItemPress(item)}
          />
        ))}
        {CATEGORY_ITEMS.map(item => (
          <MenuItem
            key={item.id}
            item={item}
            onPress={() => handleItemPress(item)}
          />
        ))}
      </ScrollView>
      <SignUpModal visible={SignUpModalOpen} onClose={handleCloseSignupModal} />
      <NewsLetter
        visible={NewsletterModal}
        onClose={handleCloseNewsletterModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
});

export default MenuContent;
