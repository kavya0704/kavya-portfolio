/**
 * Central project repository data for Kavya Shaw's portfolio.
 * Contains verified project data, live links, and GitHub sources.
 */

export const projects = [
  {
    id: "raksha-ai",
    slug: "raksha-ai",
    title: "RAKSHA AI 2.0",
    nativeTitle: "रक्षा AI",
    subtitle: "AI-Based Video Analytics Platform for Border Surveillance",
    category: "AI / Computer Vision / Edge Systems",
    badge: "Flagship Prototype • SIH26187",
    summary:
      "Edge-first intelligent video analytics system combining real-time computer vision, spatial event detection, offline synchronization and a centralized monitoring dashboard.",
    description:
      "An edge-first intelligent video analytics prototype developed for Smart India Hackathon (SIH26187, Ministry of Home Affairs). It explores how existing CCTV infrastructure can be enhanced with computer vision, animal false-alarm suppression, local SQLite persistence for zero alert loss during network cuts, and a real-time command dashboard.",
    problem:
      "India shares over 15,000 km of land borders across mountains, riverine marshes, and desert frontiers. Existing CCTV cameras act primarily as passive video recorders. Sentry vigilance drops significantly during long shifts, alarms are frequently triggered by harmless border wildlife, and frontier communication links are often intermittent or absent.",
    solution:
      "A 100% software-only, camera-agnostic retrofit prototype. Camera video is ingested and enhanced at the edge using CLAHE atmospheric de-noising, detected with YOLOv8, tracked across frames, checked against directional sterile tripwires, and committed first to an encrypted local SQLite store. An MQTT sync worker transmits events to a centralized FastAPI and React monitoring dashboard with real-time WebSocket updates.",
    liveUrl: "https://raksha20-ten.vercel.app/",
    githubUrl: "https://github.com/kavya0704/raksha2.0",
    featured: true,
    isFlagship: true,
    priority: 1,
    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "FastAPI",
      "React",
      "MQTT",
      "WebSockets",
      "SQLite"
    ],
    architecture: [
      { step: "01", name: "Camera Input", desc: "Analog CCTV (via DVR/NVR), IP RTSP streams, or USB camera feeds" },
      { step: "02", name: "Atmospheric CLAHE", desc: "LAB color-space de-noising for dense fog, haze, and dust storms" },
      { step: "03", name: "YOLOv8 Inference", desc: "Sub-second object detection distinguishing humans, vehicles, and wildlife" },
      { step: "04", name: "Centroid Tracking", desc: "Persistent multi-frame identity tracking and vector direction analysis" },
      { step: "05", name: "Spatial Tripwires", desc: "Configurable polygon sterile boundaries and directional crossing checks" },
      { step: "06", name: "Local Store-and-Forward", desc: "Encrypted edge SQLite buffers alerts with zero alert loss during blackouts" },
      { step: "07", name: "MQTT Reconnection", desc: "Resilient asynchronous message broker flushing queued events to backend" },
      { step: "08", name: "Command Dashboard", desc: "FastAPI + WebSockets push live events to a responsive React operations UI" }
    ],
    highlights: [
      {
        title: "Edge AI Processing",
        desc: "Local video processing using Python, OpenCV and Ultralytics YOLOv8 for sub-second threat categorization near the sensor."
      },
      {
        title: "Wildlife Suppression",
        desc: "Filters harmless border wildlife (cattle, camels, dogs) into silent green safe tags, reducing sentry alarm fatigue."
      },
      {
        title: "Spatial Analytics",
        desc: "Configurable polygon sterile zones and directional tripwires evaluate intrusion vectors rather than simple motion detection."
      },
      {
        title: "Offline Store-and-Forward",
        desc: "Local SQLite database ensures zero alert loss during frontier communication outages; events sync automatically when reconnected."
      },
      {
        title: "Atmospheric De-Noising",
        desc: "Contrast-limited adaptive histogram equalization (CLAHE) enhances footage in heavy fog, mist, and dust conditions."
      },
      {
        title: "Real-Time WebSockets",
        desc: "FastAPI server and WebSocket communication stream incident feeds directly to the React dashboard without manual refreshes."
      }
    ],
    images: {
      dashboard: "/projects/raksha-ai/dashboard.png",
      thermal: "/projects/raksha-ai/thermal.png",
      hud: "/projects/raksha-ai/hud.png",
      emblem: "/projects/raksha-ai/emblem.png"
    }
  },
  {
    id: "career-ai",
    slug: "career-ai",
    title: "CareerAI Copilot",
    subtitle: "Unified Job Hunting Suite & Workflow Automation",
    category: "Full-Stack / AI-Assisted Platform",
    badge: "Full-Stack Platform",
    summary:
      "A distributed, event-driven SaaS-style platform that automates and streamlines job discovery, resume keyword tailoring, and cold outreach pipelines.",
    description:
      "CareerAI Copilot brings job hunting into a unified modern web experience. Built with a Next.js frontend and a high-throughput Python FastAPI microservice, it features parallelized listing scrapers, Jaccard compatibility matching, AI bullet point tailoring, and SMTP cold outreach automation.",
    problem:
      "Job seekers manage repetitive application workflows across fragmented job boards, manually cross-reference resumes against job descriptions, and struggle to format tailored outreach messages consistently.",
    solution:
      "Engineered an integrated web application where users can discover listings, run compatibility gap analysis, rewrite resume experience bullets truthfully against target job keywords, and generate personalized cold outreach emails.",
    liveUrl: "https://career-ai-web.vercel.app/",
    githubUrl: "https://github.com/kavya0704/job-agent",
    featured: true,
    isFlagship: false,
    priority: 2,
    technologies: [
      "Next.js",
      "Python",
      "FastAPI",
      "Tailwind CSS",
      "Web Scraping",
      "REST APIs",
      "Vercel"
    ],
    highlights: [
      {
        title: "Decoupled Architecture",
        desc: "Responsive Next.js web application paired with a modular Python FastAPI backend microservice."
      },
      {
        title: "Parallelized Scraper",
        desc: "High-throughput data collection pipeline for retrieving live job listings efficiently across sources."
      },
      {
        title: "Compatibility Indexing",
        desc: "Evaluates role requirements against candidate profile using algorithmic similarity analysis."
      },
      {
        title: "Outreach Automation",
        desc: "Generates tailored professional outreach emails ready for dispatch via integrated SMTP services."
      }
    ],
    images: {
      preview: "/projects/career-ai/preview.png"
    }
  },
  {
    id: "drowsiguard",
    slug: "drowsiguard",
    title: "DrowsiGuard Pro",
    subtitle: "AI Driver Drowsiness Detection System",
    category: "Computer Vision / AI",
    badge: "Computer Vision Prototype",
    summary:
      "A real-time driver drowsiness detection system that uses a smartphone camera for video capture and a laptop for on-device processing, enabling low-cost deployment.",
    description:
      "A practical computer-vision project designed to improve road safety. It processes live camera video frames using OpenCV and MediaPipe Face Mesh, monitors eye closure and yawning in real-time, calculates fatigue metrics, and triggers instant alerts without recording or storing user video.",
    problem:
      "Drowsy driving is a leading cause of highway accidents worldwide. Commercial fleet driver monitoring systems often require costly proprietary hardware sensors that everyday drivers cannot afford.",
    solution:
      "Built a zero-hardware-cost solution utilizing an everyday smartphone camera as an IP webcam and a laptop as the local edge processing unit. Evaluates 468 facial landmarks locally via MediaPipe Face Mesh to calculate Eye Aspect Ratio (EAR) and Mouth Aspect Ratio (MAR) fatigue indices.",
    liveUrl: "https://deploy-five-theta-92.vercel.app/",
    githubUrl: "https://github.com/kavya0704/DrowsiGuard-PRO",
    featured: true,
    isFlagship: false,
    priority: 3,
    technologies: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "Face Mesh",
      "Flask",
      "Real-Time Video",
      "WebSockets"
    ],
    highlights: [
      {
        title: "468 Facial Landmarks",
        desc: "Extracts precise real-time eye, eyelid, and mouth contours without requiring expensive infrared sensors."
      },
      {
        title: "EAR & MAR Calculation",
        desc: "Monitors Eye Aspect Ratio (prolonged eye closure) and Mouth Aspect Ratio (yawn frequency) continuously."
      },
      {
        title: "Privacy-Safe Processing",
        desc: "Zero cloud transmission, zero recording, and zero storage. Video frames are analyzed locally and discarded immediately."
      },
      {
        title: "Phone-as-Camera Setup",
        desc: "Supports MJPEG wireless streaming from an Android or iOS smartphone into the local Python Flask engine."
      }
    ],
    images: {
      preview: "/projects/drowsiguard/preview.png"
    }
  }
];
