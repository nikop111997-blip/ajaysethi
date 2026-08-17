"use client";

import React, { useState } from "react";
import {
  ArrowUpRight,
  BarChart3,
  TrendingUp,
  Users,
  Activity,
  Sparkles,
} from "lucide-react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

// Raw TopoJSON source for India
const INDIA_TOPO_JSON =
  "https://raw.githubusercontent.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";

// Comprehensive state data covering High, Moderate, and Lower/Emerging growth
const stateData = [
  // --- HIGH / VERY HIGH POTENTIAL ---
  { name: "Maharashtra", growth: "14.2% YoY", tier: "High", level: "Top Tier Hub", color: "#ff5a2b" },
  { name: "Karnataka", growth: "13.8% YoY", tier: "High", level: "Tech & Wellness Hub", color: "#ff5a2b" },
  { name: "Delhi", growth: "15.0% YoY", tier: "High", level: "Metro Dominance", color: "#ff5a2b" },
  { name: "Tamil Nadu", growth: "12.6% YoY", tier: "High", level: "Medical Wellness Hub", color: "#ff5a2b" },
  { name: "Gujarat", growth: "12.1% YoY", tier: "High", level: "Industrial & Lifestyle", color: "#ff5a2b" },
  { name: "Uttar Pradesh", growth: "11.5% YoY", tier: "High", level: "Mass Market Scale", color: "#ff5a2b" },
  { name: "Telangana", growth: "12.8% YoY", tier: "High", level: "Rapid Urban Expansion", color: "#ff5a2b" },
  { name: "Kerala", growth: "13.4% YoY", tier: "High", level: "Ayurveda & Eco-Tourism", color: "#ff5a2b" },
  { name: "Rajasthan", growth: "10.9% YoY", tier: "High", level: "Wellness Tourism", color: "#ff5a2b" },
  { name: "West Bengal", growth: "10.4% YoY", tier: "High", level: "Eastern Growth Anchor", color: "#ff5a2b" },
  { name: "Punjab", growth: "10.1% YoY", tier: "High", level: "High Per-Capita Spend", color: "#ff5a2b" },
  { name: "Haryana", growth: "11.2% YoY", tier: "High", level: "NCR Extension Demand", color: "#ff5a2b" },

  // --- MODERATE POTENTIAL ---
  { name: "Andhra Pradesh", growth: "8.4% YoY", tier: "Moderate", level: "Growing Regional Market", color: "#f3bd62" },
  { name: "Madhya Pradesh", growth: "7.9% YoY", tier: "Moderate", level: "Emerging Tier-2 Demand", color: "#f3bd62" },
  { name: "Odisha", growth: "7.5% YoY", tier: "Moderate", level: "Developing Infrastructure", color: "#f3bd62" },
  { name: "Uttarakhand", growth: "9.2% YoY", tier: "Moderate", level: "Yoga & Retreat Center", color: "#f3bd62" },
  { name: "Himachal Pradesh", growth: "8.1% YoY", tier: "Moderate", level: "Nature Wellness Niche", color: "#f3bd62" },
  { name: "Goa", growth: "9.5% YoY", tier: "Moderate", level: "Leisure Wellness", color: "#f3bd62" },
  { name: "Bihar", growth: "6.8% YoY", tier: "Moderate", level: "High Volume / Early Stage", color: "#f3bd62" },
  { name: "Assam", growth: "7.1% YoY", tier: "Moderate", level: "North-East Gateway", color: "#f3bd62" },

  // --- LOWER / EMERGING POTENTIAL ---
  { name: "Jharkhand", growth: "5.4% YoY", tier: "Lower", level: "Early Stage Adoption", color: "##94a3b88a" },
  { name: "Chhattisgarh", growth: "5.1% YoY", tier: "Lower", level: "Nascent Retail Demand", color: "##94a3b88a" },
  { name: "Jammu and Kashmir", growth: "5.8% YoY", tier: "Lower", level: "Niche Retreat Market", color: "##94a3b88a" },
  { name: "Tripura", growth: "4.8% YoY", tier: "Lower", level: "Localized Penetration", color: "##94a3b88a" },
  { name: "Meghalaya", growth: "4.5% YoY", tier: "Lower", level: "Remote Eco Wellness", color: "##94a3b88a" },
  { name: "Manipur", growth: "4.2% YoY", tier: "Lower", level: "Emerging Frontier", color: "##94a3b88a" },
  { name: "Nagaland", growth: "3.9% YoY", tier: "Lower", level: "Emerging Frontier", color: "##94a3b88a" },
  { name: "Mizoram", growth: "4.0% YoY", tier: "Lower", level: "Emerging Frontier", color: "##94a3b88a" },
  { name: "Arunachal Pradesh", growth: "3.8% YoY", tier: "Lower", level: "Untapped Market", color: "##94a3b88a" },
  { name: "Sikkim", growth: "5.2% YoY", tier: "Lower", level: "Organic Lifestyle Niche", color: "##94a3b88a" },
  { name: "Ladakh", growth: "3.5% YoY", tier: "Lower", level: "Seasonal Niche", color: "##94a3b88a" },
];

