import { View, Text, Image, ScrollView } from 'react-native'

import Book from '../../assets/books/elGatoConBotas.json'

export default function Story01() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="items-center">
        <Image
          source={require('../../assets/images/story01/img01.webp')}
          className="w-[300] h-[180] m-8 rounded-2xl"
        />
      </View>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[0].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[1].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[2].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[3].data}
      </Text>
      <View className="items-center">
        <Image
          source={require('../../assets/images/story01/img02.webp')}
          className="w-[300] h-[180] m-8 mt-2 rounded-2xl"
        />
      </View>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[4].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[5].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[6].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[7].data}
      </Text>
      <View className="items-center">
        <Image
          source={require('../../assets/images/story01/img03.webp')}
          className="w-[300] h-[180] m-8 mt-2 rounded-2xl"
        />
      </View>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[8].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[9].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[10].data}
      </Text>
      <View className="items-center">
        <Image
          source={require('../../assets/images/story01/img04.webp')}
          className="w-[300] h-[180] m-8 mt-2 rounded-2xl"
        />
      </View>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[11].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[12].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[13].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[14].data}
      </Text>
      <View className="items-center">
        <Image
          source={require('../../assets/images/story01/img05.webp')}
          className="w-[300] h-[180] m-8 mt-2 rounded-2xl"
        />
      </View>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[15].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[16].data}
      </Text>
      <Text className="text-black/70 dark:text-white/60 text-xl font-[Sriracha] mx-8 mb-4">
        {Book[17].data}
      </Text>
      <View className="items-center">
        <Image
          source={require('../../assets/images/story01/img06.webp')}
          className="w-[300] h-[180] m-8 mt-2 rounded-2xl"
        />
      </View>
      <Text className="text-red-400/70 text-xl font-[Sriracha] mx-8 mb-6 text-center">
        ... End ...
      </Text>
    </ScrollView>
  )
}
