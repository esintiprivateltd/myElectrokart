interface ProductDescriptionProps {
  variant: string;
  productId?: string;
}

export default function ProductDescription({ variant, productId }: ProductDescriptionProps) {
  // Use the variant prop directly - it's already in the correct format (e.g., "4-pin", "6-pin")
  // For standalone products without variants, use productId as the key
  const descKey = variant === "default" && productId ? productId : variant;
  const descriptions = {
    "4-pin": {
      short: "Heavy-duty 4-pin industrial connector with PE, rated 25-40A at 500-690V. Features IP65/67 protection, double latch locking, and die-cast aluminum housing for demanding applications.",
      long: "The Esinti 4-Pin Heavy Duty Connector is engineered for high-power industrial applications requiring robust, reliable electrical connections. With a rated current capacity of 25-40A and voltage rating up to 690V, this connector excels in demanding environments. The copper alloy pins with silver/gold plating ensure minimal contact resistance (≤1mΩ) and excellent conductivity. Protected by IP65/67 sealing with NBR/Silicone gaskets, it withstands dust, water, and harsh conditions. The die-cast aluminum/zinc shell provides exceptional mechanical strength, while the double latch and screw lock mechanism prevents accidental disconnection even under vibration. Suitable for wire sizes 1.0-10mm² with screw or crimp termination.",
      benefits: [
        "High current capacity (25-40A) for power-intensive applications",
        "IP65/67 protection against dust and water ingress",
        "Robust die-cast aluminum housing for mechanical durability",
        "Low contact resistance (≤1mΩ) ensures efficient power transmission",
        "Wide operating temperature range (-40°C to +125°C)",
        "500+ mating cycles for long service life"
      ]
    },
    "6-pin": {
      short: "Versatile 6-pin heavy-duty connector with PE, rated 16-40A at 500-690V. IP65/67 sealed with double latch locking for industrial automation and control systems.",
      long: "The Esinti 6-Pin Heavy Duty Connector offers exceptional versatility for industrial control and power distribution applications. With a current rating of 16-40A and voltage capacity up to 690V, it handles both signal and power connections reliably. The silver/gold plated copper alloy contacts provide superior conductivity with minimal resistance. IP65/67 protection with NBR/Silicone sealing ensures reliable operation in dusty, wet environments. The die-cast aluminum/zinc construction delivers outstanding mechanical strength and EMI shielding. Double latch and screw lock mechanisms provide secure connections resistant to vibration and mechanical stress. Accepts wire sizes 1.0-6mm² with flexible screw or crimp termination options.",
      benefits: [
        "Flexible current rating (16-40A) for various applications",
        "IP65/67 environmental protection for harsh conditions",
        "Silver/gold plated contacts for superior conductivity",
        "Vibration-resistant double latch locking system",
        "EMI shielding from die-cast metal housing",
        "Versatile wire termination (screw/crimp)"
      ]
    },
    "hd-6": {
      short: "The ESINTI 6-Pin Heavy Duty Connector is engineered for multi-signal and power applications. With durable metal housing and corrosion-resistant contact pins, it guarantees stable transmission even under vibration, dust, or moisture.",
      long: "The ESINTI 6-Pin Heavy Duty Connector is engineered for multi-signal and power applications. With durable metal housing and corrosion-resistant contact pins, it guarantees stable transmission even under vibration, dust, or moisture. Perfect for automation panels, conveyors, and robotics. This industrial-grade connector features 6 pins plus PE (protective earth) with a rated current capacity of 16-40A and voltage rating up to 690V AC. The copper alloy pins with silver/gold plating ensure minimal contact resistance (≤1mΩ) and excellent conductivity. Protected by IP65/IP67 sealing with NBR/Silicone gaskets, it withstands dust, water, and harsh industrial conditions. The die-cast aluminum/zinc alloy shell provides exceptional mechanical strength and EMI shielding, while the double latch and screw lock mechanism prevents accidental disconnection even under vibration. Suitable for wire sizes 1.0-6.0mm² with screw or crimp termination.",
      benefits: [
        "Multi-signal and power capability (6 + PE pins)",
        "High current capacity (16-40A) at 500-690V AC",
        "IP65/IP67 protection against dust and moisture",
        "Corrosion-resistant silver/gold plated contacts",
        "Die-cast aluminum/zinc housing for durability",
        "Double latch/screw lock for vibration resistance",
        "Wide operating temperature range (-40°C to +125°C)",
        "Long service life with ≥500 mating cycles"
      ]
    },
    "7-pin": {
      short: "Compact 7-pin industrial connector with PE, rated 20-32A at 500V. Features IP65 protection and double latch locking for control and signal applications.",
      long: "The Esinti 7-Pin Heavy Duty Connector is designed for applications requiring multiple signal and power connections in a compact form factor. Rated at 20-32A and 500V, it's ideal for control panels, motor connections, and automation systems. The silver-plated copper alloy pins ensure reliable signal integrity and power transmission with minimal contact resistance. IP65 protection with silicone/NBR sealing guards against environmental contaminants. The aluminum/thermoplastic housing balances strength with weight savings. Double latch locking provides secure connections while allowing quick disconnect when needed. Supports wire sizes 1.0-6mm² with screw or crimp termination for installation flexibility.",
      benefits: [
        "Compact design with 7 signal/power pins plus PE",
        "IP65 protection for industrial environments",
        "Silver-plated contacts for reliable signal integrity",
        "Lightweight aluminum/thermoplastic construction",
        "Quick-disconnect double latch mechanism",
        "Flexible wire termination options"
      ]
    },
    "10-pin": {
      short: "Multi-pin 10-pin connector with PE, rated 16-25A at 500V. IP65 sealed with double latch for complex control systems and multi-circuit applications.",
      long: "The Esinti 10-Pin Heavy Duty Connector provides extensive connectivity for complex industrial control systems and multi-circuit applications. With 10 pins plus PE and a current rating of 16-25A at 500V, it efficiently handles multiple power and signal circuits in a single connection point. Silver-plated copper alloy contacts ensure consistent performance with low contact resistance. IP65 protection with silicone/NBR sealing maintains reliability in challenging environments. The aluminum/thermoplastic housing offers excellent strength-to-weight ratio and corrosion resistance. Double latch locking ensures secure connections in high-vibration applications. Accommodates wire sizes 0.75-4mm² with screw or crimp termination for versatile installation.",
      benefits: [
        "10 pins plus PE for complex multi-circuit connections",
        "Balanced current rating (16-25A) for mixed applications",
        "IP65 environmental sealing for reliability",
        "Corrosion-resistant aluminum/thermoplastic housing",
        "Secure double latch locking mechanism",
        "Supports various wire sizes (0.75-4mm²)"
      ]
    },
    "hd-10": {
      short: "The ESINTI 10-Pin Heavy Duty Connector is designed for industrial machines requiring multiple signal and power lines in a compact form. Its rugged metal housing, precision-engineered pins, and high vibration resistance make it ideal for automation equipment, CNC machines, packaging units, and heavy industrial control systems.",
      long: "The ESINTI 10-Pin Heavy Duty Connector is designed for industrial machines requiring multiple signal and power lines in a compact form. Its rugged metal housing, precision-engineered pins, and high vibration resistance make it ideal for automation equipment, CNC machines, packaging units, and heavy industrial control systems. Built for long life and stable connectivity, it performs reliably in dusty, moist, or high-temperature environments. This industrial-grade connector features 10 pins plus PE (protective earth) with a rated current capacity of 10-16A and voltage rating of 250-500V AC. The copper alloy pins with silver/gold plating ensure minimal contact resistance (≤1mΩ) and excellent conductivity. Protected by IP65/IP67 sealing with NBR/Silicone gaskets, it withstands dust, water, and harsh industrial conditions. The die-cast aluminum/zinc alloy shell provides exceptional mechanical strength, while the double latch and screw lock mechanism prevents accidental disconnection even under vibration.",
      benefits: [
        "Compact design with 10 pins plus PE for multiple circuits",
        "Rated current 10-16A at 250-500V AC",
        "IP65/IP67 protection for harsh environments",
        "Precision-engineered silver/gold plated contacts",
        "Rugged die-cast aluminum/zinc housing",
        "High vibration resistance with double latch locking",
        "Wide operating temperature range (-40°C to +125°C)",
        "Long service life with ≥500 mating cycles"
      ]
    },
    "16-pin": {
      short: "High-density 16-pin connector with PE, rated 16A at 500V. Features IP65 protection and metal roller locking for data and control applications.",
      long: "The Esinti 16-Pin Heavy Duty Connector delivers high-density connectivity for data-intensive control systems and multi-channel applications. With 16 pins plus PE rated at 16A and 500V, it's perfect for PLC systems, servo drives, and complex automation equipment. Silver/gold plated copper contacts provide excellent signal integrity and power delivery with minimal resistance. IP65 protection with NBR sealing ensures reliable operation in industrial environments. The die-cast aluminum housing offers superior EMI shielding and mechanical protection. Metal roller and double buckle locking mechanism provides exceptionally secure connections resistant to vibration and mechanical stress. Screw connection termination for wire sizes 0.5-4mm² ensures reliable, maintenance-free installations.",
      benefits: [
        "High-density 16-pin configuration for complex systems",
        "Excellent signal integrity for data applications",
        "Superior EMI shielding from die-cast aluminum",
        "Metal roller locking for maximum security",
        "IP65 protection for industrial reliability",
        "Screw termination for maintenance-free connections"
      ]
    },
    "hd-16": {
      short: "The ESINTI 16-Pin Heavy Duty Connector supports a higher number of signal and control lines, making it suitable for PLC panels, servo drives, robotics, and industrial automation systems requiring dense wiring.",
      long: "The ESINTI 16-Pin Heavy Duty Connector supports a higher number of signal and control lines, making it suitable for PLC panels, servo drives, robotics, and industrial automation systems requiring dense wiring. Its reinforced housing and precision pin layout ensure secure electrical contact even in extreme industrial environments. This high-density connector features 16 pins plus PE (protective earth) with a rated current capacity of 10A and voltage rating of 250-500V AC. The copper alloy pins with silver/gold plating ensure minimal contact resistance (≤1mΩ) and excellent signal integrity. Protected by IP65/IP67 sealing with NBR/Silicone gaskets, it withstands dust, water, and harsh industrial conditions. The die-cast aluminum/zinc alloy shell provides exceptional mechanical strength and EMI shielding, while the double latch and screw lock mechanism prevents accidental disconnection.",
      benefits: [
        "High-density 16 pins plus PE for complex control systems",
        "Rated current 10A at 250-500V AC",
        "IP65/IP67 protection for extreme environments",
        "Precision pin layout for secure electrical contact",
        "Reinforced die-cast aluminum/zinc housing",
        "Ideal for PLC panels, servo drives, and robotics",
        "Wide operating temperature range (-40°C to +125°C)",
        "Long service life with ≥500 mating cycles"
      ]
    },
    "24-pin": {
      short: "Ultra-high-density 24-pin (2×12) connector, rated 16A at 250-1000V. IP67/68 protection with twist lock/bayonet for high-voltage and data applications.",
      long: "The Esinti 24-Pin Heavy Duty Connector represents the pinnacle of high-density industrial connectivity, featuring 24 pins in a 2×12 configuration. With a voltage rating up to 1000V and 16A current capacity, it excels in high-voltage power distribution and dense signal applications. Gold/tin plated copper alloy contacts ensure superior conductivity and corrosion resistance. IP67/68 protection with silicone gasket sealing provides exceptional environmental protection, even in submersible applications. The nylon/zinc/thermoplastic housing combines strength, chemical resistance, and electrical insulation. Twist lock, bayonet, or threaded locking options provide secure connections for various installation requirements. Crimp or solder termination for wire sizes 0.5-2.5mm² enables precise, reliable connections. Rated for 500-1000 mating cycles for extended service life.",
      benefits: [
        "Ultra-high-density 24-pin (2×12) configuration",
        "Wide voltage range (250-1000V) for versatile applications",
        "IP67/68 protection including submersible capability",
        "Multiple locking options (twist/bayonet/threaded)",
        "Gold/tin plated contacts for corrosion resistance",
        "Extended mating cycles (500-1000) for longevity"
      ]
    },
    "hd-24": {
      short: "The ESINTI 24-Pin Heavy Duty Connector is built for high-density signal distribution in modern automation systems. Ideal for PLC I/O modules, control cabinets, industrial sensors, machine tools, and complex machinery requiring multiple low-current signal lines.",
      long: "The ESINTI 24-Pin Heavy Duty Connector is built for high-density signal distribution in modern automation systems. Ideal for PLC I/O modules, control cabinets, industrial sensors, machine tools, and complex machinery requiring multiple low-current signal lines. Engineered for stability, corrosion resistance, and long service life, it ensures safe connectivity in demanding environments. This high-density connector features 24 pins plus PE (protective earth) with a rated current capacity of 10A and voltage rating of 250-500V AC. The copper alloy pins with silver/gold plating ensure minimal contact resistance (≤1mΩ) and excellent signal integrity for multiple low-current lines. Protected by IP65/IP67 sealing with NBR/Silicone gaskets, it withstands dust, water, and harsh industrial conditions. The die-cast aluminum/zinc alloy shell provides exceptional mechanical strength and stability, while the double latch and screw lock mechanism prevents accidental disconnection.",
      benefits: [
        "High-density 24 pins plus PE for complex signal distribution",
        "Rated current 10A at 250-500V AC",
        "IP65/IP67 protection for demanding environments",
        "Ideal for PLC I/O modules and control cabinets",
        "Engineered for stability and corrosion resistance",
        "Perfect for industrial sensors and machine tools",
        "Wide operating temperature range (-40°C to +125°C)",
        "Long service life with ≥500 mating cycles"
      ]
    },
    "32-pin": {
      short: "Maximum-density 32-pin connector with PE, rated 10-16A at 250-500V. IP67 sealed with bayonet/latch locking for complex automation and data systems.",
      long: "The Esinti 32-Pin Heavy Duty Connector provides maximum connectivity density for the most complex industrial automation and data acquisition systems. With 32 pins plus PE rated at 10-16A and up to 500V, it consolidates multiple circuits into a single, manageable connection point. Tin-plated copper alloy contacts deliver reliable performance with contact resistance under 10mΩ. IP67 protection with silicone sealing ensures dependable operation in harsh industrial environments. The thermoplastic/zinc housing offers excellent electrical insulation, chemical resistance, and mechanical strength. Bayonet or latch locking mechanisms provide quick, secure connections ideal for frequent maintenance scenarios. Crimp or screw termination for wire sizes 0.5-2.5mm² accommodates various installation preferences. Rated for 500-1000 mating cycles for demanding applications.",
      benefits: [
        "Maximum 32-pin density for complex systems",
        "Consolidates multiple circuits in single connector",
        "IP67 protection for harsh environments",
        "Quick-connect bayonet/latch mechanisms",
        "Chemical-resistant thermoplastic housing",
        "Flexible termination options (crimp/screw)"
      ]
    },
    "48-pin": {
      short: "Ultimate 48-pin (3×16 or 4×12) connector, rated 10A at 250-500V. IP67/68 protection with bayonet/threaded locking for maximum-density applications.",
      long: "The Esinti 48-Pin Heavy Duty Connector represents the ultimate in industrial connectivity density, featuring 48 pins in 3×16 or 4×12 configurations. Designed for the most demanding data acquisition, control, and multi-circuit power applications, it rated at 10A per pin with voltage capacity up to 500V. Tin/gold plated copper alloy contacts ensure reliable signal integrity and power delivery with contact resistance under 10mΩ. IP67/68 protection with silicone sealing provides exceptional environmental protection, suitable for outdoor and submersible installations. The reinforced thermoplastic/zinc housing delivers outstanding mechanical strength, electrical insulation, and chemical resistance. Bayonet, threaded, or latch locking options accommodate various installation and maintenance requirements. Crimp or solder termination for wire sizes 0.25-2.5mm² enables precise connections for fine-gauge wiring. Rated for 500-1000 mating cycles, ensuring long-term reliability in high-frequency connection/disconnection scenarios.",
      benefits: [
        "Ultimate 48-pin density (3×16 or 4×12 configuration)",
        "Ideal for maximum-density data and control systems",
        "IP67/68 protection including submersible applications",
        "Reinforced housing for exceptional mechanical strength",
        "Multiple locking options for various requirements",
        "Supports fine-gauge wiring (0.25-2.5mm²)"
      ]
    },
    "440mm": {
      short: "The ESINTI 440mm Infrared Heating Lamp provides fast and consistent heating for compact industrial machines. Built using a high-quality quartz tube and ceramic insulation, it ensures excellent durability and efficient thermal performance.",
      long: "The ESINTI 440mm Infrared Heating Lamp provides fast and consistent heating for compact industrial machines. Built using a high-quality quartz tube and ceramic insulation, it ensures excellent durability and efficient thermal performance. This lamp delivers rapid heat-up with uniform heating distribution, making it ideal for continuous high-temperature operations. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating applications.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Suitable for continuous high-temperature operations",
        "Shock, vibration & moisture resistant",
        "Compact 440mm length for space-efficient installations"
      ]
    },
    "626mm": {
      short: "The ESINTI 626mm 2.5kW IR Lamp delivers stable and powerful heating performance suitable for mid-range industrial systems.",
      long: "The ESINTI 626mm 2.5kW IR Lamp delivers stable and powerful heating performance suitable for mid-range industrial systems. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Ideal for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating applications. Operating at 230 VAC with 2.5 kW power output, it's perfect for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Suitable for continuous high-temperature operations",
        "Shock, vibration & moisture resistant",
        "Versatile 626mm length for mid-range applications"
      ]
    },
    "728mm": {
      short: "The ESINTI 728mm 2.5kW IR Lamp delivers stable and powerful heating performance for industrial systems.",
      long: "The ESINTI 728mm 2.5kW IR Lamp delivers stable and powerful heating performance for industrial systems. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 415 VAC with 2.5 kW power output, it's perfect for plastic drying, paint curing, powder coating lines, printing & packaging, metal preheating, and industrial heating systems. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Suitable for continuous high-temperature operations",
        "Shock, vibration & moisture resistant",
        "Industrial 728mm length for demanding applications"
      ]
    },
    "800mm": {
      short: "The ESINTI 800mm 4.0kW IR Lamp delivers high-power heating performance for heavy-duty industrial applications.",
      long: "The ESINTI 800mm 4.0kW IR Lamp delivers high-power heating performance for heavy-duty industrial applications. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 440 VAC with 4.0 kW power output, it's perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "High-power 4.0 kW for intensive heating",
        "Shock, vibration & moisture resistant",
        "Extensive 800mm heating coverage"
      ]
    },
    "830mm": {
      short: "This model includes one-side coating that reflects heat directionally, increasing efficiency.",
      long: "The ESINTI 830mm 3.0kW IR Lamp includes one-side coating that reflects heat directionally, increasing efficiency. Built with ceramic insulation, this lamp provides rapid heat-up with uniform directional heating distribution. Operating at 230 VAC with 3.0 kW power output, it's perfect for directional heating systems, high-precision thermal curing, plastic molding & drying, industrial ovens, and conveyor heating lines. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. The one-side coated surface provides focused heat delivery for specialized applications.",
      benefits: [
        "One-side coated for directional heating",
        "Rapid heat-up with focused heat delivery",
        "Energy-efficient construction",
        "Long service life",
        "Shock, vibration & moisture resistant",
        "Specialized 830mm length for precision applications"
      ]
    },
    "850mm": {
      short: "The ESINTI 850mm 4.0kW IR Lamp delivers high-power heating for industrial ovens and powder coating systems.",
      long: "The ESINTI 850mm 4.0kW IR Lamp delivers high-power heating for industrial ovens and powder coating systems. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 440 VAC with 4.0 kW power output, it's perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "High-power 4.0 kW for intensive heating",
        "Shock, vibration & moisture resistant",
        "Extended 850mm length for wide-area coverage"
      ]
    },
    "875mm": {
      short: "The ESINTI 875mm 3.0kW IR Lamp delivers balanced heating performance for versatile industrial applications.",
      long: "The ESINTI 875mm 3.0kW IR Lamp delivers balanced heating performance for versatile industrial applications. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 415 VAC with 3.0 kW power output, it's perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Balanced 3.0 kW power for efficient operation",
        "Shock, vibration & moisture resistant",
        "Versatile 875mm length for various applications"
      ]
    },
    "1120mm": {
      short: "The ESINTI 1120mm 3.0kW IR Lamp delivers extended heating coverage for large-scale industrial applications.",
      long: "The ESINTI 1120mm 3.0kW IR Lamp delivers extended heating coverage for large-scale industrial applications. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 415 VAC with 3.0 kW power output, it's perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Extended 1120mm length for wide-area coverage",
        "Shock, vibration & moisture resistant",
        "Reduces lamp count in large installations"
      ]
    },
    "1150mm": {
      short: "This heavy-duty 6.0kW IR Lamp delivers high thermal output for large-scale operations.",
      long: "The ESINTI 1150mm 6.0kW IR Lamp delivers high thermal output for large-scale operations. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 440 VAC with 6.0 kW power output, it's perfect for heavy industrial curing, powder coating ovens, metal preheating lines, and printing & drying tunnels. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations and demanding industrial applications.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Maximum 6.0 kW power for intensive heating",
        "Shock, vibration & moisture resistant",
        "Extended 1150mm length for comprehensive coverage"
      ]
    },
    "1220mm": {
      short: "The ESINTI 1220mm 3.0kW IR Lamp delivers extended heating zones for conveyor systems and continuous processes.",
      long: "The ESINTI 1220mm 3.0kW IR Lamp delivers extended heating zones for conveyor systems and continuous processes. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 415 VAC with 3.0 kW power output, it's perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Extended 1220mm length for long heating zones",
        "Shock, vibration & moisture resistant",
        "Ideal for conveyor systems and continuous processes"
      ]
    },
    "1250mm": {
      short: "A long 1250mm IR Lamp with one-side reflective coating for precision heating.",
      long: "The ESINTI 1250mm 4.0kW IR Lamp features one-side reflective coating for precision heating. Built with ceramic insulation, this lamp provides rapid heat-up with directional heating distribution. Operating at 230 VAC with 4.0 kW power output, it's perfect for directional thermal curing, high-efficiency industrial drying, packaging & printing machines, and heat-intensive production units. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. The one-side coated surface provides focused heat delivery for specialized large-scale applications.",
      benefits: [
        "One-side coated for directional heat control",
        "Rapid heat-up with focused heating",
        "Energy-efficient construction",
        "Long service life",
        "High-power 4.0 kW for large-scale heating",
        "Maximum 1250mm length for extensive coverage"
      ]
    },
    "foil-1": {
      short: "The ESINTI Digital Hot Foil Stamping Machine delivers precise, sharp, and premium foil printing using advanced digital temperature control. Ideal for gold foil, silver foil, holographic foil, and pigment stamping on paper, leather, PVC, cardboard, and coated surfaces.",
      long: "The ESINTI Digital Hot Foil Stamping Machine is engineered for high-accuracy foil transfer using digital temperature and pressure management. With its 4×6 inch printing area and durable steel body, it ensures long-lasting, crisp, and professional foil impressions on a wide range of materials. The digital control panel allows precise adjustment of temperature and stamping pressure, ensuring consistent results for bulk production as well as small craft projects. Designed for commercial print shops, packaging units, and creative studios, this machine supports gold, silver, holographic, and pigment foils for premium decorative printing. Whether you're customizing rigid boxes, invitation cards, leather products, or branding materials, the ESINTI Digital Foil Stamping Machine guarantees superior finish, high durability, and excellent productivity.",
      benefits: [
        "Digital Temperature Control (accurate heating for sharp stamping)",
        "Industrial Steel Body for long service life",
        "4×6 Inch Printing Area with precise alignment",
        "Compatible with Gold, Silver, Holographic & Pigmented Foils",
        "Works on Paper, PVC, Leather, Cardboard & Coated Plastic",
        "Quick Setup with adjustable foil feed",
        "Energy-efficient heating system",
        "Perfect for bulk & commercial production"
      ]
    },
    "foil-2": {
      short: "The ESINTI Digital Hot Foil Stamping Machine delivers premium metallic foil printing with precise digital temperature control. Ideal for gold, silver, holographic, and pigment foil stamping on paper, cardboard, PVC, leather, and packaging materials.",
      long: "The ESINTI Digital Hot Foil Stamping Machine (4×6 inch) is engineered for high-quality foil stamping, branding, and decorative printing. Designed with a heavy-duty steel body, it delivers powerful performance, long-lasting durability, and sharp foil impressions. Using advanced digital temperature control, the machine allows perfect heat settings for consistent stamping quality. It supports gold foil, silver foil, pigment foil, holographic foil, and other specialty foils for premium finishing on various surfaces. This machine is widely used in packaging, stationery, printing companies, invitation card makers, leather product branding, and craft studios. Whether you're producing wedding cards, business cards, rigid boxes, book covers, or leather tags, it ensures crisp, professional-grade output every time.",
      benefits: [
        "Digital temperature control for precision heating",
        "Strong steel construction for industrial durability",
        "Fast heating with accurate pressure application",
        "Supports multiple foil types – gold, silver, holographic, pigment",
        "Compatible with various materials – paper, cardboard, leather, PVC",
        "4×6 inch stamping area for versatile printing needs",
        "Consistent and high-definition printing quality",
        "Perfect alignment system for clean results",
        "Low maintenance & long service life",
        "Suitable for continuous and bulk production"
      ]
    },
    "ir-440": {
      short: "The ESINTI 440mm Infrared Heating Lamp provides fast and consistent heating for compact industrial machines. Built using a high-quality quartz tube and ceramic insulation, it ensures excellent durability and efficient thermal performance.",
      long: "The ESINTI 440mm Infrared Heating Lamp provides fast and consistent heating for compact industrial machines. Built using a high-quality quartz tube and ceramic insulation, it ensures excellent durability and efficient thermal performance. This lamp delivers rapid heat-up with uniform heating distribution, making it ideal for continuous high-temperature operations. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating applications.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Suitable for continuous high-temperature operations",
        "Shock, vibration & moisture resistant",
        "Compact 440mm length for space-efficient installations"
      ]
    },
    "ir-626": {
      short: "The ESINTI 626mm 2.5kW IR Lamp delivers stable and powerful heating performance suitable for mid-range industrial systems.",
      long: "The ESINTI 626mm 2.5kW IR Lamp delivers stable and powerful heating performance suitable for mid-range industrial systems. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Ideal for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating applications. Operating at 230 VAC with 2.5 kW power output, it's perfect for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Suitable for continuous high-temperature operations",
        "Shock, vibration & moisture resistant",
        "Versatile 626mm length for mid-range applications"
      ]
    },
    "ir-728": {
      short: "The ESINTI 728mm 2.5kW IR Lamp delivers stable and powerful heating performance for industrial systems.",
      long: "The ESINTI 728mm 2.5kW IR Lamp delivers stable and powerful heating performance for industrial systems. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 415 VAC with 2.5 kW power output, it's perfect for plastic drying, paint curing, powder coating lines, printing & packaging, metal preheating, and industrial heating systems. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Suitable for continuous high-temperature operations",
        "Shock, vibration & moisture resistant",
        "Industrial 728mm length for demanding applications"
      ]
    },
    "ir-800": {
      short: "The ESINTI 800mm 4.0kW IR Lamp delivers high-power heating performance for heavy-duty industrial applications.",
      long: "The ESINTI 800mm 4.0kW IR Lamp delivers high-power heating performance for heavy-duty industrial applications. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 440 VAC with 4.0 kW power output, it's perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "High-power 4.0 kW for intensive heating",
        "Shock, vibration & moisture resistant",
        "Extensive 800mm heating coverage"
      ]
    },
    "ir-830": {
      short: "This model includes one-side coating that reflects heat directionally, increasing efficiency.",
      long: "The ESINTI 830mm 3.0kW IR Lamp includes one-side coating that reflects heat directionally, increasing efficiency. Built with ceramic insulation, this lamp provides rapid heat-up with uniform directional heating distribution. Operating at 230 VAC with 3.0 kW power output, it's perfect for directional heating systems, high-precision thermal curing, plastic molding & drying, industrial ovens, and conveyor heating lines. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. The one-side coated surface provides focused heat delivery for specialized applications.",
      benefits: [
        "One-side coated for directional heating",
        "Rapid heat-up with focused heat delivery",
        "Energy-efficient construction",
        "Long service life",
        "Shock, vibration & moisture resistant",
        "Specialized 830mm length for precision applications"
      ]
    },
    "ir-850": {
      short: "The ESINTI 850mm 4.0kW IR Lamp delivers high-power heating for industrial ovens and powder coating systems.",
      long: "The ESINTI 850mm 4.0kW IR Lamp delivers high-power heating for industrial ovens and powder coating systems. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 440 VAC with 4.0 kW power output, it's perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "High-power 4.0 kW for intensive heating",
        "Shock, vibration & moisture resistant",
        "Extended 850mm length for wide-area coverage"
      ]
    },
    "ir-875": {
      short: "The ESINTI 875mm 3.0kW IR Lamp delivers balanced heating performance for versatile industrial applications.",
      long: "The ESINTI 875mm 3.0kW IR Lamp delivers balanced heating performance for versatile industrial applications. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 415 VAC with 3.0 kW power output, it's perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Balanced 3.0 kW power for efficient operation",
        "Shock, vibration & moisture resistant",
        "Versatile 875mm length for various applications"
      ]
    },
    "ir-1120": {
      short: "The ESINTI 1120mm 3.0kW IR Lamp delivers extended heating coverage for large-scale industrial applications.",
      long: "The ESINTI 1120mm 3.0kW IR Lamp delivers extended heating coverage for large-scale industrial applications. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 415 VAC with 3.0 kW power output, it's perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Extended 1120mm length for wide-area coverage",
        "Shock, vibration & moisture resistant",
        "Reduces lamp count in large installations"
      ]
    },
    "ir-1150": {
      short: "This heavy-duty 6.0kW IR Lamp delivers high thermal output for large-scale operations.",
      long: "The ESINTI 1150mm 6.0kW IR Lamp delivers high thermal output for large-scale operations. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 440 VAC with 6.0 kW power output, it's perfect for heavy industrial curing, powder coating ovens, metal preheating lines, and printing & drying tunnels. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations and demanding industrial applications.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Maximum 6.0 kW power for intensive heating",
        "Shock, vibration & moisture resistant",
        "Extended 1150mm length for comprehensive coverage"
      ]
    },
    "ir-1220": {
      short: "The ESINTI 1220mm 3.0kW IR Lamp delivers extended heating zones for conveyor systems and continuous processes.",
      long: "The ESINTI 1220mm 3.0kW IR Lamp delivers extended heating zones for conveyor systems and continuous processes. Built with a clear quartz tube and ceramic insulation, this lamp provides rapid heat-up with uniform heating distribution. Operating at 415 VAC with 3.0 kW power output, it's perfect for plastic drying, paint & ink curing, powder coating systems, printing & packaging machines, industrial ovens, and metal preheating. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. Suitable for continuous high-temperature operations.",
      benefits: [
        "Rapid heat-up with uniform heating",
        "Energy-efficient construction",
        "Long service life",
        "Extended 1220mm length for long heating zones",
        "Shock, vibration & moisture resistant",
        "Ideal for conveyor systems and continuous processes"
      ]
    },
    "ir-1250": {
      short: "A long 1250mm IR Lamp with one-side reflective coating for precision heating.",
      long: "The ESINTI 1250mm 4.0kW IR Lamp features one-side reflective coating for precision heating. Built with ceramic insulation, this lamp provides rapid heat-up with directional heating distribution. Operating at 230 VAC with 4.0 kW power output, it's perfect for directional thermal curing, high-efficiency industrial drying, packaging & printing machines, and heat-intensive production units. The energy-efficient construction ensures long service life while being resistant to shock, vibration, and moisture. The one-side coated surface provides focused heat delivery for specialized large-scale applications.",
      benefits: [
        "One-side coated for directional heat control",
        "Rapid heat-up with focused heating",
        "Energy-efficient construction",
        "Long service life",
        "High-power 4.0 kW for large-scale heating",
        "Maximum 1250mm length for extensive coverage"
      ]
    },
    "uv-805": {
      short: "Premium UV curing lamp used in Offset, Flexo, Screen, Gravure, Digital, and Packaging printing. Delivers fast curing, high adhesion, and smudge-free finishing for professional results.",
      long: "The Albatross UV Curing Lamp 805mm – 7.5kW ensures high-speed UV curing for inks, coatings, and adhesives. Used for drip-off effects, brochures, labels, luxury packaging, and magazine covers. Built with premium materials: GE 214A Quartz (USA), German electrodes, imported sealing ribbon, and mercury from Mexico. Comes with 1,000-hour warranty and high UV intensity (180–2200 mJ/cm²). Suitable for continuous industrial printing lines in Offset, Flexo, Gravure, Digital, and Screen printing applications.",
      benefits: [
        "Fast UV curing for inks, coatings & adhesives",
        "Cold curing process ensures no paper warping",
        "High adhesion and smudge-free finishes",
        "Suitable for Offset, Flexo, Gravure, Digital & Screen printing",
        "1000-hour warranty",
        "Made with GE 214A Quartz, German electrodes, and premium components",
        "High UV intensity (180–2200 mJ/cm²)"
      ]
    },
    "uv-812": {
      short: "Premium UV curing lamp used in Offset, Flexo, Screen, Gravure, Digital, and Packaging printing. Delivers fast curing, high adhesion, and smudge-free finishing for professional results.",
      long: "The Albatross UV Curing Lamp 812mm – 8.4kW ensures high-speed UV curing for inks, coatings, and adhesives. Used for drip-off effects, brochures, labels, luxury packaging, and magazine covers. Built with premium materials: GE 214A Quartz (USA), German electrodes, imported sealing ribbon, and mercury from Mexico. Comes with 1,000-hour warranty and high UV intensity (180–2200 mJ/cm²). Suitable for continuous industrial printing lines in Offset, Flexo, Gravure, Digital, and Screen printing applications.",
      benefits: [
        "Fast UV curing for inks, coatings & adhesives",
        "Cold curing process ensures no paper warping",
        "High adhesion and smudge-free finishes",
        "Suitable for Offset, Flexo, Gravure, Digital & Screen printing",
        "1000-hour warranty",
        "Made with GE 214A Quartz, German electrodes, and premium components",
        "High UV intensity (180–2200 mJ/cm²)"
      ]
    },
    "uv-914": {
      short: "Premium UV curing lamp used in Offset, Flexo, Screen, Gravure, Digital, and Packaging printing. Delivers fast curing, high adhesion, and smudge-free finishing for professional results.",
      long: "The Albatross UV Curing Lamp 914mm – 9.0kW ensures high-speed UV curing for inks, coatings, and adhesives. Used for drip-off effects, brochures, labels, luxury packaging, and magazine covers. Built with premium materials: GE 214A Quartz (USA), German electrodes, imported sealing ribbon, and mercury from Mexico. Comes with 1,000-hour warranty and high UV intensity (180–2200 mJ/cm²). Suitable for continuous industrial printing lines in Offset, Flexo, Gravure, Digital, and Screen printing applications.",
      benefits: [
        "Fast UV curing for inks, coatings & adhesives",
        "Cold curing process ensures no paper warping",
        "High adhesion and smudge-free finishes",
        "Suitable for Offset, Flexo, Gravure, Digital & Screen printing",
        "1000-hour warranty",
        "Made with GE 214A Quartz, German electrodes, and premium components",
        "High UV intensity (180–2200 mJ/cm²)"
      ]
    },
    "uv-1016": {
      short: "Premium UV curing lamp used in Offset, Flexo, Screen, Gravure, Digital, and Packaging printing. Delivers fast curing, high adhesion, and smudge-free finishing for professional results.",
      long: "The Albatross UV Curing Lamp 1016mm – 10.8kW ensures high-speed UV curing for inks, coatings, and adhesives. Used for drip-off effects, brochures, labels, luxury packaging, and magazine covers. Built with premium materials: GE 214A Quartz (USA), German electrodes, imported sealing ribbon, and mercury from Mexico. Comes with 1,000-hour warranty and high UV intensity (180–2200 mJ/cm²). Suitable for continuous industrial printing lines in Offset, Flexo, Gravure, Digital, and Screen printing applications.",
      benefits: [
        "Fast UV curing for inks, coatings & adhesives",
        "Cold curing process ensures no paper warping",
        "High adhesion and smudge-free finishes",
        "Suitable for Offset, Flexo, Gravure, Digital & Screen printing",
        "1000-hour warranty",
        "Made with GE 214A Quartz, German electrodes, and premium components",
        "High UV intensity (180–2200 mJ/cm²)"
      ]
    },
    "uv-1168": {
      short: "Premium UV curing lamp used in Offset, Flexo, Screen, Gravure, Digital, and Packaging printing. Delivers fast curing, high adhesion, and smudge-free finishing for professional results.",
      long: "The Albatross UV Curing Lamp 1168mm – 16kW ensures high-speed UV curing for inks, coatings, and adhesives. Used for drip-off effects, brochures, labels, luxury packaging, and magazine covers. Built with premium materials: GE 214A Quartz (USA), German electrodes, imported sealing ribbon, and mercury from Mexico. Comes with 1,000-hour warranty and high UV intensity (180–2200 mJ/cm²). Suitable for continuous industrial printing lines in Offset, Flexo, Gravure, Digital, and Screen printing applications.",
      benefits: [
        "Fast UV curing for inks, coatings & adhesives",
        "Cold curing process ensures no paper warping",
        "High adhesion and smudge-free finishes",
        "Suitable for Offset, Flexo, Gravure, Digital & Screen printing",
        "1000-hour warranty",
        "Made with GE 214A Quartz, German electrodes, and premium components",
        "High UV intensity (180–2200 mJ/cm²)"
      ]
    },
    "gear-1": {
      short: "A high-precision helical planetary gearbox designed for 750W servo motors. With ultra-low backlash (≤ 3 arc-min), high torque output (330 N·m), and 97% efficiency, this gearbox is ideal for CNC machines, automation, robotics, anilox drives, printing machinery, and industrial automation systems.",
      long: "The ESINTI 78ZR5-750T1 Planetary Gearbox is a premium single-stage helical planetary gearbox engineered for applications requiring precision, high torque, and long service life. Designed to pair with 750W servo motors, this gearbox delivers outstanding performance with 97% efficiency, low noise (≤60 dB), and ultra-low backlash (≤3 arc-minutes). Constructed with hardened high-grade steel gears and a rigid housing, it ensures smooth motion transmission, excellent shock resistance, and minimal heat generation—even during long production cycles. With an IP65 protection rating and a lifespan of up to 30,000 hours, this gearbox is ideal for demanding industrial environments. Perfect for Robotics, Packaging Machines, CNC Routers, Flexo/Gravure Printing Machines, Conveyors, Automation Lines, and more.",
      benefits: [
        "High-precision helical planetary gear design",
        "Ultra-low backlash (≤3 arc-min) for accurate positioning",
        "Strong torque output up to 330 N·m",
        "Instant torque capacity up to 990 N·m",
        "High efficiency (97%) for energy-saving operation",
        "Quiet operation — ≤60 dB, ideal for sensitive environments",
        "Built with hardened high-grade steel gears",
        "Durable and long-life design (30,000 hours)",
        "IP65 protected for industrial use",
        "Compatible with NEMA 42 / 750W servo motors"
      ]
    },
    "tresu-1": {
      short: "High-performance industrial rubber designed for TRESU coating systems, doctor blade units, and lamination machines. Ensures uniform coating, high durability, and excellent resistance to heat, pressure, and chemicals.",
      long: "The TRESU Coater Rubber is a premium-grade industrial rubber engineered for high-speed printing, packaging, coating, and lamination machinery. Specially manufactured for TRESU coaters and doctor blade systems, it ensures smooth, uniform, and controlled application of coatings such as varnish, adhesive, ink, and paint on paper, board, foil, and flexible plastic films. Built to withstand extreme industrial conditions, this rubber offers excellent heat resistance, superior compression strength, and outstanding chemical resistance, making it suitable for continuous production environments. Its stable hardness and uniform density reduce vibration, improve coating accuracy, and extend roller service life—minimizing downtime and maintenance costs. Ideal for printing presses, laminators, and coating machines that require precision and long-lasting rubber performance.",
      benefits: [
        "Uniform coating for varnish, glue, ink, and paint",
        "High heat resistance for continuous industrial use",
        "Excellent pressure and chemical resistance",
        "Improves coating accuracy and smoothness",
        "Long service life with minimal wear",
        "Ideal for TRESU coater and doctor blade systems",
        "Reduces machine downtime and maintenance",
        "Stable hardness for consistent coating quality"
      ]
    },
    "pump-aro-66605j": {
      short: "High-performance 1/2\" ARO Air Operated Double Diaphragm Pump designed for chemical transfer, corrosive liquids, anilox coating, ink circulation, and industrial fluid handling. Made with PP/PTFE construction for maximum chemical resistance, safe pneumatic operation, and long service life.",
      long: "The ARO 66605J-3EB Anilox Coater Pump is a premium-grade 1/2\" Air Operated Double Diaphragm Pump (AODD) engineered for demanding industrial applications such as printing, coating, chemical transfer, and wastewater treatment. Manufactured with Polypropylene (PP) and Teflon (PTFE) wetted components, it provides exceptional resistance against corrosive chemicals, solvents, acids, inks, adhesives, and abrasive fluids. This non-electric pneumatically operated diaphragm pump delivers a stable flow of up to 50 LPM, making it ideal for continuous operations in printing and packaging machines—especially for anilox coater systems, ink feeding, and varnish/chemical circulation. With its dual inlet/outlet configuration, rugged body, and reliable design, the ARO 66605J-3EB ensures safe, leak-free, and low-maintenance performance in any industrial environment.",
      benefits: [
        "High chemical resistance (PP + PTFE wetted parts)",
        "Safe non-electric operation for hazardous or flammable fluids",
        "Smooth and pulsation-stable flow up to 50 LPM",
        "Suitable for ink circulation & varnish/chemical transfer in coaters",
        "Self-priming and capable of dry running",
        "Dual inlet/outlet design for flexible installation",
        "Long service life with minimal maintenance",
        "Corrosion & abrasion-resistant construction",
        "Easy to install on printing machines and industrial systems",
        "Globally trusted ARO brand for printing and chemical transfer"
      ]
    },
    "clamp-1": {
      short: "Heat-resistant, durable mounting clamp designed for securely holding tubular infrared (IR) lamps. Features stable grip, long service life, and suitability for industrial heating applications.",
      long: "The IR ROUND CLAMP is designed to securely mount IR lamps used in heating and drying machines. Manufactured using stainless steel or heat-resistant alloy for strength and durability, it can withstand temperatures up to 500°C continuously without deformation. This clamp ensures firm lamp positioning for stable and efficient heating performance. Compatible with short-wave, medium-wave, and fast-response IR lamps, it features an anti-corrosion polished finish that extends lifespan in industrial environments. With easy screw/bolt mounting installation, the IR ROUND CLAMP is ideal for printing machines, packaging units, textile dryers, plastic thermoforming machines, and food-processing lines.",
      benefits: [
        "High-temperature resistant up to 500°C",
        "Strong round grip for tubular IR lamps",
        "Rust-proof polished finish",
        "Bolt-on installation for fast setup",
        "Long-lasting industrial durability",
        "Ensures stable and accurate heating performance",
        "Compatible with short-wave, medium-wave, and fast-response IR lamps",
        "Anti-corrosion coating for extended lifespan"
      ]
    },
    "clamp-2": {
      short: "High-temperature, heavy-duty mounting clamp designed to securely hold IR heating tubes in industrial machines. Features heat resistance, stable grip, and long service life.",
      long: "The IR SQUARE CLAMP is engineered for mounting infrared heating lamps/tubes in high-demand industrial environments. Made from high-grade stainless steel and heat-resistant alloy for maximum durability, the square design provides extra stability for IR tubes and prevents rotation or misalignment. This clamp withstands continuous temperatures up to 500°C without deformation and is available for ceramic IR lamps, quartz tubes, and other IR heating elements. It ensures consistent heat distribution by keeping the lamp firmly in place with a corrosion-resistant polished finish for long service life. Simple bolt/screw installation makes it easy to integrate with any machine. Ideal for printing, coating, packaging, electronics curing, textile drying, and plastics processing.",
      benefits: [
        "High temperature resistance up to 500°C",
        "Square design for enhanced stability",
        "Heavy-duty stainless steel construction",
        "Compatible with ceramic & quartz IR tubes",
        "Rust-proof polished finish",
        "Easy bolt-on installation",
        "Provides stable and consistent heating performance",
        "Long service life with industrial-grade durability",
        "Prevents rotation or misalignment of IR tubes"
      ]
    },
    "ballast-1": {
      short: "The HPE 9 kW Digital Electronic Power Supply delivers stable, efficient, and precise UV lamp power for printing, coating, and industrial curing applications.",
      long: "The HPE HVTA-400-9-1000 is a 9 kW digitally controlled electronic UV ballast engineered for industrial UV curing systems. It provides stable voltage output, enhances UV lamp life, and ensures consistent curing performance. Equipped with Ethernet/RS485 connectivity, it supports real-time remote monitoring and diagnostics. With built-in overload, short-circuit, and overheat protection, this digital power supply ensures safe 24/7 operation. Its compact rectangular design fits smoothly into printing machines, UV coaters, and automation lines.",
      benefits: [
        "Stable and precise 9 kW UV output",
        "High-efficiency digital regulation",
        "Remote monitoring via Ethernet/RS485",
        "Built-in protection (overload, heat, short circuit)",
        "Compact industrial-grade design",
        "Long lamp life & stable curing",
        "24/7 continuous operation capability",
        "Easy integration with printing machines"
      ]
    },
    "ballast-2": {
      short: "The HPE 12 kW EPS delivers high-power digital UV control for fast printing and high-speed curing systems.",
      long: "The HPE HVTA-400-12-1350 is a 12 kW advanced digital UV power supply designed for printing presses, UV coaters, and industrial curing units. It offers precise output control, stable voltage delivery, and superior energy efficiency. With Ethernet/RS485 connectivity, it supports remote diagnostics and live monitoring. Built-in overload, short-circuit, and thermal protection ensure maximum safety and reliability in continuous production environments. Ideal for high-speed and heavy-duty UV curing.",
      benefits: [
        "Powerful 12 kW UV output",
        "Digital precision control",
        "Advanced safety protection",
        "Remote monitoring & diagnostics",
        "Excellent for high-speed curing machines",
        "Superior energy efficiency",
        "Stable voltage delivery",
        "Maximum reliability in continuous production"
      ]
    },
    "ballast-3": {
      short: "Heavy-duty 16 kW electronic ballast engineered for large UV curing systems requiring maximum stability and continuous performance.",
      long: "The HPE HVTA-400-16-1500 is a high-power 16 kW digital UV power supply designed for industrial-scale UV curing machines. Offering excellent voltage stability, high UV intensity output, and long operational life, it is ideal for demanding industrial applications. It features Ethernet/RS485 connectivity for remote monitoring and diagnostics. With multi-level protection (overload, short-circuit, overheat), it ensures safe 24/7 operation. Designed for wide-format printers, coating tunnels, and heavy curing lines.",
      benefits: [
        "Maximum 16 kW UV output",
        "Ultra-stable digital power control",
        "Industrial-grade safety protection",
        "Remote monitoring (Ethernet/RS485)",
        "Designed for heavy-duty UV curing systems",
        "Excellent voltage stability",
        "High UV intensity output",
        "Long operational life for demanding applications"
      ]
    },
    "encoder-1": {
      short: "The ESINTI BI-38-H8-2500-PU is a compact 38 mm incremental rotary shaft encoder with 2500 PPR resolution, offering high accuracy and stable push-pull (HTL) output for industrial automation systems.",
      long: "The ESINTI Shaft Encoder BI-38-H8-2500-PU is a high-precision incremental rotary encoder designed for CNC machinery, robotics, conveyors, packaging machines, and printing equipment. With a 38 mm compact body and an 8 mm shaft, it delivers smooth and accurate position and speed feedback. The encoder operates on 5–24V DC and uses a push-pull (HTL) output, ensuring excellent noise immunity and reliable signal transmission even in harsh industrial environments. Built with a rugged construction, it offers long service life, stable performance, and easy installation for motion control and automation applications.",
      benefits: [
        "2500 PPR high-resolution output",
        "Compact 38 mm body ideal for tight spaces",
        "Push-pull HTL output for noise-free performance",
        "Wide 5–24V operating voltage",
        "High durability for industrial environments",
        "Simple and secure installation",
        "Excellent noise immunity",
        "Long service life with stable performance"
      ]
    },
    "encoder-2": {
      short: "The ESINTI Encoder Wheel is a precision-engineered rotary encoder wheel designed for printing machines, anilox coaters, packaging equipment, and industrial automation systems. Built with a stainless-steel CNC-machined core and a high-performance polyurethane (PU) outer layer, it delivers exceptional durability, wear resistance, and low-noise operation.",
      long: "The ESINTI Encoder Wheel is a precision-engineered rotary encoder wheel designed for printing machines, anilox coaters, packaging equipment, and industrial automation systems. Built with a stainless-steel CNC-machined core and a high-performance polyurethane (PU) outer layer, it delivers exceptional durability, wear resistance, and low-noise operation. The CNC-machined stainless steel core ensures dimensional accuracy and long-term stability, while the high-performance polyurethane outer layer provides excellent grip, minimal slippage, and quiet operation. With customizable outer diameters (50-100 mm) and bore sizes (6-20 mm), this encoder wheel is ideal for retrofitting and upgrading existing machinery. Operating reliably in temperatures from -20°C to +80°C, the ESINTI Encoder Wheel is perfect for demanding industrial environments including printing, packaging, coating, and automation systems.",
      benefits: [
        "Precision CNC-machined stainless steel core",
        "High-performance polyurethane outer layer",
        "Exceptional durability and wear resistance",
        "Low-noise operation",
        "Customizable dimensions (OD: 50-100 mm, Bore: 6-20 mm)",
        "Wide operating temperature range (-20°C to +80°C)",
        "Smooth surface finish for minimal slippage",
        "Ideal for retrofitting and upgrades"
      ]
    },
    "encoder-3": {
      short: "The ESINTI Encoder Bracket is a precision-engineered mounting assembly designed to securely hold rotary encoders, rollers, and shafts in printing, packaging, and industrial automation systems. Built from stainless steel and aluminum for long-lasting performance.",
      long: "The ESINTI Encoder Bracket Assembly is a high-precision industrial mounting solution engineered for rotary encoders, rollers, and rotating shafts used in printing presses, anilox coaters, packaging lines, textile machinery, and automation systems. Constructed from high-quality stainless steel and aluminum, this bracket ensures stable alignment, smooth encoder operation, and highly accurate feedback for speed and motion control. It features a spring-loaded tension mechanism that automatically adjusts pressure to maintain consistent contact between the encoder wheel and the roller, guaranteeing reliable measurements even at high machine speeds. With clamp-style aluminum mounting blocks, precision-machined side plates, and dual steel shafts, the ESINTI Encoder Bracket offers effortless installation, reduced vibration, and long service life. Ideal for industries requiring consistent print quality, coating uniformity, and accurate motion tracking.",
      benefits: [
        "Spring-loaded tension design for consistent encoder pressure",
        "Easy clamp-style installation on shafts & rollers",
        "Precision-machined frame for stable alignment",
        "Corrosion-resistant stainless steel & aluminum build",
        "Low vibration, smooth movement, and high accuracy",
        "Supports multiple encoder types and mounting orientations",
        "Automatic pressure adjustment at high speeds",
        "Long service life with minimal maintenance"
      ]
    }
  };

  const current = descriptions[descKey as keyof typeof descriptions] || descriptions["4-pin"];

  return (
    <div className="space-y-8">
      {/* Short Description */}
      <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-xl border border-primary/20">
        <p className="text-lg text-gray-800 leading-relaxed font-medium">
          {current.short}
        </p>
      </div>

      {/* Long Description */}
      <div>
        <h2 className="text-2xl font-bold text-secondary mb-4">Product Description</h2>
        <p className="text-gray-700 leading-relaxed text-justify">
          {current.long}
        </p>
      </div>

      {/* Key Benefits */}
      <div>
        <h3 className="text-xl font-semibold text-secondary mb-4">Key Benefits</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {current.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200 hover:border-primary/50 transition-colors">
              <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                ✓
              </span>
              <span className="text-gray-700 text-sm leading-relaxed">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
