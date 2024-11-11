import React from "react";
import { RefreshCcw } from "lucide-react";

interface ChallengeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="text-center">
      <div className="flex justify-center items-center mb-4">{icon}</div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

const TrafficConversionChallenge: React.FC = () => {
  return (
    <div className="bg-black text-white p-8 w-full">
      <h1 className="md:text-5xl text-3xl font-bold mb-4 text-center">
        You don't have a traffic problem...
        <br className="hidden md:block" />
        you're failing to convert that traffic
        <br />
        into leads.
      </h1>

      <p className="text-center text-gray-400 mb-12">
        The REAL challenge is turning clicks into conversions.
      </p>

      <div className="flex justify-center">
        <div
          className="grid grid-cols-1  md:grid-cols-3 gap-8"
          style={{ width: "60%" }}
        >
          <ChallengeCard
            icon={<span className="text-2xl">❓</span>} // Placeholder icon
            title="Lost in the Competition"
            description="In a sea of competitors, it's hard to make your brand stand out when everyone is fighting for attention."
          />
          <ChallengeCard
            icon={<span className="text-2xl">ಠ_ಠ</span>}
            title="Leads not Following"
            description="Struggling to turn site visitors into leads? Your strategies might be missing the mark with your target audience."
          />
          <ChallengeCard
            icon={<RefreshCcw size={24} />}
            title="Customer Conversion Challenges"
            description="Getting clicks is just the start. The real challenge lies in converting those clicks into loyal customers."
          />
        </div>
      </div>
    </div>
  );
};

export default TrafficConversionChallenge;
