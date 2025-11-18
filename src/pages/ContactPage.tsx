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
import { Mail, MapPin, Building, Globe, FileText, Phone } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent",
      description: "We'll get back to you soon!",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      company: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground">
            We're here to help and answer any question you might have
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-border animate-fade-up">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-secondary">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="rounded-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="rounded-full"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="rounded-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
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
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="rounded-full"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="rounded-2xl"
                  />
                </div>

                <Button
                  type="submit"
                  variant="gold"
                  className="w-full rounded-full py-6 text-lg font-semibold"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <Card className="rounded-2xl shadow-card hover:shadow-hover transition-all duration-300 border border-border">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-secondary">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary mb-1">Work Address</p>
                      <p className="text-muted-foreground">
                        Plot No.6, Balaji Complex<br />
                        Saidpura, DeraBassi<br />
                        SAS Nagar (Mohali)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Building className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary mb-1">Corporate Office</p>
                      <p className="text-muted-foreground">
                        301, 3rd Floor, B-Block CCC<br />
                        VIP Road, Zirakpur
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary mb-1">Email</p>
                      <a href="mailto:hr@sparesshop.net" className="text-primary hover:underline">
                        hr@sparesshop.net
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary mb-1">Phone</p>
                      <a href="tel:+919056264535" className="text-primary hover:underline">
                        +91 9056264535
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Globe className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary mb-1">Website</p>
                      <a
                        href="https://www.myelectrokart.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline"
                      >
                        www.myelectrokart.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <FileText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-secondary mb-1">GST</p>
                      <p className="text-muted-foreground">03AAICE8326L1ZG</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Map Embed */}
            <Card className="rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3434.681696487012!2d76.88022287459351!3d30.586529792685536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fbf06eff0c4f3%3A0x2502599507379a8e!2sESINTI%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1762927552202!5m2!1sen!2sin" 
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
