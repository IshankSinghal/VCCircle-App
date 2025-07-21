import { Text, View, Image } from 'react-native';
import React from 'react';
import styles from './PlanOffers.styles';
import { SubscribePlansWithOffers } from '../../../constants/SubscribePlans';
const PlanOffers = ({ selectedTab }) => {
  const renderProPlanOffers = () => {
    const tabKey =
      selectedTab === 'VCCIRCLE PRO LITE'
        ? 'VCCIRCLE PRO LITE'
        : 'VCCIRCLE PRO';
    const offers = SubscribePlansWithOffers[tabKey] || [];

    return (
      <View style={styles.offersContainer}>
        <Text style={styles.offersTitle}>{selectedTab}</Text>
        <Text style={styles.offersSubtitle}>What will you get?</Text>

        <View style={styles.offersList}>
          {offers.map((offer, index) => (
            <View key={index} style={styles.offerItem}>
              <View style={styles.iconContainer}>
                <View style={styles.iconPlaceholder}>
                  <Text style={styles.iconText}>
                    {index === 0
                      ? '📱'
                      : index === 1
                      ? '🔔'
                      : index === 2
                      ? '🎧'
                      : index === 3
                      ? '📧'
                      : index === 4
                      ? '🚀'
                      : '📊'}
                  </Text>
                </View>
              </View>
              <Text style={styles.offerText}>{offer}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  };

  const renderPremiumOffers = () => {
    const tabKey =
      selectedTab === 'VCCIRCLE PREMIUM_WSJ'
        ? 'VCCIRCLE PREMIUM+'
        : 'VCCIRCLE PREMIUM';
    const offers = SubscribePlansWithOffers[tabKey] || [];

    // if (tabKey === 'VCCIRCLE PREMIUM+') {
    //   return (
    //     <View style={styles.offersContainer}>
    //       <Text style={styles.dealsTitle}>{offers[0]}</Text>
    //       <Text style={styles.premiumDescription}>{offers[1]}</Text>
    //     </View>
    //   );
    // }

    // return (
    //   <View style={styles.offersContainer}>
    //     <Text style={styles.dealsTitle}>{offers[0]}</Text>
    //     <Text style={styles.premiumDescription}>{offers[1]}</Text>
    //   </View>
    // );

    return (
      <View>
        {tabKey === 'VCCIRCLE PREMIUM+' ? (
          <View style={styles.offersContainer}>
            <Text style={styles.dealsTitle}>{offers[0]}</Text>
            <Text style={styles.premiumDescription}>{offers[1]}</Text>
          </View>
        ) : (
          <View style={styles.offersContainer}>
            <Text style={styles.dealsTitle}>{offers[0]}</Text>
            <Text style={styles.premiumDescription}>{offers[1]}</Text>
          </View>
        )}
        <View style={styles.dealsGrid}>
          <View style={styles.dealItem}>
            <View style={styles.dealIcon}>
              <Text style={styles.dealIconText}>📊</Text>
            </View>
            <Text style={styles.dealText}>Exclusive PE/VC coverage</Text>
          </View>

          <View style={styles.dealItem}>
            <View style={styles.dealIcon}>
              <Text style={styles.dealIconText}>👤</Text>
            </View>
            <Text style={styles.dealText}>Expert opinion & analysis</Text>
          </View>

          <View style={styles.dealItem}>
            <View style={styles.dealIcon}>
              <Text style={styles.dealIconText}>✉️</Text>
            </View>
            <Text style={styles.dealText}>Daily and weekly Newsletters</Text>
          </View>

          <View style={styles.dealItem}>
            <View style={styles.dealIcon}>
              <Text style={styles.dealIconText}>🎟️</Text>
            </View>
            <Text style={styles.dealText}>
              Concession on selected VCCircle event tickets
            </Text>
          </View>

          <View style={styles.dealItem}>
            <View style={styles.dealIcon}>
              <Text style={styles.dealIconText}>🚨</Text>
            </View>
            <Text style={styles.dealText}>Breaking news alerts</Text>
          </View>
        </View>
      </View>
    );
  };

  const showProPlanOffers =
    selectedTab === 'VCCIRCLE PRO' || selectedTab === 'VCCIRCLE PRO LITE';

  return (
    <View style={styles.container}>
      {showProPlanOffers ? renderProPlanOffers() : renderPremiumOffers()}
    </View>
  );
};

export default PlanOffers;
