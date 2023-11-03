import HeaderDescription from "components/container/HeaderDescription"
import Steps from "components/container/Steps"
import { ContentType } from "src/types"

type ContainerProps = {
  content: ContentType
}

export const Container = ({ content }: ContainerProps) => {
  return (
    <div className="flex flex-col items-start p-4 bg-white rounded-lg gap-8">
      <HeaderDescription content={content} />
      <Steps steps={content.steps} />
    </div>
  )
}

export default Container
