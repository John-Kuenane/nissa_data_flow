//import { Card, CardHeader, CardContent } from "@/components/ui/card";
"use client";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Download,
  TabletSmartphone,
  Users,
  Upload,
  ShieldCheck,
  Repeat2,
  Home,
  MapPin,
  Clock4,
  Server,
  Gauge,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ListChecks,
  Calculator,
  GitCompare,
  Database,
  Code2
} from "lucide-react";

// 🧩 Fallback Card component — paste this right here
const Card = ({ className = "", children }: any) =>
  <div className={`rounded-2xl shadow-lg border-0 ${className}`}>{children}</div>;

const CardHeader = ({ className = "", children }: any) =>
  <div className={`p-5 text-xl font-semibold ${className}`}>{children}</div>;

const CardContent = ({ className = "", children }: any) =>
  <div className={`px-5 pb-5 text-base leading-relaxed ${className}`}>{children}</div>;

// Simple inline badge component
function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/70 text-[#154360] border border-white/60">
      {children}
    </span>
  );
}

// Inline SVG for a minimalist Basotho hat crest (for branding, no external assets)
const BasothoHat = () => (
  <svg viewBox="0 0 64 64" className="w-10 h-10" aria-hidden>
    <defs>
      <linearGradient id="flagGrad" x1="0" x2="1">
        <stop offset="0%" stopColor="#1A5DB3" />
        <stop offset="50%" stopColor="#ffffff" />
        <stop offset="100%" stopColor="#2E7D32" />
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="30" fill="url(#flagGrad)" opacity="0.15" />
    <path
      d="M32 12c2.5 0 4.5 2 4.5 4.5S34.5 21 32 21s-4.5-2-4.5-4.5S29.5 12 32 12zm-8 31c4-7 12-7 16 0l8 7H16l8-7zM27 25c3.2-2.3 6.8-2.3 10 0l1 3-6 5-6-5 1-3z"
      fill="#154360"
      opacity="0.85"
    />
  </svg>
);

