import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Building, MapPin, Globe, FileText } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Esinti – Global Products, Local Trust
            </h1>
            <p className="text-xl text-muted-foreground">
              Delivering Industrial Excellence Across India
            </p>
          </div>

          {/* Why Choose Esinti */}
          <Card className="rounded-2xl bg-gradient-to-br from-accent/30 to-white shadow-card hover:shadow-hover transition-all duration-300 animate-fade-up border border-border">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-secondary">Why Choose Esinti?</h2>
              <p className="text-lg leading-relaxed text-foreground">
                We specialize in importing globally recognized products and supplying them at competitive prices. 
                Our mission is to bridge the gap between international quality and local accessibility, ensuring 
                that businesses across India have access to the best industrial components without the hassle of 
                international procurement.
              </p>
            </CardContent>
          </Card>

          {/* Our Vision */}
          <Card className="rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 animate-fade-up border border-border">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-secondary">Our Vision</h2>
              <p className="text-lg leading-relaxed text-foreground mb-4">
                Founded by the team behind Precision Machines & Automation, Esinti was born from a simple 
                observation: importing industrial products was complex, time-consuming, and expensive for most 
                Indian businesses.
              </p>
              <p className="text-lg leading-relaxed text-foreground">
                We saw the challenges firsthand – the lengthy procurement cycles, multiple intermediaries, 
                currency fluctuations, and documentation complexities. Our solution? Become the single point 
                of contact for premium industrial products, handling all the complexity so you don't have to.
              </p>
            </CardContent>
          </Card>

          {/* Our Mission */}
          <Card className="rounded-2xl bg-gradient-to-br from-primary/10 to-white shadow-card hover:shadow-hover transition-all duration-300 animate-fade-up border border-border">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4 text-secondary">Our Mission</h2>
              <p className="text-lg font-semibold mb-4 text-secondary">
                Why Esinti Prices are Lower:
              </p>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Direct Imports:</strong> We source directly from manufacturers, eliminating middlemen</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Bulk Procurement:</strong> Volume discounts passed on to you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Minimal Overheads:</strong> Efficient operations mean lower costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Strategic Inventory:</strong> Smart stocking reduces lead times and costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span><strong>Local Support:</strong> No international shipping costs for you</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* The Esinti Promise */}
          <Card className="rounded-2xl bg-gradient-primary text-white">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">The Esinti Promise</h2>
              <div className="text-2xl font-semibold text-center py-6">
                Less PI/PO. Less Accounting. Less Human Intervention.
              </div>
              <p className="text-lg leading-relaxed">
                We handle the complexity of international procurement so you can focus on what matters – 
                growing your business. One invoice, one point of contact, one reliable partner.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="rounded-2xl">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-6 text-secondary text-center">Get in Touch</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-secondary">Email</p>
                      <p className="text-muted-foreground">esintiprivateltd@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-secondary">Website</p>
                      <a href="https://www.myelectrokart.com" className="text-primary hover:underline">
                       www.myelectrokart.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-secondary">GST</p>
                      <p className="text-muted-foreground">03AAICE8326L1ZG</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Building className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-secondary">Corporate Office</p>
                      <p className="text-muted-foreground">
                        301, 3rd Floor, B-Block CCC<br />
                        VIP Road, Zirakpur
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <p className="font-semibold text-secondary">Work Address</p>
                      <p className="text-muted-foreground">
                        Plot No.6, Balaji Complex<br />
                        Saidpura, DeraBassi<br />
                        SAS Nagar (Mohali)
                      </p>
                    </div>
                  </div>
                </div>
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

export default AboutPage;
