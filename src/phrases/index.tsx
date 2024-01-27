import { View, Text } from 'react-native'
import Svg, { Path, Rect } from 'react-native-svg'

interface Props {
  size?: number
}

export const FlagEEUU: React.FC<Props> = ({ size = 300 }) => {
  return (
    <Svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 400 300"
      strokeWidth={5}
      stroke="black"
    >
      <Rect
        width={334.91034}
        height={214.91032}
        x={32.544838}
        y={42.544834}
        ry={25}
        fill="#fd4f5a"
      />
      <Rect
        width={335.08698}
        height={39.086971}
        x={32.456512}
        y={86.45652}
        fill="#d9defb"
      />
      <Rect
        width={334.71838}
        height={38.71838}
        x={32.640808}
        y={174.64081}
        fill="#d9defb"
      />
      <Path
        d="M 58.738917,40.089661 H 192.3822 v 88.607689 a 16.731129,16.731129 135 0 1 -16.73113,16.73112 H 32.627163 V 66.201415 A 26.111754,26.111754 135 0 1 58.738917,40.089661 Z"
        transform="translate(-0.19812298,2.3393793)"
        fill="#2297f4"
      />
    </Svg>
  )
}

export const FlagSperant: React.FC<Props> = ({ size = 300 }) => {
  return (
    <Svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 400 300"
      strokeWidth={5}
      stroke="black"
    >
      <Rect
        width={334.91034}
        height={214.91032}
        x={32.544838}
        y={42.544834}
        ry={25}
        fill="#009400"
      />
      <Path
        d="M 58.738917,40.089661 H 192.3822 v 88.607689 a 16.731129,16.731129 135 0 1 -16.73113,16.73112 H 32.627163 V 66.201415 A 26.111754,26.111754 135 0 1 58.738917,40.089661 Z"
        transform="translate(-0.19812298,2.3393793)"
        fill="white"
      />
      <Path
        d="m 778.1795,461.806 -52.5,108.2 c -3.5,7.1 -10.2,12.1 -18.1,13.3 l -118.3,17.4 85.9,85.1 c 5.5,5.5 8.1,13.3 6.8,21 l -20.3,119.7 105.2,-56.2 c 7.1,-3.8 15.6,-3.8 22.6,0 l 105.2,56.2 -20.2,-119.6 c -1.3,-7.7 1.2,-15.5 6.8,-21 l 85.9,-85.1 -118.3,-17.5 c -7.8,-1.2 -14.6,-6.1 -18.1,-13.3 z"
        transform="matrix(0.13888889,0,0,0.13888889,0,4.4444444)"
        fill="#009400"
        strokeWidth={20}
      />
    </Svg>
  )
}

export const FlagSpain: React.FC<Props> = ({ size = 300 }) => {
  return (
    <Svg
      width={size}
      height={size * 0.75}
      viewBox="0 0 400 300"
      strokeWidth={5}
      stroke="black"
    >
      <Rect
        width={334.91034}
        height={214.91032}
        x={32.544838}
        y={42.544834}
        ry={25}
        fill="#ff0808"
      />

      <Rect
        width={334.0751}
        height={94.075111}
        x={32.962448}
        y={102.96245}
        fill="#fcde11"
      />
    </Svg>
  )
}

export const Phrases = () => {
  return (
    <View>
      <Text>Phrases</Text>
      <FlagEEUU />
      <FlagSperant />
      <FlagSpain />
    </View>
  )
}
