export const CATEGORIES = [
  { slug: "all", name: "All Products" },
  { slug: "heavy-duty-connector", name: "Heavy Duty Connector" },
  { slug: "hot-foil-machine", name: "Hot Foil Stamping Machine" },
  { slug: "uv-lamp", name: "UV Lamp" },
  { slug: "ir-lamp", name: "IR Lamp" },
  { slug: "planetary-gearbox", name: "Planetary Gear Box" },
  { slug: "encoders", name: "Encoders & Accessories" },
  { slug: "diaphragm-pump", name: "Diaphragm Pump" },
  { slug: "tresu-rubber", name: "Tresu Rubber" },
  { slug: "ir-clamps", name: "IR Clamps" },
  { slug: "ballasts", name: "Electronic Ballast for UV Lamps" },
];

export const PRODUCTS = [
  {
    id: "hd-4",
    title: "Esinti Heavy Duty Connector",
    price: 335.87,
    oldPrice: 342.72,
    category: "heavy-duty-connector",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=800&fit=crop",
    ],
    badges: ["IP67", "Corrosion Resistant"],
    description: "Industrial-grade heavy-duty connector with closed bottom design. Ideal for waterproof electrical connections in demanding environments.",
    hasVariants: true,
    variants: [
      { 
        id: "4-pin", 
        value: "4", 
        label: "4 Pin", 
        price: 335.87, 
        oldPrice: 342.72, 
        inStock: true, 
        sku: "HD-4PIN",
        description: "Heavy-duty 4-pin industrial connector with PE, rated 25-40A at 500-690V. Features IP65/67 protection, double latch locking, and die-cast aluminum housing for demanding applications.",
        images: [
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (4-Pin)
- Number of Pins: 4 + PE
- Rated Current: 25–40 A
- Rated Voltage: 500–690 V AC
- Rated Impulse Voltage: 6–8 kV
- Pin Material: Copper Alloy (Silver/Gold Plated)
- Contact Resistance: ≤ 1 mΩ
- Wiring Form: Screw / Crimp
- Wire Specification: 1.0–10 mm²
- Tightening Torque: 0.6–0.9 Nm
- Mating Cycles: ≥ 500
- Operating Temperature: -40°C to +125°C
- Shell Material: Die-Cast Aluminum / Zinc Alloy
- Protection Grade: IP65 / IP67
- Sealing Element: NBR / Silicone
- Locking Mechanism: Double Latch / Screw Lock
- Salt Spray Resistance: 48–72 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel Mount / Inline / Cable-to-Cable`
      },
      { 
        id: "6-pin", 
        value: "6", 
        label: "6 Pin", 
        price: 299.99, 
        oldPrice: 320.0, 
        inStock: true, 
        sku: "HD-6PIN",
        description: "Versatile 6-pin heavy-duty connector with PE, rated 16-40A at 500-690V. IP65/67 sealed with double latch locking for industrial automation and control systems.",
        images: [
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (6-Pin)
- Number of Pins: 6 + PE
- Rated Current: 16–40 A
- Rated Voltage: 500–690 V AC
- Rated Impulse Voltage: 6–8 kV
- Pin Material: Copper Alloy (Silver/Gold Plated)
- Contact Resistance: ≤ 1 mΩ
- Wiring Form: Screw / Crimp
- Wire Specification: 1.0–6 mm²
- Tightening Torque: 0.5–0.8 Nm
- Mating Cycles: ≥ 500
- Operating Temperature: -40°C to +125°C
- Shell Material: Die-Cast Aluminum / Zinc Alloy
- Protection Grade: IP65 / IP67
- Sealing Element: NBR / Silicone
- Locking Mechanism: Double Latch / Screw Lock
- Salt Spray Resistance: 48–72 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel Mount / Inline / Cable-to-Cable`
      },
      { 
        id: "7-pin", 
        value: "7", 
        label: "7 Pin", 
        price: 365.0, 
        oldPrice: 385.0, 
        inStock: false, 
        sku: "HD-7PIN",
        description: "Compact 7-pin industrial connector with PE, rated 20-32A at 500V. Features IP65 protection and double latch locking for control and signal applications.",
        images: [
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (7-Pin)
- Number of Pins: 7 + PE
- Rated Current: 20–32 A
- Rated Voltage: 500 V AC
- Rated Impulse Voltage: 6 kV
- Pin Material: Copper Alloy (Silver Plated)
- Contact Resistance: ≤ 1 mΩ
- Wiring Form: Screw / Crimp
- Wire Specification: 1.0–6 mm²
- Tightening Torque: 0.5–0.8 Nm
- Mating Cycles: ≥ 500
- Operating Temperature: -40°C to +125°C
- Shell Material: Aluminum Alloy / Thermoplastic
- Protection Grade: IP65
- Sealing Element: Silicone / NBR
- Locking Mechanism: Double Latch / Screw Lock
- Salt Spray Resistance: 48 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel Mount / Inline / Cable-to-Cable`
      },
      { 
        id: "10-pin", 
        value: "10", 
        label: "10 Pin", 
        price: 425.5, 
        oldPrice: 450.0, 
        inStock: true, 
        sku: "HD-10PIN",
        description: "Multi-pin 10-pin connector with PE, rated 16-25A at 500V. IP65 sealed with double latch for complex control systems and multi-circuit applications.",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (10-Pin)
- Number of Pins: 10 + PE
- Rated Current: 16–25 A
- Rated Voltage: 500 V AC
- Rated Impulse Voltage: 6 kV
- Pin Material: Copper Alloy (Silver Plated)
- Contact Resistance: ≤ 1 mΩ
- Wiring Form: Screw / Crimp
- Wire Specification: 0.75–4 mm²
- Tightening Torque: 0.5–0.6 Nm
- Mating Cycles: ≥ 500
- Operating Temperature: -40°C to +125°C
- Shell Material: Aluminum Alloy / Thermoplastic
- Protection Grade: IP65
- Sealing Element: Silicone / NBR
- Locking Mechanism: Double Latch / Screw Lock
- Salt Spray Resistance: 48 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel Mount / Inline / Cable-to-Cable`
      },
      { 
        id: "16-pin", 
        value: "16", 
        label: "16 Pin", 
        price: 549.0, 
        oldPrice: 599.0, 
        inStock: true, 
        sku: "HD-16PIN",
        description: "High-density 16-pin connector with PE, rated 16A at 500V. Features IP65 protection and metal roller locking for data and control applications.",
        images: [
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (16-Pin)
- Number of Pins: 16 + PE
- Rated Current: 16 A
- Rated Voltage: 500 V AC
- Rated Impulse Voltage: 6 kV
- Pin Material: Copper (Silver/Gold Plated)
- Contact Resistance: ≤ 1 mΩ
- Wiring Form: Screw
- Wire Specification: 0.5–4 mm²
- Tightening Torque: 0.5 Nm
- Mating Cycles: ≥ 500
- Operating Temperature: -40°C to +125°C
- Shell Material: Die-Cast Aluminum
- Protection Grade: IP65
- Sealing Element: NBR
- Locking Mechanism: Metal Roller / Double Buckle
- Salt Spray Resistance: 48 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel Mount / Inline / Cable-to-Cable`
      },
      { 
        id: "24-pin", 
        value: "24", 
        label: "24 Pin", 
        price: 699.0, 
        oldPrice: 749.0, 
        inStock: true, 
        sku: "HD-24PIN",
        description: "Ultra-high-density 24-pin (2×12) connector, rated 16A at 250-1000V. IP67/68 protection with twist lock/bayonet for high-voltage and data applications.",
        images: [
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (24-Pin)
- Number of Pins: 24 (2×12 rows)
- Rated Current: 16 A
- Rated Voltage: 250–1000 V
- Rated Impulse Voltage: up to 6 kV
- Pin Material: Copper Alloy (Gold/Tin Plated)
- Contact Resistance: < 10 mΩ
- Wiring Form: Crimp / Solder
- Wire Specification: 0.5–2.5 mm²
- Tightening Torque: 0.5–0.6 Nm
- Mating Cycles: 500–1000
- Operating Temperature: -40°C to +125°C
- Shell Material: Nylon / Zinc Alloy / Thermoplastic
- Protection Grade: IP67 / IP68
- Sealing Element: Silicone Gasket
- Locking Mechanism: Twist Lock / Bayonet / Threaded
- Salt Spray Resistance: 48 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel Mount / Inline / Cable-to-Cable`
      },
      { 
        id: "32-pin", 
        value: "32", 
        label: "32 Pin", 
        price: 849.0, 
        oldPrice: 899.0, 
        inStock: false, 
        sku: "HD-32PIN",
        description: "Maximum-density 32-pin connector with PE, rated 10-16A at 250-500V. IP67 sealed with bayonet/latch locking for complex automation and data systems.",
        images: [
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (32-Pin)
- Number of Pins: 32 + PE
- Rated Current: 10–16 A
- Rated Voltage: 250–500 V
- Rated Impulse Voltage: 4–6 kV
- Pin Material: Copper Alloy (Tin Plated)
- Contact Resistance: < 10 mΩ
- Wiring Form: Crimp / Screw
- Wire Specification: 0.5–2.5 mm²
- Tightening Torque: 0.4–0.5 Nm
- Mating Cycles: 500–1000
- Operating Temperature: -40°C to +125°C
- Shell Material: Thermoplastic / Zinc Alloy
- Protection Grade: IP67
- Sealing Element: Silicone Rubber
- Locking Mechanism: Bayonet / Latch Lock
- Salt Spray Resistance: 48 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel Mount / Inline / Cable-to-Cable`
      },
      { 
        id: "48-pin", 
        value: "48", 
        label: "48 Pin", 
        price: 1099.0, 
        oldPrice: 1199.0, 
        inStock: true, 
        sku: "HD-48PIN",
        description: "Ultimate 48-pin (3×16 or 4×12) connector, rated 10A at 250-500V. IP67/68 protection with bayonet/threaded locking for maximum-density applications.",
        images: [
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (48-Pin)
- Number of Pins: 48 (3×16 / 4×12 rows)
- Rated Current: 10 A
- Rated Voltage: 250–500 V
- Rated Impulse Voltage: 4–6 kV
- Pin Material: Copper Alloy (Tin/Gold Plated)
- Contact Resistance: < 10 mΩ
- Wiring Form: Crimp / Solder
- Wire Specification: 0.25–2.5 mm²
- Tightening Torque: 0.4–0.5 Nm
- Mating Cycles: 500–1000
- Operating Temperature: -40°C to +125°C
- Shell Material: Reinforced Thermoplastic / Zinc Alloy
- Protection Grade: IP67 / IP68
- Sealing Element: Silicone Rubber
- Locking Mechanism: Bayonet / Threaded / Latch Lock
- Salt Spray Resistance: 48 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel Mount / Inline / Cable-to-Cable`
      },
    ],
  },
  {
    id: "hd-6",
    title: "Esinti 6-Pin Heavy Duty Connector",
    price: 299.99,
    oldPrice: 320.0,
    category: "heavy-duty-connector",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["IP65/IP67", "Multi-Signal"],
    description: "The ESINTI 6-Pin Heavy Duty Connector is engineered for multi-signal and power applications. With durable metal housing and corrosion-resistant contact pins, it guarantees stable transmission even under vibration, dust, or moisture. Perfect for automation panels, conveyors, and robotics.",
    specifications: `### Technical Specifications (6-Pin Connector)
- Number of Pins: 6 + PE
- Rated Current: 16–40 A
- Rated Voltage: 500–690 V AC
- Rated Impulse Voltage: 6–8 kV
- Pin Material: Copper Alloy (Silver/Gold Plated)
- Contact Resistance: ≤ 1 mΩ
- Wiring Form: Screw/Crimp
- Wire Specification: 1.0–6.0 mm²
- Tightening Torque: 0.5–0.8 Nm
- Mating Cycles: ≥ 500
- Operating Temperature: -40°C to +125°C
- Shell Material: Die-Cast Aluminum / Zinc Alloy
- Protection Grade: IP65/IP67
- Sealing Element: NBR / Silicone
- Locking Mechanism: Double Latch / Screw Lock
- Salt Spray Resistance: 48–72 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel / Inline / Cable-to-Cable`,
  },
  {
    id: "hd-10",
    title: "Esinti 10-Pin Heavy Duty Connector",
    price: 425.5,
    oldPrice: 450.0,
    category: "heavy-duty-connector",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
    ],
    badges: ["Industrial Grade", "IP65/IP67"],
    description: "The ESINTI 10-Pin Heavy Duty Connector is designed for industrial machines requiring multiple signal and power lines in a compact form. Its rugged metal housing, precision-engineered pins, and high vibration resistance make it ideal for automation equipment, CNC machines, packaging units, and heavy industrial control systems. Built for long life and stable connectivity, it performs reliably in dusty, moist, or high-temperature environments.",
    specifications: `### Technical Specifications (10-Pin Connector)
- Number of Pins: 10 + PE
- Rated Current: 10–16 A
- Rated Voltage: 250–500 V AC
- Rated Impulse Voltage: 6–8 kV
- Pin Material: Copper Alloy (Silver/Gold Plated)
- Contact Resistance: ≤ 1 mΩ
- Wiring Form: Screw / Crimp
- Wire Specification: 0.75–2.5 mm²
- Tightening Torque: 0.5–0.8 Nm
- Mating Cycles: ≥ 500
- Operating Temperature: -40°C to +125°C
- Shell Material: Die-Cast Aluminum / Zinc Alloy
- Protection Grade: IP65 / IP67
- Sealing Element: NBR / Silicone
- Locking Mechanism: Double Latch / Screw Lock
- Salt Spray Resistance: 48–72 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel / Inline / Cable-to-Cable`,
  },
  {
    id: "foil-1",
    title: "ESINTI Digital Hot Foil Stamping Machine – 4×6 Inch",
    price: 12499.0,
    oldPrice: 12999.0,
    category: "hot-foil-machine",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
    ],
    badges: ["Digital Control", "4×6 Inch"],
    description: "The ESINTI Digital Hot Foil Stamping Machine delivers precise, sharp, and premium foil printing using advanced digital temperature control. Ideal for gold foil, silver foil, holographic foil, and pigment stamping on paper, leather, PVC, cardboard, and coated surfaces. Perfect solution for luxury packaging, wedding cards, business cards, gift boxes, brand labels, and commercial printing.",
    specifications: `### Technical Specifications
- Product Name: ESINTI Digital Hot Foil Stamping Machine
- Printing Size: 4 × 6 inch
- Technology: Digital temperature & pressure control
- Material Compatibility: Paper, cardboard, PVC, leather, coated plastic
- Body Structure: Heavy-duty steel
- Foil Types: Gold, Silver, Holographic, Pigmented
- Usage Type: Commercial / Industrial
- Operation: Semi-Automatic / Digital
- Suitable For: Packaging, printing, branding`,
  },
  {
    id: "foil-2",
    title: "ESINTI Digital Hot Foil Stamping Machine – 4×6 Inch",
    price: 12499.0,
    oldPrice: 12999.0,
    category: "hot-foil-machine",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
    ],
    badges: ["Digital Control", "Heavy-Duty Steel"],
    description: "The ESINTI Digital Hot Foil Stamping Machine delivers premium metallic foil printing with precise digital temperature control. Ideal for gold, silver, holographic, and pigment foil stamping on paper, cardboard, PVC, leather, and packaging materials.",
    specifications: `### Technical Specifications
- Product Name: ESINTI Digital Hot Foil Stamping Machine
- Printing Area: 4 × 6 inch
- Technology: Digital foil stamping (Heat + Pressure)
- Temperature Control: Fully digital controller
- Supported Foils: Gold, Silver, Holographic, Pigmented
- Compatible Surfaces: Paper, cardboard, PVC, leather, coated materials
- Frame Material: Heavy-duty industrial steel
- Heating System: High-performance digital heater
- Operation Type: Semi-automatic / Digital control
- Suitable For: Commercial printing & craft production`,
  },
  {
    id: "ballast-1",
    title: "HPE Electronic Power Supply – 9 kW (HVTA-400-9-1000)",
    price: 899.0,
    oldPrice: 950.0,
    category: "ballasts",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["9 kW", "Digital Control", "24/7 Operation"],
    description: "The HPE 9 kW Digital Electronic Power Supply delivers stable, efficient, and precise UV lamp power for printing, coating, and industrial curing applications.",
    longDescription: `The HPE HVTA-400-9-1000 is a 9 kW digitally controlled electronic UV ballast engineered for industrial UV curing systems. It provides stable voltage output, enhances UV lamp life, and ensures consistent curing performance. Equipped with Ethernet/RS485 connectivity, it supports real-time remote monitoring and diagnostics.

With built-in overload, short-circuit, and overheat protection, this digital power supply ensures safe 24/7 operation. Its compact rectangular design fits smoothly into printing machines, UV coaters, and automation lines.`,
    specifications: `### Technical Specifications – HPE 9 kW Electronic Power Supply

| Specification | Details |
|--------------|---------|
| Model | HVTA-400-9-1000 |
| Power | 9 kW |
| Voltage | 1000 V |
| Display Type | Digital |
| Ballast Type | Electronic |
| Shape | Rectangle |
| Connectivity | Ethernet / RS485 |
| Usage | UV Ballast for UV Curing Systems |
| Protection | Overload, Short-Circuit, Overheat |
| Industrial Use | 24/7 Continuous Operation |

### Key Features
- Stable and precise 9 kW UV output
- High-efficiency digital regulation
- Remote monitoring via Ethernet/RS485
- Built-in protection (overload, heat, short circuit)
- Compact industrial-grade design
- Long lamp life & stable curing

### Applications
- UV curing in flexo, gravure & offset printing
- UV coating & varnish lines
- Automation UV systems
- Photochemical curing
- Packaging & lamination units`,
  },
  {
    id: "gear-1",
    title: "Planetary Gearbox 78ZR5-750T1 – 5:1 Ratio (For 750W Servo Motor)",
    price: 3499.0,
    oldPrice: 3799.0,
    category: "planetary-gearbox",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
    ],
    badges: ["High Precision", "Ultra-Low Backlash"],
    description: "A high-precision helical planetary gearbox designed for 750W servo motors. With ultra-low backlash (≤ 3 arc-min), high torque output (330 N·m), and 97% efficiency, this gearbox is ideal for CNC machines, automation, robotics, anilox drives, printing machinery, and industrial automation systems.",
    specifications: `### Technical Specifications
- Model: 78ZR5-750T1
- Gear Type: Helical Planetary Gearbox
- Reduction Ratio: 5:1 (Single Stage)
- Stages: 1-stage
- Rated Output Torque (T2N): 330 N·m
- Instant / Stop Torque: 990 N·m
- Compatible Motor Power: 750 W (NEMA 42 compatible)
- Backlash: ≤ 3 arc-minutes
- Efficiency: 96–97%
- Noise Level: ≤ 60 dB (Measured at L=100 cm)
- Lifespan: 30,000 hours
- Material: High-grade Steel (Hardened)
- Weight: 8.1 kg
- Mounting: Flange Mount
- Protection Grade: IP65
- Operating Temperature: -25°C to +90°C
- Lubrication: Lifetime lubrication
- Packaging: Box / Carton`,
  },
  {
    id: "tresu-1",
    title: "TRESU Coater Rubber – Industrial Coating Rubber for Printing & Packaging",
    price: 1299.0,
    oldPrice: 1499.0,
    category: "tresu-rubber",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["High Performance", "Heat Resistant"],
    description: "High-performance industrial rubber designed for TRESU coating systems, doctor blade units, and lamination machines. Ensures uniform coating, high durability, and excellent resistance to heat, pressure, and chemicals.",
    specifications: `### Technical Specifications
- Product Name: TRESU Coater Rubber
- Material: High-Grade Industrial Rubber
- Color: Black
- Application: Printing Machines, Coaters, Laminators
- Usage: Coater Rollers & Doctor Blade Systems
- Inner Diameter: 3 inch (Custom sizes available)
- Resistance: Heat, Pressure & Chemical Resistant
- Packaging: Box / Carton
- Brand: TRESU`,
  },
  {
    id: "hd-16",
    title: "Esinti 16-Pin Heavy Duty Connector",
    price: 549.0,
    oldPrice: 599.0,
    category: "heavy-duty-connector",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
    ],
    badges: ["IP65/IP67", "Dense Wiring"],
    description: "The ESINTI 16-Pin Heavy Duty Connector supports a higher number of signal and control lines, making it suitable for PLC panels, servo drives, robotics, and industrial automation systems requiring dense wiring. Its reinforced housing and precision pin layout ensure secure electrical contact even in extreme industrial environments.",
    specifications: `### Technical Specifications (16-Pin Connector)
- Number of Pins: 16 + PE
- Rated Current: 10 A
- Rated Voltage: 250–500 V AC
- Rated Impulse Voltage: 6–8 kV
- Pin Material: Copper Alloy (Silver/Gold Plated)
- Contact Resistance: ≤ 1 mΩ
- Wiring Form: Screw / Crimp
- Wire Specification: 0.75–2.5 mm²
- Tightening Torque: 0.5–0.8 Nm
- Mating Cycles: ≥ 500
- Operating Temperature: -40°C to +125°C
- Shell Material: Die-Cast Aluminum / Zinc Alloy
- Protection Grade: IP65 / IP67
- Sealing Element: NBR / Silicone
- Locking Mechanism: Double Latch / Screw Lock
- Salt Spray Resistance: 48–72 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel / Inline / Cable-to-Cable`,
  },
  {
    id: "hd-24",
    title: "Esinti 24-Pin Heavy Duty Connector",
    price: 699.0,
    oldPrice: 749.0,
    category: "heavy-duty-connector",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
    ],
    badges: ["IP65/IP67", "High-Density"],
    description: "The ESINTI 24-Pin Heavy Duty Connector is built for high-density signal distribution in modern automation systems. Ideal for PLC I/O modules, control cabinets, industrial sensors, machine tools, and complex machinery requiring multiple low-current signal lines. Engineered for stability, corrosion resistance, and long service life, it ensures safe connectivity in demanding environments.",
    specifications: `### Technical Specifications (24-Pin Connector)
- Number of Pins: 24 + PE
- Rated Current: 10 A
- Rated Voltage: 250–500 V AC
- Rated Impulse Voltage: 6–8 kV
- Pin Material: Copper Alloy (Silver/Gold Plated)
- Contact Resistance: ≤ 1 mΩ
- Wiring Form: Screw / Crimp
- Wire Specification: 0.75–2.5 mm²
- Tightening Torque: 0.5–0.8 Nm
- Mating Cycles: ≥ 500
- Operating Temperature: -40°C to +125°C
- Shell Material: Die-Cast Aluminum / Zinc Alloy
- Protection Grade: IP65 / IP67
- Sealing Element: NBR / Silicone
- Locking Mechanism: Double Latch / Screw Lock
- Salt Spray Resistance: 48–72 hours
- Humidity Resistance: 90% RH at 40°C
- Mounting Style: Panel / Inline / Cable-to-Cable`,
  },
  {
    id: "encoder-1",
    title: "ESINTI Shaft Encoder BI-38-H8-2500-PU",
    price: 2499.0,
    oldPrice: 2699.0,
    category: "encoders",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
    ],
    badges: ["2500 PPR", "High Precision", "HTL Output"],
    description: "The ESINTI BI-38-H8-2500-PU is a compact 38 mm incremental rotary shaft encoder with 2500 PPR resolution, offering high accuracy and stable push-pull (HTL) output for industrial automation systems.",
    longDescription: `The ESINTI Shaft Encoder BI-38-H8-2500-PU is a high-precision incremental rotary encoder designed for CNC machinery, robotics, conveyors, packaging machines, and printing equipment. With a 38 mm compact body and an 8 mm shaft, it delivers smooth and accurate position and speed feedback.

The encoder operates on 5–24V DC and uses a push-pull (HTL) output, ensuring excellent noise immunity and reliable signal transmission even in harsh industrial environments. Built with a rugged construction, it offers long service life, stable performance, and easy installation for motion control and automation applications.`,
    specifications: `### Technical Specifications – ESINTI Shaft Encoder BI-38-H8-2500-PU

| Specification | Details |
|--------------|---------|
| Product Name | Shaft Encoder BI-38-H8-2500-PU |
| Model No | BI-38-H8-2500-PU |
| Encoder Type | Incremental Rotary Encoder |
| Body Diameter | 38 mm |
| Shaft Diameter | 8 mm |
| Resolution | 2500 PPR |
| Output Type | Push-Pull (HTL) |
| Operating Voltage | 5–24V DC |
| Application Areas | CNC Machinery, Robotics, Automated Conveyors, Printing Machines, Motion Control Systems |
| Key Features | High Accuracy, Noise-Resistant Output, Rugged & Reliable Design, Easy Installation |

### Key Features
- 2500 PPR high-resolution output
- Compact 38 mm body ideal for tight spaces
- Push-pull HTL output for noise-free performance
- Wide 5–24V operating voltage
- High durability for industrial environments
- Simple and secure installation

### Applications
- CNC machines & milling centers
- Industrial automation & robotics
- Packaging and printing machinery
- Conveyor speed/position feedback
- Motion control systems
- Encoder replacement & retrofitting`,
  },
  {
    id: "encoder-2",
    title: "ESINTI Encoder Wheel",
    price: 901.60,
    oldPrice: 920.0,
    category: "encoders",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
    ],
    badges: ["Stainless Steel Core", "PU Outer Layer", "Wear Resistant"],
    description: "The ESINTI Encoder Wheel is a precision-engineered rotary encoder wheel designed for printing machines, anilox coaters, packaging equipment, and industrial automation systems. Built with a stainless-steel CNC-machined core and a high-performance polyurethane (PU) outer layer, it delivers exceptional durability, wear resistance, and low-noise operation.",
    longDescription: `The ESINTI Encoder Wheel is a precision-engineered rotary encoder wheel designed for printing machines, anilox coaters, packaging equipment, and industrial automation systems. Built with a stainless-steel CNC-machined core and a high-performance polyurethane (PU) outer layer, it delivers exceptional durability, wear resistance, and low-noise operation.

The CNC-machined stainless steel core ensures dimensional accuracy and long-term stability, while the high-performance polyurethane outer layer provides excellent grip, minimal slippage, and quiet operation. With customizable outer diameters (50-100 mm) and bore sizes (6-20 mm), this encoder wheel is ideal for retrofitting and upgrading existing machinery.

Operating reliably in temperatures from -20°C to +80°C, the ESINTI Encoder Wheel is perfect for demanding industrial environments including printing, packaging, coating, and automation systems.`,
    specifications: `### Technical Specifications – ESINTI Encoder Wheel

| Parameter | Specification |
|-----------|--------------|
| Core Material | Stainless Steel (CNC-machined, polished finish) |
| Outer Material | High-Performance Polyurethane (PU) |
| Outer Diameter (OD) | 50 mm – 100 mm |
| Bore Diameter | 6 mm – 20 mm |
| Thickness / Width | 8 mm – 20 mm |
| Hardness (PU) | 85 – 95 Shore A |
| Operating Temperature | -20°C to +80°C |
| Surface Finish | Smooth, wear-resistant, low-noise |
| Encoder Type | Rotary |
| Usage | Industrial Applications |

### Key Features
- Precision CNC-machined stainless steel core
- High-performance polyurethane outer layer
- Exceptional durability and wear resistance
- Low-noise operation
- Customizable dimensions (OD: 50-100 mm, Bore: 6-20 mm)
- Wide operating temperature range (-20°C to +80°C)
- Smooth surface finish for minimal slippage
- Ideal for retrofitting and upgrades

### Applications
- Printing machines
- Anilox coaters
- Packaging equipment
- Industrial automation systems
- Conveyor systems
- Encoder retrofitting and upgrades`,
  },
  {
    id: "encoder-3",
    title: "ESINTI Encoder Bracket",
    price: 1299.0,
    oldPrice: 1399.0,
    category: "encoders",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
    ],
    badges: ["Spring-Loaded", "Stainless Steel", "Precision Mounting"],
    description: "The ESINTI Encoder Bracket is a precision-engineered mounting assembly designed to securely hold rotary encoders, rollers, and shafts in printing, packaging, and industrial automation systems. Built from stainless steel and aluminum for long-lasting performance.",
    longDescription: `The ESINTI Encoder Bracket Assembly is a high-precision industrial mounting solution engineered for rotary encoders, rollers, and rotating shafts used in printing presses, anilox coaters, packaging lines, textile machinery, and automation systems.

Constructed from high-quality stainless steel and aluminum, this bracket ensures stable alignment, smooth encoder operation, and highly accurate feedback for speed and motion control. It features a spring-loaded tension mechanism that automatically adjusts pressure to maintain consistent contact between the encoder wheel and the roller, guaranteeing reliable measurements even at high machine speeds.

With clamp-style aluminum mounting blocks, precision-machined side plates, and dual steel shafts, the ESINTI Encoder Bracket offers effortless installation, reduced vibration, and long service life. Ideal for industries requiring consistent print quality, coating uniformity, and accurate motion tracking.`,
    specifications: `### Technical Specifications – ESINTI Encoder Bracket

| Specification | Details |
|--------------|---------|
| Material | Stainless Steel / Aluminum |
| Main Frame | Parallel side plates with precision-machined mounting holes |
| Shafts / Rods | Dual cylindrical shafts for roller & rotating part support |
| Clamp Blocks | Aluminum blocks with circular cutouts + clamping screws |
| Springs | Tension springs for adjustable force & automatic return |
| Encoder Type | Rotary |
| Surface Finish | Polished / Powder-coated (corrosion-resistant) |
| Operating Temperature | -20°C to +80°C |
| Usage | Industrial rotary encoder mounting assemblies |

### Key Features
- Spring-loaded tension design for consistent encoder pressure
- Easy clamp-style installation on shafts & rollers
- Precision-machined frame for stable alignment
- Corrosion-resistant stainless steel & aluminum build
- Low vibration, smooth movement, and high accuracy
- Supports multiple encoder types and mounting orientations

### Applications
- Flexo, Gravure, Offset Printing Machines
- Anilox Coaters & Converting Lines
- Packaging & Labeling Machinery
- Paper, Textile & Lamination Equipment
- Industrial Automation & Motion Control Systems`,
  },
  {
    id: "pump-aro-66605j",
    title: "ARO 66605J-3EB Anilox Coater Pump – 1/2\" Air Operated Double Diaphragm Pump (PP/PTFE)",
    price: 5999.0,
    oldPrice: 6499.0,
    category: "diaphragm-pump",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&h=800&fit=crop",
    ],
    badges: ["Chemical Resistant", "Non-Electric", "Self-Priming"],
    description: "High-performance 1/2\" ARO Air Operated Double Diaphragm Pump designed for chemical transfer, corrosive liquids, anilox coating, ink circulation, and industrial fluid handling. Made with PP/PTFE construction for maximum chemical resistance, safe pneumatic operation, and long service life.",
    longDescription: `The ARO 66605J-3EB Anilox Coater Pump is a premium-grade 1/2" Air Operated Double Diaphragm Pump (AODD) engineered for demanding industrial applications such as printing, coating, chemical transfer, and wastewater treatment. Manufactured with Polypropylene (PP) and Teflon (PTFE) wetted components, it provides exceptional resistance against corrosive chemicals, solvents, acids, inks, adhesives, and abrasive fluids.

This non-electric pneumatically operated diaphragm pump delivers a stable flow of up to 50 LPM, making it ideal for continuous operations in printing and packaging machines—especially for anilox coater systems, ink feeding, and varnish/chemical circulation.

With its dual inlet/outlet configuration, rugged body, and reliable design, the ARO 66605J-3EB ensures safe, leak-free, and low-maintenance performance in any industrial environment.`,
    specifications: `### Technical Specifications – ARO 66605J-3EB (1/2" AODD PP/PTFE Pump)

| Specification | Details |
|--------------|---------|
| Brand | ARO |
| Model No. | 66605J-3EB |
| Pump Type | Air Operated Double Diaphragm Pump (AODD) |
| Inlet / Outlet Size | 1/2" (Dual Inlet & Outlet) |
| Maximum Flow Rate | 49 – 50 LPM |
| Material of Construction (MOC) | Polypropylene (PP) & Teflon (PTFE) |
| Wetted Parts | Polypropylene (PP) |
| Diaphragm Material | PTFE / Teflon |
| Power Source | Pneumatic (Compressed Air) |
| Operation | Non-Electric, Air-Operated |
| Temperature Resistance | Suitable for industrial room-temperature & chemical fluids |
| Ideal For | Corrosive liquids, adhesives, inks, coatings, chemicals |
| Mounting | Universal industrial mount |
| Weight | Lightweight PP body |

### Key Features
- High chemical resistance (PP + PTFE wetted parts)
- Safe non-electric operation for hazardous or flammable fluids
- Smooth and pulsation-stable flow up to 50 LPM
- Suitable for ink circulation & varnish/chemical transfer in coaters
- Self-priming and capable of dry running
- Dual inlet/outlet design for flexible installation
- Long service life with minimal maintenance
- Corrosion & abrasion-resistant construction
- Easy to install on printing machines and industrial systems

### Applications / Industries

**Printing & Packaging Industry**
- Anilox coating systems
- Ink transfer & varnish circulation
- Coating & UV/Water-based fluids

**Chemical Processing**
- Acids, alkalis, solvents, corrosive liquids

**Water & Wastewater Treatment**

**Industrial Fluid Handling**
- Adhesives, emulsions, abrasive slurries

**Pharmaceuticals & Food Processing**
- Where non-metallic pumps are required

**Hazardous & Explosive Environments**
- Safe alternative to electric pumps

### Why Choose ARO AODD Pumps?
- Industry-leading reliability
- Zero electrical hazards
- Easy maintenance & long-life diaphragms
- High flow with consistent pressure
- Globally trusted for printing and chemical transfer`,
  },
  {
    id: "uv-805",
    title: "Albatross UV Curing Lamp 805mm – 7.5kW",
    price: 3499.0,
    oldPrice: 3799.0,
    category: "uv-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Premium Quality", "1000-Hour Warranty"],
    description: "Premium UV curing lamp used in Offset, Flexo, Screen, Gravure, Digital, and Packaging printing. Delivers fast curing, high adhesion, and smudge-free finishing for professional results.",
    specifications: `### Technical Specifications
- Total Length: 805 mm
- Arc Length: 635 mm
- Diameter: 25 mm
- End Fitting: B
- Pin Type: Pin Type
- Cable Length: 285/285 mm
- Voltage: 900V
- Current: 8.8A
- Power: 7.5kW`,
  },
  {
    id: "uv-812",
    title: "Albatross UV Curing Lamp 812mm – 8.4kW",
    price: 3699.0,
    oldPrice: 3999.0,
    category: "uv-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Premium Quality", "1000-Hour Warranty"],
    description: "Premium UV curing lamp used in Offset, Flexo, Screen, Gravure, Digital, and Packaging printing. Delivers fast curing, high adhesion, and smudge-free finishing for professional results.",
    specifications: `### Technical Specifications
- Total Length: 812 mm
- Arc Length: 711 mm
- Diameter: 25 mm
- End Fitting: B
- Pin Type: Pin Type
- Cable Length: 285/285 mm
- Voltage: 1000V
- Current: 8.4A
- Power: 8.4kW`,
  },
  {
    id: "uv-914",
    title: "Albatross UV Curing Lamp 914mm – 9.0kW",
    price: 3899.0,
    oldPrice: 4199.0,
    category: "uv-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Premium Quality", "1000-Hour Warranty"],
    description: "Premium UV curing lamp used in Offset, Flexo, Screen, Gravure, Digital, and Packaging printing. Delivers fast curing, high adhesion, and smudge-free finishing for professional results.",
    specifications: `### Technical Specifications
- Total Length: 914 mm
- Arc Length: 762 mm
- Diameter: 25 mm
- End Fitting: B
- Pin Type: Pin Type
- Cable Length: 285/285 mm
- Voltage: 1000V
- Current: 9.8A
- Power: 9.0kW`,
  },
  {
    id: "uv-1016",
    title: "Albatross UV Curing Lamp 1016mm – 10.8kW",
    price: 4299.0,
    oldPrice: 4599.0,
    category: "uv-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Premium Quality", "1000-Hour Warranty"],
    description: "Premium UV curing lamp used in Offset, Flexo, Screen, Gravure, Digital, and Packaging printing. Delivers fast curing, high adhesion, and smudge-free finishing for professional results.",
    specifications: `### Technical Specifications
- Total Length: 1016 mm
- Arc Length: 914 mm
- Diameter: 25 mm
- End Fitting: B
- Pin Type: Pin Type
- Cable Length: 285/285 mm
- Voltage: 1200V
- Current: 9A
- Power: 10.8kW`,
  },
  {
    id: "uv-1168",
    title: "Albatross UV Curing Lamp 1168mm – 16kW",
    price: 5499.0,
    oldPrice: 5899.0,
    category: "uv-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Premium Quality", "1000-Hour Warranty"],
    description: "Premium UV curing lamp used in Offset, Flexo, Screen, Gravure, Digital, and Packaging printing. Delivers fast curing, high adhesion, and smudge-free finishing for professional results.",
    specifications: `### Technical Specifications
- Total Length: 1168 mm
- Arc Length: 1016 mm
- Diameter: 25 mm
- End Fitting: B
- Pin Type: Pin Type
- Cable Length: 285/285 mm
- Voltage: 1500V
- Current: 10.6A
- Power: 16kW`,
  },

  {
    id: "ir-heating-lamp",
    title: "ESINTI Infrared Heating Lamp",
    price: 899.0,
    oldPrice: 999.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Energy Efficient", "Fast Heating", "Long Life"],
    description: "Industrial infrared heating lamps with quartz tube and ceramic insulation for rapid, uniform heat transfer. Ideal for drying, curing, and industrial heating applications.",
    hasVariants: true,
    variants: [
      {
        id: "440mm",
        value: "440",
        label: "440 mm",
        price: 899.0,
        oldPrice: 999.0,
        inStock: true,
        sku: "IR-440",
        description: "Compact 440mm infrared heating lamp, 1.5 kW at 220V AC. Clear quartz tube with ceramic insulation for plastic drying, paint curing, and packaging applications.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (440 mm)
- Total Length: 440 mm
- Voltage: 220 V AC
- Power Rating: 1.5 kW
- Surface Type: Clear Tube
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Infrared Radiation
- Operating Temperature: Up to 800°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Plastic Drying, Paint Curing, Packaging Machines
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
      {
        id: "626mm",
        value: "626",
        label: "626 mm",
        price: 1299.0,
        oldPrice: 1399.0,
        inStock: true,
        sku: "IR-626",
        description: "Medium-length 626mm infrared heating lamp, 2.5 kW at 230V AC. Clear quartz tube for uniform heating in printing, powder coating, and industrial ovens.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (626 mm)
- Total Length: 626 mm
- Voltage: 230 V AC
- Power Rating: 2.5 kW
- Surface Type: Clear Tube
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Infrared Radiation
- Operating Temperature: Up to 850°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Printing, Powder Coating, Industrial Ovens
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
      {
        id: "728mm",
        value: "728",
        label: "728 mm",
        price: 1499.0,
        oldPrice: 1599.0,
        inStock: true,
        sku: "IR-728",
        description: "Industrial 728mm infrared heating lamp, 2.5 kW at 415V AC. Clear quartz tube for metal preheating, paint curing, and continuous process heating.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (728 mm)
- Total Length: 728 mm
- Voltage: 415 V AC
- Power Rating: 2.5 kW
- Surface Type: Clear Tube
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Infrared Radiation
- Operating Temperature: Up to 850°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Metal Preheating, Paint Curing, Process Heating
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
      {
        id: "800mm",
        value: "800",
        label: "800 mm",
        price: 1899.0,
        oldPrice: 1999.0,
        inStock: true,
        sku: "IR-800",
        description: "High-power 800mm infrared heating lamp, 4.0 kW at 440V AC. Clear quartz tube for heavy-duty industrial heating, drying, and curing applications.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (800 mm)
- Total Length: 800 mm
- Voltage: 440 V AC
- Power Rating: 4.0 kW
- Surface Type: Clear Tube
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Infrared Radiation
- Operating Temperature: Up to 900°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Heavy-Duty Heating, Industrial Drying, Curing
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
      {
        id: "830mm",
        value: "830",
        label: "830 mm",
        price: 1599.0,
        oldPrice: 1699.0,
        inStock: true,
        sku: "IR-830",
        description: "Specialized 830mm infrared heating lamp, 3.0 kW at 230V AC. One-side coated tube for directional heating in printing, packaging, and coating applications.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (830 mm)
- Total Length: 830 mm
- Voltage: 230 V AC
- Power Rating: 3.0 kW
- Surface Type: One Side Coated
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Directional Infrared Radiation
- Operating Temperature: Up to 850°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Printing, Packaging, Coating (Directional Heating)
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
      {
        id: "850mm",
        value: "850",
        label: "850 mm",
        price: 1899.0,
        oldPrice: 1999.0,
        inStock: true,
        sku: "IR-850",
        description: "High-power 850mm infrared heating lamp, 4.0 kW at 440V AC. Clear quartz tube for industrial ovens, powder coating, and high-temperature process heating.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (850 mm)
- Total Length: 850 mm
- Voltage: 440 V AC
- Power Rating: 4.0 kW
- Surface Type: Clear Tube
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Infrared Radiation
- Operating Temperature: Up to 900°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Industrial Ovens, Powder Coating, Process Heating
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
      {
        id: "875mm",
        value: "875",
        label: "875 mm",
        price: 1599.0,
        oldPrice: 1699.0,
        inStock: true,
        sku: "IR-875",
        description: "Industrial 875mm infrared heating lamp, 3.0 kW at 415V AC. Clear quartz tube for paint curing, plastic drying, and continuous manufacturing processes.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (875 mm)
- Total Length: 875 mm
- Voltage: 415 V AC
- Power Rating: 3.0 kW
- Surface Type: Clear Tube
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Infrared Radiation
- Operating Temperature: Up to 850°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Paint Curing, Plastic Drying, Manufacturing
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
      {
        id: "1120mm",
        value: "1120",
        label: "1120 mm",
        price: 1699.0,
        oldPrice: 1799.0,
        inStock: true,
        sku: "IR-1120",
        description: "Extended 1120mm infrared heating lamp, 3.0 kW at 415V AC. Clear quartz tube for wide-area heating in industrial ovens and large-scale drying systems.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (1120 mm)
- Total Length: 1120 mm
- Voltage: 415 V AC
- Power Rating: 3.0 kW
- Surface Type: Clear Tube
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Infrared Radiation
- Operating Temperature: Up to 850°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Wide-Area Heating, Industrial Ovens, Drying Systems
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
      {
        id: "1150mm",
        value: "1150",
        label: "1150 mm",
        price: 2299.0,
        oldPrice: 2499.0,
        inStock: true,
        sku: "IR-1150",
        description: "High-capacity 1150mm infrared heating lamp, 6.0 kW at 440V AC. Clear quartz tube for maximum heating power in heavy-duty industrial applications.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (1150 mm)
- Total Length: 1150 mm
- Voltage: 440 V AC
- Power Rating: 6.0 kW (Maximum Power)
- Surface Type: Clear Tube
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Infrared Radiation
- Operating Temperature: Up to 950°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Heavy-Duty Industrial Heating, Large Ovens, High-Power Curing
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
      {
        id: "1220mm",
        value: "1220",
        label: "1220 mm",
        price: 1699.0,
        oldPrice: 1799.0,
        inStock: true,
        sku: "IR-1220",
        description: "Long-length 1220mm infrared heating lamp, 3.0 kW at 415V AC. Clear quartz tube for extended heating zones in conveyor systems and continuous processes.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (1220 mm)
- Total Length: 1220 mm
- Voltage: 415 V AC
- Power Rating: 3.0 kW
- Surface Type: Clear Tube
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Infrared Radiation
- Operating Temperature: Up to 850°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Conveyor Systems, Continuous Processes, Extended Heating Zones
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
      {
        id: "1250mm",
        value: "1250",
        label: "1250 mm",
        price: 1899.0,
        oldPrice: 1999.0,
        inStock: true,
        sku: "IR-1250",
        description: "Maximum-length 1250mm infrared heating lamp, 4.0 kW at 230V AC. One-side coated tube for directional heating in large-scale industrial applications.",
        images: [
          "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
          "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
        ],
        specifications: `### Technical Specifications (1250 mm)
- Total Length: 1250 mm
- Voltage: 230 V AC
- Power Rating: 4.0 kW
- Surface Type: One Side Coated
- Insulation Material: Ceramic
- Heating Element: Quartz Tube
- Heat Transfer: Directional Infrared Radiation
- Operating Temperature: Up to 900°C
- Response Time: < 30 seconds
- Energy Efficiency: High
- Service Life: > 5000 hours
- Applications: Large-Scale Industrial Heating, Directional Curing, Wide Ovens
- Mounting: Horizontal / Vertical
- Cooling: Natural Convection`
      },
    ],
  },
  {
    id: "ir-440",
    title: "ESINTI IR Lamp 440mm – 1.5kW",
    price: 899.0,
    oldPrice: 999.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Compact", "Energy Efficient"],
    description: "The ESINTI 440mm Infrared Heating Lamp provides fast and consistent heating for compact industrial machines. Built using a high-quality quartz tube and ceramic insulation, it ensures excellent durability and efficient thermal performance.",
    specifications: `### Technical Specifications
- Full Length: 440 mm
- Voltage: 220 VAC
- Power: 1.5 kW
- Surface: Clear Tube
- Material: Ceramic`,
  },
  {
    id: "ir-626",
    title: "ESINTI IR Lamp 626mm – 2.5kW",
    price: 1299.0,
    oldPrice: 1399.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Medium Length", "Fast Heating"],
    description: "The ESINTI 626mm 2.5kW IR Lamp delivers stable and powerful heating performance suitable for mid-range industrial systems.",
    specifications: `### Technical Specifications
- Full Length: 626 mm
- Voltage: 230 VAC
- Power: 2.5 kW
- Surface: Clear Tube
- Material: Ceramic`,
  },
  {
    id: "ir-728",
    title: "ESINTI IR Lamp 728mm – 2.5kW",
    price: 1499.0,
    oldPrice: 1599.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["High Voltage", "Industrial"],
    description: "The ESINTI 728mm 2.5kW IR Lamp delivers stable and powerful heating performance for industrial systems.",
    specifications: `### Technical Specifications
- Full Length: 728 mm
- Voltage: 415 VAC
- Power: 2.5 kW
- Surface: Clear Tube
- Material: Ceramic`,
  },
  {
    id: "ir-800",
    title: "ESINTI IR Lamp 800mm – 4.0kW",
    price: 1899.0,
    oldPrice: 1999.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["High Power", "Heavy Duty"],
    description: "The ESINTI 800mm 4.0kW IR Lamp delivers high-power heating performance for heavy-duty industrial applications.",
    specifications: `### Technical Specifications
- Full Length: 800 mm
- Voltage: 440 VAC
- Power: 4.0 kW
- Surface: Clear Tube
- Material: Ceramic`,
  },
  {
    id: "ir-830",
    title: "ESINTI IR Lamp 830mm – 3.0kW (Coated)",
    price: 1599.0,
    oldPrice: 1699.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Directional", "One Side Coated"],
    description: "This model includes one-side coating that reflects heat directionally, increasing efficiency.",
    specifications: `### Technical Specifications
- Full Length: 830 mm
- Voltage: 230 VAC
- Power: 3.0 kW
- Surface: One-Side Coated
- Material: Ceramic`,
  },
  {
    id: "ir-850",
    title: "ESINTI IR Lamp 850mm – 4.0kW",
    price: 1899.0,
    oldPrice: 1999.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["High Power", "Industrial"],
    description: "The ESINTI 850mm 4.0kW IR Lamp delivers high-power heating for industrial ovens and powder coating systems.",
    specifications: `### Technical Specifications
- Full Length: 850 mm
- Voltage: 440 VAC
- Power: 4.0 kW
- Surface: Clear Tube
- Material: Ceramic`,
  },
  {
    id: "ir-875",
    title: "ESINTI IR Lamp 875mm – 3.0kW",
    price: 1599.0,
    oldPrice: 1699.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Versatile", "Industrial"],
    description: "Industrial infrared heating lamp with 875mm length, delivering 3.0 kW power at 415 VAC. Features clear quartz tube with ceramic insulation for fast and uniform heating. Suitable for continuous high-temperature operation with long service life. Energy-efficient solution ideal for plastic drying, paint curing, powder coating, printing and packaging machines, metal preheating, and industrial ovens.",
  },
  {
    id: "ir-1120",
    title: "ESINTI IR Lamp 1120mm - 3.0kW",
    price: 1699.0,
    oldPrice: 1799.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Extended Length", "Wide Area"],
    description: "Industrial infrared heating lamp with 1120mm length, delivering 3.0 kW power at 415 VAC. Features clear quartz tube with ceramic insulation for fast and uniform heating. Suitable for continuous high-temperature operation with long service life. Energy-efficient solution ideal for plastic drying, paint curing, powder coating, printing and packaging machines, metal preheating, and industrial ovens.",
  },
  {
    id: "ir-1150",
    title: "ESINTI IR Lamp 1150mm - 6.0kW",
    price: 2299.0,
    oldPrice: 2499.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Maximum Power", "6.0kW"],
    description: "Industrial infrared heating lamp with 1150mm length, delivering 6.0 kW power at 440 VAC. Features clear quartz tube with ceramic insulation for fast and uniform heating. Suitable for continuous high-temperature operation with long service life. Energy-efficient solution ideal for plastic drying, paint curing, powder coating, printing and packaging machines, metal preheating, and industrial ovens.",
  },
  {
    id: "ir-1220",
    title: "ESINTI IR Lamp 1220mm - 3.0kW",
    price: 1699.0,
    oldPrice: 1799.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Long Length", "Conveyor Systems"],
    description: "Industrial infrared heating lamp with 1220mm length, delivering 3.0 kW power at 415 VAC. Features clear quartz tube with ceramic insulation for fast and uniform heating. Suitable for continuous high-temperature operation with long service life. Energy-efficient solution ideal for plastic drying, paint curing, powder coating, printing and packaging machines, metal preheating, and industrial ovens.",
  },
  {
    id: "ir-1250",
    title: "ESINTI IR Lamp 1250mm - 4.0kW (Coated)",
    price: 1899.0,
    oldPrice: 1999.0,
    category: "ir-lamp",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["Maximum Length", "Directional"],
    description: "Industrial infrared heating lamp with 1250mm length, delivering 4.0 kW power at 230 VAC. Features one-side coated quartz tube with ceramic insulation for directional heating. Suitable for continuous high-temperature operation with long service life. Energy-efficient solution ideal for plastic drying, paint curing, powder coating, printing and packaging machines, metal preheating, and industrial ovens.",
  },
  {
    id: "clamp-1",
    title: "IR Round Clamp – Infrared Lamp Mounting Clamp",
    price: 449.0,
    oldPrice: 499.0,
    category: "ir-clamps",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
    ],
    badges: ["Heat Resistant", "Durable", "Up to 500°C"],
    description: "Heat-resistant, durable mounting clamp designed for securely holding tubular infrared (IR) lamps. Features stable grip, long service life, and suitability for industrial heating applications.",
    longDescription: `The IR ROUND CLAMP is designed to securely mount IR lamps used in heating and drying machines. Manufactured using stainless steel or heat-resistant alloy for strength and durability, it can withstand temperatures up to 500°C continuously without deformation.

This clamp ensures firm lamp positioning for stable and efficient heating performance. Compatible with short-wave, medium-wave, and fast-response IR lamps, it features an anti-corrosion polished finish that extends lifespan in industrial environments.

With easy screw/bolt mounting installation, the IR ROUND CLAMP is ideal for printing machines, packaging units, textile dryers, plastic thermoforming machines, and food-processing lines.`,
    specifications: `### Technical Specifications – IR Round Clamp

| Specification | Details |
|--------------|---------|
| Product Name | IR Round Clamp / Infrared Lamp Mounting Clamp |
| Shape | Round (for tubular IR lamps) |
| Material | Stainless Steel / Heat-Resistant Alloy |
| Surface Finish | Polished / Anti-rust Coating |
| Temperature Resistance | Up to 500°C (continuous use) |
| Mounting Type | Screw / Bolt-on |
| Compatibility | Short-wave, Medium-wave, Fast-response IR Lamps |
| Durability | Long service life, corrosion resistant |
| Applications | Printing, Packaging, Textile Drying, Plastic Thermoforming, Food Processing |

### Key Features
- High-temperature resistant up to 500°C
- Strong round grip for tubular IR lamps
- Rust-proof polished finish
- Bolt-on installation for fast setup
- Long-lasting industrial durability
- Ensures stable and accurate heating performance

### Applications
- Printing & Packaging Machines
- Textile Drying Units
- Plastic Thermoforming Systems
- Food Processing Equipment
- Industrial Heating & Drying Systems`,
  },
  {
    id: "clamp-2",
    title: "IR Square Clamp – Infrared Tube Mounting Clamp",
    price: 649.0,
    oldPrice: 699.0,
    category: "ir-clamps",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=800&fit=crop",
    ],
    badges: ["Heavy Duty", "High Temperature", "Up to 500°C"],
    description: "High-temperature, heavy-duty mounting clamp designed to securely hold IR heating tubes in industrial machines. Features heat resistance, stable grip, and long service life.",
    longDescription: `The IR SQUARE CLAMP is engineered for mounting infrared heating lamps/tubes in high-demand industrial environments. Made from high-grade stainless steel and heat-resistant alloy for maximum durability, the square design provides extra stability for IR tubes and prevents rotation or misalignment.

This clamp withstands continuous temperatures up to 500°C without deformation and is available for ceramic IR lamps, quartz tubes, and other IR heating elements. It ensures consistent heat distribution by keeping the lamp firmly in place with a corrosion-resistant polished finish for long service life.

Simple bolt/screw installation makes it easy to integrate with any machine. Ideal for printing, coating, packaging, electronics curing, textile drying, and plastics processing.`,
    specifications: `### Technical Specifications – IR Square Clamp

| Specification | Details |
|--------------|---------|
| Product Name | IR Square Clamp / Infrared Tube Mounting Clamp |
| Shape | Square (for tube-shaped IR lamps) |
| Material | Stainless Steel / Heat-Resistant Alloy |
| Variants | Ceramic & Quartz Clamp Options |
| Surface Finish | Polished / Anti-rust Coating |
| Color | Silver |
| Temperature Resistance | Up to 500°C (continuous use) |
| Mounting Type | Screw / Bolt-on |
| Compatibility | IR Drying Lamps & Tubes (Ceramic & Quartz holders) |
| Durability | High strength, long-lasting, stable grip |
| Applications | Offset Printing, Flexo & Gravure Printing, Coating & Drying Units, Packaging Machinery, Electronics & Plastic Curing |

### Key Features
- High temperature resistance up to 500°C
- Square design for enhanced stability
- Heavy-duty stainless steel construction
- Compatible with ceramic & quartz IR tubes
- Rust-proof polished finish
- Easy bolt-on installation
- Provides stable and consistent heating performance
- Long service life with industrial-grade durability

### Applications
- Offset Printing Machines
- Flexo & Gravure Printing Units
- Coating & Drying Systems
- Packaging Machinery
- Electronics Component Curing
- Plastic Thermoforming & Drying Machines
- Industrial IR Heating & Drying Lines`,
  },
  {
    id: "ballast-2",
    title: "HPE Electronic Power Supply – 12 kW (HVTA-400-12-1350)",
    price: 1199.0,
    oldPrice: 1299.0,
    category: "ballasts",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["12 kW", "High-Speed", "Digital Control"],
    description: "The HPE 12 kW EPS delivers high-power digital UV control for fast printing and high-speed curing systems.",
    longDescription: `The HPE HVTA-400-12-1350 is a 12 kW advanced digital UV power supply designed for printing presses, UV coaters, and industrial curing units. It offers precise output control, stable voltage delivery, and superior energy efficiency. With Ethernet/RS485 connectivity, it supports remote diagnostics and live monitoring.

Built-in overload, short-circuit, and thermal protection ensure maximum safety and reliability in continuous production environments. Ideal for high-speed and heavy-duty UV curing.`,
    specifications: `### Technical Specifications – HPE 12 kW Electronic Power Supply

| Specification | Details |
|--------------|---------|
| Model | HVTA-400-12-1350 |
| Power | 12 kW |
| Voltage | 1350 V |
| Display Type | Digital |
| Ballast Type | Electronic |
| Shape | Rectangle |
| Connectivity | Ethernet / RS485 |
| Usage | UV Ballast for UV Curing Systems |
| Protection | Overload, Short-Circuit, Overheat |
| Industrial Use | 24/7 Continuous Operation |

### Key Features
- Powerful 12 kW UV output
- Digital precision control
- Advanced safety protection
- Remote monitoring & diagnostics
- Excellent for high-speed curing machines

### Applications
- Flexo & gravure printing UV curing
- Offset UV coating
- High-speed UV drying tunnels
- Packaging & lamination lines
- UV adhesives & varnish processes`,
  },
  {
    id: "ballast-3",
    title: "HPE Electronic Power Supply – 16 kW (HVTA-400-16-1500)",
    price: 1499.0,
    oldPrice: 1599.0,
    category: "ballasts",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=800&fit=crop",
    ],
    badges: ["16 kW", "Heavy Duty", "Industrial Grade"],
    description: "Heavy-duty 16 kW electronic ballast engineered for large UV curing systems requiring maximum stability and continuous performance.",
    longDescription: `The HPE HVTA-400-16-1500 is a high-power 16 kW digital UV power supply designed for industrial-scale UV curing machines. Offering excellent voltage stability, high UV intensity output, and long operational life, it is ideal for demanding industrial applications. It features Ethernet/RS485 connectivity for remote monitoring and diagnostics.

With multi-level protection (overload, short-circuit, overheat), it ensures safe 24/7 operation. Designed for wide-format printers, coating tunnels, and heavy curing lines.`,
    specifications: `### Technical Specifications – HPE 16 kW Electronic Power Supply

| Specification | Details |
|--------------|---------|
| Model | HVTA-400-16-1500 |
| Power | 16 kW |
| Voltage | 1500 V |
| Display Type | Digital |
| Ballast Type | Electronic |
| Shape | Rectangle |
| Connectivity | Ethernet / RS485 |
| Usage | UV Ballast for UV Curing Systems |
| Protection | Overload, Short-Circuit, Overheat |
| Industrial Use | 24/7 Heavy-Duty Operation |

### Key Features
- Maximum 16 kW UV output
- Ultra-stable digital power control
- Industrial-grade safety protection
- Remote monitoring (Ethernet/RS485)
- Designed for heavy-duty UV curing systems

### Applications
- Wide-format UV printers
- Industrial UV drying tunnels
- Coating & lamination machines
- High-power photochemical curing
- Heavy industrial UV systems`,
  },
  {
    id: "foil-2",
    title: "Hot Foil Stamping Machine - Digital",
    price: 15999.0,
    oldPrice: 16999.0,
    category: "hot-foil-machine",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=400&fit=crop",
    badges: ["Digital Control", "High Speed"],
    description: "Digital hot foil stamping machine with programmable controls and high-speed operation.",
  },
];
