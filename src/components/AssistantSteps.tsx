import Container from "src/components/container/Container"
import data from "src/data/data.json"

const AssistantSteps = () => {
  console.log(data)

  return (
    <div className="flex flex-col space-y-4 w-full">
      {data.map((container) => (
        <Container key={container.id} content={container} />
      ))}
    </div>
  )
}

export default AssistantSteps
