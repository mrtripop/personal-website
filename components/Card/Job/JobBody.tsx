import DotList from '@components/List/DotList'

export type JobBodyProps = {
  title?: string
  image?: string
  alt?: string
  contents?: string[]
}

const JobBody = (props: JobBodyProps) => (
  <div className="flex flex-col items-center justify-center gap-6 px-10 py-5 w-[318px] ">
    <h3 className="font-normal tracking-wide font-lato">{props.title}</h3>
    <div className="flex flex-col gap-4">
      {props.contents?.map((content, index) => (
        <DotList key={'job-content-' + index} text={content} />
      ))}
    </div>
    <img src={props.image} className="w-[127px]" alt={props.alt} />
  </div>
)

export default JobBody
