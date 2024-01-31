import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useLayoutEffect } from 'react'
import { ListBooks } from '../../../assets/books/listBooks'

import Story01 from './Story01'
import Story02 from './Story02'
import Story03 from './Story03'
import Story04 from './Story04'
import Story05 from './Story05'
import Story06 from './Story06'
import Story07 from './Story07'

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
      {id === 'story03' && <Story03 />}
      {id === 'story04' && <Story04 />}
      {id === 'story05' && <Story05 />}
      {id === 'story06' && <Story06 />}
      {id === 'story07' && <Story07 />}
    </View>
  )
}
