import { ContentType } from "src/types"
import { UserCircleGear, CaretUp } from "@phosphor-icons/react"

type HeaderDescriptionProps = {
  content: ContentType
}

const HeaderDescription = ({ content }: HeaderDescriptionProps) => {
  return (
    <div className="flex flex-col items-start self-stretch">
      <div className="flex flex-col lg:flex-row justify-between items-start self-stretch">
        <div className="flex items-center gap-2">
          <UserCircleGear size={26} color="#4299E1" weight="duotone" />
          <h1 className="text-Text/Main text-lg lg:text-xl font-semibold leading-26">
            {content.title}
          </h1>
        </div>
        <div className="flex justify-end items-center gap-2">
          <div className="inline-flex items-center gap-2">
            <p className="text-Grey/400 text-sm leading-21 tracking-[-0.14px]">
              1/2テップ
            </p>
            <CaretUp size={16} color="#8c959d" />
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
