import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import ProgressBar from "../../../components/container/ProgressBar"

describe("ProgressBar", () => {
  it("renders the progress bar with the correct width", () => {
    render(<ProgressBar stepCount={10} completed={3} />)

    const progressBar = screen.getByTestId("progress-bar")
    const progressIndicator = screen.getByTestId("progress-indicator")

    expect(progressBar).toBeInTheDocument()

    // Ensure that the width of the progress indicator is correct
    expect(progressIndicator).toHaveStyle("width: 30%")
  })

  it("renders a complete progress bar", () => {
    render(<ProgressBar stepCount={5} completed={5} />)

    const progressBar = screen.getByTestId("progress-bar")
    const progressIndicator = screen.getByTestId("progress-indicator")

    expect(progressBar).toBeInTheDocument()

    // Ensure that the progress indicator has 100% width when all steps are completed
    expect(progressIndicator).toHaveStyle("width: 100%")
  })

  it("renders an empty progress bar", () => {
    render(<ProgressBar stepCount={0} completed={0} />)

    const progressBar = screen.getByTestId("progress-bar")
    const progressIndicator = screen.getByTestId("progress-indicator")

    expect(progressBar).toBeInTheDocument()

    // Ensure that the progress indicator has 0% width when no steps are completed
    expect(progressIndicator).toHaveStyle("width: 0%")
  })
})
