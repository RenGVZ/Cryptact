import Container from "../components/container/Container"
import { DataInterface } from "src/types"

type AssistantStepsProps = DataInterface

const AssistantSteps = ({ content }: AssistantStepsProps) => {
  return (
    <div
      data-testid="container"
      className="flex flex-col space-y-4 w-full order-2 lg:order-1"
    >
      {content &&
        content.map((container) => (
          <Container key={container.id} content={container} />
        ))}
    </div>
  )
}

export default AssistantSteps
