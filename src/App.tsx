import Header from "components/Header"
import AssistantMenu from "src/layouts/AssistantMenu"
import QuickAccess from "./components/QuickAccess"
import AssistantSteps from "./components/AssistantSteps"

const App = () => {
  return (
    <main className="h-full flex flex-col items-start py-main px-28 gap-8 font-main">
      <Header content="クリプタクトで計算を始めてみましょう" />
      <AssistantMenu>
        <AssistantSteps />
        <QuickAccess />
      </AssistantMenu>
    </main>
  )
}

export default App