export default function NISSADataProcessFlow() {
  const palette = {
    deepBlue: "#154360", // header text
    flagBlue: "#1A5DB3",
    flagGreen: "#2E7D32",
    sky: "#EBF5FB",
    white: "#FFFFFF",
  } as const;

  const stages = [
    {
      title: "Planning & Preparation",
      subtitle: "Deployment Plan & Work-Packs",
      description:
        "NISSA team defines districts, timelines and scope. IT prepares work-packs (forms, household datasets, area assignments).",
      icon: ClipboardList,
      hue: "from-[#1A5DB3] to-[#4FA3FF]",
      chips: ["Deployment Plan", "Work-Packs"],
    },
    {
      title: "Field Setup",
      subtitle: "Work-Pack Delivery",
      description:
        "Enumerators/IT download work-packs into tablets (PWA). Offline-first ready for the field.",
      icon: Download,
      hue: "from-[#2E7D32] to-[#66BB6A]",
      chips: ["PWA Tablets", "Offline-first"],
    },
    {
      title: "Community Session",
      subtitle: "Listing + CBC (same gathering)",
      description:
        "Update household status (Active/Dissolved) and run Community-Based Categorization (CBC).",
      icon: Users,
      hue: "from-[#1A5DB3] to-[#2E7D32]",
      chips: ["Listing", "CBC"],
    },
    {
      title: "Sync to Staging",
      subtitle: "NISSA API",
      description:
        "Enumerators sync; on-screen summary shows number of records uploaded.",
      icon: Upload,
      hue: "from-[#4FA3FF] to-[#1A5DB3]",
      chips: ["REST: GET/POST/PUT", "Sync Summary"],
    },
    {
      title: "Quality Assurance",
      subtitle: "Approve / Flag / Decline",
      description:
        "QA team audits completeness and consistency in the staging platform.",
      icon: ShieldCheck,
      hue: "from-[#2E7D32] to-[#9CCC65]",
      chips: ["Validation", "Consistency"],
      extra: (
        <div className="flex gap-2 mt-3">
          <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white/80 text-[#2E7D32] px-2.5 py-0.5 rounded-full border border-white/70"><CheckCircle2 className="w-3.5 h-3.5"/>Approved</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white/80 text-[#B36B00] px-2.5 py-0.5 rounded-full border border-white/70"><AlertTriangle className="w-3.5 h-3.5"/>Flagged</span>
          <span className="inline-flex items-center gap-1 text-xs font-semibold bg-white/80 text-[#B00020] px-2.5 py-0.5 rounded-full border border-white/70"><XCircle className="w-3.5 h-3.5"/>Declined</span>
        </div>
      ),
    },
    {
      title: "Field Corrections",
      subtitle: "Supervisor-led",
      description:
        "Flagged/declined records returned for correction and resubmission.",
      icon: Repeat2,
      hue: "from-[#1A5DB3] to-[#4FA3FF]",
      chips: ["Resync", "Closure"],
    },
    {
      title: "Enumeration",
      subtitle: "Door-to-door",
      description:
        "Collect detailed socio-economic, demographic and telemetry data.",
      icon: Home,
      hue: "from-[#2E7D32] to-[#66BB6A]",
      chips: [
        <span key="gps" className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5"/>GPS</span>,
        <span key="time" className="inline-flex items-center gap-1"><Clock4 className="w-3.5 h-3.5"/>Start/End</span>,
      ],
    },
    {
      title: "Sync & QA (Round 2)",
      subtitle: "Staging review",
      description:
        "Enumeration data synced to staging; QA approves, flags, or declines.",
      icon: Server,
      hue: "from-[#4FA3FF] to-[#1A5DB3]",
      chips: ["Data Quality", "Audit Trail"],
    },
    {
      title: "PMT Scoring",
      subtitle: "Post-enumeration",
      description:
        "IT runs PMT; compare PMT vs CBC. If mismatch, create Community Validation work-packs.",
      icon: Calculator,
      hue: "from-[#1A5DB3] to-[#2E7D32]",
      chips: [<span key="cmp" className="inline-flex items-center gap-1"><GitCompare className="w-3.5 h-3.5"/>PMT vs CBC</span>],
    },
    {
      title: "Community Validation",
      subtitle: "If discrepancies",
      description:
        "Follow normal staging QA cycle until consensus and approval.",
      icon: ListChecks,
      hue: "from-[#2E7D32] to-[#66BB6A]",
      chips: ["Social Validation"],
    },
    {
      title: "Final Integration",
      subtitle: "NISSA Registry",
      description:
        "Approved, clean data integrated into the national registry (SQL Server).",
      icon: Database,
      hue: "from-[#1A5DB3] to-[#4FA3FF]",
      chips: ["Production", "Governance"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#EBF5FB]">
      {/* Header / Branding Bar */}
      <div className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-[#1A5DB3] via-white to-[#2E7D32] py-6 shadow">
          <div className="max-w-6xl mx-auto px-6 flex items-center gap-4">
            <div className="shrink-0"><BasothoHat /></div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{color: palette.deepBlue}}>
                NISSA Data Process Flow
              </h1>
              <p className="text-sm md:text-base text-[#154360]/80">
                Ministry of Gender, Youth & Social Development • National Information System for Social Assistance (NISSA)
              </p>
            </div>
            <div className="hidden md:flex gap-2">
              <Badge>Lesotho 🇱🇸</Badge>
              <Badge>MoGYSD</Badge>
              <Badge>Nissa Flow</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stages.map((s, idx) => {
            const Icon = s.icon as any;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.03 }}
              >
                <Card className={`rounded-2xl border-0 shadow-lg bg-gradient-to-tr ${s.hue} text-white`}> 
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 shrink-0 bg-white/20 rounded-xl p-2">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold leading-tight">{idx + 1}. {s.title}</h3>
                        <p className="text-white/90 -mt-0.5 text-sm md:text-[0.95rem] font-medium">{s.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm md:text-base leading-relaxed">
                      {s.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {s.chips?.map((c, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/85 text-[#154360] border border-white/70">{c}</span>
                      ))}
                    </div>
                    {s.extra}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="my-10 h-0.5 bg-gradient-to-r from-transparent via-[#1A5DB3]/30 to-transparent" />

        {/* Technology Stack Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="rounded-2xl border-0 shadow-md bg-white">
            <CardHeader>
              <div className="flex items-center gap-2 text-[#154360]">
                <TabletSmartphone className="w-5 h-5" />
                <h4 className="font-bold">Mobile App (PWA)</h4>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-[#154360]/90 space-y-1.5">
                <li>Angular v12</li>
                <li>REST (GET/POST/PUT)</li>
                <li>Offline-first sync</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-md bg-white">
            <CardHeader>
              <div className="flex items-center gap-2 text-[#154360]">
                <Code2 className="w-5 h-5" />
                <h4 className="font-bold">API & Staging Web</h4>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-[#154360]/90 space-y-1.5">
                <li>.NET (C#) API</li>
                <li>Angular Web (QA/IT)</li>
                <li>Audit trails & telemetry</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="rounded-2xl border-0 shadow-md bg-white">
            <CardHeader>
              <div className="flex items-center gap-2 text-[#154360]">
                <Database className="w-5 h-5" />
                <h4 className="font-bold">Data Stores</h4>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-[#154360]/90 space-y-1.5">
                <li>SQL Server (Staging & Registry)</li>
                <li>Role-based access control</li>
                <li>Backups & governance</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Footer note */}
        <div className="mt-10 text-center text-xs text-[#154360]/70">
          © {new Date().getFullYear()} Ministry of Gender, Youth & Social Development • NISSA. Designed by MK.
        </div>
      </div>
    </div>
  );
}
