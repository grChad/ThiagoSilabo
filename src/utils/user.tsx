import Svg, { Rect, Path } from 'react-native-svg'

interface WidthSizeProps {
  size: number
  fill?: string
  stroke?: string
}

export const FrameImage: React.FC<WidthSizeProps> = ({ size }) => {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 400 400"
      strokeWidth="3"
      stroke="#000000"
      style={{ marginRight: 20 }}
    >
      <Path
        d="M30 90 l-30 -25 l36 -10 a64 64 0 0 1 24 -18 l15 -35 l18 28 h236a64 64 0 0 1 64 64v236a64 64 0 0 1-64 64H94a64 64 0 0 1-64-64V94z"
        fill="#8e67ad"
      />
      <Rect x="70" y="70" width="280" height="280" fill="white" />
    </Svg>
  )
}
