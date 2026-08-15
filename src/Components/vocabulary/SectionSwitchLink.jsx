import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SectionSwitchLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="
        inline-flex items-center gap-2
        px-4 py-2
        text-sm font-medium
        text-sub
        border border-sub/30
        rounded-lg
        bg-transparent
        transition-all duration-200
        hover:bg-accent
        hover:text-white
        hover:border-accent
        hover:shadow-md
        hover:-translate-y-0.5
        mb-6
      "
    >
      {label}
      <ArrowRight
        size={15}
        className="transition-transform duration-200 group-hover:translate-x-1"
      />
    </Link>
  );
};

export default SectionSwitchLink;
