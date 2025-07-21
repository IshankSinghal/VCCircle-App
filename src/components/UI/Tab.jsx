import React, { useState } from 'react';
import { View } from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';

const Tab = ({ onSelectionChange, values }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // const values = ['ALL', 'PRO', 'PREMIUM'];

  const handleTabPress = index => {
    setSelectedIndex(index);
    // Return the selected value to parent component
    if (onSelectionChange) {
      onSelectionChange(values[index], index);
    }
  };

  return (
    <View style={{ margin: 16 }}>
      <SegmentedControlTab
        values={values}
        selectedIndex={selectedIndex}
        onTabPress={handleTabPress}
        tabsContainerStyle={{ height: 45 }}
        tabStyle={{ borderColor: '#ccc' }}
        tabTextStyle={{ color: '#333', fontSize: 17, fontWeight: '700' }}
        activeTabStyle={{ backgroundColor: '#3366FF' }}
        activeTabTextStyle={{
          color: 'white',
          fontWeight: 'bold',
        }}
      />
    </View>
  );
};

export default Tab;
