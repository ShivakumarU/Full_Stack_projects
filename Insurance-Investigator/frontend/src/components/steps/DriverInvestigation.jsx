import React from 'react';

const DriverInvestigation = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="space-y-4 p-5">
      <h1 className="gradient-flex text-2xl font-bold mb-4 text-center">Driver Investigation</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="label">Driver in vehicle?</label>
          <select
            className="select select-bordered"
            value={formData.driverInVehicle || ''}
            onChange={(e) => handleChange('driverInVehicle', e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.driverInVehicle === 'yes' && (
          <>
            <div>
              <label className="label">Is he/she injured?</label>
              <select
                className="select select-bordered"
                value={formData.driverInjured || ''}
                onChange={(e) => handleChange('driverInjured', e.target.value)}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {formData.driverInjured === 'yes' && (
              <>
                <div>
                  <label className="label">Medical Records</label>
                  <select
                    className="select select-bordered"
                    value={formData.driverMedicalRecords || ''}
                    onChange={(e) => handleChange('driverMedicalRecords', e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="available">Available</option>
                    <option value="not available">Not Available</option>
                  </select>
                </div>

                <div>
                  <label className="label">Injuries Correlating</label>
                  <select
                    className="select select-bordered"
                    value={formData.driverInjuriesCorrelating || ''}
                    onChange={(e) => handleChange('driverInjuriesCorrelating', e.target.value)}
                  >
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
          <label className="label">Driver Google Timeline</label>
          <select
            className="select select-bordered"
            value={formData.driverTimeline || ''}
            onChange={(e) => handleChange('driverTimeline', e.target.value)}
          >
            <option value="">Select</option>
            <option value="corelating">Corelating</option>
            <option value="not co-relating">Not Co-relating</option>
            <option value="no places visited">No Places Visited</option>
            <option value="driver not-cooperated">Driver Not-Cooperated</option>
            <option value="basic mobile">Basic Mobile</option>
          </select>
        </div>

        {formData.driverTimeline !== 'basic mobile' && (
          <>
            <div>
              <label className="label">Timeline/Phone Photos Attached</label>
              <select
                className="select select-bordered"
                value={formData.driverTimelinePhotos || ''}
                onChange={(e) => handleChange('driverTimelinePhotos', e.target.value)}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            <div>
              <label className="label">Accident Photos in Driver Mobile</label>
              <select
                className="select select-bordered"
                value={formData.driverAccidentPhotos || ''}
                onChange={(e) => handleChange('driverAccidentPhotos', e.target.value)}
              >
                <option value="">Select</option>
                <option value="available">Available</option>
                <option value="not available">Not Available</option>
                <option value="basic mobile">Basic Mobile</option>
              </select>
            </div>

            {formData.driverAccidentPhotos === 'available' && (
              <>
                <div>
                  <label className="label">Accident Photo Date Info</label>
                  <select
                    className="select select-bordered"
                    value={formData.driverPhotoDateInfo || ''}
                    onChange={(e) => handleChange('driverPhotoDateInfo', e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="on the same day">On the Same Day</option>
                    <option value="before accident date">Before Accident Date</option>
                    <option value="after accident date">After Accident Date</option>
                  </select>
                </div>

                <div>
                  <label className="label">Photos Noticed In</label>
                  <select
                    className="select select-bordered"
                    value={formData.driverPhotoSource || ''}
                    onChange={(e) => handleChange('driverPhotoSource', e.target.value)}
                  >
                    <option value="">Select</option>
                    <option value="camera files">Camera Files</option>
                    <option value="whatsapp files">Whatsapp Files</option>
                    <option value="snapchat files">SnapChat Files</option>
                    <option value="instagram files">Instagram Files</option>
                    <option value="other person sent in whatsapp">Other Person Sent in Whatsapp</option>
                  </select>
                </div>

                {formData.driverPhotoSource === 'other person sent in whatsapp' && (
                  <div className="md:col-span-2">
                    <label className="label">Name & Number of Person</label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={formData.driverWhatsappSenderInfo || ''}
                      onChange={(e) => handleChange('driverWhatsappSenderInfo', e.target.value)}
                    />
                  </div>
                )}
              </>
            )}
          </>
        )}

        <div>
          <label className="label">Driver DL</label>
          <select
            className="select select-bordered"
            value={formData.driverDLStatus || ''}
            onChange={(e) => handleChange('driverDLStatus', e.target.value)}
          >
            <option value="">Select</option>
            <option value="having valid DL">Having Valid DL</option>
            <option value="having invalid DL">Having Invalid DL</option>
            <option value="not having DL">Not Having DL</option>
            <option value="having LLR only">Having LLR Only</option>
            <option value="not provided">Not Provided</option>
          </select>
        </div>

        <div>
          <label className="label">Driver Call Data</label>
          <select
            className="select select-bordered"
            value={formData.driverCallData || ''}
            onChange={(e) => handleChange('driverCallData', e.target.value)}
          >
            <option value="">Select</option>
            <option value="match">Match</option>
            <option value="mismatch">Mismatch</option>
            <option value="not available">Not Available</option>
          </select>
        </div>

        <div>
          <label className="label">Do you want to add anything?</label>
          <select
            className="select select-bordered"
            value={formData.driverAddAnything || ''}
            onChange={(e) => handleChange('driverAddAnything', e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.driverAddAnything === 'yes' && (
          <div className="md:col-span-2">
            <label className="label">Additional Comments</label>
            <textarea
              className="textarea textarea-bordered w-full"
              value={formData.driverAdditionalComments || ''}
              onChange={(e) => handleChange('driverAdditionalComments', e.target.value)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverInvestigation;
