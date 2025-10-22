import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { DataTable } from "@/components/ui/data-table";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, FileText, Download, Filter } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const RequestVerification = () => {
  const [selectedEscrow, setSelectedEscrow] = useState("");
  const [selectedConcession, setSelectedConcession] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [showDrafts, setShowDrafts] = useState(false);
  const [selectedDrafts, setSelectedDrafts] = useState<string[]>([]);
  const [searchDrafts, setSearchDrafts] = useState("");
  const [searchRequests, setSearchRequests] = useState("");

  // Mock data
  const escrowAccounts = [
    { id: "1", name: "Escrow Account 1 - ***123454" },
    { id: "2", name: "Escrow Account 2 - ***789898" },
  ];

  const concessionAgreements = [
    { id: "1", name: "PM E-Bus Sewa - 6789876785" },
    { id: "2", name: "PM E-Bus Sewa - 1234567890" },
  ];

  const concessionDetails = {
    schemeName: "PM E-Bus Sewa",
    loaReference: "6789876785",
    loaDate: "12-07-2025",
    caDate: "23-04-2025",
    busesAwarded: "50",
    busesDeployed: "30",
    billingCycle: "Custom (1-90 Days) 0",
    startDate: "23-04-2025",
    invoiceWindow: "20",
    paymentCycle: "P1,P2",
    approvalWindow: "21",
    caId: "99887766989",
    uploadedLOA: "Certificate 1",
  };

  const busMappingData = [
    { oemName: "ACF Name", depotName: "JHG DEPOT", deployment: "DD/MM/YYYY", busReg: "Bus Registration Number" },
    { oemName: "ACF Name", depotName: "JHG DEPOT", deployment: "DD/MM/YYYY", busReg: "Bus Registration Number" },
    { oemName: "ACF Name", depotName: "JHG DEPOT", deployment: "DD/MM/YYYY", busReg: "Bus Registration Number" },
    { oemName: "ACF Name", depotName: "JHG DEPOT", deployment: "DD/MM/YYYY", busReg: "Bus Registration Number" },
    { oemName: "ACF Name", depotName: "JHG DEPOT", deployment: "DD/MM/YYYY", busReg: "Bus Registration Number" },
  ];

  const escrowAccountDetails = {
    bankAccount: "123456789098",
    ifscCode: "SBI876543",
    beneficiaryName: "XYZ Construction",
    documentUploaded: "Cancelled Cheque",
  };

  const draftsData = [
    { id: "1", escrowAccount: "***123454", caId: "123456789098", state: "Delhi", city: "New-Delhi", depot: "Depot Name", pta: "DTC" },
    { id: "2", escrowAccount: "***789898", caId: "123456789098", state: "Rajasthan", city: "Jaipur", depot: "Depot Name", pta: "RSRTC" },
  ];

  const requestsData = [
    { id: "1", escrowAccount: "***678899", caId: "123456789098", state: "Delhi", city: "New-Delhi", depot: "Depot Name", pta: "DTC", status: "Pending at PTA" },
    { id: "2", escrowAccount: "***900889", caId: "123456789098", state: "Rajasthan", city: "Jaipur", depot: "Depot Name", pta: "RSRTC", status: "Approved by PTA" },
    { id: "3", escrowAccount: "***022918", caId: "123456789098", state: "Haryana", city: "Gurugram", depot: "Depot Name", pta: "Haryana Roadways", status: "Approved by CESL" },
  ];

  const handleCreateMapping = () => {
    if (selectedEscrow && selectedConcession) {
      setShowDetails(true);
    }
  };

  const handleSaveDraft = () => {
    setShowDrafts(true);
  };

  const handleSelectDraft = (id: string) => {
    setSelectedDrafts(prev =>
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  const handleSendForVerification = () => {
    console.log("Sending drafts for verification:", selectedDrafts);
    setShowDrafts(false);
    setShowDetails(false);
    setSelectedEscrow("");
    setSelectedConcession("");
    setSelectedDrafts([]);
  };

  const getStatusColor = (status: string) => {
    if (status === "Pending at PTA") return "text-red-600";
    if (status === "Approved by PTA") return "text-orange-500";
    if (status === "Approved by CESL") return "text-green-600";
    return "text-foreground";
  };

  const draftsColumns = [
    { header: "#", accessor: "id" as const },
    { header: "Escrow Account", accessor: "escrowAccount" as const },
    { header: "CA ID", accessor: "caId" as const },
    { header: "State", accessor: "state" as const },
    { header: "City", accessor: "city" as const },
    { header: "Depot", accessor: "depot" as const },
    { header: "PTA", accessor: "pta" as const },
    {
      header: "Preview",
      accessor: (row: typeof draftsData[0]) => (
        <Button variant="ghost" size="sm">
          <Eye className="h-4 w-4" />
        </Button>
      ),
    },
    {
      header: "Select",
      accessor: (row: typeof draftsData[0]) => (
        <Checkbox
          checked={selectedDrafts.includes(row.id)}
          onCheckedChange={() => handleSelectDraft(row.id)}
        />
      ),
    },
  ];

  const requestsColumns = [
    { header: "#", accessor: "id" as const },
    { header: "Escrow Account", accessor: "escrowAccount" as const },
    { header: "CA ID", accessor: "caId" as const },
    { header: "State", accessor: "state" as const },
    { header: "City", accessor: "city" as const },
    { header: "Depot", accessor: "depot" as const },
    { header: "PTA", accessor: "pta" as const },
    {
      header: "Status",
      accessor: (row: typeof requestsData[0]) => (
        <span className={`font-medium ${getStatusColor(row.status)}`}>
          {row.status}
        </span>
      ),
    },
    {
      header: "Preview",
      accessor: (row: typeof requestsData[0]) => (
        <Button variant="ghost" size="sm">
          <Eye className="h-4 w-4" />
        </Button>
      ),
    },
  ];

  const filteredDrafts = draftsData.filter(draft =>
    Object.values(draft).some(val =>
      val.toString().toLowerCase().includes(searchDrafts.toLowerCase())
    )
  );

  const filteredRequests = requestsData.filter(request =>
    Object.values(request).some(val =>
      val.toString().toLowerCase().includes(searchRequests.toLowerCase())
    )
  );

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Enter Request for Verification Details</h1>
          <p className="text-muted-foreground">Home / Master Data / Request for Verification</p>
        </div>

        <Tabs defaultValue="request" className="space-y-6">
          <TabsList>
            <TabsTrigger value="request">Request for Verification</TabsTrigger>
            <TabsTrigger value="list">Request List</TabsTrigger>
          </TabsList>

          <TabsContent value="request" className="space-y-6">
            <div className="bg-accent/30 rounded-lg p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="escrow" className="text-sm font-medium">
                    Escrow Account<span className="text-red-500">*</span>
                  </Label>
                  <Select value={selectedEscrow} onValueChange={setSelectedEscrow}>
                    <SelectTrigger id="escrow">
                      <SelectValue placeholder="Select Escrow Account" />
                    </SelectTrigger>
                    <SelectContent>
                      {escrowAccounts.map((account) => (
                        <SelectItem key={account.id} value={account.id}>
                          {account.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="concession" className="text-sm font-medium">
                    Concession Agreement<span className="text-red-500">*</span>
                  </Label>
                  <Select value={selectedConcession} onValueChange={setSelectedConcession}>
                    <SelectTrigger id="concession">
                      <SelectValue placeholder="Select Escrow Account" />
                    </SelectTrigger>
                    <SelectContent>
                      {concessionAgreements.map((agreement) => (
                        <SelectItem key={agreement.id} value={agreement.id}>
                          {agreement.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleCreateMapping} disabled={!selectedEscrow || !selectedConcession}>
                  Create Mapping
                </Button>
              </div>
            </div>

            {showDetails && (
              <>
                <div className="bg-card rounded-lg p-6 shadow-sm space-y-4">
                  <h2 className="text-xl font-semibold text-primary">Concession Agreement Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Scheme/Program Name:</p>
                      <p className="font-medium">{concessionDetails.schemeName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">LOA Reference No.:</p>
                      <p className="font-medium">{concessionDetails.loaReference}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">LOA Date:</p>
                      <p className="font-medium">{concessionDetails.loaDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">CA Date:</p>
                      <p className="font-medium">{concessionDetails.caDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">No. Of Buses Awarded:</p>
                      <p className="font-medium">{concessionDetails.busesAwarded}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">No. Of Buses Deployed:</p>
                      <p className="font-medium">{concessionDetails.busesDeployed}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Billing Cycle:</p>
                      <p className="font-medium">{concessionDetails.billingCycle}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Start Date:</p>
                      <p className="font-medium">{concessionDetails.startDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Invoice Submission Window (Days):</p>
                      <p className="font-medium">{concessionDetails.invoiceWindow}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Payment Cycle:</p>
                      <p className="font-medium">{concessionDetails.paymentCycle}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Deemed Approval Window <span className="text-xs">(in Days)</span>:</p>
                      <p className="font-medium">{concessionDetails.approvalWindow}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">CA ID:</p>
                      <p className="font-medium">{concessionDetails.caId}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Uploaded LOA</p>
                    <Button variant="outline" size="sm" className="gap-2">
                      <FileText className="h-4 w-4" />
                      {concessionDetails.uploadedLOA}
                    </Button>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-sm space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold text-primary">Bus Mapping</h2>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Input
                          placeholder="Search"
                          className="pl-8 w-[200px]"
                        />
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
                      </div>
                      <Button variant="outline" size="icon">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium">OEM Name</th>
                          <th className="px-4 py-3 text-left text-sm font-medium">Depot Name</th>
                          <th className="px-4 py-3 text-left text-sm font-medium">Date of Deployment</th>
                          <th className="px-4 py-3 text-left text-sm font-medium">Bus Registration Number</th>
                          <th className="px-4 py-3 text-left text-sm font-medium">View RC</th>
                        </tr>
                      </thead>
                      <tbody>
                        {busMappingData.map((bus, idx) => (
                          <tr key={idx} className="border-b border-border">
                            <td className="px-4 py-3 text-sm">{bus.oemName}</td>
                            <td className="px-4 py-3 text-sm">{bus.depotName}</td>
                            <td className="px-4 py-3 text-sm">{bus.deployment}</td>
                            <td className="px-4 py-3 text-sm">{bus.busReg}</td>
                            <td className="px-4 py-3">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4 text-primary" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-6 shadow-sm space-y-4">
                  <h2 className="text-xl font-semibold text-primary">Mapped Escrow Account Details</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Bank Account No.:</p>
                      <p className="font-medium">{escrowAccountDetails.bankAccount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">IFSC Code:</p>
                      <p className="font-medium">{escrowAccountDetails.ifscCode}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Beneficiary Name:</p>
                      <p className="font-medium">{escrowAccountDetails.beneficiaryName}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Document Uploaded:</p>
                      <p className="font-medium">{escrowAccountDetails.documentUploaded}</p>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <Button onClick={handleSaveDraft}>Save Draft</Button>
                </div>
              </>
            )}

            {showDrafts && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-primary">Drafts List</h2>
                <DataTable
                  data={filteredDrafts}
                  columns={draftsColumns}
                  itemsPerPage={10}
                />
                <div className="flex justify-end">
                  <Button
                    onClick={handleSendForVerification}
                    disabled={selectedDrafts.length === 0}
                  >
                    Send Selected for Verification
                  </Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="list" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="relative flex-1 max-w-sm">
                <Input
                  placeholder="Search"
                  value={searchRequests}
                  onChange={(e) => setSearchRequests(e.target.value)}
                  className="pl-8"
                />
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground">🔍</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Filter className="h-4 w-4" />
                </Button>
                <Button variant="default" size="icon">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <DataTable
              data={filteredRequests}
              columns={requestsColumns}
              itemsPerPage={10}
            />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default RequestVerification;
