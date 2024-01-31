import { ScrollView, useColorScheme } from 'react-native'
import { BoxImage, Paragraph } from './components'

import Book from '../../../assets/books/los_musicos_de_bremen.json'

export default function Story01() {
  const theme = useColorScheme()

  const urlImages = {
    img01: require('../../../assets/images/story04/image01.webp'),
    img02: require('../../../assets/images/story04/image02.webp'),
    img03: require('../../../assets/images/story04/image03.webp'),
    img04: require('../../../assets/images/story04/image04.webp'),
    img05: require('../../../assets/images/story04/image05.webp'),
    img06: require('../../../assets/images/story04/image06.webp'),
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <BoxImage url={urlImages.img01} init={true} />
      <Paragraph text={Book[0].es} theme={theme} />
      <BoxImage url={urlImages.img02} />
      <Paragraph text={Book[1].es} theme={theme} />
      <Paragraph text={Book[2].es} theme={theme} />
      <Paragraph text={Book[3].es} theme={theme} />
      <Paragraph text={Book[4].es} theme={theme} />
      <Paragraph text={Book[5].es} theme={theme} />
      <BoxImage url={urlImages.img03} />
      <Paragraph text={Book[6].es} theme={theme} />
      <Paragraph text={Book[7].es} theme={theme} />
      <Paragraph text={Book[8].es} theme={theme} />
      <Paragraph text={Book[9].es} theme={theme} />
      <Paragraph text={Book[10].es} theme={theme} />
      <BoxImage url={urlImages.img04} />
      <Paragraph text={Book[11].es} theme={theme} />
      <Paragraph text={Book[12].es} theme={theme} />
      <Paragraph text={Book[13].es} theme={theme} />
      <Paragraph text={Book[14].es} theme={theme} />
      <Paragraph text={Book[15].es} theme={theme} />
      <BoxImage url={urlImages.img05} />
      <Paragraph text={Book[16].es} theme={theme} />
      <Paragraph text={Book[17].es} theme={theme} />
      <Paragraph text={Book[18].es} theme={theme} />
      <Paragraph text={Book[19].es} theme={theme} />
      <Paragraph text={Book[20].es} theme={theme} />
      <Paragraph text={Book[21].es} theme={theme} />
      <Paragraph text={Book[22].es} theme={theme} />
      <Paragraph text={Book[23].es} theme={theme} />
      <Paragraph text={Book[24].es} theme={theme} />
      <Paragraph text={Book[25].es} theme={theme} />
      <BoxImage url={urlImages.img06} />
      <Paragraph text={Book[26].es} theme={theme} />
      <Paragraph text={Book[27].es} theme={theme} />
      <Paragraph text={Book[28].es} theme={theme} />
      <Paragraph text={Book[29].es} theme={theme} />
      <Paragraph text={Book[30].es} theme={theme} />
      <Paragraph text={Book[31].es} theme={theme} />
      <Paragraph text={Book[32].es} theme={theme} />
      <Paragraph text={'... End ...'} theme={theme} isEnd={true} />
    </ScrollView>
  )
}
