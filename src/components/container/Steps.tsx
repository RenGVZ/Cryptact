import { CheckCircle, ArrowRight } from "@phosphor-icons/react"
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
    <div className="flex items-center border border-Neutral/500 rounded-lg gap-[77px] p-4">
      <div className="flex items-start gap-2">
        <div>
          <CheckCircle size={24} color="#38c97c" weight="fill" />
        </div>
        <div className="flex flex-col items-start">
          <div className="flex flex-col pb-0 items-start gap-2">
            <h1 className="text-Text/Main font-semibold leading-21">
              {step.title}
            </h1>

            {step.badge && (
              <div className="flex flex-col items-start pb-0 gap-2">
                <div className="bg-info/50 flex items-center h-5 px-2 gap-2 rounded-4">
                  <p className="text-Info/600 text-xs font-medium">
                    {step.badge}
                  </p>
                </div>
              </div>
            )}

            <div className="text-Grey/800 text-sm">{step.content}</div>
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

export default Steps
