// import React, { useState, useEffect } from "react";

// function LoginWithTimer() {
//   const [timer, setTimer] = useState(null); // State to hold the countdown timer
//   const [isBlurry, setIsBlurry] = useState(false); // State to toggle background blur

//   const handleLogin = () => {
//     setTimer(3); // Start the timer at 3 seconds
//     setIsBlurry(true); // Apply blur effect to background
//   };

//   useEffect(() => {
//     if (timer === 0) {
//       setIsBlurry(false); // Remove blur effect after timer ends
//       return;
//     }

//     if (timer > 0) {
//       const countdown = setTimeout(() => setTimer(timer - 1), 1000); // Decrease the timer every second
//       return () => clearTimeout(countdown); // Cleanup timeout
//     }
//   }, [timer]);

//   return (
//     <div
//       className={`bg-[#ade6e1] ${
//         isBlurry ? "blur-sm" : ""
//       } min-h-screen flex items-center justify-center`}
//     >
//       <div className="bg-[#b1e0f2] mx-32 rounded-xl p-6">
//         <div className="w-[1300px] h-[700px] bg-box mx-auto rounded-[25px] border-[18px] border-[#a0e4a0] flex overflow-hidden">
//           <div className="flex-1 bg-gray-200">
//             <img
//               src="src/assets/Web-design.jpg"
//               alt="modern"
//               className="w-full h-full object-cover"
//             />
//           </div>

//           <div className="flex-1 flex flex-col items-center text-center space-y-6 py-10 px-6">
//             <div className="space-y-4">
//               <i className="fa-solid fa-star-half-stroke text-xl"></i>
//               <h1 className="text-5xl font-semibold">Welcome back!</h1>
//               <p className="text-xl font-medium">
//                 Please enter your login details below.
//               </p>
//             </div>

//             <div className="w-72 space-y-6">
//               <div className="relative">
//                 <label
//                   htmlFor="E_mail"
//                   className="block mb-1 text-xl font-medium"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="E_mail"
//                   name="E_mail"
//                   className="w-full border-b border-black focus:border-b-2 focus:outline-none transition"
//                 />
//               </div>
//               <div className="relative">
//                 <label
//                   htmlFor="Password"
//                   className="block mb-1 text-xl font-medium"
//                 >
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="Password"
//                   name="Password"
//                   className="w-full border-b border-black focus:border-b-2 focus:outline-none transition"
//                 />
//                 <i className="fa-regular fa-eye absolute right-0 bottom-1.5"></i>
//               </div>
//             </div>

//             <div>
//               <button
//                 type="button"
//                 onClick={handleLogin}
//                 className="w-64 h-10 bg-black text-white rounded-full hover:bg-aqua hover:text-black transition"
//               >
//                 Log In
//               </button>
//             </div>

//             {timer !== null && (
//               <div className="text-6xl font-bold text-red-600 mt-4">
//                 {timer}
//               </div>
//             )}

//             <div>
//               <p>Don't have an account?</p>
//               <a href="#" className="text-blue-600 underline">
//                 Sign Up
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LoginWithTimer;
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [timer, setTimer] = useState(null); // Countdown timer
  const [isBlurry, setIsBlurry] = useState(false); // Background blur
  const navigate = useNavigate(); // Navigation hook

  const handleLogin = () => {
    setTimer(3); // Start countdown at 3 seconds
    setIsBlurry(true); // Apply blur effect
  };

  useEffect(() => {
    if (timer === 0) {
      setIsBlurry(false); // Remove blur
      navigate("/clock"); // Redirect to Digital Clock
      return;
    }

    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000); // Countdown logic
      return () => clearTimeout(countdown); // Cleanup
    }
  }, [timer, navigate]);

  return (
    <div
      className={`bg-[#ade6e1] ${
        isBlurry ? "blur-sm" : ""
      } min-h-screen flex items-center justify-center`}
    >
      <div className="bg-[#b1e0f2] mx-32 rounded-xl p-6">
        <div className="w-[1300px] h-[700px] bg-box mx-auto rounded-[25px] border-[18px] border-[#a0e4a0] flex overflow-hidden">
          <div className="flex-1 bg-gray-200">
            <img
              src="src/assets/Web-design.jpg"
              alt="modern"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col items-center text-center space-y-6 py-10 px-6">
            <div className="space-y-4">
              <i className="fa-solid fa-star-half-stroke text-xl"></i>
              <h1 className="text-5xl font-semibold">Welcome back!</h1>
              <p className="text-xl font-medium">
                Please enter your login details below.
              </p>
            </div>

            <div className="w-72 space-y-6">
              <div className="relative">
                <label
                  htmlFor="E_mail"
                  className="block mb-1 text-xl font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="E_mail"
                  name="E_mail"
                  className="w-full border-b border-black focus:border-b-2 focus:outline-none transition"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="Password"
                  className="block mb-1 text-xl font-medium"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="Password"
                  name="Password"
                  className="w-full border-b border-black focus:border-b-2 focus:outline-none transition"
                />
                <i className="fa-regular fa-eye absolute right-0 bottom-1.5"></i>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleLogin}
                className="w-64 h-10 bg-black text-white rounded-full hover:bg-aqua hover:text-black transition"
              >
                Log In
              </button>
            </div>

            {timer !== null && (
              <div className="text-6xl font-bold text-red-600 mt-4">
                {timer}
              </div>
            )}

            <div>
              <p>Don't have an account?</p>
              <a href="#" className="text-blue-600 underline">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
