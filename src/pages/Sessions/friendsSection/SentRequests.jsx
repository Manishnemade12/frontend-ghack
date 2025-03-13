import { useEffect, useState } from "react";
import axios from "axios";
import { ArrowLeft, User } from "lucide-react";

function SentRequests({ onBack }) {
  const [sentRequests, setSentRequests] = useState([]);

  const getAuthHeader = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/friends/sent-requests", getAuthHeader())
      .then((response) => {
        setSentRequests(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sent requests:", error);
      });
  }, []);

  return (
    <section className="bg-sec rounded-3xl p-4">
      <div className="flex items-center mb-4">
        <button onClick={onBack} className="mr-2">
          <ArrowLeft className="w-5 h-5 txt" />
        </button>
        <h3 className="text-xl font-semibold txt">Sent Requests</h3>
      </div>
      {sentRequests.length === 0 ? (
        <p className="txt-dim">No sent requests.</p>
      ) : (
        <div className="space-y-4">
          {sentRequests.map((user) => (
            <div key={user._id} className="flex items-center">
              {user.ProfilePicture ? (
                <img
                  src={user.ProfilePicture}
                  className="w-9 h-9 rounded-full"
                  alt="Profile"
                />
              ) : (
                <div className="p-2 bg-ter rounded-full">
                  <User className="w-7 h-7" />
                </div>
              )}
              <div className="ml-4">
                <h4 className="text-lg font-medium line-clamp-1 txt">
                  {user.FirstName
                    ? `${user.FirstName} ${user.LastName || ""}`
                    : "old-user"}
                </h4>
                <p className="text-sm txt-dim line-clamp-1">{user.Bio}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default SentRequests;
