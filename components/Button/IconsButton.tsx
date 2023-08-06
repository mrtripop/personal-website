type Props = {
  src: string
  alt?: string
  onClick?: () => void
}

const ImageButton = (props: Props) => {
  return (
    <button
      onClick={props.onClick}
      className="w-[51px] h-[51px] rounded-full bg-white flex items-center justify-center shadow-lg"
    >
      <img src={props.src} alt={props.alt} />
    </button>
  )
}

export default ImageButton
