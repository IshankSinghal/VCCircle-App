import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AdSection from './AdSection';
import { spacing } from '../../constants/theme';
import Tab from '../UI/Tab';
import IndustryNavigationBar from '../UI/NavigationBar';
import ArticlePreview from './ArticlePreview';
import { CategoryDescription } from '../../data/industryData';

export default function IndustryContent({ category }) {

  const values = ['ALL', 'PRO', 'PREMIUM'];
  const [tabChange, setTabChange] = useState("ALL")
  const [selectedCategory, setSelectedCategory] = useState(
    category || 'Healthcare',
  );

  const handleTabChange = (value, index) => {
    console.log('Selected tab:', value, 'at index:', index);
    setTabChange(value);
    // Handle tab change logic here if needed
  };

  const handleCategoryPress = (newCategory) => {
    setSelectedCategory(newCategory);
    console.log('Selected category:', newCategory);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <AdSection />
      <Text style={styles.heading}>Home / Industry</Text>
      <Text style={styles.category}>{selectedCategory}</Text>
      <Text>
        {CategoryDescription[selectedCategory] ||
          'Select a category to view details.'}
      </Text>
      <Tab onSelectionChange={handleTabChange} values={values}/>
      <IndustryNavigationBar
        selectedCategory={selectedCategory}
        onCategoryPress={handleCategoryPress}
      />
      <ArticlePreview category={selectedCategory} tab={tabChange}/>
      <View style={styles.contentSection}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: spacing.sm,
  },
  category: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  contentSection: {
    marginTop: spacing.lg,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: spacing.md,
  },
});
