import * as React from "react";
import '../../assets/Group 471.png'

function Registration(props) {
  return (
    <div className="pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
        <div className="flex flex-col w-[43%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-12 font-semibold text-green-500 whitespace-nowrap min-h-[1024px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
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
        </div>
        <div className="flex flex-col ml-5 w-[57%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 justify-between max-w-full text-3xl whitespace-nowrap w-[470px] max-md:flex-wrap">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f20efd6902c3fb8907c0e254998d34932d4750e81a73efbdc838c3826e32caaa?placeholderIfAbsent=true"
                className="aspect-square w-[98px]"
              />
              <div className="flex gap-3.5 my-auto">
                <div className="grow font-semibold text-slate-800">Sign Up</div>
                <div className="grow font-medium text-stone-300">/ Login</div>
              </div>
            </div>
            <div className="mt-20 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-lg text-stone-300 max-md:mt-10">
                    <div className="font-medium text-black">Hospital Name</div>
                    <div className="shrink-0 mt-1.5 h-px bg-black" />
                    <div className="mt-14 max-md:mt-10">Address</div>
                    <div className="shrink-0 mt-3 h-px bg-stone-300" />
                    <div className="mt-14 max-md:mt-10">City</div>
                    <div className="shrink-0 mt-1.5 h-px bg-stone-300" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-lg text-stone-300 max-md:mt-10">
                    <div>Email ID</div>
                    <div className="shrink-0 mt-3 h-px bg-stone-300" />
                    <div className="mt-14 max-md:mt-10">Phone Number</div>
                    <div className="shrink-0 mt-3 h-px bg-stone-300" />
                    <div className="mt-14 max-md:mt-10">
                      Hospital Registration Number
                    </div>
                    <div className="shrink-0 mt-1.5 h-px bg-stone-300" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-14 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-lg text-stone-300 max-md:mt-10">
                    <div>State</div>
                    <div className="shrink-0 mt-3 h-px bg-stone-300" />
                    <div className="mt-14 max-md:mt-10">Pincode</div>
                    <div className="shrink-0 mt-3 h-px bg-stone-300" />
                    <div className="mt-14 max-md:mt-10">
                      Hospital Registration Date
                    </div>
                    <div className="shrink-0 mt-1.5 h-px bg-stone-300" />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-lg text-stone-300 max-md:mt-10">
                    <div>Emergency-Ward Number</div>
                    <div className="shrink-0 mt-1.5 h-px bg-stone-300" />
                    <div className="mt-14 max-md:mt-10">
                      Registration certificate Upload
                    </div>
                    <div className="shrink-0 mt-1.5 h-px bg-stone-300" />
                    <div className="justify-center self-start px-8 py-4 mt-5 text-sm font-medium text-white whitespace-nowrap rounded-xl bg-slate-800 max-md:px-5">
                      Choose
                    </div>
                    <div className="mt-7">Create Password</div>
                    <div className="shrink-0 mt-3 h-px bg-stone-300" />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 text-lg text-stone-300 max-md:max-w-full">
              Number Of Ambulance available
            </div>
            <div className="shrink-0 mt-3 h-px bg-stone-300 max-md:max-w-full" />
            <div className="flex flex-col self-end mt-1.5 max-w-full text-lg text-stone-300 w-[478px]">
              <div className="self-center whitespace-nowrap">
                Confirm Password
              </div>
              <div className="self-end mt-3 w-80 max-w-full h-px bg-stone-300" />
              <div className="justify-center self-start px-11 py-4 mt-14 ml-11 font-semibold text-white whitespace-nowrap rounded-2xl bg-slate-800 max-md:px-5 max-md:mt-10 max-md:ml-2.5">
                Sign Up
              </div>
              <div className="mt-20 text-sm max-md:mt-10 max-md:max-w-full">
                Terms and Condition privacy policy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Registration;