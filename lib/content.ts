/**
 * All the editable text for the home page lives here.
 * Change wording, add/remove items, or fill in the optional fields — no other file needs to change.
 *
 * ⚠️ Descriptions marked "review" are generic drafts: edit them to match what you actually offer/built.
 */

// ---------------------------------------------------------------------------
// Stats (About section). Use a number followed by an optional suffix: "50+", "100%".
// ---------------------------------------------------------------------------
export const STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100+", label: "Students Trained" },
  { value: "100%", label: "Practical Learning" },
];

// ---------------------------------------------------------------------------
// Why choose us. `icon` is a key of ICONS in components/Icon.tsx.
// ---------------------------------------------------------------------------
export const WHY_US = [
  {
    icon: "wrench",
    title: "Industry Projects",
    desc: "Hands-on experience through real-world embedded and IoT projects.",
  },
  {
    icon: "users",
    title: "Expert Mentorship",
    desc: "Learn directly from experienced engineers with industry exposure.",
  },
  {
    icon: "lightbulb",
    title: "Practical Training",
    desc: "Build products and gain skills through implementation-focused learning.",
  },
  {
    icon: "handshake",
    title: "End-to-End Support",
    desc: "From ideation to deployment, we support every stage of development.",
  },
] as const;

export const PROCESS = [
  {
    title: "Idea",
    desc: "Understanding the problem and defining the embedded system architecture.",
  },
  {
    title: "Prototype",
    desc: "Developing firmware, hardware interfaces, and initial IoT connectivity.",
  },
  {
    title: "Product",
    desc: "Optimizing firmware, integrating sensors, and implementing edge intelligence.",
  },
  {
    title: "Deployment",
    desc: "Testing, validation, and deploying the system into real-world applications.",
  },
];

// ---------------------------------------------------------------------------
// Services (review descriptions)
// ---------------------------------------------------------------------------
export const SERVICES = [
  {
    icon: "cpu",
    title: "Embedded Systems Development",
    desc: "Microcontroller and SoC-based product development, from architecture to production-ready firmware.",
  },
  {
    icon: "wifi",
    title: "IoT Product Design",
    desc: "Connected devices with sensors, wireless connectivity and cloud dashboards.",
  },
  {
    icon: "brain",
    title: "Edge AI Solutions",
    desc: "Machine-learning models optimised to run on-device on low-power hardware.",
  },
  {
    icon: "graduation",
    title: "Engineering Training",
    desc: "Industry-oriented programs in C, Embedded Linux, RTOS, IoT and FPGA with hands-on labs.",
  },
  {
    icon: "lightbulb",
    title: "Project Consulting",
    desc: "Architecture reviews, component selection and technical guidance to de-risk your product.",
  },
  {
    icon: "code",
    title: "Custom Firmware",
    desc: "Bare-metal and RTOS firmware, device drivers and communication protocols.",
  },
  {
    icon: "gauge",
    title: "System Optimization",
    desc: "Improving power consumption, memory footprint and real-time performance of existing systems.",
  },
  {
    icon: "presentation",
    title: "Technical Workshops",
    desc: "Short, hands-on workshops for colleges and teams on embedded and IoT technologies.",
  },
] as const;

export const TECH_STACK = [
  "ESP32",
  "STM32",
  "Embedded Linux",
  "FreeRTOS",
  "Edge AI",
  "IoT Systems",
  "C Programming",
  "C++",
  "Python",
  "TensorFlow Lite",
  "Raspberry Pi",
  "FPGA",
];

// ---------------------------------------------------------------------------
// Projects (review descriptions). `category` must be one of PROJECT_CATEGORIES.
// ---------------------------------------------------------------------------
export const PROJECT_CATEGORIES = [
  "Smart Home & Security",
  "Edge AI",
  "Health & Safety",
  "Smart City & Industry",
] as const;

