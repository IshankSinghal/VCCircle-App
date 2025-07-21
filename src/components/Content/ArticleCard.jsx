import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ProBadge from '../UI/ProBadge';
import {
  colors,
  spacing,
  typography,
  borderRadius,
} from '../../constants/theme';
import { useNavigation } from '@react-navigation/native';

const ArticleCard = ({ article }) => {
  const navigation = useNavigation();

  const handleCategoryPress = () => {
    navigation.navigate('Industry', { category: article.category });
  };

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: article.imageUrl }} style={styles.image} />
          {article.isPro && <ProBadge />}
        </View>

        <View style={styles.content}>
          <View style={styles.meta}>
            <TouchableOpacity onPress={handleCategoryPress}>
              <Text style={styles.category}>{article.category}</Text>
            </TouchableOpacity>
            <Text style={styles.date}>{article.date}</Text>
          </View>

          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.summary}>{article.summary}</Text>
          <View style={styles.author}>
            <Text style={styles.dot}>•</Text>
            <Text style={styles.name}>{article.author}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background.primary,
    // borderRadius: borderRadius.lg,
    marginVertical: spacing.lg,
    // shadowColor: colors.black,
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 8,
    // elevation: 3,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: borderRadius.lg,
    // borderTopRightRadius: borderRadius.lg,
  },
  content: {
    padding: spacing.sm,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  category: {
    color: colors.primary,
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
  },
  date: {
    color: colors.text.secondary,
    fontSize: typography.sizes.md,
  },
  title: {
    fontSize: typography.sizes.xxl,
    fontWeight: typography.weights.bold,
    color: colors.text.primary,
    marginBottom: spacing.sm,
    lineHeight: 24,
  },
  summary: {
    fontSize: typography.sizes.lg,
    color: colors.text.secondary,
    lineHeight: 20,
    marginBottom: spacing.md,
  },
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: typography.sizes.sm,
    color: colors.primary,
  },
  dot: {
    fontSize: 40,
    color: colors.text.secondary,
    marginRight: 4,
  },
  name: {
    fontSize: typography.sizes.lg,
    color: colors.text.secondary,
  },
});

export default ArticleCard;
