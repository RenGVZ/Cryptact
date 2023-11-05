import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import AssistantMenu from "../../layouts/AssistantMenu"

describe("AssistantMenu", () => {
  it("renders children correctly", () => {
    render(
      <AssistantMenu>
        <div>Child 1</div>
        <div>Child 2</div>
      </AssistantMenu>
    )

    expect(screen.getByText("Child 1")).toBeInTheDocument()
    expect(screen.getByText("Child 2")).toBeInTheDocument()
  })
})
