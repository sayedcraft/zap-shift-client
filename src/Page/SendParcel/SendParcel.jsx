// import React from 'react';
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h2 className="text-5xl font-bold">Send A Parcel</h2>

      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
        {/* document */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              {...register("parcelType")}
              value="document"
              className="radio"
              defaultChecked
            />{" "}
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              {...register("parcelType")}
              value="non-document"
              className="radio"
            />{" "}
            Non-Document
          </label>
        </div>

        {/* parcel info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight</label>
            <input
              type="text"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel Weight"
            />
          </fieldset>
        </div>

        {/* two colum */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* sender info */}
          <fieldset className="fieldset">
          <h4 className="text-2xl font-semibold">Sender Details</h4>
            {/* sender name */}
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("SenderName")}
              className="input w-full"
              placeholder="Sender Name"
            />
            {/* sender email */}
            <label className="label">Sender Email</label>
            <input
              type="email"
              {...register("SenderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            />

            {/* sender District */}
            <label className="label mt-4">Sender District</label>
            <input
              type="text"
              {...register("SenderDistrict")}
              className="input w-full"
              placeholder="Sender District"
            />
            {/* sender add */}
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("SenderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
            

          </fieldset>
          {/* reciver info */}
          <fieldset className="fieldset">
          <h4 className="text-2xl font-semibold">Reciver Details</h4>
            {/* reciver name */}
            <label className="label">Reciver Name</label>
            <input
              type="text"
              {...register("ReciverName")}
              className="input w-full"
              placeholder="Reciver Name"
            />
            {/* reciver email */}
            <label className="label">Reciver Email</label>
            <input
              type="email"
              {...register("ReciverEmail")}
              className="input w-full"
              placeholder="Reciver Email"
            />
            {/* reciver add */}
            <label className="label mt-4">Reciver Address</label>
            <input
              type="text"
              {...register("ReciverAddress")}
              className="input w-full"
              placeholder="Reciver Address"
            />
            {/* reciver District */}
            <label className="label mt-4">Reciver District</label>
            <input
              type="text"
              {...register("ReciverDistrict")}
              className="input w-full"
              placeholder="Reciver District"
            />

          </fieldset>
        </div>

        {/* ---- */}
        <div>
          <input type="submit" value="send Parcel" className="btn btn-primary mt-5" />
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
