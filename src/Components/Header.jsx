import { Keyboard, BookOpen, Gamepad2 } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navLinkClass = ({ isActive }) =>
  `flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs sm:text-sm transition-colors ${
    isActive ? 'text-accent bg-bgSub' : 'text-sub hover:text-text'
  }`;

const Header = () => {
  return (
    <div className="w-full max-w-3xl flex items-center justify-between gap-2 mb-10">
      <NavLink
        to="/"
        className="flex items-center gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        <Keyboard size={22} className="text-accent" />
        <span className="text-sm md:text-lg font-semibold tracking-tight">
          Moji<span className="text-accent">Master</span>{' '}
          <span className="text-xs sm:text-lg">
            (もじ
            <span className="text-accent"> マスタ)</span>
          </span>
        </span>
      </NavLink>
      <nav
        className="flex items-center gap-1"
        onClick={(e) => e.stopPropagation()}
      >
        <NavLink to="/" end className={navLinkClass}>
          <Keyboard size={15} />
          Typing
        </NavLink>
        <NavLink to="/vocabulary" className={navLinkClass}>
          <BookOpen size={15} />
          Vocabulary
        </NavLink>
        <NavLink to="/vocabulary/game" className={navLinkClass}>
          <Gamepad2 size={15} />
          Game
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
