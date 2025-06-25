import React from "react";
import { Link } from "react-router";

const Company = ({ company }) => {
  return (
    <Link
      to={`/company-details/${company.id}`}
      className="min-h-[200px] flex flex-col justify-between items-center p-6 border border-gray-200 rounded-tl-3xl rounded-br-3xl hover:border-[#4B29CF] cursor-pointer duration-300 hover:scale-105"
    >
      <img src={company.logo} alt="" className="w-40" />
      <h1 className="font-semibold text-lg ">{company.name}</h1>
    </Link>
  );
};

export default Company;
