type Props = {
  active: string
}

const NavigationDots = (props: Props) => {
  return (
    <div className="app__navigation">
      {['home', 'about', 'work', 'skill', 'testimonial', 'contact'].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={props.active === item ? { backgroundColor: '#313BAC' } : {}}
          />
        )
      )}
    </div>
  )
}

export default NavigationDots
