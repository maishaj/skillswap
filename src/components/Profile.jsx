import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, update, setUser } = useContext(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");

  const startEdit = () => {
    setName(user?.displayName || "");
    setPhoto(user?.photoURL || "");
    setEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!update) {
      toast.error("Update function not available");
      return;
    }
    update({ displayName: name, photoURL: photo })
      .then(() => {
        setUser && setUser({ ...user, displayName: name, photoURL: photo });
        toast.success("Profile updated");
        setEditing(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message || "Failed to update profile");
      });
  };

  console.log(user);

  return (
    <div className="m-30 w-6/12 mx-auto bg-[#f8f8f8] rounded-xl p-4 flex gap-4 justify-center shadow-2xl">
      {user && <img className="rounded-full" src={user.photoURL} alt="" />}
      <div className="flex flex-col justify-center space-y-3">
        {!editing ? (
          <>
            <h1 className="font-semibold text-[16px]">
              Name: {user?.displayName}
            </h1>
            <h2 className="font-semibold text-[16px]">Email: {user?.email}</h2>
            <button
              onClick={startEdit}
              className="btn bg-black text-white w-2/3 rounded-sm"
            >
              Update Profile
            </button>
          </>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <label className="label">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input w-full"
              required
            />

            <label className="label">Photo URL</label>
            <input
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="input w-full"
              required
            />

            <div className="flex gap-2">
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="btn btn-ghost"
              >
                Cancel
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
