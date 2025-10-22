import { AuthLayout } from "@/components/Auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginMethod, setLoginMethod] = useState<"email" | "phone">("email");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPasswordStep, setShowPasswordStep] = useState(false);

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();
    // Validate email/phone and move to password step
    if (emailOrPhone) {
      setShowPasswordStep(true);
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo: navigate to dashboard
    if (password) {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    }
  };

  const handleLoginWithOTP = () => {
    // Handle OTP login
    localStorage.setItem("isAuthenticated", "true");
    navigate("/dashboard");
  };

  const handleBack = () => {
    setShowPasswordStep(false);
    setPassword("");
  };

  return (
    <AuthLayout>
      <div className="space-y-6 animate-fade-in">
        {!showPasswordStep ? (
          <>
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Login</h1>
              <p className="text-slate-600">Login with Email ID or Phone Number</p>
            </div>

            <form onSubmit={handleContinue} className="space-y-6">
              {/* Toggle Buttons */}
              <div className="flex rounded-lg overflow-hidden border border-slate-300">
                <button
                  type="button"
                  onClick={() => setLoginMethod("email")}
                  className={`flex-1 py-3 font-medium transition-colors ${
                    loginMethod === "email"
                      ? "bg-[#0C5280] text-white"
                      : "bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Email ID
                </button>
                <button
                  type="button"
                  onClick={() => setLoginMethod("phone")}
                  className={`flex-1 py-3 font-medium transition-colors ${
                    loginMethod === "phone"
                      ? "bg-[#0C5280] text-white"
                      : "bg-white text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  Phone Number
                </button>
              </div>

              {/* Input Field */}
              <div>
                <Input
                  type={loginMethod === "email" ? "email" : "tel"}
                  placeholder={`Enter your ${loginMethod === "email" ? "Email ID" : "Phone Number"}`}
                  value={emailOrPhone}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  required
                  className="h-12 bg-white/80 border-slate-300"
                />
              </div>

              {/* Continue Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-[#0C5280] hover:bg-[#0C5280]/90 text-white font-medium"
              >
                Continue
              </Button>

              {/* Additional Links */}
              <div className="text-center space-y-2">
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm text-slate-600 hover:text-slate-800"
                >
                  Forgot Password?
                </button>
                <div className="text-sm text-slate-600">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className="text-[#0C5280] hover:underline font-medium"
                  >
                    Register here
                  </button>
                </div>
              </div>
            </form>
          </>
        ) : (
          <>
            <div>
              <h1 className="text-3xl font-bold text-slate-800 mb-2">Login</h1>
              <p className="text-slate-600">please enter your password to login</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              {/* Password Field */}
              <div>
                <Input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="h-12 bg-white/80 border-slate-300"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => navigate("/forgot-password")}
                  className="text-sm text-[#0C5280] hover:underline"
                >
                  Forgot Password
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full h-12 bg-[#0C5280] hover:bg-[#0C5280]/90 text-white font-medium"
              >
                Login
              </Button>

              {/* Or Divider */}
              <div className="text-center text-slate-500 text-sm">or</div>

              {/* Login With OTP Button */}
              <Button
                type="button"
                variant="outline"
                onClick={handleLoginWithOTP}
                className="w-full h-12 border-[#0C5280] text-[#0C5280] hover:bg-[#0C5280]/5 font-medium"
              >
                Login With OTP
              </Button>

              {/* Back Link */}
              <div className="text-left">
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-sm text-slate-600 hover:text-slate-800 flex items-center gap-1"
                >
                  <span>←</span> Back
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </AuthLayout>
  );
};

export default Login;
