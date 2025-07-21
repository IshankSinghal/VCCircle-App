import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ArticleCard from './ArticleCard';
import AdSection from './AdSection';
import ArticlePreview from './ArticlePreview';
import { spacing } from '../../constants/theme';

const ContentSection = () => {
  // Remove navigate prop
  const featuredArticle = {
    id: 1,
    title:
      'Nexus Venture Partners scripting over $350-mn exit with a multi-bagger',
    summary:
      'Nexus Venture Partners, a venture capital firm that invests in early- and growth-stage startups in India and the US, has...',
    category: 'Healthcare',
    date: '01 July',
    author: 'Malvika Maloo',
    imageUrl:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop',
    isPro: true,
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ArticleCard article={featuredArticle} />
      <AdSection />
      <ArticlePreview />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
});

export default ContentSection;
