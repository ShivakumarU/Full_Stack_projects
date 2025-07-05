import React from 'react';

const InvestigationFindingsInsured = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="space-y-4 p-5">
      <h1 className="gradient-flex text-2xl font-bold mb-4 text-center">Investigation Findings (Only about Insured)</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="label">Insured in vehicle?</label>
          <select className="select select-bordered" value={formData.insuredInVehicle || ''} onChange={(e) => handleChange('insuredInVehicle', e.target.value)}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.insuredInVehicle === 'yes' && (
          <>
            <div>
              <label className="label">Is he/she injured?</label>
              <select className="select select-bordered" value={formData.insuredInjured || ''} onChange={(e) => handleChange('insuredInjured', e.target.value)}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {formData.insuredInjured === 'yes' && (
              <>
                <div>
                  <label className="label">Medical Records</label>
                  <select className="select select-bordered" value={formData.medicalRecords || ''} onChange={(e) => handleChange('medicalRecords', e.target.value)}>
                    <option value="">Select</option>
                    <option value="available">Available</option>
                    <option value="not available">Not Available</option>
                  </select>
                </div>

                <div>
                  <label className="label">Injuries Correlating</label>
                  <select className="select select-bordered" value={formData.injuriesCorrelating || ''} onChange={(e) => handleChange('injuriesCorrelating', e.target.value)}>
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
              </>
            )}
          </>
        )}

        <div>
          <label className="label">Insured Google Timeline</label>
          <select className="select select-bordered" value={formData.timelineStatus || ''} onChange={(e) => handleChange('timelineStatus', e.target.value)}>
            <option value="">Select</option>
            <option value="corelating">Corelating</option>
            <option value="not co-relating">Not Co-relating</option>
            <option value="no places visited">No Places Visited</option>
            <option value="insured not-cooperated">Insured Not-Cooperated</option>
            <option value="basic mobile">Basic Mobile</option>
          </select>
        </div>

        {formData.timelineStatus !== 'basic mobile' && (
          <>
            <div>
              <label className="label">Timeline/Phone Photos Attached</label>
              <select className="select select-bordered" value={formData.timelinePhotos || ''} onChange={(e) => handleChange('timelinePhotos', e.target.value)}>
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="label">Accident Photos in Insured Mobile</label>
              <select className="select select-bordered" value={formData.accidentPhotos || ''} onChange={(e) => handleChange('accidentPhotos', e.target.value)}>
                <option value="">Select</option>
                <option value="available">Available</option>
                <option value="not available">Not Available</option>
                <option value="basic mobile">Basic Mobile</option>
              </select>
            </div>

            {formData.accidentPhotos === 'available' && (
              <>
                <div>
                  <label className="label">Accident Photos Date Info</label>
                  <select className="select select-bordered" value={formData.photoDateInfo || ''} onChange={(e) => handleChange('photoDateInfo', e.target.value)}>
                    <option value="">Select</option>
                    <option value="on the same day">On the Same Day</option>
                    <option value="before accident date">Before Accident Date</option>
                    <option value="after accident date">After Accident Date</option>
                  </select>
                </div>

                <div>
                  <label className="label">Photos Noticed In</label>
                  <select className="select select-bordered" value={formData.photoLocation || ''} onChange={(e) => handleChange('photoLocation', e.target.value)}>
                    <option value="">Select</option>
                    <option value="camera files">Camera Files</option>
                    <option value="whatsapp files">Whatsapp Files</option>
                    <option value="snapchat files">Snapchat Files</option>
                    <option value="instagram files">Instagram Files</option>
                    <option value="other person sent in whatsapp">Other Person Sent in Whatsapp</option>
                  </select>
                </div>

                {formData.photoLocation === 'other person sent in whatsapp' && (
                  <div className="md:col-span-2">
                    <label className="label">Name & Number of Person</label>
                    <input type="text" className="input input-bordered w-full" value={formData.whatsappSenderInfo || ''} onChange={(e) => handleChange('whatsappSenderInfo', e.target.value)} />
                  </div>
                )}
              </>
            )}
          </>
        )}

        <div>
          <label className="label">Insured DL</label>
          <select className="select select-bordered" value={formData.insuredDL || ''} onChange={(e) => handleChange('insuredDL', e.target.value)}>
            <option value="">Select</option>
            <option value="having valid DL">Having Valid DL</option>
            <option value="having invalid DL">Having Invalid DL</option>
            <option value="not having DL">Not Having DL</option>
            <option value="having LLR only">Having LLR Only</option>
            <option value="not provided">Not Provided</option>
          </select>
        </div>

        <div>
          <label className="label">Insured Call Data</label>
          <select className="select select-bordered" value={formData.callData || ''} onChange={(e) => handleChange('callData', e.target.value)}>
            <option value="">Select</option>
            <option value="match">Match</option>
            <option value="mismatch">Mismatch</option>
            <option value="not available">Not Available</option>
          </select>
        </div>

        <div>
          <label className="label">Do you want to add anything?</label>
          <select className="select select-bordered" value={formData.anythingElse || ''} onChange={(e) => handleChange('anythingElse', e.target.value)}>
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.anythingElse === 'yes' && (
          <div className="md:col-span-2">
            <label className="label">Additional Comments</label>
            <textarea className="textarea textarea-bordered w-full" value={formData.additionalComments || ''} onChange={(e) => handleChange('additionalComments', e.target.value)} />
          </div>
        )}
      </div>
    </div>
  );
};

export default InvestigationFindingsInsured;
