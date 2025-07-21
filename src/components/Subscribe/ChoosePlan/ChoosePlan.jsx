import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { SubscribePlans } from '../../../constants/SubscribePlans';
import Callback from '../../modals/CallBack';
import PlanOffers from '../PlanOffers/PlanOffers';

const ChoosePlan = () => {
  const [selectedPlan, setSelectedPlan] = useState('1 year');
  const [couponCode, setCouponCode] = useState('');
  const [selectedTab, setSelectedTab] = useState('VCCIRCLE PRO LITE');
  const [showCallbackModal, setShowCallbackModal] = useState(false);
  const [showReferralSection, setShowReferralSection] = useState(false);
  const [referralCode, setReferralCode] = useState('');

  const handleGetCallBack = () => {
    setShowCallbackModal(true);
  };

  const applyReferral = () => {
    // Handle referral code application logic here
    console.log('Referral code applied:', referralCode);
  };

  // Define different subscription plans for each tab
  const plansByTab = {
    'VCCIRCLE PRO LITE': SubscribePlans['VCCIRCLE PRO LITE'] || [],
    'VCCIRCLE PREMIUM': SubscribePlans['VCCIRCLE PREMIUM'] || [],
    'VCCIRCLE PREMIUM_WSJ': SubscribePlans['VCCIRCLE PREMIUM+'] || [],
    'VCCIRCLE PRO': SubscribePlans['VCCIRCLE PRO'] || [],
  };

  const currentPlans = plansByTab[selectedTab] || SubscribePlans;

  const handleSubscribe = () => {
    const selected = currentPlans.find(p => p.duration === selectedPlan);
    if (selected) {
      Alert.alert(
        'Subscribe',
        `Subscribing to ${selected.duration} plan for ${selected.price}`,
        [{ text: 'OK' }],
      );
    }
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      Alert.alert('Coupon Applied', `Applying coupon: ${couponCode}`, [
        { text: 'OK' },
      ]);
    }
  };

  const handleTabPress = tabName => {
    setSelectedTab(tabName);
    // Reset selected plan when tab changes
    const newPlans = plansByTab[tabName] || [];
    if (newPlans.length > 0) {
      setSelectedPlan(newPlans[0].duration);
    }
    setShowReferralSection(false);
  };

  const showCouponSection =
    selectedTab === 'VCCIRCLE PREMIUM' ||
    selectedTab === 'VCCIRCLE PREMIUM_WSJ';
  const showTermsAndConditions =
    selectedTab === 'VCCIRCLE PRO' || selectedTab === 'VCCIRCLE PRO LITE';

  return (
    <View style={styles.content}>
      <Text style={styles.title}>CHOOSE YOUR PLAN</Text>

      {/* Plan Card Container */}
      <View style={styles.planCardContainer}>
        {/* Plan Type Headers - Now clickable tabs */}
        <View style={styles.planHeaders}>
          <TouchableOpacity
            style={[
              styles.planTypeCard,
              selectedTab === 'VCCIRCLE PRO LITE' && styles.planTypeCardActive,
            ]}
            onPress={() => handleTabPress('VCCIRCLE PRO LITE')}
          >
            <Text
              style={[
                styles.planTypeText,
                selectedTab === 'VCCIRCLE PRO LITE' &&
                  styles.planTypeTextActive,
              ]}
            >
              VCCIRCLE PRO LITE
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.planTypeCard,
              selectedTab === 'VCCIRCLE PREMIUM' && styles.planTypeCardActive,
            ]}
            onPress={() => handleTabPress('VCCIRCLE PREMIUM')}
          >
            <Text
              style={[
                styles.planTypeText,
                selectedTab === 'VCCIRCLE PREMIUM' && styles.planTypeTextActive,
              ]}
            >
              VCCIRCLE PREMIUM
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.planTypeCard,
              selectedTab === 'VCCIRCLE PREMIUM_WSJ' &&
                styles.planTypeCardActive,
            ]}
            onPress={() => handleTabPress('VCCIRCLE PREMIUM_WSJ')}
          >
            <Text
              style={[
                styles.planTypeText,
                selectedTab === 'VCCIRCLE PREMIUM_WSJ' &&
                  styles.planTypeTextActive,
              ]}
            >
              VCCIRCLE PREMIUM
            </Text>
            <Text
              style={[
                styles.planTypeSubText,
                selectedTab === 'VCCIRCLE PREMIUM_WSJ' &&
                  styles.planTypeTextActive,
              ]}
            >
              THE WALL STREET JOURNAL
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.planTypeCard,
              selectedTab === 'VCCIRCLE PRO' && styles.planTypeCardActive,
            ]}
            onPress={() => handleTabPress('VCCIRCLE PRO')}
          >
            <Text
              style={[
                styles.planTypeText,
                selectedTab === 'VCCIRCLE PRO' && styles.planTypeTextActive,
              ]}
            >
              VCCIRCLE PRO
            </Text>
          </TouchableOpacity>
        </View>

        {/* Plan Options */}
        <View style={styles.planOptions}>
          {currentPlans.map((plan, index) => (
            <View
              key={`${plan.duration}-${index}`}
              style={{ position: 'relative' }}
            >
              <TouchableOpacity
                onPress={() => setSelectedPlan(plan.duration)}
                style={[
                  styles.planOption,
                  selectedPlan === plan.duration && styles.planOptionSelected,
                ]}
              >
                <View style={styles.planLeft}>
                  <View
                    style={[
                      styles.radioButton,
                      selectedPlan === plan.duration &&
                        styles.radioButtonSelected,
                    ]}
                  >
                    {selectedPlan === plan.duration && (
                      <View style={styles.radioButtonDot} />
                    )}
                  </View>
                  <View>
                    <Text style={styles.planDuration}>{plan.duration}</Text>
                    <Text style={styles.planPrice}>Billed @ {plan.price}</Text>
                  </View>
                </View>
                <Text style={styles.planPricePerMonth}>
                  {plan.ppmonth}/month
                </Text>
              </TouchableOpacity>

              {/* Best Buy Badge for individual plans */}
              {plan.bestBuy && (
                <View style={styles.planBestBuyBadge}>
                  <Text style={styles.bestBuyText}>Best Buy</Text>
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Subscribe Button */}
        <TouchableOpacity
          onPress={handleSubscribe}
          style={styles.subscribeButton}
          activeOpacity={0.8}
        >
          <Text style={styles.subscribeButtonText}>Subscribe Now</Text>
        </TouchableOpacity>
      </View>

      {/* GST Note */}
      <Text style={styles.gstNote}>All prices are inclusive of GST.</Text>

      {/* Coupon Section - Show only for VCCIRCLE PREMIUM and VCCIRCLE PREMIUM_WSJ */}
      {showCouponSection && (
        <View style={styles.couponContainer}>
          <View style={styles.couponInputContainer}>
            <TextInput
              style={styles.couponInput}
              placeholder="Enter coupon"
              value={couponCode}
              onChangeText={setCouponCode}
              placeholderTextColor="#9ca3af"
            />
            <TouchableOpacity
              onPress={applyCoupon}
              style={styles.applyButton}
              activeOpacity={0.8}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
            </TouchableOpacity>
          </View>

          {!showReferralSection && (
            <TouchableOpacity
              onPress={() => setShowReferralSection(!showReferralSection)}
            >
              <Text style={styles.referal}>Have a referal code?</Text>
            </TouchableOpacity>
          )}

          {showReferralSection && (
            <View style={styles.referalInputContainer}>
              <TextInput
                style={styles.couponInput}
                placeholder="Enter referral code"
                value={referralCode}
                onChangeText={setReferralCode}
                placeholderTextColor="#9ca3af"
              />
              <TouchableOpacity
                onPress={applyReferral}
                style={styles.applyButton}
                activeOpacity={0.8}
              >
                <Text style={styles.applyButtonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      {/* Terms & Conditions Section - Show only for VCCIRCLE PRO and VCCIRCLE PRO LITE */}
      {showTermsAndConditions && (
        <View style={styles.termsContainer}>
          <Text style={styles.noteText}>* Please Note:</Text>

          <Text style={styles.termsText}>
            1. VCCircle Pro members will get a few handpicked articles in the
            form of newsbreaks as well as trends and analysis pieces ahead of
            VCCircle Premium subscribers on a weekly/fortnightly basis.
          </Text>

          <Text style={styles.termsText}>
            2. VCCircle Pro members will also occasionally be served with
            teasers on articles even before they are published, giving you a
            definite edge in terms of actionable information in the world of
            private finance.
          </Text>

          <View style={styles.callBack}>
            <View style={styles.callBackRow}>
              <Text style={styles.callBackText}>Still have queries?</Text>
              <TouchableOpacity
                style={styles.callBackButton}
                onPress={handleGetCallBack}
              >
                <Text style={styles.callBackButtonText}>Get a Call Back</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.emailText}>
              OR Write to us at:{' '}
              <Text style={styles.emailLink}>
                abhinav.agarwal@hindustantimes.com
              </Text>
            </Text>
          </View>
        </View>
      )}

      <PlanOffers selectedTab={selectedTab}/>

      <Callback
        visible={showCallbackModal}
        onClose={() => setShowCallbackModal(false)}
      />
    </View>
  );
};

export default ChoosePlan;
