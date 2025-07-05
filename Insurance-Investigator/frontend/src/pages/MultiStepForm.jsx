import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DriverInvestigation from "../components/steps/DriverInvestigation";
import DriverStatement from "../components/steps/DriverStatement";
import InsuredDetails from "../components/steps/InsuredDetails";
import InsuredStatement from "../components/steps/InsuredStatement";
import OtherDetails from "../components/steps/OtherDetails";
import OccupantInvestigation from "../components/steps/OccupantInvestigation";
import InvestigationFindindsInsured from "../components/steps/InvestigationFindindsInsured";
import SpotVerification from "../components/steps/SpotVerification";
import GarageVerification from "../components/steps/GarageVerification";
import { ArrowLeft } from "lucide-react";


const steps = [
  {title: "Insured Details", component: InsuredDetails},
  {title: "Insured Statement", component: InsuredStatement},
  {title: "Driver Statement", component: DriverStatement},
  {title: "Spot Verification", component: SpotVerification},  
  {title: "Garage Verification", component: GarageVerification}, 
  {title: "Insured Findings", component : InvestigationFindindsInsured }, 
  {title: "Driver Investigation", component: DriverInvestigation}, 
  {title: "Occupant Investigation", component: OccupantInvestigation}, 
  {title: "Other Details", component: OtherDetails}
]


const MultiStepForm = () => {
  
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const StepComponent = steps[currentStep].component ;

  return (
      <div className="p-6 max-w-8xl mx-auto  mt-1">
        <div className="flex-col flex-wrap mb-6 p-4 border-b-[1px]">
          <button onClick={() => navigate('/home')} className="btn btn-outline btn-xs mb-5">
            <ArrowLeft size={15}/> Back to Home
          </button>
          <div className="flex flex-wrap justify-center gap-3">
            {steps.map((step, index)=>(
                <button key={index} onClick={()=>setCurrentStep(index)} className={`btn btn-xs btn-outline ${index == currentStep ? 'btn-info': 'btn-primary'}`} >{step.title}</button>
            ))}
          </div>
        </div>
        <div className="mb-6 rounded shadow-md bg-base-100">
            <StepComponent formData={formData} setFormData={setFormData} />
        </div>
        <div className=" flex justify-between mb-5 p-3 border-t-[1px]">
          <button
            onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
            disabled={currentStep === 0}
            className="btn btn-outline"> Previous </button>

          <button
            onClick={() => alert('Saved')}
            className="btn btn-outline btn-success"> Save It</button>

          <button
            onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
            disabled={currentStep === steps.length - 1}
            className="btn btn-outline">  Next </button>
        </div>
      </div>
  )
}

export default MultiStepForm