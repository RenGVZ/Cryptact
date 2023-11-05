import "@testing-library/jest-dom"
import { render, screen, fireEvent } from "@testing-library/react"
import HeaderDescription from "../../../components/container/HeaderDescription"

const contentSample = {
  id: 0,
  title: "取引の情報を入力しましょう",
  subtitle: "仮想通貨の損益計算には過去すべての取引履歴が必要になります.",
  icon: "UserCircleGear",
  isDisabled: false,
  steps: [
    {
      id: 0,
      title: "取引所 / ブロックチェーンを選択しましょう",
      badge: "13 取引所/ブロックチェーン選択済み",
      content:
        "取引をしたことのある取引所 / ブロックチェーンをすべて選択してください. 対応していない取引所や取引所外での取引経験がある場合は「カスタム」を選択してください.",
      buttonText: "選択する",
      isComplete: true,
      isActive: false,
    },
    {
      id: 1,
      title: "取引履歴を反映させましょう",
      content:
        "ファイルやAPI連携で履歴を反映させることができます. DeFiの取引はウォレットアドレスを入力することで取引内容まで自動識別することができます.",
      buttonText: "追加する",
      isComplete: false,
      isActive: true,
    },
  ],
}

describe("HeaderDescription", () => {
  it("renders the component with correct content and icons", () => {
    const handleCollapse = jest.fn()
    render(
      <HeaderDescription
        content={contentSample}
        isCollapsed={false}
        handleCollapse={handleCollapse}
      />
    )

    // Check if the title, subtitle, icon, and other elements are rendered correctly
    expect(screen.getByText(contentSample.title)).toBeInTheDocument()
    expect(screen.getByText(contentSample.subtitle)).toBeInTheDocument()
    expect(screen.getByTestId("user-circle-gear-icon")).toBeInTheDocument()
    expect(screen.getByTestId("caret-up-button")).toBeInTheDocument()
    expect(screen.getByText("1/2ステップ")).toBeInTheDocument()
  })

  it("toggles the content when clicking on the collapse button", () => {
    const handleCollapse = jest.fn()
    render(
      <HeaderDescription
        content={contentSample}
        isCollapsed={false}
        handleCollapse={handleCollapse}
      />
    )

    fireEvent.click(screen.getByTestId("collapse-button"))

    expect(handleCollapse).toHaveBeenCalled()
  })
})
