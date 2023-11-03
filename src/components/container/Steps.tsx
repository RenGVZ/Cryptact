import { CheckCircle, ArrowRight, Info } from "@phosphor-icons/react"
import { StepType } from "src/types"

type StepsProps = {
  steps: StepType[]
}

type StepProps = {
  step: StepType
}

const Steps = ({ steps }: StepsProps) => {
  return (
    <div className="flex flex-col items-start gap-4">
      {steps.map((step) => (
        <Step key={step.id} step={step} />
      ))}
    </div>
  )
}

const Step = ({ step }: StepProps) => {
  return (
    <div className="flex flex-col lg:flex-row items-center border border-Neutral/500 rounded-lg gap-4 lg:gap-[77px] p-4">
      <div className="flex items-start gap-2">
        <div>
          <CheckCircle size={24} color="#38c97c" weight="fill" />
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-col pb-0 items-start gap-2">
            <h1 className="text-Text/Main font-semibold leading-21">
              {step.title}
            </h1>

            {step.badge && <StepBadge badge={step.badge} />}

            <div className="text-Grey/800 text-sm">{step.content}</div>

            {step.info && <StepInfo info={step.info} />}
          </div>
        </div>
      </div>
      <button className="flex justify-center items-center h-8 min-w-fit p-3 gap-2 rounded-4 bg-Primary/500">
        <span className="text-white text-sm font-semibold leading-18">
          {step.buttonText}
        </span>
        <ArrowRight size={16} color="#ffffff" />
      </button>
    </div>
  )
}

const StepBadge = ({ badge }: { badge: string }) => {
  return (
    <div className="flex flex-col items-start pb-0 gap-2">
      <div className="bg-info/50 flex items-center h-5 px-2 gap-2 rounded-4">
        <p className="text-Info/600 text-xs font-medium">{badge}</p>
      </div>
    </div>
  )
}

const StepInfo = ({ info }: { info: string }) => {
  return (
    <div className="flex items-start pt-2 gap-1">
      <Info size={16} color="#0276ef" />
      <p className="text-Grey/800 text-xs">{info}</p>
    </div>
  )
}

export default Steps
