import JobBody, { JobBodyProps } from './JobBody'

export type JobCardProps = {
  role?: string
  location?: string
  jobs?: JobBodyProps[]
}

const JobCard = (props: JobCardProps) => (
  <div className="w-full">
    <div className="flex flex-col gap-1 py-12 px-7 rounded-t-3xl highlight-gradient">
      <h2 className="text-2xl font-semibold tracking-wide text-center font-lato">
        {props.role}
      </h2>
      <h4 className="font-light text-center text-md">{props.location}</h4>
    </div>
    <div className="flex flex-col flex-wrap items-center justify-center w-full lg:flex-row bg-gray rounded-b-3xl">
      {props.jobs?.map((job, index) => (
        <JobBody key={'experience-body-index-' + index} {...job} />
      ))}
    </div>
  </div>
)

export default JobCard
