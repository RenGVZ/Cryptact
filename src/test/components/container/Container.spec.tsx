import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import Container from "../../../components/container/Container"
import * as MockData from "../../../data/data.json"
const content = MockData.content[0]

describe("Container", () => {
  it("renders the component with uncollapsed content", () => {
    render(<Container content={content} />)

    // Assert that the container isn't collapsed
    expect(screen.queryByText(content.title)).toBeInTheDocument()
    expect(screen.queryByText(content.subtitle)).toBeInTheDocument()
    expect(screen.queryByText(content.steps[0].title)).not.toBeNull()
  })

  it("toggles content to collapse when clicking on carat", () => {
    render(<Container content={content} />)

    // Click the header to toggle collapse
    fireEvent.click(screen.getAllByRole("button")[0])

    // Assert that the content is now collapsed
    expect(screen.queryByText(content.steps[0].title)).not.toBeInTheDocument()
  })
})
