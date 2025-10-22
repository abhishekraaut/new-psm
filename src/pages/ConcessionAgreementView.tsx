import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Eye, Filter, FileText } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ConcessionAgreementView = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Mock data for view
  const mockBusMappings = [
    {
      oemName: "ACF Name",
      depotName: "JHG DEPOT",
      deploymentDate: "DD/MM/YYYY",
      busRegistration: "Bus Registration Number",
    },
    {
      oemName: "ACF Name",
      depotName: "ASD1234",
      deploymentDate: "DD/MM/YYYY",
      busRegistration: "Bus Registration Number",
    },
    {
      oemName: "ACF Name",
      depotName: "JHG DEPOT",
      deploymentDate: "DD/MM/YYYY",
      busRegistration: "Bus Registration Number",
    },
    {
      oemName: "ACF Name",
      depotName: "JHG DEPOT",
      deploymentDate: "DD/MM/YYYY",
      busRegistration: "Bus Registration Number",
    },
    {
      oemName: "ACF Name",
      depotName: "JHG DEPOT",
      deploymentDate: "DD/MM/YYYY",
      busRegistration: "Bus Registration Number",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Enter Concession Agreement Details</h1>
          <p className="text-muted-foreground">Home / Master Data / Concession Agreement</p>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Concession Agreement</span>
            <span className="font-semibold text-primary">Concession Agreement List</span>
          </div>
        </div>

        <div className="bg-card rounded-lg p-6 shadow-sm space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" onClick={() => navigate("/concession-agreement")}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <Badge variant="outline" className="gap-2 py-2 px-4 bg-green-50 text-green-700 border-green-200">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="font-semibold">Approved By PTA/CESL</span>
              </Badge>
            </div>
            <Button variant="outline" className="gap-2">
              <FileText className="h-4 w-4" />
            </Button>
          </div>

          {/* Concession Agreement Details */}
          <div>
            <h2 className="text-xl font-bold mb-4">Concession Agreement Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Scheme/Program Name:</p>
                <p className="font-semibold">PM E-Bus Sewa</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LOA Reference No.:</p>
                <p className="font-semibold">6789876785</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">LOA Date:</p>
                <p className="font-semibold">12-07-2025</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">CA Date.:</p>
                <p className="font-semibold">23-04-2025</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">No. Of Buses Awarded:</p>
                <p className="font-semibold">50</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">No. Of Buses Deployed:</p>
                <p className="font-semibold">30</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Billing Cycle:</p>
                <p className="font-semibold">Custom (1-90 Days) 8</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Start Date:</p>
                <p className="font-semibold">23-04-2025</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Invoice Submission Window (Days):</p>
                <p className="font-semibold">20</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Payment Cycle:</p>
                <p className="font-semibold">P1,P2</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Deemed Approval Window <span className="text-xs">(in Days)</span>:</p>
                <p className="font-semibold">21</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">CA ID</p>
                <p className="font-semibold">998877649989</p>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-muted-foreground mb-2">Uploaded LOA</p>
              <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded">
                <FileText className="h-4 w-4" />
                <span className="text-sm">Certificate 1</span>
              </div>
            </div>
          </div>

          {/* Bus Mapping */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Bus Mapping</h2>
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Input placeholder="Search" className="pl-10 w-64" />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2">
                    <svg
                      className="h-4 w-4 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                </div>
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="bg-background rounded-lg overflow-hidden border">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left py-3 px-4 font-semibold">OEM Name</th>
                    <th className="text-left py-3 px-4 font-semibold">Depot Name</th>
                    <th className="text-left py-3 px-4 font-semibold">Date of Deployment</th>
                    <th className="text-left py-3 px-4 font-semibold">Bus Registration Number</th>
                    <th className="text-left py-3 px-4 font-semibold">View RC</th>
                  </tr>
                </thead>
                <tbody>
                  {mockBusMappings.map((bus, index) => (
                    <tr key={index} className="border-b last:border-b-0 hover:bg-muted/30">
                      <td className="py-3 px-4 text-muted-foreground">{bus.oemName}</td>
                      <td className="py-3 px-4 text-muted-foreground">{bus.depotName}</td>
                      <td className="py-3 px-4 text-muted-foreground">{bus.deploymentDate}</td>
                      <td className="py-3 px-4 text-muted-foreground">{bus.busRegistration}</td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="icon">
                          <Eye className="h-4 w-4 text-primary" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Mapped Escrow Account Details */}
          <div>
            <h2 className="text-xl font-bold mb-4">Mapped Escrow Account Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-muted/30 p-4 rounded-lg">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Bank Account No:</p>
                <p className="font-semibold">123456789098</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">IFSC Code:</p>
                <p className="font-semibold">SBIB76543</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Beneficiary Name:</p>
                <p className="font-semibold">XYZ Construction</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Document Uploaded:</p>
                <p className="font-semibold">Cancelled Cheque</p>
              </div>
            </div>
          </div>

          {/* Public Remarks */}
          <div className="bg-green-600 text-white rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
                <span className="font-semibold">Public Remarks</span>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  Visible to everyone
                </Badge>
              </div>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </div>
            <div className="pl-7">
              <p className="font-semibold mb-2">Lorem Ipsum Dolor</p>
              <p className="text-sm opacity-90">
                Lorem Ipsum Dolor Sit Armet, Counsectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut
                Labore Et Dolore Magna Aliqua. Ut Enim Ad Minim Veniam, Quis Nostrud Exercitation Ullamco Laboris
                Nisi Ut Aliquip Ex Ea Commodo Consequat
              </p>
            </div>
          </div>

          {/* Comment Input */}
          <div className="flex gap-2">
            <Input placeholder="Type note here" className="flex-1" />
            <Button>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </div>

          {/* Modify Button */}
          <div className="pt-4">
            <Button className="w-full md:w-auto">Modify</Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ConcessionAgreementView;
