import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='Home' options={{ headerShown: false, title: 'Home' }} />
      <Tabs.Screen name='Search' options={{ headerShown: false, title: 'Search' }} />
      <Tabs.Screen name='Saved' options={{ headerShown: false, title: 'Saved' }} />
      <Tabs.Screen name='Profile' options={{ headerShown: false, title: 'Profile' }} />
    </Tabs>
  )
}

export default TabsLayout;