const chartData = [
  { year: "2020", value: 4.67, projected: false },
  { year: "2021", value: 5.48, projected: false },
  { year: "2022", value: 5.87, projected: false },
  { year: "2023", value: 6.27, projected: false },
  { year: "2024", value: 6.76, projected: false },
  { year: "2025", value: 7.3, projected: false },
  { year: "2026", value: 7.9, projected: false },
  { year: "2027", value: 8.5, projected: true },
  { year: "2028", value: 9.1, projected: true },
  { year: "2029", value: 9.75, projected: true },
];

function IndiaInteractiveMap() {
  const [hoveredState, setHoveredState] = useState(null);
    const [activeTab, setActiveTab] = useState("All");

     const filteredStates =
    activeTab === "All"
      ? stateData
      : stateData.filter((s) => s.tier === activeTab);
  const normalize = (str = "") =>
    str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const getStateInfo = (geoStateName) => {
    const normGeo = normalize(geoStateName);
    return (
      stateData.find((s) => {
        const normData = normalize(s.name);
        return normGeo.includes(normData) || normData.includes(normGeo);
      }) || {
        name: geoStateName,
        growth: "5.0% YoY",
        tier: "Lower",
        level: "Emerging Market",
        color: "#94a3b8",
      }
    );
  };

 

  return (
    <div className="relative w-full p-2  sm:px-4 sm:py-0 ">
      {/* Dynamic Hover Card */}
      <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT: Map and States List */}
          <div className="border-b border-slate-200 p-7 sm:p-10 lg:border-b-0 lg:border-r xl:p-12">
            <div className="mb-5 flex items-center gap-2">
              <span className="relative flex h-4 w-7 items-center">
                <span className="absolute left-0 h-2 w-2 rounded-full bg-[#ff5a2b]" />
                <span className="absolute left-3 h-2 w-2 rounded-full bg-[#ff5a2b]/70" />
                <span className="absolute left-6 h-2 w-2 rounded-full bg-[#ff5a2b]/40" />
              </span>
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff5a2b]">
                Opportunity Across India
              </span>
            </div>

            <h2 className="max-w-[520px] text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-gray-900 sm:text-4xl">
              Wellness Opportunities
              <br />
              Across Every State
            </h2>

            <p className="mt-5 mb-5 max-w-[520px] text-base leading-7 text-slate-700">
              Wellness is no longer limited to metros. It's growing in every
              city, town and community with distinct regional dynamics.
            </p>

            {/* Interactive India Map */}
             {/* Map Legend */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-3 mb-5 mt-5">
    

        {/* Filter Pills */}
        <div className="flex gap-1 rounded-lg bg-slate-100 p-0.5 text-xs font-semibold">
          {["All", "High", "Moderate", "Lower"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={` px-2.5 py-1 transition cursor-pointer ${
                activeTab === tab
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* State List Pills */}
      <div className="mt-4 flex  flex-wrap gap-1.5 overflow-y-auto pr-1 mt-5">
        {filteredStates.map((state) => (
          <button
            key={state.name}
            onMouseEnter={() => setHoveredState(state)}
            onMouseLeave={() => setHoveredState(null)}
            className="flex flex-col sm:flex-row items-center gap-1.5 border border-dashed border-slate-200 bg-white px-2.5 py-1 text-xs font-medium text-slate-700 shadow-2xs transition hover:border-[#ff5a2b] hover:text-[#ff5a2b]"
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: state.color }}
            />
            {state.name}
            <span className="text-[10px] text-slate-400">({state.growth})</span>
          </button>
        ))}
      </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-5 bg-gradient-to-r from-orange-50 to-amber-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#ff5a2b] text-white">
                  <Users size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#ff5a2b]">
                    Be Part of the Wellness Movement
                  </h3>
                  <p className="mt-1 max-w-[330px] text-xs leading-5 text-slate-800">
                    Help transform lives and build a meaningful career in your
                    own state.
                  </p>
                </div>
              </div>

              <button className="flex shrink-0 items-center justify-center gap-2 rounded bg-[#ff5a2b] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:bg-orange-700">
                Explore Opportunities
                <ArrowUpRight size={17} />
              </button>
            </div>
          </div>
          <div className="bg-gray-50">
      <div className="min-h-[64px] border border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur transition-all mx-4 mt-8">
        {hoveredState ? (
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-slate-900"> 
                  {hoveredState.name}
                </span>
                <span
                  className={`rounded px-2 py-0.5 text-[10px] font-bold uppercase ${
                    hoveredState.tier === "High"
                      ? "bg-orange-100 text-[#ff5a2b]"
                      : hoveredState.tier === "Moderate"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {hoveredState.tier} Potential
                </span>
              </div>
              <p className="mt-0.5 text-xs text-slate-500">
                {hoveredState.level}
              </p>
            </div>

            <div className="flex items-center gap-1.5 rounded-lg bg-emerald-50 px-2.5 py-1 text-xs font-bold text-emerald-700">
              <TrendingUp size={14} />
              {hoveredState.growth}
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
            <Sparkles size={15} className="text-[#ff5a2b]" />
            Hover over any state on the map to explore growth metrics & potential.
          </div>
        )}
      </div>
    <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 mb-3 mx-4 mt-5">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5a2b]" />
            High Growth (&gt;10%)
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#f59e0b]" />
            Moderate (7-10%)
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#94a3b8]" />
            Emerging / Lower (&lt;7%)
          </div>
        </div>
      {/* Interactive Map */}
      <div className="relative my-2 flex items-center justify-center">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 980,
            center: [82.5, 22.5],
          }}
          width={800}
          height={620}
          style={{ width: "100%", height: "auto" }}
        >
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const geoName =
                  geo.properties.ST_NM ||
                  geo.properties.name ||
                  geo.properties.st_nm ||
                  geo.id ||
                  "";
                const info = getStateInfo(geoName);

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setHoveredState(info)}
                    onMouseLeave={() => setHoveredState(null)}
                    style={{
                      default: {
                        fill: info.color,
                        stroke: "#ffffff",
                        strokeWidth: 0.75,
                        outline: "none",
                        transition: "all 200ms ease",
                      },
                      hover: {
                        fill:
                          info.tier === "High"
                            ? "#e04318"
                            : info.tier === "Moderate"
                            ? "#d97706"
                            : "#64748b",
                        stroke: "#ffffff",
                        strokeWidth: 1.5,
                        outline: "none",
                        cursor: "pointer",
                      },
                      pressed: {
                        fill: "#c23a18",
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ComposableMap>
      </div>
      </div>
</div>
    
    </div>
  );
}

function StatCard({ icon: Icon, value, label, subLabel }) {
  return (
    <div className="relative flex min-w-0 items-center gap-4 px-5 py-4 font-sans">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#ff5a2b] text-white">
        <Icon size={21} strokeWidth={2.2} />
      </div>

      <div>
        <div className="text-[20px] font-bold leading-none tracking-tight text-[#ff5a2b]">
          {value}
        </div>
        <div className="mt-1 text-sm font-semibold text-slate-900">{label}</div>
        {subLabel && (
          <div className="mt-0.5 text-[11px] text-slate-500">{subLabel}</div>
        )}
      </div>
    </div>
  );
}

function GrowthChart() {
  const width = 700;
  const height = 360;

  const left = 55;
  const right = 15;
  const top = 25;
  const bottom = 55;

  const chartWidth = width - left - right;
  const chartHeight = height - top - bottom;

  const maxValue = 10;

  const getX = (index) =>
    left + (index / (chartData.length - 1)) * chartWidth;

  const getY = (value) =>
    top + chartHeight - (value / maxValue) * chartHeight;

  const projectedPoints = chartData
    .map((item, index) => {
      if (!item.projected) return null;
      return `${getX(index)},${getY(item.value)}`;
    })
    .filter(Boolean)
    .join(" ");

  return (
    <div className="relative mt-5 w-full overflow-hidden">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Horizontal grid */}
        {[0, 2, 4, 6, 8, 10].map((value) => {
          const y = getY(value);
          return (
            <g key={value}>
              <line
                x1={left}
                x2={width - right}
                y1={y}
                y2={y}
                stroke="#E5E7EB"
                strokeDasharray="4 4"
              />
              <text
                x={left - 28}
                y={y + 4}
                textAnchor="end"
                fontSize="11"
                fill="#475569"
              >
                ${value.toFixed(1)}
              </text>
            </g>
          );
        })}

        {/* Y axis title */}
        <text
          x="28"
          y={height / 2.2}
          transform={`rotate(-90 15 ${height / 2})`}
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="#334155"
        >
          US$ Trillions
        </text>

        {/* Historical bars */}
        {chartData.map((item, index) => {
          if (item.projected) return null;

          const barWidth = 29;
          const x = getX(index) - barWidth / 2;
          const y = getY(item.value);
          const barHeight = top + chartHeight - y;

          return (
            <g key={item.year}>
              <rect
                x={x}
                y={y}
                width={barWidth}
                height={barHeight}
                rx="2"
                fill="url(#barGradient)"
              />
              {["2013", "2015", "2017", "2019", "2021", "2023", "2024"].includes(
                item.year
              ) ? (
                <text
                  x={getX(index)}
                  y={y - 7}
                  textAnchor="middle"
                  fontSize="11"
                  fontWeight="600"
                  fill="#0F172A"
                >
                  ${item.value.toFixed(2)}
                </text>
              ) : null}
            </g>
          );
        })}

        {/* Projection bars */}
        {chartData.map((item, index) => {
          if (!item.projected) return null;

          const barWidth = 29;
          const x = getX(index) - barWidth / 2;
          const y = getY(item.value);
          const barHeight = top + chartHeight - y;

          return (
            <rect
              key={item.year}
              x={x}
              y={y}
              width={barWidth}
              height={barHeight}
              rx="2"
              fill="url(#projectionGradient)"
              opacity="0.7"
            />
          );
        })}

        {/* Projection line */}
        <polyline
          points={projectedPoints}
          fill="none"
          stroke="#ff5b2a"
          strokeWidth="3"
          strokeDasharray="7 6"
        />

        {/* Projection dots */}
        {chartData.map((item, index) => {
          if (!item.projected) return null;
          return (
            <circle
              key={item.year}
              cx={getX(index)}
              cy={getY(item.value)}
              r="5"
              fill="#ff5b2a"
              stroke="white"
              strokeWidth="2"
            />
          );
        })}

        {/* Historical CAGR */}
        <g>
          <rect x="245" y="5" width="150" height="48" fill="#F3F4F6" />
          <text x="258" y="24" fontSize="10" fontWeight="600" fill="#6B7280">
            11 YEARS (2013–2024)
          </text>
          <text x="258" y="43" fontSize="17" fontWeight="700" fill="#ff5b2a">
            6.5% CAGR
          </text>
        </g>

        {/* Projected CAGR */}
        <g>
          <rect x="420" y="5" width="205" height="48" fill="#F3F4F6" />
          <text x="435" y="24" fontSize="10" fontWeight="600" fill="#6B7280">
            PROJECTED (2024–2029)
          </text>
          <text x="435" y="43" fontSize="17" fontWeight="700" fill="#ff5b2a">
            7.6% CAGR
          </text>
        </g>

        {/* Final value */}
        <text
          x={getX(chartData.length - 1.2)}
          y={getY(9.75) - 14}
          textAnchor="middle"
          fontSize="14"
          fontWeight="700"
          fill="#0F172A"
        >
          $9.75
        </text>

        {/* X labels */}
        {chartData.map((item, index) => (
          <text
            key={item.year}
            x={getX(index)}
            y={height - 18}
            textAnchor="middle"
            fontSize="10"
            fill="#475569"
          >
            {item.year}
          </text>
        ))}

        {/* Gradients */}
        <defs>
          <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff5a2b" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <linearGradient id="projectionGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff5a2b" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
        </defs>
      </svg>

      {/* Legend */}
      <div className="mt-1 flex items-center justify-center gap-6 text-xs text-slate-600">
        <div className="flex items-center gap-2">
          <span className="h-3 w-5 rounded-sm bg-[#ff5a2b]" />
          Historical
        </div>
        <div className="flex items-center gap-2">
          <span className="relative block h-3 w-6">
            <span className="absolute left-0 right-0 top-1/2 border-t-2 border-dashed border-orange-600" />
            <span className="absolute left-2 top-[2px] h-2 w-2 rounded-full bg-orange-600" />
          </span>
          Projection
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between px-2">
        <span className="text-[11px] text-slate-500">
          Source: Global Wellness Institute
        </span>
      </div>
    </div>
  );
}

