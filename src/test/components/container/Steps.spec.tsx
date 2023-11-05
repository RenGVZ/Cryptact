import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { Steps, Step } from "../../../components/container/Steps"

const sampleSteps = [
  {
    id: 0,
    title: "取引所 / ブロックチェーンを選択しましょう",
    badge: "13 取引所/ブロックチェーン選択済み",
    content:
      "取引をしたことのある取引所 / ブロックチェーンをすべて選択してください。対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください。",
    buttonText: "選択する",
    isComplete: true,
    isActive: false,
  },
  {
    id: 1,
    title: "取引履歴を反映させましょう",
    content:
      "ファイルやAPI連携で履歴を反映させることができます。DeFiの取引はウォレットアドレスを入力することで取引内容まで自動識別することができます。",
    buttonText: "追加する",
    isComplete: false,
    isActive: true,
  },
]

describe("Steps", () => {
  it("renders steps when not collapsed and not disabled", () => {
    render(<Steps steps={sampleSteps} isCollapsed={false} isDisabled={false} />)

    // Check if all step titles are visible
    sampleSteps.forEach((step) => {
      expect(screen.queryByText(step.title)).toBeInTheDocument()
    })
  })

  it("does not render steps when collapsed", () => {
    render(<Steps steps={sampleSteps} isCollapsed={true} isDisabled={false} />)

    // Check that no step titles are visible
    sampleSteps.forEach((step) => {
      expect(screen.queryByText(step.title)).toBeNull()
    })
  })

  it("renders steps with disabled styles when isDisabled is true", () => {
    render(<Steps steps={sampleSteps} isCollapsed={false} isDisabled={true} />)

    // Check if step titles are visible but disabled
    sampleSteps.forEach((step) => {
      const stepTitle = screen.getByText(step.title).parentElement
      expect(stepTitle).toBeInTheDocument()
      expect(stepTitle).toHaveClass("opacity-50")
    })
  })
})

describe("Step", () => {
  it("renders a complete step with check circle icon", () => {
    render(<Step step={sampleSteps[0]} isDisabled={false} />)

    // Check for the presence of CheckCircle icon
    expect(screen.getByTestId("check-circle-icon")).toBeInTheDocument()
  })

  it("renders an incomplete step with circle dashed icon", () => {
    render(<Step step={sampleSteps[1]} isDisabled={false} />)

    // Check for the presence of CircleDashed icon
    expect(screen.getByTestId("circle-dashed-icon")).toBeInTheDocument()
  })
})
