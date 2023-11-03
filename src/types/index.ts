export interface DataInterface {
  content: ContentType[]
}

export type ContentType = {
  id: number
  title: string
  subtitle: string
  icon: string
  steps: StepType[]
}

export type StepType = {
  id: number
  title: string
  badge?: string
  info?: string
  content: string
  buttonText: string
  isSelected: boolean
}

export interface MenuItemsInterface {
  items: {
    id: number
    title: string
    content: string
  }[]
}
