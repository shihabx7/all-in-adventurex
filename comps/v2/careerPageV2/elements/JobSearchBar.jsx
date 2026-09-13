import { GoSearch } from "react-icons/go";
import { MdOutlineRefresh } from "react-icons/md";

export default function JobSearchBar() {
  return (
    <div className="job-search-bar border border-[#DFD7CB] rounded-[10px] bg-white/60 p-3 md:p-4  2xl:px-5">
      <form className="search-form ">
        <div className="flex flex-wrap justify-evenly items-end gap-x-0 gap-y-3 md:gap-2 lg:gap-3 xl:gap-4">
          {/*==== ========================================================search by schedule*/}
          <div className="input-wrapper w-[47%] md:w-[21%] xl:w-[20.5%]  relative">
            <p className="text-sm xl:text-base mb-2 text-[#66706C]">Schedule</p>
            <select className="w-full border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-sm xl:text-base text-[#0F0F0F]">
              <option value="">Select Schedule</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="others">Others</option>
            </select>
          </div>
          {/*==== ========================================================search by locations*/}
          <div className="input-wrapper w-[47%]  md:w-[21%] xl:w-[20.5%] relative">
            <p className="text-sm  xl:text-base mb-2 text-[#66706C]">
              Location
            </p>
            <select className="w-full border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-sm xl:text-base text-[#0F0F0F]">
              <option value="">Select Location</option>
              <option value="Albany, NY">Albany, NY</option>
              <option value="Middletown, NY">Middletown, NY</option>
              <option value="Syracuse, NY">Syracuse, NY</option>
            </select>
          </div>
          {/*==== ========================================================search by Positions*/}
          <div className="input-wrapper w-[47%]  md:w-[21%] xl:w-[20.5%] relative">
            <p className="text-sm xl:text-base mb-2 text-[#66706C]">Position</p>
            <select className="w-full border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-sm xl:text-base text-[#0F0F0F]">
              <option value="">Select Position</option>
              <option value="Management">Management</option>
              <option value="Game Master">Game Master</option>
              <option value="Communications">Communications Specialist</option>
            </select>
          </div>
          {/*==== ========================================================search by Workplace*/}
          <div className="input-wrapper w-[47%]  md:w-[21%] xl:w-[20.5%] relative">
            <p className="text-sm xl:text-base mb-2 text-[#66706C]">
              Workplace
            </p>
            <select className="w-full border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-sm xl:text-base text-[#0F0F0F]">
              <option value="">Select Workplace</option>
              <option value="Remote">Remote</option>
              <option value="On-site">On-site</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          {/*==== ========================================================buttons search+ reset*/}
          <div className="button-wrapper relative">
            <div className="flex  items-center gap-2 md:gap-3 lg:gap-4">
              <button
                type="submit"
                className=" inline-block border border-[#DFD7CB] rounded-[6px] bg-white/90 p-2 md:p-2 xl:p-3 text-lg md:text-2xl"
              >
                <GoSearch />
              </button>
              <button
                type="reset"
                className="inline-block border border-[#DFD7CB] rounded-[6px] bg-white/60 p-2  md:p-2 xl:p-3 text-lg md:text-2xl"
              >
                <MdOutlineRefresh />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
