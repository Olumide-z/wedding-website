import React from "react";

const Registry = () => {
  return (
    <div
      className="pt-12 pb-6 md:max-w-md w-full mx-auto text-[#3A3A3A]"
      id="registry"
    >
      <h3 className="text-center header text-3xl mb-5">Registry</h3>
      <p className="text-center">
        Your presence is enough of a present to us! But for those of you who are
        stubborn, we&apos;ve put together a wish-list to help you out.
      </p>
      <div className="flex items-center justify-center">
        <a href="https://www.weddingshop.com/Buy/View/245879" target="_blank">
          <button className="mt-10 px-6 py-2 border-[1.5px] cursor-pointer transition hover:bg-[#994610] hover:text-white border-[#994610] text-[#994610] rounded-full">
            Gift us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Registry;
