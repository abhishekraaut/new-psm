import { AuthLayout } from "@/components/Auth/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (otp.length === 4 && newPassword && verifyPassword) {
      if (newPassword === verifyPassword) {
        // Handle password reset logic
        navigate("/login");
      }
    }
  };

  const handleResendOTP = () => {
    // Handle resend OTP logic
    console.log("Resend OTP");
  };

  return (
    <AuthLayout>
      <div className="space-y-6 animate-fade-in">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Forgot Password</h1>
          <p className="text-slate-600 text-sm">
            enter OTP sent on your registered Email ID
          </p>
        </div>

        <form onSubmit={handleConfirm} className="space-y-6">
          {/* OTP Input */}
          <div className="flex justify-center">
            <InputOTP
              maxLength={4}
              value={otp}
              onChange={(value) => setOtp(value)}
            >
              <InputOTPGroup className="gap-3">
                <InputOTPSlot index={0} className="h-16 w-16 text-xl bg-white/80 border-slate-300" />
                <InputOTPSlot index={1} className="h-16 w-16 text-xl bg-white/80 border-slate-300" />
                <InputOTPSlot index={2} className="h-16 w-16 text-xl bg-white/80 border-slate-300" />
                <InputOTPSlot index={3} className="h-16 w-16 text-xl bg-white/80 border-slate-300" />
              </InputOTPGroup>
            </InputOTP>
          </div>

          {/* New Password */}
          <div>
            <Input
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="h-12 bg-white/80 border-slate-300"
            />
          </div>

          {/* Verify Password */}
          <div>
            <Input
              type="password"
              placeholder="Verify Password"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              required
              className="h-12 bg-white/80 border-slate-300"
            />
          </div>

          {/* Confirm Button */}
          <Button
            type="submit"
            className="w-full h-12 bg-[#0C5280] hover:bg-[#0C5280]/90 text-white font-medium"
          >
            Confirm
          </Button>

          {/* Resend OTP */}
          <div className="text-center">
            <p className="text-sm text-slate-600">
              Didn't get the OTP?{" "}
              <button
                type="button"
                onClick={handleResendOTP}
                className="text-[#0C5280] hover:underline font-medium"
              >
                Resend OTP
              </button>
            </p>
          </div>

          {/* Back Button */}
          <div className="pt-4">
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="flex items-center gap-2 text-slate-600 hover:text-slate-800"
            >
              <ChevronLeft className="h-4 w-4" />
              Back
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
