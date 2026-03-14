import { Download } from "lucide-react";
import brochure from "../assets/brochure/la-infra-redwood-brochure.pdf";

export default function BrochureDownloadButton() {
  return (
    <a
      href={brochure}
      download
      title="Download Brochure"
      className="
        fixed right-0 bottom-40 z-50
        bg-brand-700/90 backdrop-blur-md
        text-white
        px-3 py-4
        flex flex-col items-center gap-2
        shadow-xl
        opacity-60
        hover:opacity-100 hover:bg-brand-900
        transition-all duration-300
        rounded-l-[6px]
        group
      "
    >
      {/* Icon */}
      <Download size={18} />

      {/* Vertical Text */}
      <span
        style={{ writingMode: "vertical-rl" }}
        className="
          text-xs tracking-widest font-medium
          rotate-180
          transform transition-transform duration-300
          group-hover:scale-125
        "
      >
        Brochure
      </span>
    </a>
  );
}