// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/Logo.png"
// import axios from "axios";

// export default function OtpLogin() {
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [session, setSession] = useState("");
//   const [step, setStep] = useState("enter-mobile");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const api = axios.create({
//     baseURL: "http://localhost:8000", 
//   });


//   const sendOtp = async () => {

//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       setMessage("❌ कृपया वैध 10 अंकी मोबाईल नंबर टाका");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await api.post("/send-otp", { phone: `+91${mobile}` });
//       setSession(res.data.session);
//       setStep("enter-otp");
//       setMessage(`ओटीपी +91${mobile} वर पाठवला`);
//     } catch (err) {
//       setMessage("OTP पाठवता आला नाही");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const verifyOtp = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const res = await api.post("/verify-otp", {
//         phone: mobile,
//         otp,
//         session,
//       });
//       const token = res.data.accessToken;
//       localStorage.setItem("accessToken", token);
//       setMessage("यशस्वी लॉगिन!");
//       navigate("/DashboardPage");
//     } catch (err) {
//       setMessage("OTP पडताळणी अयशस्वी");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resendOtp = () => {
//     setOtp("");
//     setMessage("");
//     setStep("enter-mobile");
//     sendOtp();
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4">
//       {/* Logo */}
//       <img src={logo} alt="Agreeta" className="w-48 mb-6" />

//       {/* Form */}
//       <form
//         onSubmit={step === "enter-mobile" ? (e) => { e.preventDefault(); sendOtp(); } : verifyOtp}
//         className="w-full max-w-sm bg-white shadow-md rounded-lg p-6 space-y-6"
//       >
//         {/* Mobile Input */}
//         <div>
//           <label className="block text-gray-700 text-sm mb-2">मोबाईल नंबर</label>
//           <input
//             type="tel"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             placeholder="मोबाईल नंबर प्रविष्ट करा"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-500"
//             required
//             disabled={step === "enter-otp"}
//           />
//         </div>

//         {/* Send OTP Button */}
//         {step === "enter-mobile" && (
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
//             disabled={loading}
//           >
//             {loading ? "ओटीपी पाठवत आहे..." : "पडताळणी करा"}
//           </button>
//         )}

//         {/* OTP Input */}
//         {step === "enter-otp" && (
//           <>
//             <div>
//               <label className="block text-gray-700 text-sm mb-2">ओटीपी</label>
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="ओटीपी प्रविष्ट करा"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-green-500"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
//               disabled={loading}
//             >
//               {loading ? "पडताळणी करत आहे..." : "पडताळणी करा"}
//             </button>

//             <button
//               type="button"
//               onClick={resendOtp}
//               className="text-green-700 text-center w-full mt-2 underline text-sm"
//               disabled={loading}
//             >
//               ओटीपी पुन्हा पाठवा
//             </button>
//           </>
//         )}
//       </form>

//       {/* Status Message */}
//       {message && (
//         <p className="mt-4 text-sm text-gray-700 text-center">{message}</p>
//       )}
//     </div>
//   );
// }



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import logo from "../assets/Logo.png"
// import axios from "axios";

// export default function OtpLogin() {
//   const [mobile, setMobile] = useState("");
//   const [otp, setOtp] = useState("");
//   const [session, setSession] = useState("");
//   const [step, setStep] = useState("enter-mobile");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const api = axios.create({
//     baseURL: "http://localhost:8000", // Replace with your backend URL
//   });


//   const sendOtp = async () => {

//     if (!/^[6-9]\d{9}$/.test(mobile)) {
//       setMessage("❌ कृपया वैध 10 अंकी मोबाईल नंबर टाका");
//       return;
//     }

//     try {
//       setLoading(true);
//       const res = await api.post("/send-otp", { phone: `+91${mobile}` });
//       setSession(res.data.session);
//       setStep("enter-otp");
//       setMessage(`ओटीपी +91${mobile} वर पाठवला`);
//     } catch (err) {
//       setMessage("OTP पाठवता आला नाही");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const verifyOtp = async (e) => {
//     e.preventDefault();
//     try {
//       setLoading(true);
//       const res = await api.post("/verify-otp", {
//         phone: `+91${mobile}`,
//         otp,
//         session,
//       });
//       const token = res.data.accessToken;
//       localStorage.setItem("accessToken", token);
//       setMessage("यशस्वी लॉगिन!");
//       navigate("/DashboardPage");
//     } catch (err) {
//       setMessage("OTP पडताळणी अयशस्वी");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resendOtp = () => {
//     setOtp("");
//     setMessage("");
//     setStep("enter-mobile");
//     sendOtp();
//   };

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-blue-50 px-4 py-8">
//       {/* Logo */}
//       <div className="w-50 max-w-xs sm:max-w-sm mb-6">
//         <img src={logo} alt="Agreeta" className="w-full h-auto" />
//       </div>

//       {/* Form */}
//       <form
//         onSubmit={step === "enter-mobile" ? (e) => { e.preventDefault(); sendOtp(); } : verifyOtp}
//         className="w-full max-w-sm bg-white shadow-lg rounded-xl p-6 sm:p-8 space-y-6 border border-gray-100"
//       >
//         {/* Mobile Input */}
//         <div>
//           <label className="block text-gray-700 text-sm sm:text-base font-medium mb-2">मोबाईल नंबर</label>
//           <input
//             type="tel"
//             value={mobile}
//             onChange={(e) => setMobile(e.target.value)}
//             placeholder="मोबाईल नंबर प्रविष्ट करा"
//             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
//             required
//             disabled={step === "enter-otp"}
//           />
//         </div>

