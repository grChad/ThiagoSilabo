import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { ListBooks } from '../utils/listBooks'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const navitation = useNavigation()

  return (
    <ScrollView>
      <View>
        <View className="m-8 mb-12 p-4 bg-black/10 dark:bg-white/60 rounded-2xl relative">
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
        <View className="mb-4">
          <Text className="text-xl text-[#1da1f2] font-[RammettoOne] underline ml-8">
            Mis cuentos:
          </Text>
          <FlatList
            scrollEnabled={false}
            data={ListBooks}
            renderItem={({ item }) => (
              <Pressable
                key={item.id}
                style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1.0 }]}
                onPress={() => {
                  navitation.navigate('ReadStory', {
                    id: item.id,
                    title: item.story,
                  })
                }}
              >
                <View
                  className="flex-row justify-between items-center mx-8 my-4 p-4 bg-sky-200/50 rounded-2xl relative"
                  style={{
                    backgroundColor: item.background,
                  }}
                >
                  <Text
                    className="w-full text-xl font-[RammettoOne] absolute top-4 z-10 text-center ml-8"
                    style={{
                      color: item.textColor,
                      textShadowColor: item.background,
                      textShadowRadius: 2,
                    }}
                  >
                    {item.story}
                  </Text>
                  <Image
                    source={item.srcImg}
                    className="h-28 w-32 rounded-xl"
                  />
                  <View
                    style={{ borderWidth: 2, borderColor: item.textColor }}
                    className="rounded-xl px-4 py-2 mt-4"
                  >
                    <Text className="text-black/80 font-[Asap] text-base">
                      Author:
                    </Text>
                    <Text className="text-black/60 font-[ComicNeue] text-base">
                      {item.author}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>
      </View>
    </ScrollView>
  )
}
