type Props = {
  style?: {
    width?: number
    height?: number
    opacity?: number
    margin?: string
    backgroundColor?: string
  }
  position?: {
    top?: number
    bottom?: number
    left?: number
    right?: number
  }
}

const BackgroundCircle = (props: Props) => {
  return (
    <div
      className="flex items-center justify-center rounded-full"
      style={{ ...props.style, ...props.position }}
    />
  )
}

export default BackgroundCircle
