import { ScrollView, useColorScheme } from 'react-native'
import { BoxImage, Paragraph } from './components'

import Book from '../../../assets/books/el_patito_feo.json'

export default function Story01() {
  const theme = useColorScheme()

  const urlImages = {
    img01: require('../../../assets/images/story07/image01.webp'),
    img02: require('../../../assets/images/story07/image02.webp'),
    img03: require('../../../assets/images/story07/image03.webp'),
    img04: require('../../../assets/images/story07/image04.webp'),
    img05: require('../../../assets/images/story07/image05.webp'),
    img06: require('../../../assets/images/story07/image06.webp'),
    img07: require('../../../assets/images/story07/image07.webp'),
    img08: require('../../../assets/images/story07/image08.webp'),
    img09: require('../../../assets/images/story07/image09.webp'),
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <BoxImage url={urlImages.img01} init={true} />
      <Paragraph text={Book[0].es} theme={theme} />
      <Paragraph text={Book[1].es} theme={theme} />
      <BoxImage url={urlImages.img02} />
      <Paragraph text={Book[2].es} theme={theme} />
      <Paragraph text={Book[3].es} theme={theme} />
      <BoxImage url={urlImages.img03} />
      <Paragraph text={Book[4].es} theme={theme} />
      <Paragraph text={Book[5].es} theme={theme} />
      <Paragraph text={Book[6].es} theme={theme} />
      <Paragraph text={Book[7].es} theme={theme} />
      <BoxImage url={urlImages.img04} />
      <Paragraph text={Book[8].es} theme={theme} />
      <Paragraph text={Book[9].es} theme={theme} />
      <Paragraph text={Book[10].es} theme={theme} />
      <Paragraph text={Book[11].es} theme={theme} />
      <BoxImage url={urlImages.img05} />
      <Paragraph text={Book[12].es} theme={theme} />
      <BoxImage url={urlImages.img06} />
      <Paragraph text={Book[13].es} theme={theme} />
      <BoxImage url={urlImages.img07} />
      <Paragraph text={Book[14].es} theme={theme} />
      <Paragraph text={Book[15].es} theme={theme} />
      <BoxImage url={urlImages.img08} />
      <Paragraph text={Book[16].es} theme={theme} />
      <BoxImage url={urlImages.img09} />
      <Paragraph text={'... End ...'} theme={theme} isEnd={true} />
    </ScrollView>
  )
}
