import { useState } from "react";
import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar, Upload, BarChart3, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";

const CompanyProfile = () => {
  const [fileName, setFileName] = useState("Filename.Pdf");

  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 lg:p-8 animate-fade-in">
        <div className="mb-6 md:mb-8 flex items-center gap-3 md:gap-4 pb-4 border-b border-border">
          <div className="p-2 md:p-3 rounded-lg bg-primary/10">
            <BarChart3 className="h-5 w-5 md:h-7 md:w-7 text-primary" />
          </div>
          <div>
            <h2 className="text-xl md:text-3xl font-bold text-foreground">Enter Company Profile</h2>
            <p className="text-xs md:text-sm text-muted-foreground font-medium">Home / Master Data / Company Profile</p>
          </div>
        </div>

        <Card className="p-4 md:p-6 lg:p-8 bg-card shadow-lg border-border">
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="companyName" className="text-foreground font-medium">
                  Company Name
                </Label>
                <Input
                  id="companyName"
                  defaultValue="Creative Solutions ltd."
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="incorporationDate" className="text-foreground font-medium">
                  Incorporation Date
                </Label>
                <div className="relative">
                  <Input
                    id="incorporationDate"
                    placeholder="DD/MM/YYYY"
                    className="bg-input border-border pr-10"
                  />
                  <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-accent cursor-pointer" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="panCard" className="text-foreground font-medium">
                  PAN Card
                </Label>
                <Input
                  id="panCard"
                  defaultValue="BUVXM7467H"
                  className="bg-input border-border"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="gstin" className="text-foreground font-medium">
                  GSTIN
                </Label>
                <Input
                  id="gstin"
                  defaultValue="7TGL9RUV815IZ"
                  className="bg-input border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="gstinCertificate" className="text-foreground font-medium">
                  Upload GSTIN Certificate
                </Label>
                <div className="flex items-center gap-2 p-3 bg-input border border-border rounded-md">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="p-1.5 bg-foreground/10 rounded">
                      <svg className="h-4 w-4 text-destructive" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                      </svg>
                    </div>
                    <span className="text-sm text-foreground">{fileName}</span>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-accent hover:text-accent hover:bg-accent/10"
                  >
                    <Upload className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="msmeCertificate" className="text-foreground font-medium">
                  MSME Certificate
                </Label>
                <Input
                  id="msmeCertificate"
                  placeholder="Enter UDYAM Number"
                  className="bg-input border-border"
                />
              </div>
            </div>

            <div>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add GSTIN
              </Button>
            </div>

            <div className="pt-6 border-t border-border">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Nodal Officer Details
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4">
                <div className="space-y-2">
                  <Label htmlFor="officerName" className="text-foreground font-medium">
                    Name
                  </Label>
                  <Input
                    id="officerName"
                    defaultValue="Mr XYZ"
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="officerEmail" className="text-foreground font-medium">
                    Email ID
                  </Label>
                  <Input
                    id="officerEmail"
                    defaultValue="XYZ@gmail.com"
                    type="email"
                    className="bg-input border-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="officerPhone" className="text-foreground font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="officerPhone"
                    defaultValue="+91 1234567890"
                    className="bg-input border-border"
                  />
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                Need to update Nodal Officer?{" "}
                <a href="#" className="text-accent underline hover:text-accent/80">
                  Raise Request
                </a>
              </p>
            </div>

            <div className="flex justify-end pt-6 md:pt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 md:px-12 w-full md:w-auto font-bold shadow-md hover:shadow-lg transition-all"
              >
                Validate
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default CompanyProfile;
