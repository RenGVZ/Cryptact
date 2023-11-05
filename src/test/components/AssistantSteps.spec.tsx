import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import AssistantSteps from "../../components/AssistantSteps"
import * as MockData from "../../data/data.json"

const contentSample = MockData

describe("AssistantSteps", () => {
  it("renders the component with containers", () => {
    render(<AssistantSteps content={contentSample.content} />)

    // Check if the component renders with containers and their titles
    contentSample.content.forEach((container) => {
      expect(screen.getByText(container.title)).toBeInTheDocument()
    })
  })
})
