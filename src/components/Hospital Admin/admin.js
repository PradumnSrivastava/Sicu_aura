import * as React from "react";

function Admin(props) {
  return (
    <div className="flex flex-col items-center pb-10 bg-sky-50">
      <div className="flex gap-5 justify-between self-stretch px-20 py-2.5 w-full bg-gray-800 max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-0 justify-between">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cf2185f0c23fc1733849bb8241d8d14cccf4366530c168c3f555eb81e0baf062?placeholderIfAbsent=true"
            className="aspect-[0.97] w-[60px]"
          />
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/32551d37a46af21983a5203d2c92ff6782a7be970e8dff822f2cb80b50830e77?placeholderIfAbsent=true"
            className="my-auto max-w-full aspect-[4.55] w-[132px]"
          />
        </div>
        <div className="flex gap-5 items-center my-auto text-sm text-white">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/557402bd57be24c81ad1b99ffd60d856d51423a951575f665b8ac253e278839a?placeholderIfAbsent=true"
            className="self-stretch rounded-full aspect-square w-[50px]"
          />
          <div className="self-stretch my-auto font-medium">Alex Robinson</div>
          <div className="grow justify-center self-stretch px-7 py-3.5 my-auto whitespace-nowrap rounded-xl shadow-sm bg-slate-800 max-md:px-5">
            Log out
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e5bdc184e7bbcf00ade02e4aacc05a52cfcde45ba48a45cc7416fe1ef6367938?placeholderIfAbsent=true"
        className="self-end mt-7 mr-44 aspect-square w-[83px] max-md:mr-2.5"
      />
      <div className="flex gap-5 justify-between px-5 mt-4 w-full max-w-[1240px] max-md:flex-wrap max-md:max-w-full">
        <div className="flex-auto self-start text-3xl font-medium text-neutral-700">
          Hospital Registrations
        </div>
        <div className="flex gap-5 justify-between text-base whitespace-nowrap text-zinc-500 max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-5 justify-between px-6 py-1.5 bg-white rounded-xl max-md:flex-wrap max-md:pl-5 max-md:max-w-full">
            <div className="my-auto">Search</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff90ee6a670ceab52526091812e91c564614ca8d99f5e6ddb9d47805b6a802f8?"
              className="w-7 aspect-[0.96]"
            />
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb29cbc6245b7f40bc351e0f37d04ff34824f90ca9c81668fa32465613d461a5?"
            className="w-10 aspect-square"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between px-7 py-3 mt-4 w-full text-base font-medium text-gray-800 bg-cyan-400 rounded-3xl max-w-[1240px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div>No.</div>
        <div>Date & Time</div>
        <div className="flex-auto">Hospital Name</div>
        <div>Email</div>
        <div>Address</div>
        <div>Phone No.</div>
        <div>City</div>
        <div>State</div>
        <div className="grow">Pincode</div>
      </div>
      <div className="flex gap-5 justify-between px-9 py-3.5 w-full text-xs text-black rounded-3xl bg-neutral-100 max-w-[1240px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div>1.</div>
        <div className="flex-auto">01.01.2000, 12:00 am</div>
        <div>ABC Hospital...</div>
        <div className="flex-auto">alexrobinson001@gmail.com</div>
        <div className="flex-auto">ABC Road, Park Colony...</div>
        <div>9876543210</div>
        <div>Kolkata</div>
        <div>West Bengal</div>
        <div>700001</div>
      </div>
      <div className="flex gap-5 justify-between px-9 py-3.5 w-full text-xs text-black bg-white rounded-3xl max-w-[1240px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div>2.</div>
        <div className="flex-auto">01.01.2000, 12:00 am</div>
        <div>ABC Hospital...</div>
        <div className="flex-auto">alexrobinson001@gmail.com</div>
        <div className="flex-auto">ABC Road, Park Colony...</div>
        <div>9876543210</div>
        <div>Kolkata</div>
        <div>Chhattisgarh</div>
        <div>700001</div>
      </div>
      <div className="flex gap-5 justify-between px-9 py-3.5 w-full text-xs text-black rounded-3xl bg-neutral-100 max-w-[1240px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div>3.</div>
        <div className="flex-auto">01.01.2000, 12:00 am</div>
        <div>ABC Hospital...</div>
        <div className="flex-auto">alexrobinson001@gmail.com</div>
        <div className="flex-auto">ABC Road, Park Colony...</div>
        <div>9876543210</div>
        <div>Kolkata</div>
        <div>West Bengal</div>
        <div>700001</div>
      </div>
      <div className="flex gap-5 justify-between px-9 py-3.5 w-full text-xs text-black bg-white rounded-3xl max-w-[1240px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div>4.</div>
        <div className="flex-auto">01.01.2000, 12:00 am</div>
        <div>ABC Hospital...</div>
        <div className="flex-auto">alexrobinson001@gmail.com</div>
        <div className="flex-auto">ABC Road, Park Colony...</div>
        <div>9876543210</div>
        <div>Kolkata</div>
        <div>Chhattisgarh</div>
        <div>700001</div>
      </div>
      <div className="flex gap-5 justify-between px-9 py-3.5 w-full text-xs text-black rounded-3xl bg-neutral-100 max-w-[1240px] max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div>5.</div>
        <div className="flex-auto">01.01.2000, 12:00 am</div>
        <div>ABC Hospital...</div>
        <div className="flex-auto">alexrobinson001@gmail.com</div>
        <div className="flex-auto">ABC Road, Park Colony...</div>
        <div>9876543210</div>
        <div>Kolkata</div>
        <div>Chhattisgarh</div>
        <div>700001</div>
      </div>
      <div className="flex gap-5 justify-between self-stretch w-full max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d38cc76d37079844ea4826c70a56e5e9c018878f52360e4768797871723414d6?"
          className="self-end mt-9 w-6 aspect-[0.67]"
        />
        <div className="flex flex-col flex-1 max-md:max-w-full">
          <div className="shrink-0 h-10 bg-white rounded-3xl max-md:max-w-full" />
          <div className="shrink-0 h-10 rounded-3xl bg-neutral-100 max-md:max-w-full" />
        </div>
      </div>
      <div className="max-w-full h-10 bg-white rounded-3xl w-[1240px]" />
      <div className="max-w-full h-10 rounded-3xl bg-neutral-100 w-[1240px]" />
      <div className="max-w-full h-10 bg-white rounded-3xl w-[1240px]" />
      <div className="max-w-full h-10 rounded-3xl bg-neutral-100 w-[1240px]" />
      <div className="max-w-full h-10 bg-white rounded-3xl w-[1240px]" />
      <div className="max-w-full h-10 rounded-3xl bg-neutral-100 w-[1240px]" />
      <div className="max-w-full h-10 bg-white rounded-3xl w-[1240px]" />
      <div className="max-w-full h-10 rounded-3xl bg-neutral-100 w-[1240px]" />
      <div className="max-w-full h-10 bg-white rounded-3xl w-[1240px]" />
      <div className="max-w-full h-10 rounded-3xl bg-neutral-100 w-[1240px]" />
    </div>
  );
}


export default Admin;