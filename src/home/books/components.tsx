import { View, Image, Text, StyleSheet } from 'react-native'
import type { BoxImageProps, ParagraphProps } from '../../types/books.d'

export const BoxImage: React.FC<BoxImageProps> = ({ url, init = false }) => {
  return (
    <View style={styles.BoxImage}>
      <Image source={url} style={[styles.Img, !init && { marginTop: 8 }]} />
    </View>
  )
}

export const Paragraph: React.FC<ParagraphProps> = ({
  text,
  theme,
  isEnd = false,
}) => {
  return (
    <Text
      style={[styles.P, theme === 'dark' && styles.PDark, isEnd && styles.PEnd]}
    >
      {text}
    </Text>
  )
}

const styles = StyleSheet.create({
  BoxImage: {
    alignItems: 'center',
  },
  Img: {
    width: 300,
    height: 180,
    margin: 32,
    borderRadius: 16,
  },
  P: {
    fontFamily: 'Sriracha',
    color: '#000000BB',
    fontSize: 20,
    lineHeight: 28,
    marginHorizontal: 32,
    marginBottom: 16,
  },
  PDark: {
    color: '#FFFFFF99',
  },
  PEnd: {
    color: '#FF6347',
    textAlign: 'center',
  },
})
