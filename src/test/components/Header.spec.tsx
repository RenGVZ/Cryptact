import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import Header from "../../components/Header"

describe("Header", () => {
  it("renders the header and content correctly", () => {
    const content = "This is the header content"
    render(<Header content={content} />)
    expect(screen.getByText(content)).toBeInTheDocument()
  })

  it("applies the correct styles to the header", () => {
    const content = "Header with styles"
    render(<Header content={content} />)

    // Check if the header has the correct styles, such as font size and font weight
    const headerElement = screen.getByText(content)
    expect(headerElement).toHaveClass("text-Text/Main")
    expect(headerElement).toHaveClass("font-semibold")
    expect(headerElement).toHaveClass("text-lg")
    expect(headerElement).toHaveClass("lg:text-32")
    expect(headerElement).toHaveClass("leading-42")
  })
})
