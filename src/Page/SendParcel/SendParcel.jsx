// import React from 'react';
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const { register, handleSubmit,control } = useForm();

  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({control, name:"senderRegion"});
  const reciverRegion = useWatch({control, name:"reciverRegion"});

  // console.log(regions);

  const districtByRegion = (region) => {
    const regionDestrict = serviceCenter.filter((c) => c.region === region);
    const district = regionDestrict.map((d) => d.district);
    return district;
  };

  const handleSendParcel = (data) => {
    console.log(data);

    const sameDistrict= data.senderDistrict===data.reciverDistrict;
    console.log(sameDistrict);
    

  };
  return (
    <div>
      <h2 className="text-5xl font-bold mt-5">Send A Parcel</h2>

      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-5 p-4 ">
        {/* parcel type */}
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
              type="number"
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
            <label className="label mt-4">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
            />
            {/* sender email */}
            <label className="label mt-4">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            />

            {/* sender region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender Region</legend>
              <select
                {...register("senderRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            {/* sender dictrict */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Sender District</legend>
              <select
                {...register("senderDistrict")}
                defaultValue="Pick a dictrict"
                className="select"
              >
                <option disabled={true}>Pick a dictrict</option>
                {districtByRegion(senderRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* sender add */}
            <label className="label mt-4">Sender Address</label>
            <input
              type="text"
              {...register("senderAddress")}
              className="input w-full"
              placeholder="Sender Address"
            />
          </fieldset>
          {/* reciver info */}
          <fieldset className="fieldset">
            <h4 className="text-2xl font-semibold">Reciver Details</h4>
            {/* reciver name */}
            <label className="label mt-4">Reciver Name</label>
            <input
              type="text"
              {...register("reciverName")}
              className="input w-full"
              placeholder="Reciver Name"
            />
            {/* reciver email */}
            <label className="label mt-4">Reciver Email</label>
            <input
              type="email"
              {...register("reciverEmail")}
              className="input w-full"
              placeholder="Reciver Email"
            />

            {/* reciver region */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Reciver Region</legend>
              <select
                {...register("reciverRegion")}
                defaultValue="Pick a region"
                className="select"
              >
                <option disabled={true}>Pick a region</option>
                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>

            {/* reciver district */}
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Reciver District</legend>
              <select
                {...register("reciverDistrict")}
                defaultValue="Pick a district"
                className="select"
              >
                <option disabled={true}>Pick a district</option>
                {districtByRegion(reciverRegion).map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </fieldset>
            
            {/* reciver add */}
            <label className="label mt-4">Reciver Address</label>
            <input
              type="text"
              {...register("reciverAddress")}
              className="input w-full"
              placeholder="Reciver Address"
            />
          </fieldset>
        </div>

        {/* ---- */}
        <div>
          <input
            type="submit"
            value="send Parcel"
            className="btn btn-primary mt-5"
          />
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
