import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex gap-4">
        <NavLink to="/about">Про мене</NavLink>
        <NavLink to="/my-city">Моє місто</NavLink>
        <NavLink to="/my-future">Майбутнє</NavLink>
      </nav>
    </header>
  );
}
