import { useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import { ListBooks } from '../../assets/books/listBooks'
import { useNavigation, useFocusEffect } from '@react-navigation/native'

import { BookIcon } from '../utils/IconsSvg'

export default function Home() {
  const navitation = useNavigation()
  const [click, setClick] = useState(0)

  const randomBooks = ListBooks.sort(() => Math.random() - 0.5)
  useFocusEffect(() => {
    randomBooks
  })

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="m-8 p-4 bg-black/10 dark:bg-white/60 rounded-2xl relative">
        <Text className="absolute top-4 right-4 bg-black/40 rounded-xl py-1 px-4 text-white/90 text-xl font-[Asap]">
          Frase del dia
        </Text>
        <Text className="mt-8 text-black/60 font-bold text-xl">
          Author: <Text className="font-[Asap] text-black/80">Susi Dias</Text>
        </Text>
        <Text className="bg-white/40 rounded-xl px-4 py-2 font-[Sriracha] text-cyan-600 text-xl mt-2">
          Vive la vida, y no dejes que la vida te viva
        </Text>
      </View>
      <View className="flex-row items-center mt-4 pl-8">
        <Text className="mr-2 text-xl text-[#1da1f2] font-[Asap] underline">
          Mis cuentos
        </Text>
        <BookIcon size={25} fill='#1da1f2' />
      </View>
      <View
        className="flex-row flex-wrap justify-center p-8 pt-4"
        style={{ gap: 32 }}
      >
        {randomBooks.map((item) => (
          <Pressable
            key={item.id}
            style={({ pressed }) => [{
              opacity: pressed ? 0.7 : 1.0,
              backgroundColor: item.background,
              padding: 16,
              borderRadius: 16,
            }]}
            onPress={() => {
              navitation.navigate('ReadStory', {
                id: item.id,
                title: item.story,
              })
              setClick(click + 1)
            }}
          >
            <Image
              source={item.srcImg}
              className="w-48 h-32 rounded-xl"
            />
            <View
              style={{ borderWidth: 2, borderColor: item.textColor }}
              className="w-48 h-16 justify-center items-center rounded-xl mt-2 p-2"
            >
              <Text style={{ fontFamily: 'Asap', textAlign: 'center', color: item.textColor }}>
                {item.story}
              </Text>
            </View>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  )
}
