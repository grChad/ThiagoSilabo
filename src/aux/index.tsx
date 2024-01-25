import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { ListBooks } from '../utils/listBooks'

import Story01 from './Story01'
import Story02 from './Story02'

export default function Aux({ route }) {
  const Ids = {}
  ListBooks.forEach((item, i) => (Ids['id'.concat(i + 1)] = item.id))

  const { id, title } = route.params
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: title,
    })
  }, [])

  return (
    <View className="h-full justify-center items-center">
      {id === 'story01' && <Story01 />}
      {id === 'story02' && <Story02 />}
    </View>
  )
}