export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECTS: { title: string; category: ProjectCategory; desc: string }[] = [
  {
    title: "Smart Home Automation",
    category: "Smart Home & Security",
    desc: "Remote monitoring and control of home appliances from a mobile app.",
  },
  {
    title: "AI-Powered Surveillance Camera",
    category: "Edge AI",
    desc: "Camera that detects people and events on-device and sends alerts.",
  },
  {
    title: "Wearable Health Monitor",
    category: "Health & Safety",
    desc: "Wearable that tracks vital signs and shares readings wirelessly.",
  },
  {
    title: "Smart Agriculture System",
    category: "Smart City & Industry",
    desc: "Soil and climate sensing to automate irrigation and monitor crops.",
  },
  {
    title: "Industrial IoT Platform",
    category: "Smart City & Industry",
    desc: "Machine data collection and dashboards for industrial monitoring.",
  },
  {
    title: "Alcohol Detection Device",
    category: "Health & Safety",
    desc: "Breath-alcohol sensing device for safety and access control.",
  },
  {
    title: "Smart Energy Meter",
    category: "Smart City & Industry",
    desc: "Real-time energy consumption monitoring with remote reporting.",
  },
  {
    title: "Driver Monitoring System",
    category: "Edge AI",
    desc: "Vision-based drowsiness and distraction detection for drivers.",
  },
  {
    title: "Smart Parking Solution",
    category: "Smart City & Industry",
    desc: "Parking-slot occupancy detection with live availability updates.",
  },
  {
    title: "AI-Powered Personal Assistant",
    category: "Edge AI",
    desc: "Voice-driven assistant running intelligence on embedded hardware.",
  },
  {
    title: "Home Security System",
    category: "Smart Home & Security",
    desc: "Intrusion detection with instant notifications to your phone.",
  },
  {
    title: "Smart Waste Management",
    category: "Smart City & Industry",
    desc: "Bin fill-level monitoring to optimise waste collection routes.",
  },
];

// ---------------------------------------------------------------------------
// Training programs. `duration`, `mode` and `fee` are optional:
// leave them as "" to hide them, or fill them in (e.g. "8 weeks", "Online & Offline", "₹4,999").
// The program titles also populate the course dropdown on the /contact form.
// ---------------------------------------------------------------------------
export const TRAINING: {
  title: string;
  /** "course" = training program card, "project" = shown in the Student Projects card */
  kind: "course" | "project";
  level: string;
  topics: string[];
  duration: string;
  mode: string;
  fee: string;
}[] = [
  {
    title: "C Programming",
    kind: "course",
    level: "Beginner",
    topics: ["Pointers & memory", "Structures & unions", "Bit manipulation", "Debugging"],
    duration: "",
    mode: "",
    fee: "",
  },
  {
    title: "C++ Programming",
    kind: "course",
    level: "Beginner – Intermediate",
    topics: ["OOP & classes", "Templates & STL", "Modern C++", "C++ for embedded"],
    duration: "",
    mode: "",
    fee: "",
  },
  {
    title: "Embedded Linux",
    kind: "course",
    level: "Intermediate",
    topics: ["Boot process", "Cross-compilation", "Device tree & drivers", "Yocto / Buildroot basics"],
    duration: "",
    mode: "",
    fee: "",
  },
  {
    title: "RTOS Development",
    kind: "course",
    level: "Intermediate",
    topics: ["Tasks & scheduling", "Queues & semaphores", "FreeRTOS", "Real-time debugging"],
    duration: "",
    mode: "",
    fee: "",
  },
  {
    title: "Embedded AI Programming",
    kind: "course",
    level: "Intermediate",
    topics: ["ML fundamentals", "TensorFlow Lite Micro", "Model quantisation", "Deploying on MCUs"],
    duration: "",
    mode: "",
    fee: "",
  },
  {
    title: "IoT System Design",
    kind: "course",
    level: "Beginner – Intermediate",
    topics: ["Sensors & actuators", "Wi-Fi / BLE", "MQTT", "Cloud dashboards"],
    duration: "",
    mode: "",
    fee: "",
  },
  {
    title: "FPGA Development",
    kind: "course",
    level: "Intermediate",
    topics: ["Digital design", "Verilog / VHDL", "Simulation", "Synthesis on FPGA boards"],
    duration: "",
    mode: "",
    fee: "",
  },
  {
    title: "Mini Projects",
    kind: "project",
    level: "All levels",
    topics: ["Guided short projects", "Hardware + firmware", "Portfolio-ready results"],
    duration: "",
    mode: "",
    fee: "",
  },
  {
    title: "Major Projects",
    kind: "project",
    level: "Final-year students",
    topics: ["End-to-end project build", "Mentorship", "Documentation & demo support"],
    duration: "",
    mode: "",
    fee: "",
  },
];
