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
      <h1 className="gradient-flex text-2xl font-bold mb-4 text-center">Form 8 - Occupant Investigation</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="label"> Any occupant in IV?</label>
          <select
            className="select select-bordered"
            value={formData.anyOccupantInIV || ''}
            onChange={(e) => handleChange('anyOccupantInIV', e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.anyOccupantInIV === 'yes' && (
          <>
            {/* 89. Is any occupant verified? */}
            <div>
              <label className="label"> Is any occupant verified?</label>
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

            {/* If NO, ask reason */}
            {formData.occupantVerified === 'no' && (
              <div className="md:col-span-2">
                <label className="label">Please mention reason</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={formData.noVerificationReason || ''}
                  onChange={(e) => handleChange('noVerificationReason', e.target.value)}
                />
              </div>
            )}

            {/* If YES, show how many occupants */}
            {formData.occupantVerified === 'yes' && (
              <>
                {/* 90. How many occupants verified? */}
                <div>
                  <label className="label"> How many occupants verified?</label>
                  <input
                    type="number"
                    min={0}
                    max={10}
                    className="input input-bordered w-1/3"
                    value={formData.occupantCount || ''}
                    onChange={(e) => {
                      const count = parseInt(e.target.value || '0');

                      // Ensure it's not negative or too large
                      const safeCount = Math.max(0, Math.min(count, 20)); // max 20 occupants

                      // Build the occupants array while preserving existing data
                      const existing = formData.occupants || [];
                      const newOccupants = Array.from({ length: safeCount }, (_, i) => existing[i] || {});

                      // Update both occupantCount and occupants together
                      setFormData({
                        ...formData,
                        occupantCount: safeCount,
                        occupants: newOccupants,
                      });
                    }}
                  />
                </div>

                {(formData.occupants || []).map((occupant, index) => (
                  <div key={index} className="col-span-2 border-t border-dashed pt-4 mt-4">
                    <h2 className="text-lg font-semibold mb-2">Occupant {index + 1}</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* 91. Occupant Name */}
                      <div>
                        <label className="label">Occupant Name</label>
                        <input
                          type="text"
                          className="input input-bordered"
                          value={occupant.name || ''}
                          onChange={(e) => handleOccupantChange(index, 'name', e.target.value)}
                        />
                      </div>

                      {/* 92. Is he/she injured */}
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

                      {/* 93 & 94 only if injured = yes */}
                      {occupant.injured === 'yes' && (
                        <>
                          <div>
                            <label className="label">Medical Records</label>
                            <select
                              className="select select-bordered"
                              value={occupant.medicalRecords || ''}
                              onChange={(e) =>
                                handleOccupantChange(index, 'medicalRecords', e.target.value)
                              }
                            >
                              <option value="">Select</option>
                              <option value="available">Available</option>
                              <option value="not available">Not Available</option>
                            </select>
                          </div>

                          <div>
                            <label className="label">Injuries Correlating?</label>
                            <select
                              className="select select-bordered"
                              value={occupant.injuriesCorrelating || ''}
                              onChange={(e) =>
                                handleOccupantChange(index, 'injuriesCorrelating', e.target.value)
                              }
                            >
                              <option value="">Select</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>
                        </>
                      )}

                      {/* 95. Google timeline */}
                      <div className="md:col-span-2">
                        <label className="label">Google Timeline</label>
                        <select
                          className="select select-bordered "
                          value={occupant.googleTimeline || ''}
                          onChange={(e) =>
                            handleOccupantChange(index, 'googleTimeline', e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          <option value="correlating">Correlating</option>
                          <option value="not correlating">Not Correlating</option>
                          <option value="no places visited">No Places Visited</option>
                          <option value="occupant not cooperated">Occupant Not Cooperated</option>
                          <option value="basic mobile">Basic Mobile</option>
                        </select>
                      </div>

                      {/* 96, 97, 98, 99 if not Basic Mobile */}
                      {occupant.googleTimeline !== 'basic mobile' && (
                        <>
                          <div>
                            <label className="label">Timeline/Phone Photos Attached</label>
                            <select
                              className="select select-bordered"
                              value={occupant.timelinePhotos || ''}
                              onChange={(e) =>
                                handleOccupantChange(index, 'timelinePhotos', e.target.value)
                              }
                            >
                              <option value="">Select</option>
                              <option value="yes">Yes</option>
                              <option value="no">No</option>
                            </select>
                          </div>

                          <div>
                            <label className="label">Accident Photos in Occupant Mobile</label>
                            <select
                              className="select select-bordered"
                              value={occupant.accidentPhotos || ''}
                              onChange={(e) =>
                                handleOccupantChange(index, 'accidentPhotos', e.target.value)
                              }
                            >
                              <option value="">Select</option>
                              <option value="available">Available</option>
                              <option value="not available">Not Available</option>
                              <option value="occupant not cooperated">Occupant Not Cooperated</option>
                              <option value="basic mobile">Basic Mobile</option>
                            </select>
                          </div>

                          {/* 98 & 99 only if photos available */}
                          {occupant.accidentPhotos === 'available' && (
                            <>
                              <div>
                                <label className="label">Photos Date Info</label>
                                <select
                                  className="select select-bordered"
                                  value={occupant.photoDateInfo || ''}
                                  onChange={(e) =>
                                    handleOccupantChange(index, 'photoDateInfo', e.target.value)
                                  }
                                >
                                  <option value="">Select</option>
                                  <option value="on same day">On Same Day</option>
                                  <option value="before accident">Before Accident Date</option>
                                  <option value="after accident">After Accident Date</option>
                                </select>
                              </div>

                              <div>
                                <label className="label">Photos Noticed In</label>
                                <select
                                  className="select select-bordered"
                                  value={occupant.photosNoticedIn || ''}
                                  onChange={(e) =>
                                    handleOccupantChange(index, 'photosNoticedIn', e.target.value)
                                  }
                                >
                                  <option value="">Select</option>
                                  <option value="camera files">Camera Files</option>
                                  <option value="whatsapp files">Whatsapp Files</option>
                                  <option value="snapchat">SnapChat Files</option>
                                  <option value="instagram">Instagram Files</option>
                                  <option value="other person whatsapp">Other Person Sent in WhatsApp</option>
                                </select>
                              </div>

                              {/* If other person sent in WhatsApp, ask name & number */}
                              {occupant.photosNoticedIn === 'other person whatsapp' && (
                                <>
                                  <div>
                                    <label className="label">Other Person Name</label>
                                    <input
                                      type="text"
                                      className="input input-bordered"
                                      value={occupant.otherPersonName || ''}
                                      onChange={(e) =>
                                        handleOccupantChange(index, 'otherPersonName', e.target.value)
                                      }
                                    />
                                  </div>
                                  <div>
                                    <label className="label">Other Person Mobile</label>
                                    <input
                                      type="text"
                                      className="input input-bordered"
                                      value={occupant.otherPersonMobile || ''}
                                      onChange={(e) =>
                                        handleOccupantChange(index, 'otherPersonMobile', e.target.value)
                                      }
                                    />
                                  </div>
                                </>
                              )}
                            </>
                          )}
                        </>
                      )}

                      {/* 100. Occupant DL */}
                      <div>
                        <label className="label">Occupant DL</label>
                        <select
                          className="select select-bordered"
                          value={occupant.dl || ''}
                          onChange={(e) => handleOccupantChange(index, 'dl', e.target.value)}
                        >
                          <option value="">Select</option>
                          <option value="valid">Having Valid DL</option>
                          <option value="invalid">Having Invalid DL</option>
                          <option value="not having">Not Having DL</option>
                          <option value="llr only">Having LLR Only</option>
                          <option value="not provided">Not Provided</option>
                        </select>
                      </div>

                      {/* 101. Call data */}
                      <div>
                        <label className="label">Call Data</label>
                        <select
                          className="select select-bordered"
                          value={occupant.callData || ''}
                          onChange={(e) =>
                            handleOccupantChange(index, 'callData', e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          <option value="match">Match</option>
                          <option value="mismatch">Mismatch</option>
                          <option value="not available">Not Available</option>
                        </select>
                      </div>

                      {/* 102. Additional Info */}
                      <div className="md:col-span-2">
                        <label className="label">Do you want to add anything?</label>
                        <select
                          className="select select-bordered"
                          value={occupant.additionalInfoChoice || ''}
                          onChange={(e) =>
                            handleOccupantChange(index, 'additionalInfoChoice', e.target.value)
                          }
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                        {occupant.additionalInfoChoice === 'yes' && (
                          <textarea
                            className="textarea textarea-bordered mt-2 w-full"
                            value={occupant.additionalInfo || ''}
                            onChange={(e) =>
                              handleOccupantChange(index, 'additionalInfo', e.target.value)
                            }
                          />
                        )}
                      </div>
                    </div>
                  </div>
                ))}

              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default OccupantInvestigation;
