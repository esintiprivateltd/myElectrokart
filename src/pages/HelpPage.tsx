import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Upload } from "lucide-react";

const HelpPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    question: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Ticket Submitted",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      company: "",
      subject: "",
      question: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              How Can We Help?
            </h1>
            <p className="text-xl text-muted-foreground">
              Submit a ticket and our team will respond within 24 hours
            </p>
          </div>

          {/* Form Card */}
          <Card className="rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-border animate-fade-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-secondary">Submit a Ticket</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="rounded-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="rounded-full"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="rounded-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="question">Ask Your Question *</Label>
                  <Textarea
                    id="question"
                    required
                    rows={6}
                    value={formData.question}
                    onChange={(e) => setFormData({ ...formData, question: e.target.value })}
                    className="rounded-2xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="attachment">Attachment (optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-2xl p-8 text-center hover:border-primary transition-colors cursor-pointer">
                    <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      PDF, PNG, JPG (MAX. 10MB)
                    </p>
                    <input type="file" id="attachment" className="hidden" />
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  className="w-full rounded-full py-6 text-lg font-semibold"
                >
                  Submit Ticket
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Quick Help Section */}
          <Card className="mt-8 rounded-2xl bg-gradient-to-br from-primary/10 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-secondary">Need Immediate Help?</h3>
              <p className="text-muted-foreground mb-4">
                For urgent queries, reach out to us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full">
                  Chat on WhatsApp
                </Button>
                <Button variant="outline" className="rounded-full">
                  Call Us: +91 98765 43210
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default HelpPage;
