import { PublicHeader } from "@/components/Home/PublicHeader";
import { PublicFooter } from "@/components/Home/PublicFooter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto animate-fade-in">
          <div className="mb-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <span className="text-2xl">📞</span>
              </div>
              <h1 className="text-4xl font-bold text-foreground">Contact Us</h1>
            </div>
            <p className="text-lg text-muted-foreground">
              Get in touch with us for any queries or assistance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 shadow-lg border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Email</h3>
              </div>
              <p className="text-muted-foreground text-sm">support@pmebus.gov.in</p>
              <p className="text-muted-foreground text-sm">info@pmebus.gov.in</p>
            </Card>

            <Card className="p-6 shadow-lg border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Phone</h3>
              </div>
              <p className="text-muted-foreground text-sm">Toll Free: 1800-XXX-XXXX</p>
              <p className="text-muted-foreground text-sm">Office: +91-11-XXXX-XXXX</p>
            </Card>

            <Card className="p-6 shadow-lg border-border">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Working Hours</h3>
              </div>
              <p className="text-muted-foreground text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
              <p className="text-muted-foreground text-sm">Sat: 9:00 AM - 1:00 PM</p>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="p-8 shadow-lg border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h2>
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input id="name" placeholder="Enter your name" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input id="subject" placeholder="Enter subject" className="mt-1" />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Enter your message" 
                    rows={5}
                    className="mt-1"
                  />
                </div>
                <Button type="submit" className="w-full shadow-md hover:shadow-lg">
                  Send Message
                </Button>
              </form>
            </Card>

            <Card className="p-8 shadow-lg border-border">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Office Address</h2>
              <div className="flex items-start gap-3 mb-6">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-2">Ministry of Heavy Industries</p>
                  <p className="text-muted-foreground text-sm">
                    Department of Heavy Industry<br />
                    Government of India<br />
                    New Delhi - 110001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="bg-muted rounded-lg p-4 mt-6">
                <h3 className="font-semibold mb-2 text-foreground">Regional Offices</h3>
                <p className="text-sm text-muted-foreground mb-2">
                  For state-specific queries, please contact your regional office.
                </p>
                <Button variant="outline" size="sm">
                  View Regional Offices
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default ContactUs;