import { Shield, Zap, Lock, Droplets, Thermometer, Award, Settings, Factory } from "lucide-react";

interface ProductFeaturesApplicationsProps {
  productId?: string;
  variant?: string;
}

export default function ProductFeaturesApplications({ productId, variant }: ProductFeaturesApplicationsProps = {}) {
  // Features and applications for foil machine
  const foilFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High-Precision Foil Transfer",
      description: "Uniform heat & pressure for crisp, professional results"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Heavy-Duty Steel Frame",
      description: "Industrial durability for continuous production"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Digital Control System",
      description: "Temperature & pressure control with adjustable settings"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Multi-Foil Compatibility",
      description: "Works with gold, silver, holographic & pigment foils"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Energy-Efficient Design",
      description: "Low power consumption with safety protections"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Versatile Material Support",
      description: "Paper, leather, PVC, cardboard & coated materials"
    }
  ];

  const foilApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Luxury Packaging",
      items: ["Luxury packaging boxes", "Invitation cards & wedding cards", "Business cards & certificates"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Leather & PVC Products",
      items: ["Leather products & PVC accessories", "Book covers & stationery"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Branding & Labels",
      items: ["Stickers, labels & branding items", "Craft studios & commercial printing houses"]
    }
  ];

  const foil2Applications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Packaging & Boxes",
      items: ["Luxury product packaging", "Rigid box manufacturing"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Cards & Stationery",
      items: ["Wedding & invitation cards", "Business cards & certificates", "Book covers & diaries"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Leather & Labels",
      items: ["Leather tags and wallets", "Labels and stickers", "PVC cards & coated surfaces"]
    },
    {
      icon: <Award className="w-5 h-5" />,
      title: "Commercial Production",
      items: ["Craft studios & commercial printing setups"]
    }
  ];

  // Default features and applications for connectors
  const defaultFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Industrial-Grade Durability",
      description: "Built with die-cast aluminum and reinforced thermoplastic for extreme environments"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Vibration-Resistant Locks",
      description: "Double latch, bayonet, and screw lock mechanisms prevent accidental disconnection"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "IP65/67/68 Protection",
      description: "Sealed with NBR/Silicone gaskets for dust and water resistance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Current Capacity",
      description: "Rated up to 40A with low contact resistance (≤1mΩ) for reliable power transmission"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Wide Temperature Range",
      description: "Operates reliably from -40°C to +125°C in harsh conditions"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Long Service Life",
      description: "500-1000 mating cycles with excellent salt spray and humidity resistance"
    }
  ];

  const defaultApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Industrial Machinery",
      items: ["CNC Machines", "Injection Molding", "Assembly Lines", "Conveyor Systems"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Automation & Control",
      items: ["Control Panels", "PLC Systems", "Motor Drives", "Servo Systems"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Printing & UV Systems",
      items: ["UV Curing Lamps", "IR Heating Systems", "Printing Machines", "Coating Equipment"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Robotics & Heavy Equipment",
      items: ["Industrial Robots", "Construction Equipment", "Mining Machinery", "Agricultural Machines"]
    }
  ];

  // IR Lamp features and applications
  const irLampFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Rapid Heat-Up",
      description: "Uniform heating with fast response time"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Energy-Efficient Construction",
      description: "High-quality quartz tube and ceramic insulation"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Long Service Life",
      description: "Durable construction for continuous operations"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "High-Temperature Operations",
      description: "Suitable for continuous high-temperature use"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Shock & Vibration Resistant",
      description: "Built to withstand industrial environments"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Moisture Resistant",
      description: "Reliable performance in various conditions"
    }
  ];

  const irLampApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Drying & Curing",
      items: ["Plastic Drying", "Paint & Ink Curing", "Powder Coating Systems"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Industrial Processing",
      items: ["Printing & Packaging Machines", "Industrial Ovens", "Metal Preheating"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Specialized Applications",
      items: ["Industrial Heating Systems", "Conveyor heating lines", "Thermal curing"]
    }
  ];

  // UV Lamp features and applications
  const uvLampFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast UV Curing",
      description: "High-speed curing for inks, coatings & adhesives"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Cold Curing Process",
      description: "No paper warping ensures quality output"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "High Adhesion",
      description: "Smudge-free finishes for professional results"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Multi-Printing Support",
      description: "Suitable for Offset, Flexo, Gravure, Digital & Screen"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "1000-Hour Warranty",
      description: "Premium quality with extended warranty"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Premium Components",
      description: "GE 214A Quartz, German electrodes, high UV intensity"
    }
  ];

  const uvLampApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Premium Printing",
      items: ["Premium brochures & magazine covers", "Luxury packaging", "Drip-off coating effects"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Commercial Production",
      items: ["Labels & folding cartons", "Commercial & industrial printing lines", "High-speed packaging machines"]
    }
  ];

  // Gearbox features and applications
  const gearboxFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "High-Precision Design",
      description: "Helical planetary gear with ultra-low backlash (≤3 arc-min)"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Strong Torque Output",
      description: "Up to 330 N·m rated torque, 990 N·m instant torque"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "High Efficiency",
      description: "97% efficiency for energy-saving operation"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Quiet Operation",
      description: "≤60 dB noise level, ideal for sensitive environments"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Durable Construction",
      description: "Hardened high-grade steel, 30,000 hours lifespan"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "IP65 Protected",
      description: "Industrial-grade protection for demanding environments"
    }
  ];

  const gearboxApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "CNC & Automation",
      items: ["CNC Machines & Routing Systems", "Robotics & Automation", "Industrial Motion Control"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Printing & Packaging",
      items: ["Flexo / Gravure / Offset Printing Machinery", "Packaging Machinery", "Anilox Coater Drives"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Industrial Systems",
      items: ["Conveyor Systems", "Servo Motor Driven Equipment", "Precision Positioning Systems"]
    }
  ];

  // TRESU Rubber features and applications
  const tresuFeatures = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Uniform Coating",
      description: "Ensures smooth application of varnish, glue, ink, and paint"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "High Heat Resistance",
      description: "Built for continuous industrial use"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Chemical Resistant",
      description: "Excellent pressure and chemical resistance"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Improved Accuracy",
      description: "Enhances coating accuracy and smoothness"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Long Service Life",
      description: "Minimal wear reduces downtime and maintenance"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Stable Hardness",
      description: "Consistent coating quality throughout use"
    }
  ];

  const tresuApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Printing & Packaging",
      items: ["Printing & Packaging Industry", "Offset & Flexo Coaters", "Lamination Machines"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Coating Systems",
      items: ["Doctor Blade Coating Systems", "Paper, Board & Flexible Film Coating", "Adhesive & Varnish Application Units"]
    }
  ];

  // ARO Pump features and applications
  const pumpFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Chemical Resistant Construction",
      description: "PP/PTFE wetted parts for maximum resistance to corrosive chemicals"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Non-Electric Operation",
      description: "Safe pneumatic operation for hazardous and flammable environments"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Self-Priming & Dry-Run Capable",
      description: "Can run dry without damage, self-priming for easy operation"
    },
    {
      icon: <Droplets className="w-6 h-6" />,
      title: "Stable Flow Rate",
      description: "Smooth pulsation-stable flow up to 50 LPM for consistent performance"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Dual Inlet/Outlet Design",
      description: "Flexible installation with 1/2\" dual inlet and outlet configuration"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Low Maintenance",
      description: "Long service life with minimal maintenance requirements"
    }
  ];

  const pumpApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Printing & Packaging",
      items: ["Anilox coating systems", "Ink transfer & varnish circulation", "UV/Water-based coating fluids"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Chemical Processing",
      items: ["Acids, alkalis, solvents", "Corrosive liquid transfer", "Chemical dosing systems"]
    },
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Industrial Fluid Handling",
      items: ["Adhesives & emulsions", "Abrasive slurries", "Water & wastewater treatment"]
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Hazardous Environments",
      items: ["Explosive atmosphere applications", "Pharmaceuticals & food processing", "Non-metallic pump requirements"]
    }
  ];

  // IR Clamp features and applications
  const irClampFeatures = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "High-Temperature Resistant",
      description: "Withstands up to 500°C continuous operation without deformation"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Strong Round Grip",
      description: "Secure mounting for tubular IR lamps with stable positioning"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Rust-Proof Finish",
      description: "Polished anti-corrosion coating for extended lifespan"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Easy Installation",
      description: "Bolt-on mounting for fast and secure setup"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industrial Durability",
      description: "Stainless steel or heat-resistant alloy construction"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Universal Compatibility",
      description: "Works with short-wave, medium-wave, and fast-response IR lamps"
    }
  ];

  const irClampApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Printing & Packaging",
      items: ["Printing machines", "Packaging units", "Industrial drying systems"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Textile & Plastic",
      items: ["Textile drying units", "Plastic thermoforming systems", "Industrial heating equipment"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Food Processing",
      items: ["Food processing equipment", "Industrial ovens", "Drying & curing systems"]
    }
  ];

  // IR Square Clamp features and applications
  const irSquareClampFeatures = [
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "High-Temperature Resistant",
      description: "Withstands up to 500°C continuous operation without deformation"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Square Design Stability",
      description: "Enhanced stability prevents rotation or misalignment of IR tubes"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Heavy-Duty Construction",
      description: "High-grade stainless steel for maximum durability"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Ceramic & Quartz Compatible",
      description: "Works with both ceramic and quartz IR heating elements"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Rust-Proof Finish",
      description: "Polished anti-corrosion coating for extended lifespan"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Easy Installation",
      description: "Simple bolt/screw mounting for quick integration"
    }
  ];

  const irSquareClampApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Printing Industry",
      items: ["Offset printing machines", "Flexo & gravure printing units", "Coating & drying systems"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Packaging & Electronics",
      items: ["Packaging machinery", "Electronics component curing", "Industrial drying lines"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Plastic Processing",
      items: ["Plastic thermoforming machines", "Drying machines", "Industrial IR heating systems"]
    }
  ];

  // Ballast features and applications
  const ballastFeatures = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Digital Power Control",
      description: "Precise digital regulation for stable UV output"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Remote Monitoring",
      description: "Ethernet/RS485 connectivity for real-time diagnostics"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Multi-Level Protection",
      description: "Overload, short-circuit, and overheat protection"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "24/7 Operation",
      description: "Designed for continuous industrial use"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Industrial-Grade Design",
      description: "Compact rectangular design for easy integration"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Long Lamp Life",
      description: "Enhances UV lamp lifespan with stable voltage"
    }
  ];

  const ballastApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Printing Industry",
      items: ["Flexo, gravure & offset printing", "UV coating & varnish lines", "High-speed UV drying"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Industrial Curing",
      items: ["Automation UV systems", "Photochemical curing", "UV adhesives processing"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Packaging & Coating",
      items: ["Packaging & lamination units", "Coating tunnels", "Wide-format UV printers"]
    }
  ];

  // Encoder features and applications
  const encoderFeatures = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "High Resolution",
      description: "2500 PPR for precise position and speed feedback"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Compact Design",
      description: "38 mm body with 8 mm shaft for tight space installation"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "HTL Push-Pull Output",
      description: "Noise-resistant signal transmission for reliable performance"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Wide Voltage Range",
      description: "5–24V DC operation for flexible integration"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Industrial Durability",
      description: "Rugged construction for harsh environments"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Easy Installation",
      description: "Simple mounting and secure connection"
    }
  ];

  const encoderApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "CNC & Manufacturing",
      items: ["CNC machines & milling centers", "Industrial automation systems", "Motion control applications"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Robotics & Conveyors",
      items: ["Industrial robotics", "Automated conveyors", "Speed/position feedback systems"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Printing & Packaging",
      items: ["Printing machinery", "Packaging equipment", "Encoder replacement & retrofitting"]
    }
  ];

  // Encoder Wheel features and applications
  const encoderWheelFeatures = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stainless Steel Core",
      description: "CNC-machined for precision and dimensional accuracy"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "PU Outer Layer",
      description: "High-performance polyurethane for durability and grip"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Customizable Dimensions",
      description: "OD: 50-100 mm, Bore: 6-20 mm for flexible installation"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Wide Temperature Range",
      description: "Operates reliably from -20°C to +80°C"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Low-Noise Operation",
      description: "Smooth surface finish for quiet performance"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Wear Resistant",
      description: "85-95 Shore A hardness for long service life"
    }
  ];

  const encoderWheelApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Printing Industry",
      items: ["Printing machines", "Anilox coaters", "Coating equipment"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Packaging & Automation",
      items: ["Packaging equipment", "Industrial automation systems", "Conveyor systems"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Retrofitting",
      items: ["Encoder retrofitting", "Machine upgrades", "Replacement parts"]
    }
  ];

  // Encoder Bracket features and applications
  const encoderBracketFeatures = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Spring-Loaded Tension",
      description: "Automatic pressure adjustment for consistent encoder contact"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Stainless Steel & Aluminum",
      description: "Corrosion-resistant construction for long service life"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Precision-Machined Frame",
      description: "Stable alignment for accurate feedback"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Easy Installation",
      description: "Clamp-style mounting for quick setup"
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Low Vibration",
      description: "Smooth movement for high-accuracy measurements"
    },
    {
      icon: <Thermometer className="w-6 h-6" />,
      title: "Wide Temperature Range",
      description: "Operates reliably from -20°C to +80°C"
    }
  ];

  const encoderBracketApplications = [
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Printing Industry",
      items: ["Flexo, gravure, offset printing machines", "Anilox coaters & converting lines", "Coating & lamination equipment"]
    },
    {
      icon: <Settings className="w-5 h-5" />,
      title: "Packaging & Textile",
      items: ["Packaging & labeling machinery", "Paper & textile equipment", "Industrial automation systems"]
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Motion Control",
      items: ["Speed & position feedback systems", "Encoder mounting solutions", "Motion control applications"]
    }
  ];

  // Select features and applications based on product
  const isIRLamp = productId?.startsWith("ir-");
  const isFoilMachine = productId === "foil-1" || productId === "foil-2";
  const isUVLamp = productId?.startsWith("uv-");
  const isGearbox = productId === "gear-1";
  const isTresuRubber = productId === "tresu-1";
  const isPump = productId === "pump-aro-66605j";
  const isIRClamp = productId === "clamp-1";
  const isIRSquareClamp = productId === "clamp-2";
  const isBallast = productId?.startsWith("ballast-");
  const isEncoder = productId === "encoder-1";
  const isEncoderWheel = productId === "encoder-2";
  const isEncoderBracket = productId === "encoder-3";
  
  const features = isFoilMachine ? foilFeatures : isIRLamp ? irLampFeatures : isUVLamp ? uvLampFeatures : isGearbox ? gearboxFeatures : isTresuRubber ? tresuFeatures : isPump ? pumpFeatures : isIRClamp ? irClampFeatures : isIRSquareClamp ? irSquareClampFeatures : isBallast ? ballastFeatures : isEncoder ? encoderFeatures : isEncoderWheel ? encoderWheelFeatures : isEncoderBracket ? encoderBracketFeatures : defaultFeatures;
  const applications = productId === "foil-2" ? foil2Applications : productId === "foil-1" ? foilApplications : isIRLamp ? irLampApplications : isUVLamp ? uvLampApplications : isGearbox ? gearboxApplications : isTresuRubber ? tresuApplications : isPump ? pumpApplications : isIRClamp ? irClampApplications : isIRSquareClamp ? irSquareClampApplications : isBallast ? ballastApplications : isEncoder ? encoderApplications : isEncoderWheel ? encoderWheelApplications : isEncoderBracket ? encoderBracketApplications : defaultApplications;

  return (
    <div className="space-y-12">
      {/* Key Features */}
      <div>
        <h2 className="text-2xl font-bold text-secondary mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg text-secondary mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h2 className="text-2xl font-bold text-secondary mb-6">Applications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((app, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                  {app.icon}
                </div>
                <h3 className="font-semibold text-lg text-secondary">{app.title}</h3>
              </div>
              <ul className="space-y-2">
                {app.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
