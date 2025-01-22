import { MapPin, Home } from 'lucide-react';

interface Solution {
  id: string;
  title: string;
  description: string;
  keyBenefits: string[];
  whatIsIncluded: {
    heading: string;
    subheadings: string[][]; 
  }[];
  whyIsImportant: string[];
  icon: React.ComponentType;
}

export const solutions = [
  {
    id: 'plot-analysis',
    title: 'Plot Analysis in Vastu Shastra',
    description: 
      "Plot analysis in Vastu Shastra focuses on evaluating the land's orientation, shape, slope, soil, and surrounding environment to determine its compatibility with positive energy flow. It helps in selecting or designing a plot that promotes prosperity, health, and harmony while avoiding any negative influences.",
    keyBenefits: [
      'Selection of an Auspicious Plot',
      'Maximizes Positive Energy',
      'Promotes Prosperity and Growth',
      'Improved Health and Well-being',
      'Better Construction Planning',
      'Avoids Future Problems',
    ],
    whatIsIncluded: [
      {
        heading: 'Orientation and Direction Analysis',
        subheadings: [
          ['Determining the cardinal directions using a compass or GPS.'],
          ['Analyzing the orientation of the plot concerning the sun, wind, and magnetic fields.']
        ]
      },
      {
        heading: 'Shape of the Plot',
        subheadings: [
          ['Assessing the shape (square, rectangular, irregular) and recommending the best type.'],
          ['Rectification for irregular shapes using Vastu remedies.']
        ]
      },
      {
        heading: 'Slope and Elevation',
        subheadings: [
          ['Evaluating the slope of the land (ideal slope is higher in the south and west, lower in the north and east).'],
          ['Recommendations to correct uneven slopes if necessary.']
        ]
      },
      {
        heading: 'Surrounding Environment',
        subheadings: [
          ['Analyzing nearby roads, water bodies, trees, and structures.'],
          ['Checking for obstructions, T-junctions, or shadowing structures that might affect the plot\'s energy.']
        ]
      },
      {
        heading: 'Soil Testing',
        subheadings: [
          ['Assessing soil quality and color for fertility, stability, and Vastu compliance.'],
          ['Suggesting remedies for non-compliant soil (e.g., performing rituals or soil replacement).']
        ]
      },
      {
        heading: 'Location of Key Elements',
        subheadings: [
          ['Identifying and planning the placement of entrances, borewells, septic tanks, gardens, and other features.']
        ]
      },
      {
        heading: 'Surrounding Roads and Access',
        subheadings: [
          ['Checking the position of roads (e.g., north-east-facing plots are considered highly auspicious).'],
          ['Assessing road crossings and their impact on the plot.']
        ]
      },
      {
        heading: 'Plot Size Recommendations',
        subheadings: [
          ['Advising on proportionate and balanced dimensions for optimal energy distribution.']
        ]
      },
      {
        heading: 'Remedies for Existing Plots',
        subheadings: [
          ['Practical Vastu solutions to mitigate flaws, such as using pyramids, boundary walls, or symbolic corrections.']
        ]
      },
      {
        heading: 'Comprehensive Report',
        subheadings: [
          ['A detailed analysis of the plot’s features, Vastu compliance, and actionable recommendations for construction or correction.']
        ]
      },
    ],
    whyIsImportant: [
      'A plot is the foundation of any structure, and its energy directly impacts the occupants\' lives.',
      'Vastu-compliant plots ensure prosperity, stability, and harmony, minimizing risks of unforeseen issues.',
      'Early analysis saves time, money, and effort during construction by addressing potential flaws beforehand.',
    ],
    icon: MapPin,
  },
  {
    id: 'home-consultation',
    title: 'House Consultation in Vastu Shastra',
    description: 
      "A Vastu house consultation involves analyzing your living space and aligning it with the principles of Vastu Shastra to enhance the flow of positive energy, health, prosperity, and well-being. It is a holistic approach that includes specific recommendations for architecture, interior design, and energy flow.",
    keyBenefits: [
      'Positive Energy Flow',
      'Improved Health and Well-being',
      'Financial Growth and Stability',
      'Enhanced Relationships',
      'Success and Productivity',
      'Customized Solutions',
    ],
    whatIsIncluded: [
      {
        heading: 'Site Visit (Physical or Online)',
        subheadings: [
          ['Assessment of the house layout, surroundings, and environment.'],
          ['Analysis of entry points, room placements, furniture alignment, and more.']
        ]
      },
      {
        heading: 'Direction Analysis',
        subheadings: [
          ['Determining the orientation of the house using a compass.'],
          ['Mapping directions to align the house with natural forces.']
        ]
      },
      {
        heading: 'Room-wise Analysis and Recommendations',
        subheadings: [
          ['Placement of bedrooms, kitchen, living rooms, and bathrooms for optimal energy flow.'],
          ['Suggestions for the correct positioning of beds, doors, windows, mirrors, etc.']
        ]
      },
      {
        heading: 'Structural Advice',
        subheadings: [
          ['Guidelines for renovations, extensions, or new constructions as per Vastu.'],
          ['Placement of entrances, stairs, and open spaces.']
        ]
      },
      {
        heading: 'Energy Balancing',
        subheadings: [
          ['Identifying and correcting energy imbalances through adjustments and placements.']
        ]
      },
      {
        heading: 'Remedies for Existing Issues',
        subheadings: [
          ['Non-structural solutions like the use of colors, lighting, plants, and artifacts.'],
          ['Placement of Vastu-friendly items like pyramids, crystals, or symbols.']
        ]
      },
      {
        heading: 'Auspicious Directions and Timings',
        subheadings: [
          ['Advising on ideal directions for specific activities and events, such as moving in or renovations.']
        ]
      },
      {
        heading: 'Detailed Report',
        subheadings: [
          ['A comprehensive report summarizing findings, recommendations, and actionable steps.']
        ]
      },
    ],
    whyIsImportant: [
      'A Vastu consultation helps ensure your house supports your physical, emotional, and spiritual well-being.',
      'It integrates ancient principles with modern living requirements to create a space that feels balanced and fulfilling.',
      'Even minor corrections can significantly enhance the energy and harmony in your home.',
    ],
    icon: Home,
  },
  {
    id: 'remedial-solutions',
    title: 'Remedial Solutions',
    description: 
      "Vastu remedies are practical solutions aimed at correcting imbalances in a property without requiring major structural changes. These remedies are designed to harmonize energy flows, attract positivity, and mitigate the impact of existing Vastu doshas (flaws).",
    keyBenefits: [
      'Enhances Positive Energy',
      'Cost-effective and Non-invasive',
      'Promotes Health and Well-being',
      'Attracts Prosperity and Growth',
      'Strengthens Relationships',
      'Spiritual and Mental Peace',
      'Customized Solutions',
    ],
    whatIsIncluded: [
      {
        heading: 'Placement Adjustments',
        subheadings: [
          ['Reorganizing furniture, décor, or functional areas to align with Vastu principles.'],
          ['Correcting the placement of mirrors, beds, kitchens, or work desks.']
        ]
      },
      {
        heading: 'Color Therapy',
        subheadings: [
          ['Suggesting suitable colors for walls, furniture, and décor based on the room’s direction and purpose.']
        ]
      },
      {
        heading: 'Symbolic Remedies',
        subheadings: [
          ['Placing symbolic items such as idols, pictures, or sacred symbols in specific areas to invite positive energy.']
        ]
      },
      {
        heading: 'Lighting Adjustments',
        subheadings: [
          ['Using lighting solutions to brighten darker areas and improve energy flow.']
        ]
      },
      {
        heading: 'Directional Remedies',
        subheadings: [
          ['Correcting imbalances in cardinal directions using remedies like reflective surfaces, partitions, or energy tools.']
        ]
      },
      {
        heading: 'Element Balancing',
        subheadings: [
          ['Adjusting the balance of the five elements (earth, water, fire, air, space) using placements, materials, or objects.']
        ]
      },
      {
        heading: 'Remedies for Entrance or Main Door',
        subheadings: [
          ['Remedies with positive designs, colors, implanting metals etc.']
        ]
      },
      {
        heading: 'Corrective Measures for Specific Vastu Doshas',
        subheadings: [
          ['Addressing issues like T-junctions, cut corners, irregular shapes, or unsuitable plot slopes through specialized remedies.']
        ]
      },
      {
        heading: 'Water and Energy Flow',
        subheadings: [
          ['Ensuring proper placement and flow of water bodies, drains, or septic tanks.']
        ]
      },
      {
        heading: 'Comprehensive Guidance and Report',
        subheadings: [
          ['Detailed advice on implementing the remedies effectively, tailored to the property\'s layout.']
        ]
      },
    ],
    whyIsImportant: [
      'Practical Solutions: Remedies work within existing constraints, making them practical and accessible.',
      'Boosts Energy: Correcting Vastu flaws transforms spaces into harmonious, prosperous environments.',
      'Minimal Effort, Maximum Impact: Small adjustments can bring significant positive changes in life.',
      'Spiritual Alignment: Remedies often foster spiritual growth and a connection with divine energies.',
    ],
    icon: MapPin, 
  },
];