import { LocationImage } from '@assets'
import BackgroundCircle from '@components/Circle/BackgroundCircle'

type Props = {}

const circle = {
  width: 37,
  height: 37,
  opacity: 0.8,
  backgroundColor: '#114357',
  position: 'absolute',
}

const Home = (props: Props) => {
  return (
    <div className="bg-white-mill">
      <div className="container flex flex-col items-center justify-center w-full h-screen px-8 pt-20 gap-9">
        <div className="relative w-full h-[3.75rem]">
          <BackgroundCircle
            style={{ ...circle }}
            position={{ bottom: 0, left: 0 }}
          />
          <BackgroundCircle
            style={{
              ...circle,
              width: 27,
              height: 27,
              opacity: 0.5,
              margin: 'auto',
            }}
            position={{ top: 0, left: 0, right: 0 }}
          />
          <BackgroundCircle
            style={{ ...circle, opacity: 0.5 }}
            position={{ bottom: 0, right: 0 }}
          />
        </div>
        <div>
          <h1 className="text-5xl font-semibold text-center bg-pink primary-gradient drop-shadow">
            Hi, I&#39;m Tripop
          </h1>
        </div>
        <div className="flex items-center gap-[0.5rem]">
          <img src={LocationImage.src} alt="Location icon" />
          <h2 className="font-sans text-lg font-light text-center">
            Bangkok, Thailand
          </h2>
        </div>
        <div className="flex flex-col w-full gap-4">
          <div className="flex flex-col items-center w-full gap-[0.9375rem] px-[1.0625rem] py-[1.875rem] rounded-3xl bg-gray drop-shadow">
            <h3 className="w-full text-base font-medium leading-[1.425rem] text-center ">
              Concept
            </h3>
            <p className="text-center font-light text-base leading-[1.425rem] w-[15rem]">
              Learning the new tech stack and keep it current as much as
              possible
            </p>
          </div>
          <div className="flex flex-col items-center w-full gap-[0.9375rem] px-[1.0625rem] py-[1.425rem] rounded-3xl highlight-gradient">
            <h3 className="w-full text-base font-medium leading-[1.425rem] text-center ">
              Happy coding!
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
