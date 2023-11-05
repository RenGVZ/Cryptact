import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import QuickAccess from "../../components/QuickAccess"

const menuItems = {
  items: [
    {
      id: 0,
      title: "年度初めの残高入力",
      content:
        "過去の計算結果を引き継いで計算する場合はこちらをクリックしてください。",
    },
    {
      id: 1,
      title: "帳簿設定",
      content:
        "計算方法 (総平均法、移動平均法)、会計通貨、データ確定に関する設定の変更ができます。",
    },
  ],
}

describe("QuickAccess", () => {
  it("renders the component with menu items", () => {
    render(<QuickAccess />)

    // Check if the component title and menu items are rendered correctly
    expect(screen.getByText("クイックアクセス")).toBeInTheDocument()
    menuItems.items.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument()
      expect(screen.getByText(item.content)).toBeInTheDocument()
    })
  })

  it("renders menu items with the correct styles", () => {
    render(<QuickAccess />)

    // Check if menu items are rendered with the correct styles
    const menuItemsElements = screen.getAllByTestId("menu-item")
    expect(menuItemsElements).toHaveLength(menuItems.items.length)

    menuItemsElements.forEach((menuItem, index) => {
      expect(menuItem).toHaveClass("bg-White/50")
      expect(menuItem).toHaveClass("border-Primary/100")
      expect(menuItem).toHaveTextContent(menuItems.items[index].title)
      expect(menuItem).toHaveTextContent(menuItems.items[index].content)
    })
  })
})
