import { DashboardLayout } from "@/components/Layout/DashboardLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Upload, ArrowLeft, Eye, Edit2, Download, Filter } from "lucide-react";
import { cn } from "@/lib/utils";
import { DataTable } from "@/components/ui/data-table";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

// Form validation schema
const concessionFormSchema = z.object({
  state: z.string().min(1, "State is required"),
  city: z.string().min(1, "City is required"),
  ulb: z.string().min(1, "ULB is required"),
  pta: z.string().min(1, "PTA is required"),
  schemeName: z.string().min(1, "Scheme/Program Name is required"),
  loaReference: z.string().min(1, "LOA Reference number is required"),
  loaFile: z.any().optional(),
  loaDate: z.date({ required_error: "LOA Date is required" }),
  busesAwarded: z.string().min(1, "Number of Buses Awarded is required"),
  busesDeployed: z.string().min(1, "Number of Buses Deployed is required"),
  caDate: z.date({ required_error: "CA Date is required" }),
  billingCycle: z.string().min(1, "Billing Cycle is required"),
  startDate: z.date({ required_error: "Start Date is required" }),
  invoiceWindow: z.string().min(1, "Invoice Submission Window is required"),
  p1: z.string().min(1, "P1 is required"),
  p2: z.string().min(1, "P2 is required"),
  deemedApproval: z.boolean(),
  deemedApprovalWindow: z.string().optional(),
});

// Bus mapping schema
const busMappingSchema = z.object({
  oemName: z.string().min(1, "OEM Name is required"),
  depotName: z.string().min(1, "Depot Name is required"),
  deploymentDate: z.date({ required_error: "Date of Deployment is required" }),
  busRegistration: z.string().min(1, "Bus Registration Number is required"),
  rcFile: z.any().optional(),
});

type BusMapping = z.infer<typeof busMappingSchema> & { id: string };

