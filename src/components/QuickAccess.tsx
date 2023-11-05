import { MenuItemsInterface } from "src/types"

const menuItems: MenuItemsInterface = {
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

const QuickAccess = () => {
  return (
    <div className="lg:max-w-[189px] self-stretch order-1 lg:order-2">
      <div className="flex flex-col items-start pb-0 gap-3">
        <div className="text-Text/Menu text-xs font-bold leading-6 tracking-[0.12px] uppercase">
          クイックアクセス
        </div>

        <div className="flex flex-row lg:flex-col items-start gap-4">
          {menuItems.items.map((item) => (
            <div
              data-testid="menu-item"
              key={item.id}
              className="bg-White/50 w-1/2 lg:w-full flex flex-col items-start self-stretch p-4 border border-Primary/100 rounded-lg cursor-pointer"
            >
              <h1 className="text-Text/Main text-sm font-semibold leading-21">
                {item.title}
              </h1>
              <p className="text-Grey/800 text-xs leading-18">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default QuickAccess
