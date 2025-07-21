import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {
  colors,
  spacing,
  typography,
  borderRadius,
} from '../../constants/theme';

import { articlesData } from '../../data/industryData';
import ProBadge from '../UI/ProBadge';

const ArticlePreview = ({ category, tab }) => {
  const categoryArticles = articlesData[category] || [];
  const finalArticles =
    tab === 'ALL'
      ? categoryArticles
      : categoryArticles.filter(article => article.badge === tab);

  if (categoryArticles.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No articles available for {category}</Text>
      </View>
    );
  }

  return (
    <View>
      {finalArticles.map(article => (
        <View key={article.id} style={styles.container}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: article.imageUrl }} style={styles.image} />
            {article.badge && (
              <ProBadge badge={article.badge} style={styles.badge} />
            )}
          </View>

          <View style={styles.content}>
            <View style={styles.headerRow}>
              <Text style={styles.category}>
                {article.category.toUpperCase()}
              </Text>
              <Text style={styles.date}>{article.date}</Text>
            </View>

            <Text style={styles.title}>{article.title}</Text>

            {article.description && (
              <View style={styles.authorRow}>
                <Text style={styles.dot}>•</Text>
                <Text style={styles.author}>{article.description}</Text>
              </View>
            )}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.border.light,
  },
  imageContainer: {
    position: 'relative',
    marginRight: spacing.lg, // increased gap
  },
  image: {
    width: 110,
    height: 70,
    borderRadius: borderRadius.sm,
  },
  badge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    zIndex: 10,
  },
  content: {
    flex: 1,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  category: {
    color: colors.primary,
    fontSize: 15,
    fontWeight: typography.weights.medium,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
  date: {
    color: colors.text.secondary,
    fontSize: 14,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20,
  },
  authorRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    fontSize: 20,
    color: colors.text.secondary,
    marginRight: 2,
  },
  author: {
    fontSize: 12,
    color: colors.text.secondary,
  },
});

export default ArticlePreview;
