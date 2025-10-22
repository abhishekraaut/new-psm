import { PublicHeader } from "@/components/Home/PublicHeader";
import { PublicFooter } from "@/components/Home/PublicFooter";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <PublicHeader />
      <div className="flex-1 grid md:grid-cols-2">
        {/* Left side - Illustration */}
        <div className="hidden md:flex items-center justify-center bg-gradient-to-br from-cyan-50 to-cyan-100 p-8">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              PM-eBus Sewa - Payment Security Mechanism
            </h2>
            <div className="relative mt-8">
              {/* Bus Illustration */}
              <div className="space-y-6">
                <div className="flex justify-around mb-8">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="text-center">
                      <div className="w-16 h-24 bg-green-700 rounded-t-full mx-auto"></div>
                      <div className="text-4xl">🌲</div>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <div className="bg-blue-600 rounded-lg p-6 shadow-xl">
                    <div className="flex items-center gap-4">
                      <div className="text-6xl">🚌</div>
                      <div className="text-white">
                        <div className="font-bold text-xl">ECO BUS</div>
                        <div className="text-sm">PM-eBus Sewa</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 bg-white rounded-lg p-4 shadow-lg">
                    <div className="text-center font-bold text-lg text-slate-700">BUS STOP</div>
                    <div className="flex justify-center gap-8 mt-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="text-3xl">🚶</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex items-center justify-center bg-gradient-to-br from-emerald-50/30 to-amber-50/30 p-6">
          <div className="w-full max-w-md">
            {children}
          </div>
        </div>
      </div>
      <PublicFooter />
    </div>
  );
};
