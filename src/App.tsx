import { useState } from "react"
import Header from "components/Header"
import AssistantMenu from "src/layouts/AssistantMenu"
import QuickAccess from "./components/QuickAccess"
import AssistantSteps from "./components/AssistantSteps"
import { DataInterface } from "src/types"

const App = () => {
  const [data, setData] = useState<DataInterface | null>(null)

  const fetchData = async () => {
    try {
      const res = await fetch("src/data/data.json")
      const data: DataInterface = await res.json()
      setData(data)
    } catch (err) {
      console.log("error:", err)
    }
  }

  fetchData()

  return (
    <main className="flex flex-col items-start py-4 lg:py-main px-2 lg:px-28 gap-4 lg:gap-8 font-main">
      <Header content="クリプタクトで計算を始めてみましょう" />
      {!data ? (
        <div>データをロードできない</div>
      ) : (
        <AssistantMenu>
          <AssistantSteps content={data.content} />
          <QuickAccess />
        </AssistantMenu>
      )}
    </main>
  )
}

export default App
