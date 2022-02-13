import { menuItems } from "../../data/navigation";
import NavigationDesktop from "./navigation_desktop";
import NavigationMobile from "./navigation_mobile";


const Navigation = () => {

  return (
    <>
    <NavigationDesktop items={menuItems} />
    <NavigationMobile items={menuItems} />

    </>
  )

}

export default Navigation;