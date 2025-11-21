import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
      
      <div className="container mx-auto px-4 pt-28 pb-16">
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

          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-8 text-secondary text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Here are some common questions about our company.
            </p>

            <Card className="rounded-2xl shadow-card">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {/* FAQ 1 */}
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:text-primary">
                      What products and services does Myelectrokart offer?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        At Myelectrokart.com, we provide a wide range of industrial products designed for performance and reliability. Our catalog includes:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li><strong>Heavy Duty Connectors</strong> – multipin, waterproof, industrial-grade</li>
                        <li><strong>IR Lamps</strong> – efficient infrared heating solutions</li>
                        <li><strong>UV Lamps</strong> – for curing, disinfection, and industrial use</li>
                        <li><strong>Hot Foil Stamping Machines</strong> – for marking and branding applications</li>
                        <li><strong>Gear Boxes</strong> – industrial power transmission solutions</li>
                        <li><strong>Encoders</strong> – automation and motion control systems</li>
                        <li><strong>Diaphragm Pumps</strong> – reliable fluid handling solutions</li>
                      </ul>
                      <p className="text-muted-foreground leading-relaxed mt-3">
                        Our goal at Myelectrokart is to deliver solutions that enhance productivity while reducing operational costs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 2 */}
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:text-primary">
                      How can I contact customer support?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        You can reach our customer support team by emailing <a href="mailto:hr@sparesshop.net" className="text-primary hover:underline font-semibold">hr@sparesshop.net</a>, using the live chat on our website. Our dedicated team is available 24/7 to assist with any inquiries or issues.
                      </p>
                      <p className="text-muted-foreground leading-relaxed mt-2">
                        We're committed to providing prompt and effective solutions to ensure your satisfaction.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 3 */}
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:text-primary">
                      Do you deliver across India?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Yes, we ship our products PAN India through trusted courier partners. Delivery times may vary based on your location.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 4 */}
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:text-primary">
                      How can I track my order?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Once your order is shipped, you will receive a tracking link via email/SMS, allowing you to track your shipment in real time until delivery.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 5 */}
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:text-primary">
                      What is your return and replacement policy?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        If you receive a defective or incorrect product, you can request a return or replacement within 7 days of delivery. For detailed terms, please visit our return policy.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 6 */}
                  <AccordionItem value="item-6">
                    <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:text-primary">
                      Do you provide after-sales support or technical assistance?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Yes, our team provides dedicated after-sales and technical support to ensure smooth installation and long-term performance of your products.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 7 */}
                  <AccordionItem value="item-7">
                    <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:text-primary">
                      Do you offer bulk order support for businesses?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Yes. We specialize in serving both individual and bulk requirements. For bulk orders, we provide competitive pricing, customized solutions, and reliable delivery timelines to support your business needs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 8 */}
                  <AccordionItem value="item-8">
                    <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:text-primary">
                      Are Myelectrokart products certified for industrial use?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Our products are manufactured to meet strict quality and performance standards, making them suitable for industrial automation, renewable energy, packaging, manufacturing, and fluid handling applications.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  {/* FAQ 9 */}
                  <AccordionItem value="item-9">
                    <AccordionTrigger className="text-left text-lg font-bold text-secondary hover:text-primary">
                      Why should I choose Myelectrokart for industrial products?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Myelectrokart is trusted for delivering durable, high-performance industrial products across multiple categories. Whether you need connectors, lamps, machines, gearboxes, encoders, or pumps, we ensure:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                        <li>Reliable performance in demanding environments</li>
                        <li>Wide product range with customization options</li>
                        <li>PAN India delivery and bulk order support</li>
                        <li>Strong after-sales service and technical guidance</li>
                      </ul>
                      <p className="text-muted-foreground leading-relaxed mt-3">
                        By choosing Myelectrokart, you get quality, reliability, and cost-effective solutions for all your industrial needs.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>

          {/* Quick Help Section */}
          <Card className="mt-12 rounded-2xl bg-gradient-to-br from-primary/10 to-white">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-3 text-secondary">Need Immediate Help?</h3>
              <p className="text-muted-foreground mb-4">
                For urgent queries, reach out to us directly:
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="https://wa.me/919056264535" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-full sm:w-auto">
                    Chat on WhatsApp
                  </Button>
                </a>
                <a href="tel:+919056264535">
                  <Button variant="outline" className="rounded-full w-full sm:w-auto">
                    Call Us: +91 9056264535
                  </Button>
                </a>
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
