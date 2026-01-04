import TabsBarIcon from '@/components/TabsBarIcon';
import { Icons } from '@/utils/icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: { height: 48, marginHorizontal: 15, marginBottom: 50, paddingHorizontal: 14.5, backgroundColor: '#0F0D23', borderWidth: 1, borderColor: '#0F0D23', borderRadius: 50, position: 'absolute', overflow: 'hidden' },
      tabBarItemStyle: { height: '100%', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' },
    }}>
      <Tabs.Screen name='Home' options={{
        headerShown: false, title: 'Home', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Home' icon={Icons.HomeIcon} />
        )
      }} />

      <Tabs.Screen name='Search' options={{
        headerShown: false, title: 'Search', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Search' icon={Icons.SearchIcon} />
        )
      }} />

      <Tabs.Screen name='Saved' options={{
        headerShown: false, title: 'Saved', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Saved' icon={Icons.SavedIcon} />
        )
      }} />

      <Tabs.Screen name='Profile' options={{
        headerShown: false, title: 'Profile', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Profile' icon={Icons.ProfileIcon} />
        )
      }} />
    </Tabs>
  );
};

export default TabsLayout;