//         {/* Send OTP Button */}
//         {step === "enter-mobile" && (
//           <button
//             type="submit"
//             className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium text-base shadow-md"
//             disabled={loading}
//           >
//             {loading ? "ओटीपी पाठवत आहे..." : "पडताळणी करा"}
//           </button>
//         )}

//         {/* OTP Input */}
//         {step === "enter-otp" && (
//           <>
//             <div>
//               <label className="block text-gray-700 text-sm sm:text-base font-medium mb-2">ओटीपी</label>
//               <input
//                 type="text"
//                 value={otp}
//                 onChange={(e) => setOtp(e.target.value)}
//                 placeholder="ओटीपी प्रविष्ट करा"
//                 className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base text-center tracking-widest"
//                 required
//                 maxLength="6"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium text-base shadow-md"
//               disabled={loading}
//             >
//               {loading ? "पडताळणी करत आहे..." : "पडताळणी करा"}
//             </button>

//             <button
//               type="button"
//               onClick={resendOtp}
//               className="text-green-700 text-center w-full mt-2 underline text-sm hover:text-green-800 transition-colors"
//               disabled={loading}
//             >
//               ओटीपी पुन्हा पाठवा
//             </button>
//           </>
//         )}
//       </form>

//       {/* Status Message */}
//       {message && (
//         <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg max-w-sm w-full">
//           <p className="text-sm text-blue-800 text-center">{message}</p>
//         </div>
//       )}
//     </div>
//   );
// }
import React, {useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
// import axios from "axios";
import axios from "../contexts/axiosInstance";
import { AuthContext } from "../contexts/AuthContext";

export default function OtpLogin() {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [session, setSession] = useState("");
  const [step, setStep] = useState("enter-mobile");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { setAccessToken, setFarmerMobile } = useContext(AuthContext);
  const { accessToken } = useContext(AuthContext);

  useEffect(() => {
    if (accessToken) {
      navigate("/DashboardPage", { replace: true });
    }
  }, [accessToken, navigate]);

  // const api = axios.create({
  //   baseURL: "http://localhost:8000",
  // });

  const sendOtp = async () => {
    if (!/^[6-9]\d{9}$/.test(mobile)) {
      setMessage("❌ कृपया वैध 10 अंकी मोबाईल नंबर टाका");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post("/send-otp", { phone: `+91${mobile}` });
      setSession(res.data.session);
      setStep("enter-otp");
      setMessage(`ओटीपी +91${mobile} वर पाठवला`);
    } catch (err) {
      setMessage("OTP पाठवता आला नाही");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const fullMobile = `+91${mobile}`;
      const res = await axios.post("/verify-otp", {
        phone: fullMobile,
        otp,
        session,
      });

      const token = res.data.accessToken;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("farmerMobile", mobile);

      setAccessToken(token);
      setFarmerMobile(mobile);

      setMessage("✅ यशस्वी लॉगिन!");
      navigate("/DashboardPage");
    } catch (err) {
      setMessage("OTP पडताळणी अयशस्वी");
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = () => {
    setOtp("");
    setMessage("");
    setStep("enter-mobile");
    sendOtp();
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-50 to-blue-50 px-4 py-8">
      {/* Logo */}
      <div className="w-50 max-w-xs sm:max-w-sm mb-6">
        <img src={logo} alt="Agreeta" className="w-full h-auto" />
      </div>

      {/* Form */}
      <form
        onSubmit={
          step === "enter-mobile"
            ? (e) => {
              e.preventDefault();
              sendOtp();
            }
            : verifyOtp
        }
        className="w-full max-w-sm bg-white shadow-lg rounded-xl p-6 sm:p-8 space-y-6 border border-gray-100"
      >
        {/* Mobile Input */}
        <div>
          <label className="block text-gray-700 text-sm sm:text-base font-medium mb-2">
            मोबाईल नंबर
          </label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="मोबाईल नंबर प्रविष्ट करा"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
            required
            disabled={step === "enter-otp"}
          />
        </div>

        {/* Send OTP Button */}
        {step === "enter-mobile" && (
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium text-base shadow-md"
            disabled={loading}
          >
            {loading ? "ओटीपी पाठवत आहे..." : "पडताळणी करा"}
          </button>
        )}

        {/* OTP Input */}
        {step === "enter-otp" && (
          <>
            <div>
              <label className="block text-gray-700 text-sm sm:text-base font-medium mb-2">
                ओटीपी
              </label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="ओटीपी प्रविष्ट करा"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base text-center tracking-widest"
                required
                maxLength="6"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors font-medium text-base shadow-md"
              disabled={loading}
            >
              {loading ? "पडताळणी करत आहे..." : "पडताळणी करा"}
            </button>

            <button
              type="button"
              onClick={resendOtp}
              className="text-green-700 text-center w-full mt-2 underline text-sm hover:text-green-800 transition-colors"
              disabled={loading}
            >
              ओटीपी पुन्हा पाठवा
            </button>
          </>
        )}
      </form>

      {/* Status Message */}
      {message && (
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg max-w-sm w-full">
          <p className="text-sm text-blue-800 text-center">{message}</p>
        </div>
      )}
    </div>
  );
}
