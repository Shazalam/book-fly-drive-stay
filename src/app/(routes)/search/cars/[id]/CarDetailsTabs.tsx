"use client";
import React, { useState } from "react";

const CarDetailsTabs = ({ onTabClick }: { onTabClick: (tab: any) => void }) => {
  const [activeTab, setActiveTab] = useState("Overview");
  const tabs = ["Overview", "Location", "Policies", "Extras"];

  return (
    <div className="flex flex-wrap justify-center md:justify-start gap-4 border-b pb-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            onTabClick(tab);
          }}
          className={`pb-2 text-sm md:text-base font-medium transition-colors ${
            activeTab === tab ? "border-b-2 border-orange-500 text-orange-500" : "text-gray-600 hover:text-orange-500"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default CarDetailsTabs;
