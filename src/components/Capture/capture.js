import * as React from "react";

function Capture(props) {
  return (
    <div className="flex gap-1.5 justify-between px-5 max-md:flex-wrap">
      <div className="flex overflow-hidden relative flex-col flex-1 justify-center items-center px-16 py-12 font-semibold text-green-500 whitespace-nowrap min-h-[1024px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/bed4a34adc5ab49203b820681516d8470c2dbe6e256dde998b532ca4d519c4b4?placeholderIfAbsent=true"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative flex-col items-center mt-48 max-w-full w-[338px] max-md:mt-10">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1a685091e2a712a98e57eea24900e4c4abc4adf113a9bb5089c8353393f4213f?placeholderIfAbsent=true"
            className="max-w-full aspect-[0.84] w-[270px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/200c45a34743feb7611f6d9dfea8cb883d66a984a26850c680116f9f349c8a9b?placeholderIfAbsent=true"
            className="max-w-full aspect-[4.35] w-[270px]"
          />
          <div className="self-stretch mt-16 text-3xl max-md:mt-10">
            Feel <span className="text-green-500">Safe</span> Everywhere
          </div>
          <div className="mt-11 text-2xl max-md:mt-10">
            <span className="font-medium">#Safe-</span>
            <span className="font-medium text-green-500">T</span>
            <span className="font-medium">-Fast</span>
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f20efd6902c3fb8907c0e254998d34932d4750e81a73efbdc838c3826e32caaa?placeholderIfAbsent=true"
        className="self-start mt-20 aspect-square w-[98px] max-md:mt-10"
      />
      <div className="flex flex-col flex-1 items-center self-end mt-28 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-4 text-3xl whitespace-nowrap">
          <div className="grow font-semibold text-stone-300">Sign Up /</div>
          <div className="grow font-medium text-slate-800">Login</div>
        </div>
        <div className="self-stretch mt-36 text-xl font-semibold text-neutral-600 max-md:mt-10 max-md:max-w-full">
          Please Capture our face to continue
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/302fe77c619cd16709174971e452b61a75bf9e9dd1d68959eb0195be7981e943?placeholderIfAbsent=true"
          className="self-stretch mt-8 w-full aspect-[1.14] max-md:max-w-full"
        />
        <div className="flex gap-5 justify-between items-start mt-16 max-w-full text-lg font-semibold whitespace-nowrap w-[370px] max-md:mt-10">
          <div className="grow justify-center px-11 py-5 rounded-2xl bg-neutral-400 text-slate-800 max-md:px-5">
            Re-take
          </div>
          <div className="grow justify-center px-10 py-5 text-white rounded-2xl bg-slate-800 max-md:px-5">
            Continue
          </div>
        </div>
        <div className="mt-20 text-sm whitespace-nowrap text-stone-300 max-md:mt-10">
          Terms and Condition privacy policy
        </div>
      </div>
    </div>
  );
}


export default Capture;