/* eslint-disable @typescript-eslint/no-explicit-any */
import { useSelector } from "react-redux";

export default function DashProfile() {
  const { currentUser } = useSelector((state: any) => state.user);
  return (
    <div>
      <h1>profile</h1>
      <form className='flex flex-col'>
        <div className='w-32 h-32 self-center cursor-pointer shadow-md'>
          <img
            src={currentUser.data.photoURL}
            alt='user'
            className='rounded-full w-full h-full object-cover border-8 border-[lightgray]'
          />
        </div>
      </form>
    </div>
  );
}