const ConcessionAgreement = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("form");
  const [formStep, setFormStep] = useState(1);
  const [busMappings, setBusMappings] = useState<BusMapping[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Main form
  const form = useForm<z.infer<typeof concessionFormSchema>>({
    resolver: zodResolver(concessionFormSchema),
    defaultValues: {
      deemedApproval: false,
    },
  });

  // Bus mapping form
  const busForm = useForm<z.infer<typeof busMappingSchema>>({
    resolver: zodResolver(busMappingSchema),
  });

  const onSubmitMainForm = (data: z.infer<typeof concessionFormSchema>) => {
    console.log(data);
    setFormStep(2);
  };

  const handleAddBus = (data: z.infer<typeof busMappingSchema>) => {
    const newBus: BusMapping = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
    };
    setBusMappings([...busMappings, newBus]);
    busForm.reset();
    toast.success("Bus added successfully");
  };

  const handleValidate = () => {
    if (busMappings.length === 0) {
      toast.error("Please add at least one bus mapping");
      return;
    }
    setShowPreview(true);
  };

  const handleSubmit = () => {
    toast.success("Concession Agreement submitted successfully");
    setFormStep(1);
    setShowPreview(false);
    setBusMappings([]);
    form.reset();
    busForm.reset();
  };

  const handleReEnter = () => {
    setShowPreview(false);
  };

  // Mock data for the list
  const mockConcessionList = [
    {
      id: 1,
      caId: "123456789098",
      scheme: "PM E-Bus Sewa",
      loaReference: "678987678",
      loaDate: "12/09/2025",
      billingCycle: "Monthly",
      paymentCycle: "02",
    },
    {
      id: 2,
      caId: "800096789098",
      scheme: "PM E-Drive",
      loaReference: "900887788",
      loaDate: "10/06/2025",
      billingCycle: "Semi-Monthly",
      paymentCycle: "03",
    },
    {
      id: 3,
      caId: "123456780098",
      scheme: "PM E-Drive",
      loaReference: "144990099",
      loaDate: "24/05/2025",
      billingCycle: "Custom (1-90 Days)",
      paymentCycle: "04",
    },
  ];

  const columns = [
    {
      header: "#",
      accessor: (row: any) => row.id,
    },
    {
      header: "CA ID",
      accessor: "caId" as const,
    },
    {
      header: "Scheme/Program Name",
      accessor: "scheme" as const,
    },
    {
      header: "LOA Reference No.",
      accessor: "loaReference" as const,
    },
    {
      header: "LOA Date",
      accessor: "loaDate" as const,
    },
    {
      header: "Billing Cycle",
      accessor: "billingCycle" as const,
    },
    {
      header: "Payment Cycle",
      accessor: "paymentCycle" as const,
    },
    {
      header: "View",
      accessor: (row: any) => (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate(`/concession-agreement/view/${row.id}`)}
        >
          <Eye className="h-4 w-4" />
        </Button>
      ),
    },
    {
      header: "Modify",
      accessor: (row: any) => (
        <Button variant="ghost" size="icon">
          <Edit2 className="h-4 w-4" />
        </Button>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Enter Concession Agreement Details</h1>
          <p className="text-muted-foreground">Home / Master Data / Concession Agreement</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="form">Concession Agreement</TabsTrigger>
            <TabsTrigger value="list">Concession Agreement List</TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="mt-6">
            {formStep === 1 && (
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmitMainForm)} className="space-y-6">
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State*</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select State" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="maharashtra">Maharashtra</SelectItem>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="karnataka">Karnataka</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>City*</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select City" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="mumbai">Mumbai</SelectItem>
                                <SelectItem value="pune">Pune</SelectItem>
                                <SelectItem value="bangalore">Bangalore</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="ulb"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>ULB</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select ULB" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="ulb1">ULB 1</SelectItem>
                                <SelectItem value="ulb2">ULB 2</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="pta"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>PTA*</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select PTA" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="pta1">PTA 1</SelectItem>
                                <SelectItem value="pta2">PTA 2</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="schemeName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Scheme/Program Name*</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select Scheme/Program Name" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="pm-ebus">PM E-Bus Sewa</SelectItem>
                                <SelectItem value="pm-edrive">PM E-Drive</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Row 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="loaReference"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LOA Reference number*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter LOA Reference number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="loaFile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Upload LOA*</FormLabel>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 border border-input rounded-md px-3 py-2 flex-1">
                                <Upload className="h-4 w-4" />
                                <span className="text-sm">Filename.Pdf</span>
                              </div>
                              <Button type="button" size="icon" variant="outline">
                                <Upload className="h-4 w-4" />
                              </Button>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="loaDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>LOA Date*</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Row 4 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="busesAwarded"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>No. of Buses Awarded*</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="busesDeployed"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>No. of Buses Deployed*</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="caDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>CA Date*</FormLabel>
                            <FormControl>
                              <Input
                                type="text"
                                placeholder="23-04-2025"
                                value={field.value ? format(field.value, "dd-MM-yyyy") : ""}
                                readOnly
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Row 5 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <FormField
                        control={form.control}
                        name="billingCycle"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Billing Cycle*</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="monthly">Monthly</SelectItem>
                                <SelectItem value="quarterly">Quarterly</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="startDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Start Date</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? format(field.value, "dd/MM/yyyy") : <span>DD/MM/YYYY</span>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="invoiceWindow"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Invoice Submission Window (days)*</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Payment Terms */}
                    <div>
                      <FormLabel>Payment terms</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                        <FormField
                          control={form.control}
                          name="p1"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm text-muted-foreground">P1</FormLabel>
                              <div className="flex items-center gap-2">
                                <FormControl>
                                  <Input type="number" {...field} />
                                </FormControl>
                                <span>%</span>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="p2"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-sm text-muted-foreground">P2</FormLabel>
                              <div className="flex items-center gap-2">
                                <FormControl>
                                  <Input type="number" {...field} />
                                </FormControl>
                                <span>%</span>
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </div>

                    {/* Deemed Approval */}
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="deemedApproval"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Deemed Approval Clause in CA</FormLabel>
                            </div>
                          </FormItem>
                        )}
                      />

                      {form.watch("deemedApproval") && (
                        <FormField
                          control={form.control}
                          name="deemedApprovalWindow"
                          render={({ field }) => (
                            <FormItem className="max-w-xs">
                              <FormControl>
                                <Input placeholder="Deemed Approval Window in days" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" onClick={() => form.reset()}>
                        Reset
                      </Button>
                      <Button type="submit">Next</Button>
                    </div>
                  </form>
                </Form>
              </div>
            )}

            {formStep === 2 && !showPreview && (
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <Button variant="ghost" size="icon" onClick={() => setFormStep(1)}>
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">Bus Mapping</h2>
                  <Button variant="outline" className="gap-2">
                    <Upload className="h-4 w-4" />
                    Bulk Upload
                  </Button>
                </div>

                <Form {...busForm}>
                  <form onSubmit={busForm.handleSubmit(handleAddBus)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                      <FormField
                        control={busForm.control}
                        name="oemName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>OEM Name*</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={busForm.control}
                        name="depotName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Depot Name*</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="depot1">Depot 1</SelectItem>
                                <SelectItem value="depot2">Depot 2</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={busForm.control}
                        name="deploymentDate"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Date of Deployment*</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant="outline"
                                    className={cn(
                                      "w-full pl-3 text-left font-normal",
                                      !field.value && "text-muted-foreground"
                                    )}
                                  >
                                    {field.value ? format(field.value, "dd/MM/yyyy") : <span>DD/MM/YYYY</span>}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent className="w-auto p-0" align="start">
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={busForm.control}
                        name="busRegistration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Bus Registration Number*</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter here" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={busForm.control}
                        name="rcFile"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Upload RC*</FormLabel>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-2 border border-input rounded-md px-3 py-2 flex-1">
                                <span className="text-sm">Filename.Pdf</span>
                              </div>
                              <Button type="button" size="icon" variant="outline">
                                <Upload className="h-4 w-4" />
                              </Button>
                            </div>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button type="button" variant="outline" onClick={() => busForm.reset()}>
                        Reset
                      </Button>
                      <div className="flex gap-2">
                        <Button type="submit" variant="outline">
                          + Add Bus
                        </Button>
                        <Button type="button" onClick={handleValidate}>
                          Validate
                        </Button>
                      </div>
                    </div>
                  </form>
                </Form>
              </div>
            )}

            {showPreview && (
              <div className="bg-card rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-6">
                  <Button variant="ghost" size="icon" onClick={handleReEnter}>
                    <ArrowLeft className="h-5 w-5" />
                  </Button>
                </div>

                <h2 className="text-2xl font-bold mb-6">Bus Mapping</h2>

                <div className="bg-background rounded-lg p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">OEM Name</th>
                        <th className="text-left py-3 px-4">Depot Name</th>
                        <th className="text-left py-3 px-4">Date of Deployment</th>
                        <th className="text-left py-3 px-4">Bus Registration Number</th>
                        <th className="text-left py-3 px-4">View RC</th>
                      </tr>
                    </thead>
                    <tbody>
                      {busMappings.map((bus) => (
                        <tr key={bus.id} className="border-b">
                          <td className="py-3 px-4 text-muted-foreground">{bus.oemName}</td>
                          <td className="py-3 px-4 text-muted-foreground">{bus.depotName}</td>
                          <td className="py-3 px-4 text-muted-foreground">
                            {format(bus.deploymentDate, "dd/MM/yyyy")}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground">{bus.busRegistration}</td>
                          <td className="py-3 px-4">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex justify-between pt-6">
                  <Button variant="outline" onClick={handleReEnter}>
                    Re-Enter
                  </Button>
                  <Button onClick={handleSubmit}>Submit</Button>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="list" className="mt-6">
            <div className="bg-card rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="relative flex-1 max-w-sm">
                  <Input
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
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
                <div className="flex gap-2">
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                  <Button variant="default" size="icon">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <DataTable data={mockConcessionList} columns={columns} itemsPerPage={10} />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ConcessionAgreement;
