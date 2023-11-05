import { useEffect, useState } from "react"

type ProgressBarProps = {
  stepCount: number
  completed: number
}

const ProgressBar = ({ stepCount, completed }: ProgressBarProps) => {
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    const getWidth = () => {
      if (stepCount === 0) return 0
      const width = (completed / stepCount) * 100
      setProgress(Math.floor(width))
    }
    getWidth()
  }, [completed, stepCount])

  return (
    <div
      data-testid="progress-bar"
      className="w-[60px] h-[6px] bg-Neutral/500 rounded-lg"
    >
      <div
        data-testid="progress-indicator"
        className="h-full bg-Green/500 rounded-lg z-50 transition-all duration-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  )
}

export default ProgressBar
