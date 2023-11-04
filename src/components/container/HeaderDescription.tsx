import ProgressBar from "components/container/ProgressBar"
import { ContentType } from "src/types"
import { UserCircleGear, Gear, ListChecks, CaretUp, CaretDown } from "@phosphor-icons/react"

type HeaderDescriptionProps = {
  content: ContentType
  isCollapsed: boolean
  handleCollapse: () => void
}

const HeaderDescription = ({
  content,
  isCollapsed,
  handleCollapse,
}: HeaderDescriptionProps) => {
  const completedSteps = content.steps.filter((step) => step.isComplete).length

  const getIcon = (icon: string) => {
    switch (icon) {
      case "UserCircleGear":
        return <UserCircleGear size={26} color="#4299E1" weight="duotone" />
      case "Gear":
        return <Gear size={26} color="#4299E1" weight="duotone" />
      case "ListChecks":
        return <ListChecks size={26} color="#4299E1" weight="duotone" />
      default:
        return <UserCircleGear size={26} color="#4299E1" weight="duotone" />
    }
  }

  return (
    <div className="flex flex-col items-start self-stretch">
      <div className="flex flex-col lg:flex-row justify-between items-start self-stretch">
        <div className="flex items-center gap-2">
          {getIcon(content.icon)}
          <h1 className="text-Text/Main text-lg lg:text-xl font-semibold leading-26">
            {content.title}
          </h1>
        </div>
        <div className="flex justify-end items-center gap-2">
          <div className="inline-flex items-center gap-2">
            <ProgressBar
              completed={completedSteps}
              stepCount={content.steps.length || 0}
            />
            <p className="text-Grey/400 text-sm leading-21 tracking-[-0.14px]">
              {`${completedSteps}`}/{`${content.steps.length}`}ステップ
            </p>
            <button onClick={handleCollapse}>
              {isCollapsed ? (
                <CaretDown size={16} color="#8c959d" />
              ) : (
                <CaretUp size={16} color="#8c959d" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-2 self-stretch pt-4">
        <p className="text-Grey/800">{content.subtitle}</p>
      </div>
    </div>
  )
}

export default HeaderDescription
