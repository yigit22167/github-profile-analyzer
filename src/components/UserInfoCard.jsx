import { FaBuilding } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const UserInfoCard = ({ userData }) => {
  return (
    <div className="flex flex-col w-full max-w-2xl p-4 sm:flex-row justify-center gap-x-9 items-center">
      {/* User Info Section */}
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="">
          <img
            className="rounded-full mx-auto sm:mr-6 sm:mb-0 mb-4 min-w-32 max-w-32"
            src={userData.avatar_url}
            alt={userData.name}
          />
        </div>
        <div className="flex flex-col sm:items-baseline items-center justify-center gap-y-1">
          <h2 className="text-2xl text-slate-100">{userData.name}</h2>
          {userData.bio && (
            <p className="text-xl sm:text-start text-center text-slate-100">
              {userData.bio}
            </p>
          )}
          {userData.email && (
            <p className="text-xl flex items-center text-slate-100">
              <MdEmail className="mr-1.5" />
              {userData.email}
            </p>
          )}
          {userData.location && (
            <p className="text-xl flex items-center text-slate-100">
              <FaLocationDot className="mr-1.5" />
              {userData.location}
            </p>
          )}
          {userData.company && (
            <p className="text-xl flex items-center text-slate-100">
              <FaBuilding className="mr-1.5" />
              {userData.company}
            </p>
          )}
        </div>
      </div>

      {/* Follow button */}
      <a
        className="text-slate-100 font-bold bg-indigo-800 cursor-pointer text-xl sm:self-start self-center mt-6 sm:mt-1.5 py-2.5 px-6 rounded-lg hover:bg-violet-700 transition-all"
        href={userData.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow
      </a>
    </div>
  );
};

export default UserInfoCard;
