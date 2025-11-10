import { Card } from "@/components/ui/card";
import { Cpu, Battery, Zap, CircuitBoard, Lightbulb, Cable } from "lucide-react";

const categories = [
  {
    name: "Microcontrollers",
    icon: Cpu,
    count: 250,
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "Power Supplies",
    icon: Battery,
    count: 180,
    color: "from-cyan-500 to-teal-500"
  },
  {
    name: "Sensors",
    icon: Zap,
    count: 320,
    color: "from-teal-500 to-emerald-500"
  },
  {
    name: "PCB & Boards",
    icon: CircuitBoard,
    count: 150,
    color: "from-emerald-500 to-green-500"
  },
  {
    name: "LEDs & Displays",
    icon: Lightbulb,
    count: 200,
    color: "from-green-500 to-lime-500"
  },
  {
    name: "Cables & Connectors",
    icon: Cable,
    count: 400,
    color: "from-lime-500 to-yellow-500"
  }
];

const Categories = () => {
  return (
    <section className="py-16 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground">Find exactly what you need for your next project</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="p-6 hover:shadow-glow transition-all duration-300 cursor-pointer group bg-card border-border hover:border-primary/50"
            >
              <div className="flex flex-col items-center gap-3 text-center">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-muted-foreground">{category.count} products</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
