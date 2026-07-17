import { useState, FormEvent } from "react";
import usthbLogo from "@/imports/Adobe_Express_-_file.png";
import atLogo from "@/imports/pngegg.png";
import profilePhoto from "@/imports/ChatGPT_Image_Jul_17__2026__11_01_45_PM.png";
import { Github, Clock } from "lucide-react";
import svgPaths from "@/imports/Main/svg-nmdlp5ojlp";

// ── Nav ──────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "education", label: "Education" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* ── Sticky header ── */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-[#3a494b] bg-[#131313]/90 backdrop-blur-sm h-[60px] rounded-b-2xl">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 md:px-8 h-full">
          {/* Logo */}
          <div className="font-['JetBrains_Mono',monospace] text-[#00f2ff] text-sm font-bold tracking-[1.4px]">
            _{"{PORTFOLIO}"}
          </div>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="font-['JetBrains_Mono',monospace] text-[#849495] text-xs tracking-[1.1px] uppercase hover:text-[#00f2ff] transition-colors"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="md:hidden flex flex-col gap-[5px] p-1 group"
          >
            <span className="block w-6 h-[2px] bg-[#849495] transition-colors group-hover:bg-[#00f2ff]" />
            <span className="block w-6 h-[2px] bg-[#849495] transition-colors group-hover:bg-[#00f2ff]" />
            <span className="block w-4 h-[2px] bg-[#849495] transition-colors group-hover:bg-[#00f2ff]" />
          </button>
        </div>
      </nav>

      {/* ── Drawer backdrop ── */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      />

      {/* ── Slide-out drawer ── */}
      <aside
        className={`fixed top-0 right-0 z-[70] h-full w-[300px] bg-[#1c1b1b] flex flex-col transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] md:hidden`}
        style={{
          transform: open ? "translateX(0)" : "translateX(100%)",
          boxShadow: open ? "-8px 0 40px rgba(0,0,0,0.6), -1px 0 0 #3a494b" : "none",
        }}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-[60px] border-b border-[#3a494b] shrink-0">
          <span className="font-['JetBrains_Mono',monospace] text-[#00f2ff] text-sm font-bold tracking-[1.4px]">
            SIDEBAR\
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="text-[#849495] hover:text-[#00f2ff] transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2L18 18M18 2L2 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex flex-col px-6 pt-8 gap-1 flex-1">
          {links.map(({ id, label }, i) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="group flex items-center gap-3 py-4 border-b border-[#3a494b]/50 last:border-0 transition-colors hover:text-[#00f2ff]"
            >
              <span className="font-['JetBrains_Mono',monospace] text-[#3a494b] text-[10px] w-5 group-hover:text-[#00f2ff] transition-colors">
                0{i + 1}
              </span>
              <span className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[18px] group-hover:text-[#00f2ff] transition-colors">
                {label}
              </span>
            </a>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-6 py-8 border-t border-[#3a494b] shrink-0">
          <p className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] tracking-[1.4px] mb-4">
            LET'S CONNECT
          </p>
          <p className="font-['JetBrains_Mono',monospace] text-[#3a494b] text-[10px] text-center mt-2 tracking-[0.5px]">
            astrowil © {new Date().getFullYear()}
          </p>
        </div>
      </aside>
    </>
  );
}

// ── Photo placeholder (left col) ─────────────────────────────────────
function PhotoPlaceholder() {
  return (
    <div className="w-full md:flex-[1_0_0] md:h-[456px] md:min-w-px relative flex justify-center md:block">
      {/* mobile: centred semi-circle with photo */}
      <div className="md:hidden w-[320px] h-[200px] relative rounded-b-[9999px] overflow-hidden">
        <div aria-hidden className="absolute border border-[#3a494b] border-dashed inset-0 pointer-events-none rounded-b-[9999px] z-10" />
        <img src={profilePhoto} alt="Yanisse-Anes Yahiaoui" className="w-full h-full object-cover object-[center_40%] scale-100" />
      </div>
      {/* desktop: pill emerging from left edge with photo */}
      <div className="hidden md:flex absolute aspect-[4/3] bottom-0 left-[-200px] top-0 rounded-br-[9999px] rounded-tr-[9999px] overflow-hidden">
        <div aria-hidden className="absolute border border-[#3a494b] border-dashed inset-0 pointer-events-none rounded-br-[9999px] rounded-tr-[9999px] z-10" />
        <img src={profilePhoto} alt="Yanisse-Anes Yahiaoui" className="w-full h-full object-cover object-[center_40%] scale-100" />
      </div>
    </div>
  );
}

// ── Hero Section ─────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section id="about" className="flex flex-col items-start justify-center min-h-[560px] py-[52px] w-full">
      <div className="flex flex-col-reverse md:flex-row gap-6 md:gap-16 items-center justify-center w-full">
        <PhotoPlaceholder />
        {/* right col */}
        <div className="flex flex-[1_0_0] flex-col gap-6 items-start w-full min-w-px">
          {/* status badge */}
          <div className="bg-[#1c1b1b] flex gap-2 items-center px-[17px] py-[7px] rounded-full relative shrink-0 transition-all duration-200 hover:bg-[#222121] hover:scale-[1.03] group cursor-default">
            <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-full transition-colors duration-200 group-hover:border-[#00ff41]/50" />
            <div className="bg-[#00ff41] rounded-full size-2" />
            <span className="font-['JetBrains_Mono',monospace] text-[#00ff41] text-[14px]">
              Yanisse-Anes_Yahiaoui
            </span>
          </div>
          {/* heading */}
          <div className="flex flex-col font-['Geist',sans-serif] font-bold text-[#e5e2e1] text-[32px] md:text-[48px] tracking-[-0.96px] leading-[40px] md:leading-[56px] w-full">
            <p className="mb-0">
              <span className="text-[#00f2ff]">Future engineer,</span> passionate about Network and Computer Systems
            </p>
          </div>
          {/* description */}
          <p className="font-['Geist',sans-serif] text-[#e5e2e1] text-base w-full max-w-[576px] leading-[24px]">
            Currently building hands-on labs, scripting configurations with code, and exploring how modern software can streamline and scale physical infrastructure.
          </p>
          {/* CTA */}
        </div>
      </div>
    </section>
  );
}

// ── Skill Card ───────────────────────────────────────────────────────
interface SkillCardProps {
  node: string;
  icon: React.ReactNode;
  title: string;
  items: string[];
  tags?: string[];
}
function SkillCard({ node, icon, title, items, tags }: SkillCardProps) {
  return (
    <div className="bg-[#1c1b1b] relative rounded-[12px] flex flex-col gap-4 p-6 h-full transition-all duration-200 hover:bg-[#222121] hover:translate-y-[-2px] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4)] group">
      <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-[12px] transition-colors duration-200 group-hover:border-[#5a6e70]" />
      <span className="absolute right-4 top-4 font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] leading-6">
        {node}
      </span>
      {icon}
      <p className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[16px] leading-6">{title}</p>
      <div className="flex flex-col gap-2">
        {items.map((item) => (
          <div key={item} className="flex gap-2 items-center">
            <span className="font-['JetBrains_Mono',monospace] text-[#00f2ff] text-[14px] leading-5">{">"}</span>
            <span className="font-['JetBrains_Mono',monospace] text-[#b9cacb] text-[14px] leading-5">{item}</span>
          </div>
        ))}
      </div>
      {tags && tags.length > 0 && (
        <div className="flex gap-2 flex-wrap mt-auto pt-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#1c1b1b] border border-[#3a494b] rounded-[8px] px-[9px] py-[5px] font-['JetBrains_Mono',monospace] text-[#b9cacb] text-[12px] leading-6 cursor-default transition-all duration-150 hover:border-[#00f2ff] hover:text-[#00f2ff] hover:bg-[#00f2ff]/5"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

// ── Routing icon svg ─────────────────────────────────────────────────
function RoutingIcon() {
  return (
    <div className="w-full h-[23.75px] relative">
      <svg className="absolute block inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 346.667 23.75">
        <path d={svgPaths.p9f37190} fill="#00F2FF" />
      </svg>
    </div>
  );
}
function AutomationIcon() {
  return (
    <div className="w-full h-[20px] relative">
      <svg className="absolute block inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 346.667 20">
        <path d={svgPaths.p9c1d400} fill="#00F2FF" />
      </svg>
    </div>
  );
}
function SoftwareIcon() {
  return (
    <div className="w-full h-[15px] relative">
      <svg className="absolute block inset-0 w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 346.667 15">
        <path d={svgPaths.p3cf6e1e0} fill="#00F2FF" />
      </svg>
    </div>
  );
}

// ── Cert badge ───────────────────────────────────────────────────────
interface CertBadgeProps {
  name: string;
  status: "VERIFIED" | "PENDING";
  href?: string;
  linkLabel?: string;
}
function CertBadge({ name, status, href, linkLabel }: CertBadgeProps) {
  const verified = status === "VERIFIED";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-[#1c1b1b] flex flex-col gap-2 p-[17px] relative rounded-[8px] flex-1 min-w-[200px] cursor-pointer transition-transform duration-100 active:scale-95 hover:brightness-110 ${!verified ? "opacity-60" : ""}`}
    >
      <div
        aria-hidden
        className={`absolute ${verified ? "border-solid border-[#3a494b]" : "border-dashed border-[#3a494b]"} border inset-0 pointer-events-none rounded-[8px]`}
      />
      <div className="flex items-center justify-between w-full">
        <div className={`rounded-full size-2 ${verified ? "bg-[#00f2ff]" : "bg-[#849495]"}`} />
        <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] leading-6">{status}</span>
      </div>
      <span
        className={`font-['JetBrains_Mono',monospace] font-bold text-[11px] tracking-[1.1px] leading-4 ${verified ? "text-[#00f2ff]" : "text-[#b9cacb]"}`}
      >
        {name}
      </span>
      {verified && linkLabel && (
        <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] leading-4 tracking-[0.5px]">
          {linkLabel} →
        </span>
      )}
    </a>
  );
}

// ── Skills Section ───────────────────────────────────────────────────
function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col gap-8 w-full">
      {/* section header */}
      <div className="flex gap-4 items-center w-full">
        <h2 className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[24px] tracking-[-0.24px] leading-8 whitespace-nowrap">Skills</h2>
        <div className="bg-[#849495] flex-1 h-px min-w-px" />
      </div>

      {/* top row: 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SkillCard
          node="NODE_01"
          icon={<RoutingIcon />}
          title="Routing & Switching"
          items={["Router & Switch Configuration", "Network Topologies", "Subnetting"]}
        />
        <SkillCard
          node="NODE_02"
          icon={<AutomationIcon />}
          title="Network Automation"
          items={["Netmiko", "Ansible Playbooks", "REST APIs & CI/CD"]}
        />
        <SkillCard
          node="NODE_03"
          icon={<SoftwareIcon />}
          title="Software Engineering"
          items={["System design & APIs", "Containerization & DevOps", "Git & collaborative dev"]}
          tags={["C/C++", "Java", "Bash", "Python"]}
        />
      </div>

      {/* certs row */}
      <div className="bg-[#1c1b1b] relative rounded-[12px] p-6 flex flex-col gap-6">
        <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <span className="absolute right-4 top-4 font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] leading-6">
          AUTH_MODULE
        </span>
        {/* cert header */}
        <div className="flex gap-4 items-center">
          <div className="relative size-[27.5px]">
            <svg className="block size-full" fill="none" viewBox="0 0 27.5 26.25">
              <path d={svgPaths.p2e076997} fill="#00F2FF" />
            </svg>
          </div>
          <div>
            <p className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[16px] leading-6">Active Certifications</p>
            <p className="font-['JetBrains_Mono',monospace] text-[#b9cacb] text-[14px] leading-5">Validating technical proficiency.</p>
          </div>
        </div>
        {/* badges */}
        <div className="flex flex-wrap gap-4">
          <CertBadge name="Cisco Certifications" status="VERIFIED" href="https://www.credly.com/users/yanisse-anes-yahiaoui" linkLabel="credly.com" />
          <CertBadge name="FreeCodeCamp Certifications" status="VERIFIED" href="https://www.freecodecamp.org/astrowil" linkLabel="freecodecamp.org" />
          <CertBadge name="AWS SysOps" status="PENDING" />
        </div>
      </div>
    </section>
  );
}

// ── Topology SVG (project 2 visualization) ───────────────────────────
function TopologySvg() {
  return (
    <div className="relative h-64 w-full">
      {/* line: core → dist-sw01 */}
      <div className="absolute bottom-[35%] left-[28.75%] right-1/2 top-1/4">
        <div className="absolute inset-[-0.49%_50.5%_-0.49%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.296 102.996">
            <g opacity="0.4">
              <path d={svgPaths.p18567000} fill="black" />
              <path d={svgPaths.p18567000} stroke="#00F2FF" strokeDasharray="5.1" strokeWidth="1.275" />
            </g>
          </svg>
        </div>
      </div>
      {/* line: core → dist-sw02 */}
      <div className="absolute bottom-[35%] left-1/2 right-[28.75%] top-1/4">
        <div className="absolute inset-[-0.49%_50.5%_-0.49%_-0.15%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 128.296 102.996">
            <g opacity="0.4">
              <path d={svgPaths.p58bc800} fill="black" />
              <path d={svgPaths.p58bc800} stroke="#00F2FF" strokeDasharray="5.1" strokeWidth="1.275" />
            </g>
          </svg>
        </div>
      </div>
      {/* horizontal line */}
      <div className="absolute inset-[65%_28.75%_35%_28.75%]">
        <div className="absolute inset-[-0.64px_50.66%_-0.64px_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 255 1.275">
            <g opacity="0.4">
              <path d="M0 0.6375H255H0" fill="black" />
              <path d="M0 0.6375H255H0" stroke="#00F2FF" strokeDasharray="5.1" strokeWidth="1.275" />
            </g>
          </svg>
        </div>
      </div>
      {/* CORE-R01 node */}
      <div className="absolute inset-[17.5%_46.81%_67.5%_46.81%]">
        <div className="absolute inset-[-1.67%_49.84%_-1.67%_-0.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.525 39.525">
            <path d={svgPaths.p3221da20} fill="#050505" />
            <path d={svgPaths.p3221da20} stroke="#00F2FF" strokeWidth="1.275" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Material_Symbols_Outlined'] not-italic text-[#00f2ff] text-[25.5px]" style={{ left: 300, top: 42 }}>router</div>
      {/* DIST-SW01 node */}
      <div className="absolute inset-[57.5%_68.06%_27.5%_25.56%]">
        <div className="absolute inset-[-1.67%_49.84%_-1.67%_-0.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.525 39.525">
            <path d={svgPaths.p3221da20} fill="#050505" />
            <path d={svgPaths.p3221da20} stroke="#00F2FF" strokeWidth="1.275" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Material_Symbols_Outlined'] not-italic text-[#00f2ff] text-[25.5px]" style={{ left: 172, top: 144 }}>settings_ethernet</div>
      {/* DIST-SW02 node */}
      <div className="absolute inset-[57.5%_25.56%_27.5%_68.06%]">
        <div className="absolute inset-[-1.67%_49.84%_-1.67%_-0.82%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.525 39.525">
            <path d={svgPaths.p3221da20} fill="#050505" />
            <path d={svgPaths.p3221da20} stroke="#00F2FF" strokeWidth="1.275" />
          </svg>
        </div>
      </div>
      <div className="absolute font-['Material_Symbols_Outlined'] not-italic text-[#00f2ff] text-[25.5px]" style={{ left: 427, top: 144 }}>settings_ethernet</div>
    </div>
  );
}

// ── Projects Section ─────────────────────────────────────────────────
function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col gap-8 w-full">
      <div className="flex gap-4 items-center w-full">
        <h2 className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[24px] tracking-[-0.24px] leading-8 whitespace-nowrap">Projects</h2>
        <div className="bg-[#849495] flex-1 h-px min-w-px" />
      </div>

      <div className="flex flex-col gap-[61px]">
        {/* Project 1 */}
        <div className="bg-[#343434] rounded-[12px] overflow-hidden w-full transition-all duration-200 hover:bg-[#3c3b3b] hover:translate-y-[-2px] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5)] group">
          <a
            href="https://github.com/Astrowdev/Astrow-s-Automation-shenanigans"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 flex flex-row gap-6 items-center py-[15px] active:scale-[0.98] transition-transform duration-150 cursor-pointer"
          >
            <Github size={72} className="text-[#3a494b] shrink-0" />
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-start justify-between w-full">
                <h3 className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[16px] leading-6">
                  Automated Router Configurator
                </h3>
                <svg className="size-[13px] shrink-0" fill="none" viewBox="0 0 13 13">
                  <path d={svgPaths.p1e74ffc0} fill="#3A494B" />
                </svg>
              </div>
              <p className="font-['JetBrains_Mono',monospace] text-[#b9cacb] text-[14px] leading-5">
                Netmiko scripts and Ansible playbooks built to automate configurations and streamline network deployments
              </p>
            </div>
          </a>
        </div>

        {/* Project 2 */}
        <div className="bg-[#343434] rounded-[12px] overflow-hidden w-full isolate flex flex-col transition-all duration-200 hover:bg-[#3c3b3b] hover:translate-y-[-2px] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.5)] group">
          <a
            href="https://github.com/Astrowdev/Astrow-s-Packet-tracer-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 flex flex-row gap-6 items-center z-[2] relative active:scale-[0.98] transition-transform duration-150 cursor-pointer"
          >
            <Github size={72} className="text-[#3a494b] shrink-0" />
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex items-start justify-between w-full">
                <h3 className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[16px] leading-6">Packet Tracer Projects</h3>
                <svg className="size-[13px] shrink-0" fill="none" viewBox="0 0 13 13">
                  <path d={svgPaths.p1e74ffc0} fill="#3A494B" />
                </svg>
              </div>
              <p className="font-['JetBrains_Mono',monospace] text-[#b9cacb] text-[14px] leading-5">
                Packet Tracer projects designed to experiment with network topologies, configurations, and enterprise solutions.
              </p>
            </div>
          </a>
          {/* topology visualization */}
          <div className="relative z-[1] border-t border-[#2a2a2a] overflow-hidden bg-[#050505]">
            </div>
        </div>

        {/* Coming soon card */}
        <div className="bg-[#1c1b1b] rounded-[12px] overflow-hidden w-full opacity-70 relative">
          <div aria-hidden className="absolute border border-[#3a494b] border-dashed inset-0 pointer-events-none rounded-[12px]" />
          <div className="p-6 flex flex-row gap-6 items-center py-[15px]">
            <Clock size={72} className="text-[#3a494b] shrink-0" />
            <div className="flex flex-col gap-2 flex-1">
              <h3 className="font-['Geist',sans-serif] font-semibold text-[#849495] text-[16px] leading-6">
                More on the horizon
              </h3>
              <p className="font-['JetBrains_Mono',monospace] text-[#849495] text-[14px] leading-5">
                {"I'm constantly building, experimenting, and refining. New projects and case studies are currently in the works and will be featured here soon."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Contact Section ───────────────────────────────────────────────────
function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [payload, setPayload] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setName("");
    setEmail("");
    setPayload("");
  }

  return (
    <section id="contact" className="w-full">
      <div className="flex flex-col gap-8 items-center w-full">
        {/* section header */}
        <div className="flex gap-4 items-center w-full">
          <h2 className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[24px] tracking-[-0.24px] leading-8 whitespace-nowrap">
            Contact
          </h2>
          <div className="bg-[#849495] flex-1 h-px min-w-px" />
        </div>

        <div className="flex flex-col gap-8 max-w-[672px] w-full relative bg-[#1c1b1b] rounded-[20px] p-10" style={{boxShadow:"0 0 0 1px #3a494b"}}>

          {/* heading */}
          <div className="flex flex-col gap-2 items-center w-full">
            <span className="font-['JetBrains_Mono',monospace] text-[#00f2ff] text-[10px] tracking-[2px] mb-1">// CONTACT</span>
            <h2 className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[28px] tracking-[-0.24px] leading-8 text-center">
              Establish Connection
            </h2>
            <p className="font-['JetBrains_Mono',monospace] text-[#849495] text-[13px] leading-5 text-center">
              Send a packet to initiate a handshake.
            </p>
          </div>

          {sent ? (
            <div className="bg-[#131313] relative rounded-[12px] p-8 flex flex-col items-center gap-4 text-center">
              <div aria-hidden className="absolute border border-[#00f2ff] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="bg-[#00ff41] rounded-full size-3 shadow-[0_0_10px_2px_rgba(0,255,65,0.5)]" />
              <p className="font-['JetBrains_Mono',monospace] font-bold text-[#00f2ff] text-[11px] tracking-[1.1px]">
                PACKET_RECEIVED
              </p>
              <p className="font-['JetBrains_Mono',monospace] text-[#b9cacb] text-[14px] leading-5">
                Handshake acknowledged. I will respond shortly.
              </p>
              <button
                onClick={() => setSent(false)}
                className="font-['JetBrains_Mono',monospace] text-[#849495] text-xs tracking-[1.1px] hover:text-[#00f2ff] transition-colors"
              >
                SEND_ANOTHER
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
              {/* name */}
              <div className="relative flex flex-col w-full gap-1">
                <label className="font-['JetBrains_Mono',monospace] text-[#00f2ff] text-[10px] tracking-[1.4px]">
                  NAME
                </label>
                <div className="relative rounded-[10px] w-full bg-[#131313] focus-within:ring-1 focus-within:ring-[#00f2ff]/40 transition-shadow">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Your name"
                    className="w-full bg-transparent px-4 py-3 text-[#e5e2e1] font-['JetBrains_Mono',monospace] text-[14px] outline-none placeholder:text-[#3a494b] rounded-[10px]"
                  />
                  <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
              </div>

              {/* email */}
              <div className="relative flex flex-col w-full gap-1">
                <label className="font-['JetBrains_Mono',monospace] text-[#00f2ff] text-[10px] tracking-[1.4px]">
                  EMAIL_ADDR
                </label>
                <div className="relative rounded-[10px] w-full bg-[#131313] focus-within:ring-1 focus-within:ring-[#00f2ff]/40 transition-shadow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-transparent px-4 py-3 text-[#e5e2e1] font-['JetBrains_Mono',monospace] text-[14px] outline-none placeholder:text-[#3a494b] rounded-[10px]"
                  />
                  <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
              </div>

              {/* payload / message */}
              <div className="relative flex flex-col w-full gap-1">
                <label className="font-['JetBrains_Mono',monospace] text-[#00f2ff] text-[10px] tracking-[1.4px]">
                  MESSAGE
                </label>
                <div className="relative rounded-[10px] w-full bg-[#131313] focus-within:ring-1 focus-within:ring-[#00f2ff]/40 transition-shadow">
                  <textarea
                    value={payload}
                    onChange={(e) => setPayload(e.target.value)}
                    required
                    placeholder="Write your message..."
                    rows={5}
                    className="w-full bg-transparent px-4 py-3 text-[#e5e2e1] font-['JetBrains_Mono',monospace] text-[14px] outline-none placeholder:text-[#3a494b] resize-none rounded-[10px]"
                  />
                  <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-[10px]" />
                </div>
              </div>

              {/* submit */}
              <button
                type="submit"
                className="w-full relative rounded-[12px] py-[14px] flex gap-2 items-center justify-center bg-[#00f2ff]/5 hover:bg-[#00f2ff]/10 active:scale-[0.98] transition-all duration-100"
                style={{boxShadow:"0 0 0 1px #00f2ff"}}
              >
                <span className="font-['JetBrains_Mono',monospace] font-bold text-[#00f2ff] text-[11px] tracking-[1.1px]">
                  TRANSMIT
                </span>
                <svg width="13" height="11" viewBox="0 0 12.6667 10.6667" fill="none">
                  <path d={svgPaths.p12ff1280} fill="#00F2FF" />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ── Footer ────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-[#3a494b] mt-32 py-8 px-8">
      <div className="mx-auto max-w-[1200px] flex items-center justify-between">
        <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-xs tracking-[1.1px]">
          astrowil &copy; {new Date().getFullYear()}
        </span>
        <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-xs tracking-[1.1px]">
          CONN_STATUS: <span className="text-[#00ff41]">ONLINE</span>
        </span>
      </div>
    </footer>
  );
}

// ── Education Section ────────────────────────────────────────────────
function EducationSection() {
  return (
    <section id="education" className="flex flex-col gap-8 w-full">
      {/* section header */}
      <div className="flex gap-4 items-center w-full">
        <h2 className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[24px] tracking-[-0.24px] leading-8 whitespace-nowrap">
          Academic &amp; Professional Journey
        </h2>
        <div className="bg-[#849495] flex-1 h-px min-w-px" />
      </div>

      {/* card */}
      <div className="bg-[#1c1b1b] relative rounded-[12px] p-8 flex flex-col gap-8 transition-all duration-200 hover:bg-[#222121] hover:translate-y-[-2px] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4)] group">
        <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-[12px] transition-colors duration-200 group-hover:border-[#5a6e70]" />
        {/* top row: institution + status badge */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] tracking-[1.4px]">INSTITUTION</span>
            <div className="flex items-center gap-3">
              {/* USTHB logo mark */}
              <div className="bg-[#131313] relative rounded-[8px] size-[48px] shrink-0 flex items-center justify-center overflow-hidden">
                <div aria-hidden className="absolute border border-[#3a494b] inset-0 pointer-events-none rounded-[8px]" />
                <img src={usthbLogo} alt="USTHB logo" className="size-full object-contain" />
              </div>
              <h3 className="font-['Geist',sans-serif] font-bold text-[#e5e2e1] text-[28px] tracking-[-0.5px] leading-[1.15]">
                USTHB
              </h3>
            </div>
            <p className="font-['Geist',sans-serif] text-[#b9cacb] text-[13px] leading-5">
              Université des Sciences et de la Technologie Houari Boumediene
            </p>
          </div>

          {/* status pill */}
          <div className="flex flex-col gap-2 items-start sm:items-end shrink-0">
            <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] tracking-[0.5px]">
              EDU_NODE
            </span>
            <div className="bg-[#131313] flex gap-2 items-center px-4 py-2 rounded-full relative cursor-default transition-all duration-200 hover:bg-[#1a1a1a] hover:scale-[1.03] group/pill">
              <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-full transition-colors duration-200 group-hover/pill:border-[#00ff41]/50" />
              <div className="bg-[#00ff41] rounded-full size-[6px]" />
              <span className="font-['JetBrains_Mono',monospace] text-[#00ff41] text-[11px] tracking-[1px]">
                ENROLLED · ING3
              </span>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-[#3a494b] w-full" />

        {/* degree + specialty row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] tracking-[1.4px]">PROGRAM</span>
            <p className="font-['Geist',sans-serif] font-semibold text-[#e5e2e1] text-[18px] leading-6">
              Computer Science Engineering
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] tracking-[1.4px]">SPECIALTY</span>
            <div className="flex items-center gap-2">
              <span className="font-['JetBrains_Mono',monospace] text-[#00f2ff] text-[14px] leading-5">{">"}</span>
              <p className="font-['Geist',sans-serif] font-semibold text-[#00f2ff] text-[18px] leading-6">
                Cybersecurity
              </p>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="h-px bg-[#3a494b] w-full" />

        {/* ranking block */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] tracking-[1.4px]">ACADEMIC_STANDING</span>
            <span className="font-['JetBrains_Mono',monospace] text-[#3a494b] text-[10px] tracking-[0.5px]">· ING2 / 2nd year</span>
          </div>
          <div className="flex items-center gap-4">
            {/* rank display */}
            <div className="bg-[#131313] relative rounded-[10px] px-5 py-3 flex flex-col items-center min-w-[90px] cursor-default transition-all duration-200 hover:scale-[1.05] hover:bg-[#1a1a1a] group/rank">
              <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-[10px] transition-colors duration-200 group-hover/rank:border-[#00f2ff]/50" />
              <span className="font-['Geist',sans-serif] font-bold text-[#00f2ff] text-[28px] leading-none tracking-[-0.5px]">
                54
              </span>
              <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] mt-1 tracking-[0.5px]">
                RANK
              </span>
            </div>
            {/* progress bar */}
            <div className="flex flex-col gap-2 flex-1">
              <div className="flex justify-between items-center">
                <span className="font-['JetBrains_Mono',monospace] text-[#b9cacb] text-[12px]">
                  Top 12% of cohort
                </span>
                <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px]">
                  453 students
                </span>
              </div>
              <div className="relative h-[6px] w-full rounded-full bg-[#2a2a2a] overflow-hidden">
                <div aria-hidden className="absolute inset-0 border border-[#3a494b] rounded-full pointer-events-none" />
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#00f2ff] to-[#00f2ff]/60"
                  style={{ width: "12%" }}
                />
              </div>
              <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] tracking-[0.5px]">
                Ranked 54 / 453
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* internship card */}
      <div className="bg-[#1c1b1b] relative rounded-[12px] p-8 flex flex-col gap-6 transition-all duration-200 hover:bg-[#222121] hover:translate-y-[-2px] hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.4)] group">
        <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-[12px] transition-colors duration-200 group-hover:border-[#5a6e70]" />
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] tracking-[1.4px]">INTERNSHIP</span>
            <div className="flex items-center gap-3">
              <div className="bg-[#131313] relative rounded-[8px] size-[48px] shrink-0 flex items-center justify-center overflow-hidden">
                <div aria-hidden className="absolute border border-[#3a494b] inset-0 pointer-events-none rounded-[8px]" />
                <img src={atLogo} alt="Algérie Télécom logo" className="size-full object-contain" />
              </div>
              <h3 className="font-['Geist',sans-serif] font-bold text-[#e5e2e1] text-[24px] tracking-[-0.5px] leading-[1.15]">
                Algérie Télécom
              </h3>
            </div>
            <p className="font-['Geist',sans-serif] text-[#b9cacb] text-[13px] leading-5">
              Software Engineering Intern
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start sm:items-end shrink-0">
            <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] tracking-[0.5px]">PRO_NODE</span>
            <div className="bg-[#131313] flex gap-2 items-center px-4 py-2 rounded-full relative cursor-default transition-all duration-200 hover:bg-[#1a1a1a] hover:scale-[1.03] group/pill">
              <div aria-hidden className="absolute border border-[#3a494b] border-solid inset-0 pointer-events-none rounded-full transition-colors duration-200 group-hover/pill:border-[#00f2ff]/40" />
              <div className="bg-[#00f2ff] rounded-full size-[6px]" />
              <span className="font-['JetBrains_Mono',monospace] text-[#00f2ff] text-[11px] tracking-[1px]">
                July 2026
              </span>
            </div>
          </div>
        </div>
        <div className="h-px bg-[#3a494b] w-full" />
        <div className="flex flex-col gap-3">
          <span className="font-['JetBrains_Mono',monospace] text-[#849495] text-[10px] tracking-[1.4px]">RESPONSIBILITIES</span>
          <div className="flex flex-col gap-2">
            {[
              "Collaborated with the technical team on system maintenance and network workflows.",
              "Gained hands-on experience with enterprise-grade network infrastructure.",
            ].map((point) => (
              <div key={point} className="flex gap-2 items-start">
                <span className="font-['JetBrains_Mono',monospace] text-[#00f2ff] text-[14px] leading-5 shrink-0 mt-px">{">"}</span>
                <span className="font-['JetBrains_Mono',monospace] text-[#b9cacb] text-[14px] leading-5">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Root ──────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] overflow-x-hidden">
      <Nav />
      <main className="mx-auto max-w-[1200px] px-8 pt-24 flex flex-col gap-16 pb-32">
        <HeroSection />
        <SkillsSection />
        <EducationSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
