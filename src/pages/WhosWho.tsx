import { PublicHeader } from "@/components/Home/PublicHeader";
import { PublicFooter } from "@/components/Home/PublicFooter";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const WhosWho = () => {
  const officials = [
    {
      id: 1,
      name: "Shri H. D. Kumaraswamy",
      designation: "Hon'ble Minister Ministry Of Heavy Industries",
      email: "Minoff-Dhi@Nic.In",
      phone: "76476476,6646646",
      pabx: "3251",
      room: "123"
    },
    {
      id: 2,
      name: "Shri Bhupathiraju Srinivasa Varma",
      designation: "Hon'ble Minister Of State (HI)",
      email: "Mosoff.Dhi@Nic.In",
      phone: "76476445",
      pabx: "3464",
      room: "34"
    },
    {
      id: 3,
      name: "Shri Kamran Rizvi, IAS",
      designation: "Secretary (HI)",
      email: "Shioff@Nic.In",
      phone: "76476343",
      pabx: "34545",
      room: "23"
    },
    {
      id: 4,
      name: "Dr. Hanif Qureshi, IPS",
      designation: "Additional Secretary",
      email: "Jsautoa@Gov.In",
      phone: "76476476,6646646",
      pabx: "3382",
      room: "126-C"
    },
    {
      id: 5,
      name: "Shri Manoj Kumar Madholia",
      designation: "Director",
      email: "Manoj.Km@Nic.In",
      phone: "764735875",
      pabx: "9877",
      room: "156"
    },
    {
      id: 6,
      name: "Smt. Suman Jakhar",
      designation: "Under Secretary",
      email: "Suman.Jakhar21@Gov.In",
      phone: "76766343",
      pabx: "686",
      room: "2434"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <PublicHeader />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-6">
            Home / About us / Who's Who
          </div>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
            Who's Who
          </h1>

          {/* Officials Table */}
          <div className="bg-card/50 backdrop-blur-sm rounded-lg border-2 border-border overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-bold text-foreground w-16">#</TableHead>
                    <TableHead className="font-bold text-foreground min-w-[200px]">Name</TableHead>
                    <TableHead className="font-bold text-foreground min-w-[250px]">Designation</TableHead>
                    <TableHead className="font-bold text-foreground min-w-[200px]">Email Address</TableHead>
                    <TableHead className="font-bold text-foreground min-w-[150px]">Phone No.</TableHead>
                    <TableHead className="font-bold text-foreground w-24">PABX</TableHead>
                    <TableHead className="font-bold text-foreground w-24">Room No.</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {officials.map((official) => (
                    <TableRow key={official.id} className="hover:bg-muted/30">
                      <TableCell className="font-medium">{official.id}</TableCell>
                      <TableCell className="font-medium">{official.name}</TableCell>
                      <TableCell>{official.designation}</TableCell>
                      <TableCell className="text-primary">{official.email}</TableCell>
                      <TableCell>{official.phone}</TableCell>
                      <TableCell>{official.pabx}</TableCell>
                      <TableCell>{official.room}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default WhosWho;
