import * as React from "react";

function Regsuccess(props) {
  return (
    <div className="flex justify-center items-center px-16 py-12 text-3xl font-medium backdrop-blur-[5px] bg-zinc-100 bg-opacity-80 text-neutral-600 max-md:px-5">
      <div className="flex flex-col px-14 pt-10 pb-5 mt-96 max-w-full bg-white rounded-3xl border border-solid shadow-sm border-zinc-500 w-[720px] max-md:px-5 max-md:mt-10">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/21d2ed1dfe5488fc0a3e8dc3f08902d1ad58e139d25db8e29dbd762194c853e1?placeholderIfAbsent=true"
          className="self-center aspect-square w-[75px]"
        />
        <div className="mt-7 max-md:max-w-full">
          Your Registration has been Successful
        </div>
      </div>
    </div>
  );
}

export default Regsuccess;

