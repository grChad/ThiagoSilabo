import { ScrollView, useColorScheme } from 'react-native'
import { BoxImage, Paragraph } from './components'

import Book from '../../../assets/books/el_arbol_magico.json'

export default function Story01() {
  const theme = useColorScheme()

  const urlImages = {
    img01: require('../../../assets/images/story05/image01.webp'),
    img02: require('../../../assets/images/story05/image02.webp'),
    img03: require('../../../assets/images/story05/image03.webp'),
    img04: require('../../../assets/images/story05/image04.webp'),
    img05: require('../../../assets/images/story05/image05.webp'),
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <BoxImage url={urlImages.img01} init={true} />
      <Paragraph text={Book[0].es} theme={theme} />
      <BoxImage url={urlImages.img02} />
      <Paragraph text={Book[1].es} theme={theme} />
      <BoxImage url={urlImages.img03} />
      <Paragraph text={Book[2].es} theme={theme} />
      <Paragraph text={Book[3].es} theme={theme} />
      <BoxImage url={urlImages.img04} />
      <Paragraph text={Book[4].es} theme={theme} />
      <Paragraph text={Book[5].es} theme={theme} />
      <BoxImage url={urlImages.img05} />
      <Paragraph text={Book[6].es} theme={theme} />
      <Paragraph text={'... End ...'} theme={theme} isEnd={true} />
    </ScrollView>
  )
}
