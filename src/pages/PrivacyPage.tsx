import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">Last Updated: 2 July 2025</p>
          </div>

          {/* Introduction */}
          <Card className="rounded-2xl mb-6 shadow-card hover:shadow-hover transition-all duration-300 border border-border animate-fade-up">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-foreground">
                At Esinti Private Limited, we are committed to protecting your privacy and ensuring 
                the security of your personal information. This Privacy Policy outlines how we collect, 
                use, and safeguard your data when you interact with our services.
              </p>
            </CardContent>
          </Card>

          {/* Information Collection */}
          <Card className="rounded-2xl mb-6 bg-accent/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Information Collection</h2>
              <div className="space-y-3 text-foreground">
                <p>We collect information that you provide directly to us, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name, email address, and phone number</li>
                  <li>Company name and business details</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Order history and preferences</li>
                  <li>Communications with our customer service team</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* How We Use Data */}
          <Card className="rounded-2xl mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-secondary">How We Use Your Data</h2>
              <div className="space-y-3 text-foreground">
                <p>We use the collected information for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Processing and fulfilling your orders</li>
                  <li>Communicating with you about your orders and inquiries</li>
                  <li>Providing customer support and technical assistance</li>
                  <li>Sending promotional materials (with your consent)</li>
                  <li>Improving our products and services</li>
                  <li>Complying with legal obligations</li>
                  <li>Detecting and preventing fraud</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Sharing Policy */}
          <Card className="rounded-2xl mb-6 bg-accent/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Information Sharing Policy</h2>
              <p className="text-foreground mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share 
                your information with:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>Service providers who assist in our operations (shipping, payment processing)</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </CardContent>
          </Card>

          {/* Terms & Conditions */}
          <Card className="rounded-2xl mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Terms & Conditions</h2>
              <div className="space-y-4 text-foreground">
                <div>
                  <h3 className="font-semibold mb-2">Order Acceptance</h3>
                  <p>All orders are subject to acceptance and product availability. We reserve the right to refuse any order.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Pricing</h3>
                  <p>Prices are subject to change without notice. The price at the time of order confirmation will apply.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Product Information</h3>
                  <p>We strive for accuracy but cannot guarantee that all product descriptions are error-free.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Limitation of Liability</h3>
                  <p>Esinti shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products.</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Refund, Cancellation, Shipping */}
          <Card className="rounded-2xl mb-6 bg-accent/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Refund, Cancellation & Shipping Policy</h2>
              
              <div className="space-y-4 text-foreground">
                <div>
                  <h3 className="font-semibold mb-2">Cancellation Policy</h3>
                  <p>Orders can be cancelled within 24 hours of placement. After shipment, cancellations are not possible.</p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Refund Policy</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Refunds processed within 7-10 business days for eligible returns</li>
                    <li>Products must be unused and in original packaging</li>
                    <li>Return shipping costs may apply</li>
                    <li>Defective products are eligible for full refund or replacement</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Shipping Policy</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Standard delivery: 5-7 business days</li>
                    <li>Express delivery: 2-3 business days (additional charges apply)</li>
                    <li>Free shipping on orders above ₹5,000</li>
                    <li>Tracking information provided via email</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Security */}
          <Card className="rounded-2xl mb-6">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Data Security</h2>
              <p className="text-foreground">
                We implement industry-standard security measures to protect your personal information. 
                However, no method of transmission over the internet is 100% secure. While we strive to 
                protect your data, we cannot guarantee absolute security.
              </p>
            </CardContent>
          </Card>

          {/* Your Rights */}
          <Card className="rounded-2xl mb-6 bg-accent/30">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-secondary">Your Rights</h2>
              <p className="text-foreground mb-3">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-foreground">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Lodge a complaint with regulatory authorities</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="rounded-2xl bg-gradient-primary text-white">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Questions About Our Privacy Policy?</h2>
              <p className="mb-4">
                If you have any questions or concerns about our privacy practices, please contact us:
              </p>
              <p className="font-semibold">Email: esintiprivateltd@gmail.com</p>
              <p className="font-semibold">Phone: +91 98765 43210</p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPage;
