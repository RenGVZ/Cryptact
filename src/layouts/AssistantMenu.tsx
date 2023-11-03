type AssistantMenuProps = {
  children: React.ReactNode
}

const AssistantMenu = ({ children }: AssistantMenuProps) => {
  return <div className="w-full flex flex-col lg:flex-row gap-4">{children}</div>
}

export default AssistantMenu
