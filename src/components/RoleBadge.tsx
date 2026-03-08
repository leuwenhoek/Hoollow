"use client";

import React from "react";

interface RoleBadgeProps {
    role: string;
    className?: string;
}

const roleConfig: Record<string, { label: string; bg: string; text: string }> = {
    builder: {
        label: "Student Builder",
        bg: "bg-blue-500/10",
        text: "text-blue-400",
    },
    founder: {
        label: "Early Founder",
        bg: "bg-premium-soft",
        text: "text-premium",
    },
    investor: {
        label: "Investor",
        bg: "bg-green-500/10",
        text: "text-green-400",
    },
};

export default function RoleBadge({ role, className = "" }: RoleBadgeProps) {
    const config = roleConfig[role] || roleConfig.builder;

    return (
        <span
            className={`inline-flex items-center px-3 py-1 rounded-pill text-label font-semibold uppercase tracking-wider ${config.bg} ${config.text} ${className}`}
        >
            {config.label}
        </span>
    );
}
