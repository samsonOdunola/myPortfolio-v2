import { BsFillSunFill, BsFillPersonFill, BsFillBriefcaseFill, BsFillPhoneFill } from "react-icons/bs";
import { ImHome2 } from "react-icons/im";
const NavBtns = () => {
    return <ul className="side-btns" >
        <li className="color-mode"><BsFillSunFill /></li>
        <li>
            <li><ImHome2 /></li>
            <li><BsFillPersonFill /></li>
            <li><BsFillBriefcaseFill /></li>
            <li><BsFillPhoneFill /></li>
        </li>


    </ul>

}
export default NavBtns