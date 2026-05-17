// import React from 'react';

import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();


  const { data: parcel = [] } = useQuery({
    queryKey: ["myParcel", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
  });

  return <div>All of my parcel : {parcel.length}</div>;
};

export default MyParcels;
