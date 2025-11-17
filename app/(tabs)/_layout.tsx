import TabsBarIcon from '@/components/TabsBarIcon';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: { height: 48, marginBottom: 50, marginHorizontal: 15, backgroundColor: '#0F0D23', borderWidth: 1, borderColor: '#0F0D23', borderRadius: 70, position: 'absolute', overflow: 'hidden' },
      tabBarItemStyle: { height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' },
    }}>
      <Tabs.Screen name='Home' options={{
        headerShown: false, title: 'Home', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Home' />
        )
      }} />

      <Tabs.Screen name='Search' options={{
        headerShown: false, title: 'Search', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Search' />
        )
      }} />

      <Tabs.Screen name='Saved' options={{
        headerShown: false, title: 'Saved', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Saved' />
        )
      }} />

      <Tabs.Screen name='Profile' options={{
        headerShown: false, title: 'Profile', tabBarIcon: ({ focused }) => (
          <TabsBarIcon focused={focused} title='Profile' />
        )
      }} />
    </Tabs>
  );
};

export default TabsLayout;