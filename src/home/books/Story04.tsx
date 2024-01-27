import { ScrollView, useColorScheme, View, Text } from 'react-native'
import { BoxImage, Paragraph } from './components'

import Book from '../../../assets/books/elGatoConBotas.json'

export default function Story01() {
  const theme = useColorScheme()

  const urlImages = {
    img01: require('../../../assets/images/story02/image01.webp'),
    img02: require('../../../assets/images/story02/image02.webp'),
    img03: require('../../../assets/images/story02/image03.webp'),
    img04: require('../../../assets/images/story02/image04.webp'),
    img05: require('../../../assets/images/story02/image05.webp'),
    img06: require('../../../assets/images/story02/image06.webp'),
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <DescriptionParagraph />
      <BoxImage url={urlImages.img01} init={true} />
      <Paragraph text={Book[0].es} theme={theme} />
      <Paragraph text={Book[1].es} theme={theme} />
      <Paragraph text={Book[2].es} theme={theme} />
      <Paragraph text={Book[3].es} theme={theme} />
      <BoxImage url={urlImages.img02} />
      <Paragraph text={Book[4].es} theme={theme} />
      <Paragraph text={Book[5].es} theme={theme} />
      <Paragraph text={Book[6].es} theme={theme} />
      <Paragraph text={Book[7].es} theme={theme} />
      <BoxImage url={urlImages.img03} />
      <Paragraph text={Book[8].es} theme={theme} />
      <Paragraph text={Book[9].es} theme={theme} />
      <Paragraph text={Book[10].es} theme={theme} />
      <BoxImage url={urlImages.img04} />
      <Paragraph text={Book[11].es} theme={theme} />
      <Paragraph text={Book[12].es} theme={theme} />
      <Paragraph text={Book[13].es} theme={theme} />
      <Paragraph text={Book[14].es} theme={theme} />
      <BoxImage url={urlImages.img05} />
      <Paragraph text={Book[15].es} theme={theme} />
      <Paragraph text={Book[16].es} theme={theme} />
      <Paragraph text={Book[17].es} theme={theme} />
      <BoxImage url={urlImages.img06} />
      <Paragraph text={Book[17].es} theme={theme} />
      <Paragraph text={'... End ...'} theme={theme} isEnd={true} />
    </ScrollView>
  )
}

const DescriptionParagraph = () => {
  return (
    <View className="m-8 mb-0">
      <Text className="text-xl font-[Sriracha] text-green-800 dark:text-green-600/80 mb-4">
        <Text className="text-red-500 dark: text-red-500/80">
          La liebre y la tortuga
        </Text>{' '}
        es una de las fábulas de{' '}
        <Text className="text-red-500 dark: text-red-500/80">Esopo</Text>, o al
        menos a este famoso autor griego ha sido atribuida. Es una de las{' '}
        <Text className="text-red-500 dark: text-red-500/80">
          fábulas infantiles
        </Text>{' '}
        más famosas, una historia con una moraleja interesante que analizaremos
        después de haberla leído.
      </Text>
      <Text className="text-xl font-[Sriracha] text-green-800 dark:text-green-600/80">
        Aunque como decíamos, la fábula se atribuye a{' '}
        <Text className="text-red-500 dark: text-red-500/80">Esopo</Text>, fue
        posteriormente reescrita por otros autores como{' '}
        <Text className="text-red-500 dark: text-red-500/80">
          Jean de La Fontaine y Félix María Samaniego
        </Text>
        . Como todas las fábulas, se trata de un cuento corto; vamos a leerlo
        juntos.
      </Text>
    </View>
  )
}
