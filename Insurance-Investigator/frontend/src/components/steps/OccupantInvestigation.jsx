import React from 'react';

const OccupantInvestigation = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleOccupantChange = (index, key, value) => {
    const updated = [...(formData.occupants || [])];
    updated[index] = { ...updated[index], [key]: value };
    setFormData({ ...formData, occupants: updated });
  };

  return (
    <div className="space-y-4 p-5">
      <h1 className="gradient-flex text-2xl font-bold mb-4 text-center">Occupant Investigation</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="label">Is any occupant verified?</label>
          <select
            className="select select-bordered"
            value={formData.occupantVerified || ''}
            onChange={(e) => handleChange('occupantVerified', e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.occupantVerified === 'yes' && (
          <>
            <div>
              <label className="label">How many occupants verified?</label>
              <input
                type="number"
                className="input input-bordered w-1/3"
                value={formData.occupantCount || ''}
                onChange={(e) => {
                  const count = parseInt(e.target.value || '0');
                  handleChange('occupantCount', count);
                  handleChange('occupants', Array(count).fill({}));
                }}
              />
            </div>

            {(formData.occupants || []).map((occupant, index) => (
              <div key={index} className="col-span-2 border-t border-dashed pt-4 mt-4">
                <h2 className="text-lg font-semibold mb-2">Occupant {index + 1}</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="label">Occupant Name</label>
                    <input
                      type="text"
                      className="input input-bordered w-full"
                      value={occupant.name || ''}
                      onChange={(e) => handleOccupantChange(index, 'name', e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="label">Is he/she injured?</label>
                    <select
                      className="select select-bordered"
                      value={occupant.injured || ''}
                      onChange={(e) => handleOccupantChange(index, 'injured', e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  {occupant.injured === 'yes' && (
                    <>
                      <div>
                        <label className="label">Medical Records</label>
                        <select
                          className="select select-bordered"
                          value={occupant.medical || ''}
                          onChange={(e) => handleOccupantChange(index, 'medical', e.target.value)}
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
                          value={occupant.correlating || ''}
                          onChange={(e) => handleOccupantChange(index, 'correlating', e.target.value)}
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </>
                  )}

                  <div>
                    <label className="label">Google Timeline</label>
                    <select
                      className="select select-bordered"
                      value={occupant.timeline || ''}
                      onChange={(e) => handleOccupantChange(index, 'timeline', e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="corelating">Corelating</option>
                      <option value="not co-relating">Not Co-relating</option>
                      <option value="no places visited">No Places Visited</option>
                      <option value="driver not-cooperated">Driver Not-Cooperated</option>
                      <option value="basic mobile">Basic Mobile</option>
                    </select>
                  </div>

                  {occupant.timeline !== 'basic mobile' && (
                    <>
                      <div>
                        <label className="label">Timeline/Phone Photos Attached</label>
                        <select
                          className="select select-bordered"
                          value={occupant.photosAttached || ''}
                          onChange={(e) => handleOccupantChange(index, 'photosAttached', e.target.value)}
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>

                      <div>
                        <label className="label">Accident Photos in Mobile</label>
                        <select
                          className="select select-bordered"
                          value={occupant.photoAvailability || ''}
                          onChange={(e) => handleOccupantChange(index, 'photoAvailability', e.target.value)}
                        >
                          <option value="">Select</option>
                          <option value="available">Available</option>
                          <option value="not available">Not Available</option>
                          <option value="basic mobile">Basic Mobile</option>
                        </select>
                      </div>

                      {occupant.photoAvailability === 'available' && (
                        <>
                          <div>
                            <label className="label">Photo Date Info</label>
                            <select
                              className="select select-bordered"
                              value={occupant.photoDate || ''}
                              onChange={(e) => handleOccupantChange(index, 'photoDate', e.target.value)}
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
                              value={occupant.photoSource || ''}
                              onChange={(e) => handleOccupantChange(index, 'photoSource', e.target.value)}
                            >
                              <option value="">Select</option>
                              <option value="camera files">Camera Files</option>
                              <option value="whatsapp files">Whatsapp Files</option>
                              <option value="snapchat files">SnapChat Files</option>
                              <option value="instagram files">Instagram Files</option>
                              <option value="other person sent in whatsapp">Other Person Sent in Whatsapp</option>
                            </select>
                          </div>

                          {occupant.photoSource === 'other person sent in whatsapp' && (
                            <div className="md:col-span-2">
                              <label className="label">Name & Number</label>
                              <input
                                type="text"
                                className="input input-bordered w-full"
                                value={occupant.otherPersonInfo || ''}
                                onChange={(e) => handleOccupantChange(index, 'otherPersonInfo', e.target.value)}
                              />
                            </div>
                          )}
                        </>
                      )}
                    </>
                  )}

                  <div>
                    <label className="label">Occupant DL</label>
                    <select
                      className="select select-bordered"
                      value={occupant.dlStatus || ''}
                      onChange={(e) => handleOccupantChange(index, 'dlStatus', e.target.value)}
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
                    <label className="label">Call Data</label>
                    <select
                      className="select select-bordered"
                      value={occupant.callData || ''}
                      onChange={(e) => handleOccupantChange(index, 'callData', e.target.value)}
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
                      value={occupant.extraComment || ''}
                      onChange={(e) => handleOccupantChange(index, 'extraComment', e.target.value)}
                    >
                      <option value="">Select</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                  </div>

                  {occupant.extraComment === 'yes' && (
                    <div className="md:col-span-2">
                      <label className="label">Additional Comments</label>
                      <textarea
                        className="textarea textarea-bordered w-full"
                        value={occupant.commentText || ''}
                        onChange={(e) => handleOccupantChange(index, 'commentText', e.target.value)}
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default OccupantInvestigation;
