import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import { faqData } from '../../constants/faqData';
import styles from './FAQ.styles';

// Enable LayoutAnimation on Android
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const FAQPage = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = index => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const PlusIcon = ({ expanded }) => (
    <View style={[styles.plusIcon, expanded && styles.plusIconExpanded]}>
      <View
        style={[
          styles.plusHorizontal,
          expanded && styles.plusHorizontalExpanded,
        ]}
      />
      <View
        style={[styles.plusVertical, expanded && styles.plusVerticalExpanded]}
      />
    </View>
  );

  const renderFAQItem = (item, index) => {
    const isExpanded = expandedItems[index];

    return (
      <View key={index} style={styles.faqItem}>
        <TouchableOpacity
          style={styles.faqHeader}
          onPress={() => toggleExpanded(index)}
          activeOpacity={0.7}
        >
          <Text style={styles.faqQuestion}>{item.question}</Text>
          <PlusIcon expanded={isExpanded} />
        </TouchableOpacity>

        {isExpanded && (
          <View style={styles.faqAnswerContainer}>
            <Text style={styles.faqAnswer}>{item.answer}</Text>
          </View>
        )}
      </View>
    );
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Frequently Asked Questions ( FAQ )</Text>
      </View>

      <View style={styles.faqList}>
        {faqData.map((item, index) => renderFAQItem(item, index))}
      </View>
    </ScrollView>
  );
};

export default FAQPage;
