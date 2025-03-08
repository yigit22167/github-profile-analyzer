import { FaBuilding } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const UserCard = ({ userData }) => {
  return (
    <div className="flex justify-center items-center md:p-4 p-2">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <div
            className={`${userData.name || userData.bio ? "md:mr-6 mr-4" : ""}`}
          >
            <img
              className="rounded-full w-48"
              src={userData.avatar_url}
              alt={userData.name}
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl text-slate-300">
              {userData.name}
            </h2>
            {userData.bio && (
              <p className="text-lg md:text-xl text-slate-300">
                {userData.bio}
              </p>
            )}
            {userData.email && (
              <p className="text-lg md:text-xl flex items-center text-slate-300">
                <MdEmail className="mr-1" />
                {userData.email}
              </p>
            )}
            {userData.location && (
              <p className="text-lg md:text-xl flex items-center text-slate-300">
                <FaLocationDot className="mr-1" />
                {userData.location}
              </p>
            )}
            {userData.company && (
              <p className="text-lg md:text-xl flex items-center text-slate-300">
                <FaBuilding className="mr-1" />
                {userData.company}
              </p>
            )}
          </div>
        </div>
        <a
          className="text-slate-900 font-bold border border-violet-300 bg-violet-400 my-4 cursor-pointer text-xl text-center self-center py-2 px-3 rounded-full hover:bg-violet-300 transition-all"
          href={userData.html_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow
        </a>
      </div>
    </div>
  );
};

export default UserCard;
