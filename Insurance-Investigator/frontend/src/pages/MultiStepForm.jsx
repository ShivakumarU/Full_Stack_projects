import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DriverInvestigation from "../components/steps/DriverInvestigation";
import DriverStatement from "../components/steps/DriverStatement";
import InsuredDetails from "../components/steps/InsuredDetails";
import InsuredStatement from "../components/steps/InsuredStatement";
import OtherDetails from "../components/steps/OtherDetails";
import OccupantInvestigation from "../components/steps/OccupantInvestigation";
import InvestigationFindingsInsured from "../components/steps/InvestigationFindingsInsured";
import SpotVerification from "../components/steps/SpotVerification";
import GarageVerification from "../components/steps/GarageVerification";
import { ArrowLeft, CircleArrowLeft, CircleArrowRight, DatabaseZap, Download } from "lucide-react";
import { PDFViewer } from '@react-pdf/renderer';
import Invoice from '../components/reports/Invoice';
import toast from 'react-hot-toast';
import api from "../../lib/axios";


const steps = [
  {title: "Insured Details", component: InsuredDetails},
  {title: "Insured Statement", component: InsuredStatement},
  {title: "Driver Statement", component: DriverStatement},
  {title: "Spot Verification", component: SpotVerification},  
  {title: "Garage Verification", component: GarageVerification}, 
  {title: "Insured Findings", component: InvestigationFindingsInsured},
  {title: "Driver Investigation", component: DriverInvestigation}, 
  {title: "Occupant Investigation", component: OccupantInvestigation}, 
  {title: "Other Details", component: OtherDetails}
]


