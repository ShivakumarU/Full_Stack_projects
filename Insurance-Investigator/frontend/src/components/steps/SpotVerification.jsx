

const SpotVerification = ({ formData, setFormData }) => {
  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <div className="space-y-4 p-5">
      <h2 className="text-xl font-bold mb-4 gradient-flex">Spot Verification</h2>

      <div>
        <label className="label">Spot Verified ???</label>
        <select
          className="select select-bordered w-1/6"
          value={formData.spotVerified || ''}
          onChange={(e) => handleChange('spotVerified', e.target.value)}
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      {formData.spotVerified === 'no' && (
        <div>
          <label className="label">Reason for not verifying the spot</label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={formData.spotNotVerifiedReason || ''}
            onChange={(e) => handleChange('spotNotVerifiedReason', e.target.value)}
          />
        </div>
      )}

      {formData.spotVerified === 'yes' && (
        <>
          
          <div>
            <label className="label"> Spot Matching</label>
            <select
              className="select select-bordered w-1/5"
              value={formData.spotMatching || ''}
              onChange={(e) => handleChange('spotMatching', e.target.value)}
            >
              <option value="">Select</option>
              <option value="co-relating">Co-relating</option>
              <option value="not co-relating">Not Co-relating</option>
            </select>
          </div>

          <div>
            <label className="label"> Photos Taken</label>
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
              <label className="label">Upload Spot Photos</label>
              <input
                multiple
                type="file"
                className="file-input file-input-bordered w-1/2"
                onChange={(e) => handleChange('spotPhotos', e.target.files[0])}
              />
            </div>
          )}

          {formData.photosTaken === 'no' && (
            <div>
              <label className="label">Reason for not taking photos</label>
              <input
                type="text"
                className="input input-bordered w-full"
                value={formData.photoNotTakenReason || ''}
                onChange={(e) => handleChange('photoNotTakenReason', e.target.value)}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default SpotVerification;
