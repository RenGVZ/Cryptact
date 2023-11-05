import { useState } from "react"
import HeaderDescription from "components/container/HeaderDescription"
import { Steps } from "components/container/Steps"
import { ContentType } from "src/types"

type ContainerProps = {
  content: ContentType
}

export const Container = ({ content }: ContainerProps) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  return (
    <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-container">
      <HeaderDescription
        content={content}
        isCollapsed={isCollapsed}
        handleCollapse={() => setIsCollapsed(!isCollapsed)}
      />

      <Steps
        steps={content.steps}
        isCollapsed={isCollapsed}
        isDisabled={content.isDisabled}
      />
    </div>
  )
}

export default Container
