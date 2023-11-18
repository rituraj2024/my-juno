import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const CloseAccount= ({ onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    wantToFileUAR: '',
    reason: '',
    note: '',
    chargeClosureFee: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
  };

  return (
    <div className="fixed  text-black-600 top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white w-[476px] h-[520px]   rounded-xl p-8">
        <div className="flex justify-end">
          <AiOutlineClose onClick={onClose} className="cursor-pointer" />
        </div>
        <h1 className="text-black-500 text-2xl font-bold mb-4">Choose Account</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4  ">
            <label className=' text-neutral-500'>Email</label>
            
            <select
            
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            >
              <option value=""></option>
              <option value="Reason 1"> email@product.com </option>
              <option value="Reason 2">juno@gmail.com</option>
              <option value="Reason 2">pratikjuno@gmail.com</option>
              <option value="Reason 2">elonmuskjuno@gmail.com</option>
             
            </select>

          </div>

          <div className="mb-4  flex flex-row gap-3">
            <label>Want to file UAR</label>
            <div>
              <label>
                <input
                  type="radio"
                  name="wantToFileUAR"
                  value="Yes"
                  checked={formData.wantToFileUAR === 'Yes'}
                  onChange={handleChange}
                />
                Yes
              </label>
              <label className="ml-4 ">
                <input
                  type="radio"
                  name="wantToFileUAR"
                  value="No"
                  checked={formData.wantToFileUAR === 'No'}
                  onChange={handleChange}
                />
                No
              </label>
            </div>
          </div>

          <div className="mb-4  ">
            <label className='text-neutral-500'>Reason</label>
            <select
              name="reason"
              value={formData.reason}
              onChange={handleChange}
              className="border p-2 w-full"
              required
            >
              <option value=""></option>
              <option value="Reason 1"> Flagging logics triggered </option>
              <option value="Reason 2">Reason Not Mentioned</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="mb-4 ">
            <label className=' text-neutral-500'>Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              className="border p-2 w-full"
            />
          </div>

          <div className="mb-4 absolute bottom-50">
            <label>
              <input
                type="checkbox"
                name="chargeClosureFee"
                checked={formData.chargeClosureFee}
                onChange={handleChange}
              />
              Charge closure fee
            </label>
          </div>

          <button type="submit" onClick={onClose} className="bg-neutral-300 rounded-lg text-white px-4 py-2 absolute right-[560px] ">
            Close Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default CloseAccount;
