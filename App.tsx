import * as React from 'react'
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useColorScheme } from 'react-native'

import HomeScreen from './src/home'
import DetailsScreen from './src/details'
import SettingsScreen from './src/setting'
import Books from './src/home/books'
import Musica from './src/musica'
import { Phrases, FlagSpain } from './src/phrases/index'

import { SettingsIcon } from './src/utils/IconsSvg'
const Color = { primary: '#1da1f2', secondary: '#1C74AA', gray: '#909090' }

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
          height: 3,
          borderRadius: 5,
          backgroundColor: Color.primary,
        },
        tabBarActiveTintColor: Color.secondary,
        tabBarInactiveTintColor: Color.gray,
      }}
    >
      <TopTabs.Screen name="home" component={HomeScreen} options={{ title: 'Cuentos' }} />
      <TopTabs.Screen name="phrases" component={Phrases} options={{ title: 'Frases' }} />
      <TopTabs.Screen name="Poems" component={DetailsScreen} options={{ title: 'Poemas' }} />
      <TopTabs.Screen name="Music" component={Musica} options={{ title: 'Musica' }} />
    </TopTabs.Navigator>
  )
}

const Stack = createNativeStackNavigator()
function App() {
  const theme = useColorScheme()

  return (
    <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator screenOptions={{
        headerTitleStyle: { fontFamily: 'RammettoOne', color: Color.secondary },
        headerShadowVisible: false,
        headerTitleAlign: 'center',
      }}>
        <Stack.Screen name="TabsGroup" component={TopTabsGroup} options={{
          headerTitleStyle: { fontFamily: 'Asap', color: Color.secondary },
          headerRight: () => <SettingsIcon />,
          title: 'ThiagoSilabo',
        }} />
        <Stack.Screen
          name="ReadStory"
          component={Books}
          options={{
            headerRight: () => <FlagSpain size={40} />,
            presentation: 'modal',
            headerTitle: 'Stories',
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default App
