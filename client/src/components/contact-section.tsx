import { MapPin, Phone, Mail, Send } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");
    
    const mailtoBody = `Name: ${name}%0D%0APhone: ${phone}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    const mailtoLink = `mailto:resinartmoonstone@gmail.com?subject=${subject}&body=${mailtoBody}`;
    
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your memories into beautiful resin art? Contact us today to discuss your custom project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">Visit Our Studio</h3>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        E 1104, Ambey Valley Heights,<br />
                        Opp. Navkar Heights, near VIP Circle,<br />
                        Uttran, Surat, Gujarat 394105, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Phone</h4>
                      <a
                        href="tel:+919316346917"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        +91 93163 46917
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-foreground">Email</h4>
                      <a
                        href="mailto:resinartmoonstone@gmail.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        resinartmoonstone@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">Name</Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone" className="text-foreground">Phone</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="mt-2 resize-vertical"
                  />
                </div>

                <button type="submit" className="gallery-button-primary w-full">
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
