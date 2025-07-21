import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from './knowTeam.styles';
import { useNavigation } from '@react-navigation/native';

const KnowMore = () => {
  const navigation = useNavigation();

  const handleKnowMorePress = () => {
    // Handle know more button press
    navigation.navigate('Subscribe', { type: 'corporate' });
    console.log('Know More pressed');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Team Icon */}
        <View style={styles.iconContainer}>
          <View style={styles.teamIcon}>
            <View style={styles.person}>
              <View style={styles.personHead} />
              <View style={styles.personBody} />
            </View>
            <View style={[styles.person, styles.personMiddle]}>
              <View style={styles.personHead} />
              <View style={styles.personBody} />
            </View>
            <View style={[styles.person, styles.personRight]}>
              <View style={styles.personHead} />
              <View style={styles.personBody} />
            </View>
          </View>
        </View>

        {/* Main Title */}
        <Text style={styles.title}>Get VCCircle for your team</Text>

        {/* Divider Line */}
        <View style={styles.divider} />

        {/* Quote */}
        <Text style={styles.quote}>
          "Alone we can do so little, together we can do much" - Helen Keller.
        </Text>

        {/* Description */}
        <Text style={styles.description}>
          Get your team spinning the wheel and sharpen their financial acumen
        </Text>
        <Text style={styles.description}>
          with VCCircle Corporate subscription at a special fee!
        </Text>

        {/* Know More Button */}
        <TouchableOpacity style={styles.button} onPress={handleKnowMorePress}>
          <Text style={styles.buttonText}>Know More</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default KnowMore;
