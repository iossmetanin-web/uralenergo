"use client";

import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export function Panel({
  children,
  className = "",
  dark = false,
  hover = false,
  padding = "md",
}: PanelProps) {
  const paddingClasses = {
    none: "",
    sm: "p-3",
    md: "p-4 lg:p-6",
    lg: "p-6 lg:p-8",
  };

  return (
    <div
      className={`
        border border-ue-grid relative
        ${dark ? "bg-ue-text text-ue-bg" : "bg-white"}
        ${hover ? "panel-hover" : ""}
        ${paddingClasses[padding]}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

interface PanelHeaderProps {
  title: string;
  subtitle?: string;
  coord?: string;
  status?: "active" | "warning" | "error";
  className?: string;
}

export function PanelHeader({
  title,
  subtitle,
  coord,
  status,
  className = "",
}: PanelHeaderProps) {
  return (
    <div
      className={`flex items-start justify-between mb-4 pb-3 border-b border-ue-grid ${className}`}
    >
      <div>
        <h3 className="font-heading font-semibold text-lg">{title}</h3>
        {subtitle && (
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {coord && <span className="coord-label">{coord}</span>}
        {status && <span className={`status-dot ${status}`} />}
      </div>
    </div>
  );
}

interface DataDisplayProps {
  label: string;
  value: string | number;
  unit?: string;
  className?: string;
}

export function DataDisplay({ label, value, unit, className = "" }: DataDisplayProps) {
  return (
    <div className={className}>
      <div className="coord-label mb-1">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="data-value">{value}</span>
        {unit && <span className="data-unit">{unit}</span>}
      </div>
    </div>
  );
}

interface DividerProps {
  label?: string;
  className?: string;
}

export function Divider({ label, className = "" }: DividerProps) {
  if (label) {
    return <div className={`divider-label ${className}`}>{label}</div>;
  }
  return <div className={`h-px bg-ue-grid ${className}`} />;
}

interface CoordinateLabelProps {
  text: string;
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

export function CoordinateLabel({
  text,
  position = "top-left",
  className = "",
}: CoordinateLabelProps) {
  const positionClasses = {
    "top-left": "top-2 left-2",
    "top-right": "top-2 right-2",
    "bottom-left": "bottom-2 left-2",
    "bottom-right": "bottom-2 right-2",
  };

  return (
    <span
      className={`absolute coord-label ${positionClasses[position]} ${className}`}
    >
      {text}
    </span>
  );
}

interface StatusBadgeProps {
  status: "online" | "offline" | "warning" | "error";
  label?: string;
  className?: string;
}

export function StatusBadge({ status, label, className = "" }: StatusBadgeProps) {
  const statusConfig = {
    online: { dot: "active", text: "В сети" },
    offline: { dot: "error", text: "Недоступно" },
    warning: { dot: "warning", text: "Внимание" },
    error: { dot: "error", text: "Ошибка" },
  };

  const config = statusConfig[status];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`status-dot ${config.dot}`} />
      {label && <span className="text-xs">{label}</span>}
      {!label && <span className="text-xs">{config.text}</span>}
    </div>
  );
}

interface GridOverlayProps {
  dense?: boolean;
  className?: string;
}

export function GridOverlay({ dense = false, className = "" }: GridOverlayProps) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none opacity-30 ${
        dense ? "grid-bg-dense" : "grid-bg"
      } ${className}`}
    />
  );
}

interface ScanLineProps {
  className?: string;
}

export function ScanLine({ className = "" }: ScanLineProps) {
  return <div className={`scan-line ${className}`} />;
}

interface SectionLabelProps {
  text: string;
  className?: string;
}

export function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-4 mb-6 ${className}`}>
      <div className="w-8 h-8 bg-ue-accent flex items-center justify-center">
        <span className="text-white font-mono text-xs font-bold">§</span>
      </div>
      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {text}
      </span>
    </div>
  );
}
