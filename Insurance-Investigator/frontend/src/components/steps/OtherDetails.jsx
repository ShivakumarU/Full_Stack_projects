import React from 'react';

const OtherDetails = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="space-y-4 p-5">
      <h1 className="gradient-flex text-2xl font-bold mb-4 text-center">Other Details</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="label">Over Seating</label>
          <select
            className="select select-bordered"
            value={formData.overSeating || ''}
            onChange={(e) => handleChange('overSeating', e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.overSeating === 'yes' && (
          <div className="md:col-span-2">
            <label className="label">Evidence</label>
            <textarea
              className="textarea textarea-bordered w-full"
              value={formData.overSeatingEvidence || ''}
              onChange={(e) => handleChange('overSeatingEvidence', e.target.value)}
            />
          </div>
        )}

        <div>
          <label className="label">Any Police Case Filed</label>
          <select
            className="select select-bordered"
            value={formData.policeCaseFiled || ''}
            onChange={(e) => handleChange('policeCaseFiled', e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="panchanama-only">Panchanama Only</option>
          </select>
        </div>

        {(formData.policeCaseFiled === 'yes' || formData.policeCaseFiled === 'panchanama-only') && (
          <>
            <div>
              <label className="label">Police Station Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.policeStationName || ''}
                onChange={(e) => handleChange('policeStationName', e.target.value)}
              />
            </div>

            <div>
              <label className="label">IV Driver Name (as per PS)</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.psDriverName || ''}
                onChange={(e) => handleChange('psDriverName', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Accident Date (as per PS)</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.psAccidentDate || ''}
                onChange={(e) => handleChange('psAccidentDate', e.target.value)}
              />
            </div>
          </>
        )}

        <div>
          <label className="label">Insured Name in RC/Extract and Policy</label>
          <select
            className="select select-bordered"
            value={formData.rcPolicyNameMatch || ''}
            onChange={(e) => handleChange('rcPolicyNameMatch', e.target.value)}
          >
            <option value="">Select</option>
            <option value="matching">Matching</option>
            <option value="not matching">Not Matching</option>
          </select>
        </div>

        {formData.rcPolicyNameMatch === 'not matching' && (
          <div className="md:col-span-2">
            <label className="label">Reason for Name Mismatch</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={formData.nameMismatchReason || ''}
              onChange={(e) => handleChange('nameMismatchReason', e.target.value)}
            />
          </div>
        )}

        <div>
          <label className="label">TS E-Challan</label>
          <select
            className="select select-bordered"
            value={formData.tsChallan || ''}
            onChange={(e) => handleChange('tsChallan', e.target.value)}
          >
            <option value="">Select</option>
            <option value="no pending challan">No Pending Challan</option>
            <option value="no suspects found">No Suspects Found</option>
            <option value="old damages noted">Old Damages Noted</option>
          </select>
        </div>

        <div>
          <label className="label">Third-Party Vehicle Involved</label>
          <select
            className="select select-bordered"
            value={formData.tpInvolved || ''}
            onChange={(e) => handleChange('tpInvolved', e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.tpInvolved === 'yes' && (
          <div className="md:col-span-2">
            <label className="label">Third-Party Details</label>
            <textarea
              className="textarea textarea-bordered w-full"
              value={formData.tpDetails || ''}
              onChange={(e) => handleChange('tpDetails', e.target.value)}
            />
          </div>
        )}

        <div>
          <label className="label">Any Other Information?</label>
          <select
            className="select select-bordered"
            value={formData.otherInfo || ''}
            onChange={(e) => handleChange('otherInfo', e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.otherInfo === 'yes' && (
          <div className="md:col-span-2">
            <label className="label">Additional Information</label>
            <textarea
              className="textarea textarea-bordered w-full"
              value={formData.otherInfoText || ''}
              onChange={(e) => handleChange('otherInfoText', e.target.value)}
            />
          </div>
        )}
      </div>

      <div className="mt-10 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4 gradient-flex">Conclusion</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="label">Any Suspects?</label>
            <select
              className="select select-bordered"
              value={formData.anySuspects || ''}
              onChange={(e) => handleChange('anySuspects', e.target.value)}
            >
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          {formData.anySuspects === 'yes' && (
            <div className="md:col-span-2">
              <label className="label">Evidence (Suspect Details)</label>
              <textarea
                className="textarea textarea-bordered w-full"
                value={formData.suspectEvidence || ''}
                onChange={(e) => handleChange('suspectEvidence', e.target.value)}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OtherDetails;
