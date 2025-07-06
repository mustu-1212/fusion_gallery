import { Palette, Heart, Gem } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AboutSection() {
  const features = [
    {
      icon: Palette,
      title: "Handcrafted Excellence",
      description: "Each piece is meticulously crafted by hand, ensuring unique quality and attention to detail.",
    },
    {
      icon: Heart,
      title: "Memory Preservation",
      description: "Transform your cherished memories into beautiful art pieces that last a lifetime.",
    },
    {
      icon: Gem,
      title: "Premium Materials",
      description: "We use only the finest resin and materials to ensure durability and stunning visual appeal.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">Our Craft</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every piece we create tells a story. From personalized photo clocks to stunning resin art, we transform your precious memories into timeless masterpieces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