const MultiStepForm = () => {
  
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    //insured-details
      insuranceCompany: "",
      caseNumber: "",
      refNumber: "",
      claimNumber: "",
      policyNumber: "",
      policyStartDate: "",
      policyEndDate: "",
      insuredName: "",
      insuredAddress: "",
      accidentDateTime: "",
      ivDriver: "",
      claimIntimationDate: "",
      ivNumber: "",
      vehicleType: "",
      invoiceAmount: "",
      lossLocation: "",
      causeOfLoss: "",


      //Insured-Statement
      insuredType: "",
      insuredVerified: "",
      insuredNotVerifiedReason: "",
      insuredPhotosUpload: [],

      insuredGender: "",
      insuredNameInInsuredStatement: "",
      insuredOccupation: "",

      ivNumberInInsuredStatement: "",
      ivUse: "",

      accidentDateInInsuredStatement: "",
      accidentTimeInInsuredStatement: "",

      travellingPersonRelationInInsuredStatement: "",
      driverGender: "",
      travellingPersonNameInInsuredStatement: "",

      accidentPlaceInInsuredStatement: "",
      travelFromInsuredStatement: "",
      travelToInsuredStatement: "",
      accidentMannerInInsuredStatement: "",
      totalPersonsInInsuredStatement: "",

      anyInjuryInInsured: "",
      injuredNameRelationInInsured: "",

      policeCaseInInsured: "",
      policeStationNameInInsured: "",

      ivDriverNameInInsured: "",
      driverDLInInsured: "",
      statementGivenInInsured: "",


      //Driver-Statement 
      driverVerified: "",               
      driverNotVisitReason: "",         
      
      driverPhotosTaken: "",             
      driverPhotosUpload: [],            

      driverGenderInDriver: "",   
      driverNameInDriver: "",
      driverOccupation: "",
      travelFromInDriver: "",
      travelToInDriver: "",
      carNoInDriver: "",
      ivTotalPersonsInDriver: "",

      accidentPlaceInDriver: "",
      accidentDateInDriver: "",
      accidentTimeInDriver: "",
      accidentMannerInDriver: "",

      whoIsInjuredInDriver: "",          
      injuredNameRelationInDriver: "",   

      policeCaseInDriver: "",          
      policeStationNameInDriver: "",     

      carDrivenByInDriver: "",          
      driverNameInDriverStatement: "",

      driverDLInDriver: "",             
      statementGivenInDriver: ""   ,


      //Spot-Verification
      spotVerified: "",
      spotNotVerifiedReason: "",

      spotMatching: "",
      
      spotPhotosTaken: "",
      spotPhotosUpload: [],

      spotPhotosNotTakenReason: "",

      //Garage-verification
      garageVisited: "",
      garageNotVisitedReason: "",

      damagesMatching: "",         
      multipleDamages: "",       

      bloodMarks: "",             
      bloodMarksDescription: "",

      garagePhotosTaken: "",       
      garagePhotosUpload: [],      
      garagePhotosNotTakenReason: "",

      //insured-investigation
      insuredInVehicle: "",
      insuredInjured: "",
      insuredHospitalized: "",
      insuredHospitalName: "",
      insuredMedicalRecords: "",
      insuredInjuriesCorelating: "",
      insuredGoogleTimeline: "",
      insuredTimelinePhotosAttached: "",
      insuredAccidentPhotosInMobile: "",
      insuredPhotosDateInfo: "",
      insuredPhotosSource: "",
      insuredPhotosSenderName: "",
      insuredPhotosSenderNumber: "",
      insuredDLStatus: "",
      insuredCallData: "",
      insuredAddAnything: "",
      insuredAdditionalComments: "", 


    //driver-investigation
      driverInVehicle: '',
      driverInjured: '',
      driverHospitalized: '',
      driverHospitalName: '',
      driverMedicalRecords: '',
      driverInjuriesCorelating: '',
      driverGoogleTimeline: '',
      driverTimelinePhotosAttached: '',
      driverAccidentPhotosInMobile: '',
      driverAccidentPhotosDateInfo: '',
      driverPhotosSource: '',
      driverPhotosSenderName: '',
      driverPhotosSenderNumber: '',
      driverDLStatus: '',
      driverCallData: '',
      driverAddAnything: '',
      driverAdditionalComments: '',

      // Occupant-Investigation
      anyOccupantInIV: "",
      anyOccupantVerified: "",
      noVerificationReason: "",
      occupantsVerifiedCount: 0,
      occupants: [
        {
          occupantName: "",
          occupantInjured: "",
          medicalRecords: "",
          injuriesCorelating: "",

          occupantGoogleTimeline: "",
          timelinePhonePhotosAttached: "",
          occupantsAccidentPhotosInMobile: "",
          accidentPhotoDateInfo: "",
          occupantsPhotosNoticedIn: "",
          occupantsphotosSenderName: "",
          occupantsPhotosSenderNumber: "",

          occupantDLStatus: "",
          occupantCallData: "",

          occupantsAddAnything: "",
          occupantsAdditionalComments: ""
        }
      ],

      // Other-Details
      overSeating: "",
      overSeatingEvidence: "",

      policeCaseFiledOthers: "",
      policeStationNameOthers: "",
      asPerPsDriverName: "",
      asPerPsAccidentDate: "",

      insuredNameMatchInRC: "",
      insuredNameMismatchReason: "",

      tsEChallan: "",

      thirdPartyVehicleInvolved: "",
      thirdPartyDetails: "",

      anyOtherInfo: "",
      otherInfoDescription: "",

      conclusionOpinion: "",
      suspectsEvidenceReason: ""
  });

  const StepComponent = steps[currentStep].component ;
  const [downloadInvoice,setdownloadInvoice] = useState(false);

  const saveFormDataToDB = async () =>{
   try {
    let res;
    switch (currentStep) {
      case 0:
        res = await api.post("/insured-details", formData);
        if (res.status === 200 || res.status === 201) {
          setFormData((prev) => ({ ...prev, caseNumber: res.data.caseNumber }));
          toast.success("Insured Details Saved!");
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
          }
        } else {
          toast.error("Unexpected response from server.");
        }
        break;

      case 1:
        res = await api.post("/insured-statement", formData);
        if (res.status === 200 || res.status === 201) {
          toast.success("Insured Statement Saved!");
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
          }
        } else {
          toast.error("Unexpected response from server.");
        }
        break;

      case 2:
        res = await api.post("/driver-statement", formData);
        if (res.status === 200 || res.status === 201) {
          toast.success("Driver Statement Saved!");
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
          }          
        } else {
          toast.error("Unexpected response from server.");
        }
        break;

      case 3:
        res = await api.post("/spot-verification", formData);
        if (res.status === 200 || res.status === 201) {
          toast.success("Spot Verification Saved!");
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
          }
        } else {
          toast.error("Unexpected response from server.");
        }
        break;

      case 4:
        res = await api.post("/garage-verification", formData);
        if (res.status === 200 || res.status === 201) {
          toast.success("Garage Verification Saved!");
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
          }
        } else {
          toast.error("Unexpected response from server.");
        }
        break;

      case 5:
        res = await api.post("/investigationfinding-insured", formData);
        if (res.status === 200 || res.status === 201) {
          toast.success("Insured Findings Saved!");
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
          }
        } else {
          toast.error("Unexpected response from server.");
        }
        break;

      case 6:
        res = await api.post("/driver-investigation", formData);
        if (res.status === 200 || res.status === 201) {
          toast.success("Driver Investigation Saved!");
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
          }
        } else {
          toast.error("Unexpected response from server.");
        }
        break;

      case 7:
        res = await api.post("/occupants-investigation", formData);
        if (res.status === 200 || res.status === 201) {
          toast.success("Occupant Investigation Saved!");
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
          }
        } else {
          toast.error("Unexpected response from server.");
        }
        break;

      case 8:
        res = await api.post("/other-details", formData);
        if (res.status === 200 || res.status === 201) {
          toast.success("Other Details Saved!");
          if (currentStep < steps.length - 1) {
            setCurrentStep((prev) => prev + 1);
          }
        } else {
          toast.error("Unexpected response from server.");
        }
        break;
      }
     }catch (error) {
      console.error("Error saving Details", error)
          if (error.response) {
          const status = error.response.status;

          if (status === 400) {
            toast.error("Bad request. Please check the form.");
          } else if (status === 500) {
            toast.error("Server error. Try again later.");
          } else {
            toast.error(`Unexpected error: ${status}`);
          }
        } else if (error.request) {
          toast.error("No response from server. Check your connection.");
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    }

  

  if (downloadInvoice) {
    return (
      <div className="w-screen h-screen">
        <div className="absolute top-4 left-4 z-10">
          <button
            onClick={() => setdownloadInvoice(false)}
            className="btn btn-warning hover:btn-success ml-50 mt-16"
          >
            ← Back to Form
          </button>
        </div>
        <PDFViewer width="100%" height="100%">
          <Invoice data={formData} />
        </PDFViewer>
      </div>
    );
  }

  return (
      <div className="p-6 max-w-8xl mx-auto  mt-1">
        <div className="flex-col flex-wrap mb-6 p-4 border-b-[1px]">
          <button onClick={() => navigate('/home')} className="btn btn-outline btn-xl mb-5">
            <ArrowLeft size={15}/> Back to Home
          </button>
          <div className="flex flex-wrap justify-center gap-3">
            {steps.map((step, index)=>(
                <button key={index} onClick={()=>setCurrentStep(index)} className={`btn btn-xs btn-outline ${index == currentStep ? 'border-2 shadow-[0px_2px_10px_black] px-4 text-center border-green-500 gradient-flex': 'btn-outline'}`} >{step.title}</button>
            ))}
          </div>
        </div>
        <div className="mb-6 rounded shadow-md bg-base-100">
            <StepComponent formData={formData} setFormData={setFormData} />
        </div>
        <div className=" flex justify-between mb-5 pt-6 p-3 border-t-[1px]">
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep((prev) => prev - 1)}
              className="btn btn-outline"
            >
              <CircleArrowLeft /> Previous
            </button>
          )}

          <button
            onClick={saveFormDataToDB}
            className="btn btn-outline"> Save <DatabaseZap /></button>

          {currentStep < steps.length - 1 && (
            <button
              onClick={() => setCurrentStep((prev) => prev + 1)}
              className="btn btn-outline"
            >
              Next <CircleArrowRight />
            </button>
          )}

          {currentStep === steps.length - 1 && (
            <div className="flex gap-4 mt-4">
              <button onClick={()=> setdownloadInvoice(true)} className="btn btn-outline">
                Invoice <Download />
              </button>
              <button className="btn btn-outline">
                Report <Download />
              </button>
            </div>
          )}

        </div>
      </div>
  )

}
export default MultiStepForm ;