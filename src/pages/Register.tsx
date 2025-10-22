import { AuthLayout } from "@/components/Auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSendEmailOTP = () => {
    // Handle email OTP logic
    console.log("Send Email OTP");
  };

  const handleSendPhoneOTP = () => {
    // Handle phone OTP logic
    console.log("Send Phone OTP");
  };

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailId && phoneNumber && termsAccepted) {
      // Navigate to dashboard after successful registration
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
    }
  };

  return (
    <AuthLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Registration</h1>
          <p className="text-slate-600 text-sm">
            It seems you are logging in for the first time<br />
            Registration is required!
          </p>
        </div>

        <form onSubmit={handleVerifyOTP} className="space-y-4">
          {/* Email ID Row */}
          <div className="grid grid-cols-[1fr,auto] gap-3">
            <Input
              type="email"
              placeholder="Email ID"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
              className="h-12 bg-white/80 border-slate-300"
            />
            <Button
              type="button"
              onClick={handleSendEmailOTP}
              variant="outline"
              className="h-12 px-6 border-slate-300 hover:bg-slate-50"
            >
              Email OTP
            </Button>
          </div>

          {/* Phone Number Row */}
          <div className="grid grid-cols-[1fr,auto] gap-3">
            <Input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="h-12 bg-white/80 border-slate-300"
            />
            <Button
              type="button"
              onClick={handleSendPhoneOTP}
              variant="outline"
              className="h-12 px-6 border-slate-300 hover:bg-slate-50"
            >
              Phone OTP
            </Button>
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-center space-x-2 pt-2">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
            />
            <label
              htmlFor="terms"
              className="text-sm text-slate-600 cursor-pointer"
            >
              I have read and accept the{" "}
              <a href="#" className="text-[#0C5280] hover:underline">
                terms and conditions.
              </a>
            </label>
          </div>

          {/* Verify OTP Button */}
          <Button
            type="submit"
            disabled={!termsAccepted}
            className="w-full h-12 bg-[#0C5280] hover:bg-[#0C5280]/90 text-white font-medium mt-6"
          >
            Verify OTP
          </Button>

          {/* Back to Login */}
          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-sm text-slate-600 hover:text-slate-800"
            >
              Already have an account? Login here
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Register;
