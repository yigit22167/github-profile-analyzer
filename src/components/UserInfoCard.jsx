import { FaBuilding } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const UserInfoCard = ({ userData }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-x-9 items-center">
      <div className="flex items-center justify-center">
        <div
          className={`${userData.name || userData.bio ? "md:mr-6 mr-4" : ""}`}
        >
          <img
            className="shrink-0 rounded-full w-32"
            src={userData.avatar_url}
            alt={userData.name}
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <h2 className="text-xl mb-1 md:text-2xl text-slate-100">
            {userData.name}
          </h2>
          {userData.bio && (
            <p className="text-lg md:text-xl text-slate-100">{userData.bio}</p>
          )}
          {userData.email && (
            <p className="text-lg md:text-xl flex items-center text-slate-100">
              <MdEmail className="mr-1.5" />
              {user.email}
            </p>
          )}
          {userData.location && (
            <p className="text-lg md:text-xl flex items-center text-slate-100">
              <FaLocationDot className="mr-1.5" />
              {userData.location}
            </p>
          )}
          {userData.company && (
            <p className="text-lg md:text-xl flex items-center text-slate-100">
              <FaBuilding className="mr-1.5" />
              {user.company}
            </p>
          )}
        </div>
      </div>
      <a
        className="text-slate-100 font-bold bg-indigo-800 cursor-pointer text-xl sm:self-start self-center mt-6 sm:mt-1.5 py-2.5 px-6 rounded-lg hover:bg-violet-300 transition-all"
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
