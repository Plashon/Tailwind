import React from "react";
import Navbar from "./../component/Navbar";

export const Add = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-4 p-6 bg-white rounded-md shadow-md">
        <div className="font-bold text-3xl justify-items-start mt-5 ml-20">
          <span className="text-cyan-400">Add</span> Restaurant
        </div>
        <label className="input input-bordered flex items-center gap-2 my-5">
          Image
          <input
            type="text"
            className="grow"
            placeholder="https://food-cms.grab.com/"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 my-5">
          Title
          <input type="text" className="grow" placeholder="ชื่อร้าน" />
        </label>
        <select className="select select-bordered w-full max-w">
            <option disabled selected>
              Type
            </option>
            <option>อาหารตามสั่ง</option>
            <option>น่ำแข็งไส</option>
            <option>ปิ้งย่าง/บาร์บีคิว</option>
            <option>ฟาสต์ฟู้ด</option>
            <option>เบเกอรี่, เค้ก, ทานเล่น/ขนมขบเคี้ยว</option>
          </select>
        <label className="input input-bordered flex items-center gap-2 my-5">
          ID
          <input type="number" className="grow" placeholder="Number" />
        </label>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Add Restaurant
        </button>
      </div>
    </>
  );
};
