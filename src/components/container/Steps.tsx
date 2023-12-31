import {
  CheckCircle,
  CircleDashed,
  ArrowRight,
  Info,
} from "@phosphor-icons/react"
import { StepType } from "src/types"

type StepsProps = {
  steps: StepType[]
  isCollapsed: boolean
  isDisabled: boolean
}

export const Steps = ({ steps, isCollapsed, isDisabled }: StepsProps) => {
  return (
    <div
      className={`${
        isCollapsed ? "opacity-0 mt-0" : "opacity-100 mt-8"
      } transition-opacity duration-500 flex flex-col items-start gap-4`}
    >
      {!isCollapsed && (
        <>
          {steps.map((step) => (
            <div key={step.id} className="self-stretch">
              <Step step={step} isDisabled={isDisabled} />
            </div>
          ))}
        </>
      )}
    </div>
  )
}

type StepProps = {
  step: StepType
  isDisabled: boolean
}

export const Step = ({ step, isDisabled }: StepProps) => {
  return (
    <div
      className={`${
        !isDisabled && !step.isComplete && step.isActive
          ? "border-Primary/500 shadow-active"
          : "border-Neutral/500"
      } flex flex-col lg:flex-row justify-between items-center border rounded-lg gap-4 lg:gap-[77px] p-4`}
    >
      <div className="flex items-start gap-2">
        <div className={`${isDisabled ? "opacity-50" : ""}`}>
          {step.isComplete ? (
            <CheckCircle
              data-testid="check-circle-icon"
              size={24}
              color="#38c97c"
              weight="fill"
            />
          ) : (
            <CircleDashed
              data-testid="circle-dashed-icon"
              id="dash"
              size={24}
              color="#a7aeb4"
            />
          )}
        </div>
        <div className="flex flex-col items-start">
          <div
            className={`${
              isDisabled ? "opacity-50" : ""
            } flex flex-col pb-0 items-start gap-2`}
          >
            <h1 className="text-Text/Main font-semibold leading-21">
              {step.title}
            </h1>

            {step.badge && <StepBadge badge={step.badge} />}

            <div className="text-Grey/800 text-sm">{step.content}</div>
          </div>
          {step.info && <StepInfo info={step.info} />}
        </div>
      </div>
      <button
        className={`${
          isDisabled ? "opacity-50" : ""
        } flex justify-center items-center h-8 min-w-fit p-3 gap-2 rounded-4 bg-Primary/500`}
        disabled={isDisabled}
      >
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
    <div className="flex items-start pt-4 gap-1">
      <Info size={16} color="#0276ef" />
      <p className="text-Grey/800 text-xs">{info}</p>
    </div>
  )
}
