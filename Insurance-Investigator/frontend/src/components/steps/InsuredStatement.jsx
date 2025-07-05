import React from 'react';

const InsuredStatement = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="space-y-4 p-5">
      <h1 className="gradient-flex text-2xl font-bold mb-4 text-center">Insured Statement</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="label">Insured Verified</label>
          <select
            className="select select-bordered"
            value={formData.insuredVerified || ''}
            onChange={(e) => handleChange('insuredVerified', e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.insuredVerified === 'no' && (
          <div className="md:col-span-2">
            <label className="label">Reason</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={formData.insuredVerifiedReason || ''}
              onChange={(e) => handleChange('insuredVerifiedReason', e.target.value)}
            />
          </div>
        )}

        {formData.insuredVerified === 'yes' && (
          <>
            <div>
              <label className="label">Insured Visit Photo</label>
              <input
                type="file"
                className="file-input file-input-bordered w-3/4"
                onChange={(e) => handleChange('insuredVisitPhoto', e.target.files?.[0] || null)}
              />
            </div>

            <div>
              <label className="label">Insured Type</label>
              <select
                className="select select-bordered"
                value={formData.insuredType || ''}
                onChange={(e) => handleChange('insuredType', e.target.value)}
              >
                <option value="">Select</option>
                <option value="insured">Insured</option>
                <option value="insured cum driver">Insured cum Driver</option>
              </select>
            </div>

            <div>
              <label className="label">Insured Gender</label>
              <select
                className="select select-bordered"
                value={formData.insuredGender || ''}
                onChange={(e) => handleChange('insuredGender', e.target.value)}
              >
                <option value="">Select</option>
                <option value="he">He</option>
                <option value="she">She</option>
              </select>
            </div>

            <div>
              <label className="label">Insured Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.insuredName || ''}
                readOnly
              />
            </div>

            <div>
              <label className="label">Insured Occupation</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.insuredOccupation || ''}
                onChange={(e) => handleChange('insuredOccupation', e.target.value)}
              />
            </div>

            <div>
              <label className="label">IV Number</label>
              <input
                type="text"
                className="input input-bordered w-3/4"
                value={formData.ivNumber || ''}
                readOnly
              />
            </div>

            <div>
              <label className="label">IV Using For</label>
              <select
                className="select select-bordered"
                value={formData.ivUse || ''}
                onChange={(e) => handleChange('ivUse', e.target.value)}
              >
                <option value="">Select</option>
                <option value="personal work">Personal Work</option>
                <option value="commercial use">Commercial Use</option>
              </select>
            </div>

            <div>
              <label className="label">Accident Date</label>
              <input
                type="date"
                className="input input-bordered w-1/3"
                value={formData.accidentDate || ''}
                onChange={(e) => handleChange('accidentDate', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Accident Time</label>
              <input
                type="time"
                className="input input-bordered w-1/3"
                value={formData.accidentTime || ''}
                onChange={(e) => handleChange('accidentTime', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Travelling Person</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.travellingPerson || ''}
                onChange={(e) => handleChange('travellingPerson', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Driver Gender</label>
              <select
                className="select select-bordered"
                value={formData.driverGender || ''}
                onChange={(e) => handleChange('driverGender', e.target.value)}
              >
                <option value="">Select</option>
                <option value="he">He</option>
                <option value="she">She</option>
              </select>
            </div>

            <div>
              <label className="label">Travelling Person Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.travellingPersonName || ''}
                onChange={(e) => handleChange('travellingPersonName', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Accident Place</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.accidentPlace || ''}
                onChange={(e) => handleChange('accidentPlace', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Travelling From</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.travelFrom || ''}
                onChange={(e) => handleChange('travelFrom', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Travelling To</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.travelTo || ''}
                onChange={(e) => handleChange('travelTo', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Accident Manner</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.accidentManner || ''}
                onChange={(e) => handleChange('accidentManner', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Total Persons Travelling</label>
              <input
                type="number"
                className="input input-bordered w-1/2"
                value={formData.totalPersons || ''}
                onChange={(e) => handleChange('totalPersons', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Injured Person</label>
              <select
                className="select select-bordered"
                value={formData.injuredPerson || ''}
                onChange={(e) => handleChange('injuredPerson', e.target.value)}
              >
                <option value="">Select</option>
                <option value="No one injured">No one injured</option>
                <option value="IV driving person injured">IV driving person injured</option>
                <option value="IV occupant injured">IV occupant injured</option>
                <option value="IV pillion rider injured">IV pillion rider injured</option>
                <option value="TP driving person injured">TP driving person injured</option>
                <option value="TP pillion rider injured">TP pillion rider injured</option>
                <option value="TP occupant injured">TP occupant injured</option>
              </select>
            </div>

            {formData.injuredPerson && formData.injuredPerson !== 'No one injured' && (
              <div>
                <label className="label">Injured Name if any</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={formData.injuredName || ''}
                  onChange={(e) => handleChange('injuredName', e.target.value)}
                />
              </div>
            )}

            <div>
              <label className="label">Police Case Filed</label>
              <select
                className="select select-bordered"
                value={formData.policeCase || ''}
                onChange={(e) => handleChange('policeCase', e.target.value)}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {formData.policeCase === 'yes' && (
              <div>
                <label className="label">Police Station Name</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={formData.policeStationName || ''}
                  onChange={(e) => handleChange('policeStationName', e.target.value)}
                />
              </div>
            )}

            <div>
              <label className="label">IV Driver Name</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.ivDriverName || ''}
                onChange={(e) => handleChange('ivDriverName', e.target.value)}
              />
            </div>

            <div>
              <label className="label">IV Driver DL</label>
              <select
                className="select select-bordered"
                value={formData.driverDL || ''}
                onChange={(e) => handleChange('driverDL', e.target.value)}
              >
                <option value="">Select</option>
                <option value="having valid DL">Having valid DL</option>
                <option value="having invalid DL">Having invalid DL</option>
                <option value="not having DL">Not having DL</option>
                <option value="having LLR only">Having LLR only</option>
              </select>
            </div>

            <div>
              <label className="label">Statement Given</label>
              <select
                className="select select-bordered"
                value={formData.statementGiven || ''}
                onChange={(e) => handleChange('statementGiven', e.target.value)}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InsuredStatement;
