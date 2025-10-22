import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Search, Filter, Download, Paperclip, Edit, Info } from "lucide-react";
import { useState } from "react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface EscrowAccountData {
  id: number;
  escrowAccountId: string;
  bankAccountNumber: string;
  beneficiaryName: string;
  ifscCode: string;
  documentUploaded: string;
}

const mockEscrowData: EscrowAccountData[] = [
  {
    id: 1,
    escrowAccountId: "123456789098",
    bankAccountNumber: "123456789098",
    beneficiaryName: "XYZ Construction",
    ifscCode: "SBI876543",
    documentUploaded: "Cancelled Cheque",
  },
  {
    id: 2,
    escrowAccountId: "80096789098",
    bankAccountNumber: "80096789098",
    beneficiaryName: "Ajay Sharma",
    ifscCode: "HDFC0009877",
    documentUploaded: "Bank Statement",
  },
  {
    id: 3,
    escrowAccountId: "123456780098",
    bankAccountNumber: "123456780098",
    beneficiaryName: "Creative Solutions Lmt.",
    ifscCode: "ICIC19098986",
    documentUploaded: "EFT Form Verified By Bank",
  },
];

const EscrowAccount = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [ifscCode, setIfscCode] = useState("HDFC1234567");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [fileName, setFileName] = useState("");

  const filteredData = mockEscrowData.filter((item) =>
    Object.values(item).some((value) =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const columns = [
    {
      header: "#",
      accessor: (row: EscrowAccountData) => row.id,
      className: "w-12",
    },
    {
      header: "Escrow Account ID",
      accessor: "escrowAccountId" as keyof EscrowAccountData,
    },
    {
      header: "Bank Account Number",
      accessor: "bankAccountNumber" as keyof EscrowAccountData,
    },
    {
      header: "Beneficiary Name",
      accessor: "beneficiaryName" as keyof EscrowAccountData,
    },
    {
      header: "IFSC Code",
      accessor: "ifscCode" as keyof EscrowAccountData,
    },
    {
      header: "Document Uploaded",
      accessor: (row: EscrowAccountData) => (
        <div className="flex items-center gap-2">
          <Paperclip className="h-4 w-4" />
          <span>{row.documentUploaded}</span>
        </div>
      ),
    },
    {
      header: "Modify",
      accessor: (row: EscrowAccountData) => (
        <Button variant="ghost" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      ),
      className: "w-20",
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-4 md:p-6 lg:p-8">
        <div className="mb-6 pb-4 border-b border-border">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-primary/10 mt-1">
              <div className="h-6 w-6 bg-primary/20 rounded" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                Enter Escrow Account Details
              </h1>
              <p className="text-sm text-muted-foreground">
                Home / Master Data / Escrow Account
              </p>
            </div>
          </div>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="account">Escrow Account</TabsTrigger>
            <TabsTrigger value="list">Escrow Account List</TabsTrigger>
          </TabsList>

          <TabsContent value="account">
            <div className="bg-card rounded-lg p-6 md:p-8 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="bankAccount">Bank Account Number</Label>
                  <Input
                    id="bankAccount"
                    type="password"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                    placeholder="************"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ifscCode">IFSC Code</Label>
                  <Input
                    id="ifscCode"
                    value={ifscCode}
                    onChange={(e) => setIfscCode(e.target.value)}
                    placeholder="HDFC1234567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="beneficiaryName">Beneficiary Name</Label>
                  <Input
                    id="beneficiaryName"
                    value={beneficiaryName}
                    onChange={(e) => setBeneficiaryName(e.target.value)}
                    placeholder="Enter beneficiary name"
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <Label htmlFor="documents">Upload Proof Documents</Label>
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Input
                      id="documents"
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        setFileName(file ? file.name : "");
                      }}
                    />
                    <label
                      htmlFor="documents"
                      className="flex items-center justify-between w-full px-3 py-2 border border-input bg-background rounded-md cursor-pointer hover:bg-accent"
                    >
                      <span className="text-sm text-muted-foreground">
                        {fileName || "No file chosen"}
                      </span>
                      <span className="text-sm text-muted-foreground">Choose File</span>
                    </label>
                  </div>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="shrink-0">
                          <Info className="h-4 w-4 text-primary" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Upload cancelled cheque or bank statement</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="px-12 py-2 bg-primary hover:bg-primary/90">
                  Validate
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="list">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                <div className="relative w-full sm:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button className="bg-primary hover:bg-primary/90">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>

              <DataTable data={filteredData} columns={columns} itemsPerPage={10} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default EscrowAccount;
