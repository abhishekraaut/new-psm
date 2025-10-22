import { PublicHeader } from "@/components/Home/PublicHeader";
import { PublicFooter } from "@/components/Home/PublicFooter";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Download } from "lucide-react";

const Documents = () => {
  const documents = [
    {
      id: 1,
      name: "MHI Scheme Notification",
      dateOfIssue: "15th March, 2024"
    },
    {
      id: 2,
      name: "Department Of Revenue (DOR) Notification",
      dateOfIssue: "15th March, 2024"
    },
    {
      id: 3,
      name: "MHI Scheme Guidelines",
      dateOfIssue: "2nd June, 2025"
    }
  ];

  const handleDownload = (docName: string) => {
    // Placeholder for download functionality
    console.log(`Downloading: ${docName}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-muted/20">
      <PublicHeader />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-muted-foreground mb-6">
            Home / Scheme / Documents
          </div>

          {/* Page Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-12">
            Scheme Documents
          </h1>

          {/* Documents Table */}
          <div className="max-w-6xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg border-2 border-border overflow-hidden">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted/50">
                      <TableHead className="font-bold text-foreground w-20">#</TableHead>
                      <TableHead className="font-bold text-foreground">Name</TableHead>
                      <TableHead className="font-bold text-foreground w-48">Date Of Issue</TableHead>
                      <TableHead className="font-bold text-foreground w-64 text-center">
                        View / Download Document
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {documents.map((doc) => (
                      <TableRow key={doc.id} className="hover:bg-muted/30">
                        <TableCell className="font-medium">{doc.id}</TableCell>
                        <TableCell className="font-medium">{doc.name}</TableCell>
                        <TableCell>{doc.dateOfIssue}</TableCell>
                        <TableCell className="text-center">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDownload(doc.name)}
                            className="gap-2"
                          >
                            <Download className="w-4 h-4" />
                            Download
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default Documents;