export default function WellnessOpportunitySection() {
    

  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-10">
      <div className="overflow-hidden border border-slate-200 bg-white">
         
 <div className="">
              <IndiaInteractiveMap />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 p-7 sm:p-10 lg:p-12 xl:p-14 gap-12 border-t-1 border-slate-200 bg-gray-50">
                <div>
                       <div className="mb-5 flex items-center gap-2">
              <TrendingUp size={17} className="text-[#ff5a2b]" />
              <span className="text-xs font-bold uppercase tracking-[0.12em] text-[#ff5a2b]">
                Industry Growth
              </span>
            </div>

            <h2 className="max-w-[620px] text-3xl font-bold leading-[1.08] tracking-[-0.035em] text-[#10254A] sm:text-4xl">
              The Wellness Industry
              <br />
              Is Growing Exponentially
            </h2>

            <p className="mt-5 max-w-[650px] text-base leading-7 text-slate-600">
              The global wellness economy has grown to{" "}
              <strong className="font-semibold text-[#ff5a2b]">
                $6.76 trillion
              </strong>{" "}
              in 2024 and is projected to reach{" "}
              <strong className="font-semibold text-[#ff5a2b]">
                $9.75 trillion
              </strong>{" "}
              by 2029.
            </p>

            <div className="mt-8 overflow-hidden border border-dashed border-slate-200 bg-white shadow-sm">
              <div className="grid grid-cols-2 divide-x divide-dashed divide-slate-200 sm:grid-cols-2 sm:divide-x sm:divide-y lg:grid-cols-2">
                <StatCard
                  icon={TrendingUp}
                  value="$6.76T"
                  label="2024"
                  subLabel="Market Size"
                />
                <StatCard
                  icon={TrendingUp}
                  value="$9.75T"
                  label="2029"
                  subLabel="Projected Size"
                />
                <StatCard
                  icon={TrendingUp}
                  value="7.6%"
                  label="2024–2029"
                  subLabel="Projected CAGR"
                />
                <StatCard
                  icon={BarChart3}
                  value="6.5%"
                  label="2013–2024"
                  subLabel="Historical CAGR"
                />
              </div>
            </div>
                </div>
           <div className=" ">
         

            <GrowthChart />
          </div>
          </div>
      </div>
    </section>
  );
}