// import React from 'react';
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const SendParcel = () => {
  const { register, handleSubmit, control } = useForm();

  const {user}=useAuth()

  const axiosSecure = useAxiosSecure()

  const serviceCenter = useLoaderData();
  const regionsDuplicate = serviceCenter.map((c) => c.region);
  const regions = [...new Set(regionsDuplicate)];
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const reciverRegion = useWatch({ control, name: "reciverRegion" });

  // console.log(regions);

  const districtByRegion = (region) => {
    const regionDestrict = serviceCenter.filter((c) => c.region === region);
    const district = regionDestrict.map((d) => d.district);
    return district;
  };

  const handleSendParcel = (data) => {
    console.log(data);

    const isDocument = data.parcelType === "document";
    const isSameDistrict = data.senderDistrict === data.reciverDistrict;
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost;

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;
        const extraWeight = parcelWeight - 3;
        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }

    console.log("cost", cost);
    Swal.fire({
      title: "Agree eith the cost",
      text: `You will be charge ${cost}!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, I agree",
    }).then((result) => {
      if (result.isConfirmed) {

        // save the parcel info to the database
        axiosSecure.post('/parcels', data)
        .then(res=>{
          console.log('after saving parcel',res);
          
        })


        // Swal.fire({
        //   title: "Deleted!",
        //   text: "Your file has been deleted.",
        //   icon: "success",
        // });
      }
    });
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
              placeholder="Sender Name" defaultValue={user?.name}
            />
            {/* sender email */}
            <label className="label mt-4">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
              defaultValue={user?.email}
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
