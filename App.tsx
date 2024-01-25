import * as React from 'react'
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useColorScheme } from 'react-native'

import HomeScreen from './src/home'
import DetailsScreen from './src/details'
import SettingsScreen from './src/setting'
import Aux from './src/aux'

import Musica from './src/musica'

import { FrameImage } from './src/utils/user'
import { BookIcon, PoemIcon, SettingsIcon } from './src/utils/IconsSvg'

const Stack = createNativeStackNavigator()

const Tab = createBottomTabNavigator()
function TabsGroup() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#1da1f2',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitleAlign: 'center',
          headerRight: () => <FrameImage size={40} />,
          tabBarIcon: ({ color, focused }) => (
            <BookIcon fill={color} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={TopTabsGroup}
        options={{
          headerTitleAlign: 'center',
          headerRight: () => <FrameImage size={40} />,
          tabBarIcon: ({ color, focused }) => (
            <PoemIcon fill={color} isFocused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, focused }) => (
            <SettingsIcon fill={color} isFocused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

const TopTabs = createMaterialTopTabNavigator()
function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: 'capitalize',
          fontWeight: 'bold',
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: '#1da1f2',
        },
      }}
    >
      <TopTabs.Screen name="mensajes" component={HomeScreen} />
      <TopTabs.Screen name="poemas" component={DetailsScreen} />
      <TopTabs.Screen name="musica" component={Musica} />
    </TopTabs.Navigator>
  )
}

function App() {
  const theme = useColorScheme()

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabsGroup" component={TabsGroup} />
        <Stack.Screen
          name="ReadStory"
          component={Aux}
          options={{
            presentation: 'modal',
            headerTitle: 'Stories',
            headerTitleAlign: 'center',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
