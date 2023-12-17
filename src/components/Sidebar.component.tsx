import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import GlobalVars from "globals/global.variables";

interface Props {}

interface NavigationComponentProps {
  children?: ReactNode[] | ReactNode;
  className?: string;
  to: string;
}

function NavLink({ children, className, to }: NavigationComponentProps): ReactNode {
  const location = useLocation();
  return (
    <Link
      to={to}
      className={
        "w-full text-primary text-h2 font-dm py-1.5 pl-5 capitalize border-y-2 border-r-2 border-secondary duration-300 rounded-r-lg " +
        "hover:opacity-80 hover:border-primary hover:text-accent-2" +
        (location.pathname === to ? " bg-teritary opacity-40 " : " ") +
        (className ?? "")
      }
    >
      {children}
    </Link>
  );
}

function Sidebar(props: Props): ReactNode {
  return (
    <div className="h-screen w-1/4 max-w-xs bg-secondary flex flex-col">
      {/* welcome text */}
      <div className="py-8 pl-5 w-full">
        <h1 className="font-dm text-h1">Welcome {GlobalVars.user.name},</h1>
      </div>

      {/* navigation menu */}
      {/* prettier-ignore */}
      <nav className="w-full py-2.5 pr-2.5 flex flex-col">
        <NavLink to={GlobalVars.routes.pages.home}>home</NavLink>
        <NavLink to={GlobalVars.routes.pages.liveSessions}>live sessions</NavLink>
        <NavLink to={GlobalVars.routes.pages.recordedSessions}>recorded sessions</NavLink>
        <NavLink to={GlobalVars.routes.pages.mockTest}>test results</NavLink>
        <NavLink to={GlobalVars.routes.pages.learningMaterial}>Reading Material</NavLink>
        <NavLink to={GlobalVars.routes.pages.questionPapers}>previous years NIMCET question papers</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
