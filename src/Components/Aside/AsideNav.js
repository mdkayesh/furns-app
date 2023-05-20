import { logo } from "../images/img";
import { Link, NavLink } from "react-router-dom";
import { navData } from "../../Data/NavData";
import { HomeDrop, HospitalDrop, OfficeDrop } from "../Header/Dropdown";
import CloseBar from "../CloseBar";
import Overlay from "../Overlay";
import { UseAsideContext } from "../Context/AsideContext";

const AsideNav = () => {
  //  useContext for open asideNav
  const {
    asideNav,
    home,
    office,
    hospital,
    asideNavFunc,
    homeFunc,
    officeFunc,
    hospitalFunc,
  } = UseAsideContext();

  return (
    <aside className={asideNav ? "aside-nav open" : "aside-nav"}>
      <div className="inner-aside-nav">
        <div className="aside-nav-top">
          <div className="logo">
            <Link href="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <CloseBar dispatch={asideNavFunc} />
        </div>
        <div className="aside-menu">
          <nav>
            <ul>
              {navData.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.url}
                    onClick={
                      item.title.includes("home")
                        ? homeFunc
                        : item.title.includes("office")
                        ? officeFunc
                        : item.title.includes("hospital")
                        ? hospitalFunc
                        : asideNavFunc
                    }
                  >
                    {item.title}
                  </NavLink>
                  {item.drop ? (
                    item.title.includes("home") ? (
                      <HomeDrop open={home} />
                    ) : item.title.includes("office") ? (
                      <OfficeDrop open={office} />
                    ) : item.title.includes("hospital") ? (
                      <HospitalDrop open={hospital} />
                    ) : null
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      <Overlay state={asideNav} dispatch={asideNavFunc} />
    </aside>
  );
};

export default AsideNav;
