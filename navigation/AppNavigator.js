import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SearchScreen from '../screens/SearchScreen';
import ResultsScreen from '../screens/ResultsScreen';
import ProviderDetails from '../screens/ProviderDetails';
import AboutScreen from '../screens/AboutScreen';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Search Results' }} />
      <Stack.Screen name="Details" component={ProviderDetails} options={{ title: 'Provider Details' }} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <NavigationContainer>
      {isSignedIn ? (
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'SearchTab') iconName = 'search';
              else if (route.name === 'Profile') iconName = 'person';
              else if (route.name === 'About') iconName = 'information-circle';
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#1E90FF',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="SearchTab" component={SearchStack} options={{ title: 'Search' }} />
          <Tab.Screen name="Profile">
            {(props) => <ProfileScreen {...props} onSignOut={() => setIsSignedIn(false)} />}
          </Tab.Screen>
          <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
          <Stack.Screen name="SignIn">
            {(props) => <SignInScreen {...props} onSignIn={() => setIsSignedIn(true)} />}
          </Stack.Screen>
          <Stack.Screen name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}