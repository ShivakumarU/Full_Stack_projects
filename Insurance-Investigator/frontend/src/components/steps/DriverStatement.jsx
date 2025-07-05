import React from 'react';

const DriverStatement = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="space-y-4 p-5">
      <h1 className="gradient-flex text-2xl font-bold mb-4 text-center">Driver Statement</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="label">Visited ???</label>
          <select
            className="select select-bordered"
            value={formData.visited || ''}
            onChange={(e) => handleChange('visited', e.target.value)}
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {formData.visited === 'no' && (
          <div className="md:col-span-2">
            <label className="label">Reason for not visiting</label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={formData.visitReason || ''}
              onChange={(e) => handleChange('visitReason', e.target.value)}
            />
          </div>
        )}

        {formData.visited === 'yes' && (
          <>
            <div>
              <label className="label">Photos Taken</label>
              <select
                className="select select-bordered"
                value={formData.photosTaken || ''}
                onChange={(e) => handleChange('photosTaken', e.target.value)}
              >
                <option value="">Select</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {formData.photosTaken === 'yes' && (
              <div>
                <label className="label">Upload Photo</label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-3/4"
                  onChange={(e) =>
                    handleChange('photoFile', e.target.files?.[0] || null)
                  }
                />
              </div>
            )}

            {formData.photosTaken === 'no' && (
              <div>
                <label className="label">Reason for not taking photo</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  value={formData.photoReason || ''}
                  onChange={(e) => handleChange('photoReason', e.target.value)}
                />
              </div>
            )}

            <div>
              <label className="label">Driver Gender</label>
              <select
                className="select select-bordered w-1/4"
                value={formData.driverGender || ''}
                onChange={(e) => handleChange('driverGender', e.target.value)}
              >
                <option value="">Select</option>
                <option value="he">He</option>
                <option value="she">She</option>
              </select>
            </div>

            <div>
              <label className="label">Driver Name</label>
              <input
                type="text"
                className="input input-bordered w-3/4"
                value={formData.driverName || ''}
                onChange={(e) => handleChange('driverName', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Driver Occupation</label>
              <input
                type="text"
                className="input input-bordered w-4/5"
                value={formData.driverOccupation || ''}
                onChange={(e) => handleChange('driverOccupation', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Travelling From</label>
              <input
                type="text"
                className="input input-bordered w-4/5"
                value={formData.travelFrom || ''}
                onChange={(e) => handleChange('travelFrom', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Travelling To</label>
              <input
                type="text"
                className="input input-bordered w-4/5"
                value={formData.travelTo || ''}
                onChange={(e) => handleChange('travelTo', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Travelling Car No</label>
              <input
                type="text"
                className="input input-bordered w-3/4"
                value={formData.carNo || ''}
                onChange={(e) => handleChange('carNo', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Total Persons in IV</label>
              <input
                type="number"
                className="input input-bordered w-1/3"
                value={formData.totalPersons || ''}
                onChange={(e) => handleChange('totalPersons', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Accident Place</label>
              <input
                type="text"
                className="input input-bordered w-4/5"
                value={formData.accidentPlace || ''}
                onChange={(e) => handleChange('accidentPlace', e.target.value)}
              />
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
              <label className="label">Accident Manner</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.accidentManner || ''}
                onChange={(e) => handleChange('accidentManner', e.target.value)}
              />
            </div>

            <div>
              <label className="label">Who is Injured?</label>
              <select
                className="select select-bordered w-1/2"
                value={formData.whoInjured || ''}
                onChange={(e) => handleChange('whoInjured', e.target.value)}
              >
                <option value="">Select</option>
                <option value="No one injured">No one injured</option>
                <option value="All persons in IV injured">All persons in IV injured</option>
                <option value="IV driving person injured">IV driving person injured</option>
                <option value="IV occupant injured">IV occupant injured</option>
                <option value="IV pillion rider injured">IV pillion rider injured</option>
                <option value="TP driving person injured">TP driving person injured</option>
                <option value="All persons in TP injured">All persons in TP injured</option>
                <option value="TP pillion rider injured">TP pillion rider injured</option>
                <option value="TP occupant injured">TP occupant injured</option>
              </select>
            </div>

            {formData.whoInjured && formData.whoInjured !== 'No one injured' && (
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
                className="select select-bordered "
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
                  className="input input-bordered w-5/6"
                  value={formData.policeStation || ''}
                  onChange={(e) => handleChange('policeStation', e.target.value)}
                />
              </div>
            )}

            <div>
              <label className="label">Car Driven By</label>
              <select
                className="select select-bordered"
                value={formData.carDrivenBy || ''}
                onChange={(e) => handleChange('carDrivenBy', e.target.value)}
              >
                <option value="">Select</option>
                <option value="himself">Himself</option>
                <option value="herself">Herself</option>
                <option value="other-person">Other Person</option>
              </select>
            </div>

            {formData.carDrivenBy === 'other-person' && (
              <div>
                <label className="label">Name of Other Driver</label>
                <input
                  type="text"
                  className="input input-bordered w-5/6"
                  value={formData.otherDriverName || ''}
                  onChange={(e) => handleChange('otherDriverName', e.target.value)}
                />
              </div>
            )}

            <div>
              <label className="label">Driver Name as per Statement</label>
              <input
                type="text"
                className="input input-bordered w-5/6"
                value={formData.driverNameStatement || ''}
                onChange={(e) => handleChange('driverNameStatement', e.target.value)}
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

export default DriverStatement;
