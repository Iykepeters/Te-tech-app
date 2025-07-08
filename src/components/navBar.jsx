import { Input } from "@chakra-ui/react"

const Nav = ({isOpen, toggleSidebar}) => {
return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>✕</button>

        <ul className="sidebar-links">
        <li>Huawei
          {/* 
            <div className="dropdown-content">
                    <a href="#">Nova 13i</a>
                    <a href="#">Nova 14pro</a>
                    <a href="#">Nova y63</a>
                     <a href="#">See more</a>
            </div>*/}
        </li>

           <li>Oppo
            {/* 
            <div className="dropdown-content">
                    <a href="#">Nova 13i</a>
                    <a href="#">Nova 14pro</a>
                    <a href="#">Nova y63</a>
                     <a href="#">See more</a>
            </div>*/}
        </li>

        <li>Gionee 
           {/* 
            <div className="dropdown-content">
                    <a href="#">Nova 13i</a>
                    <a href="#">Nova 14pro</a>
                    <a href="#">Nova y63</a>
                     <a href="#">See more</a>
            </div>*/}
        </li>

        <li>Samsung
           {/* 
            <div className="dropdown-content">
                    <a href="#">Nova 13i</a>
                    <a href="#">Nova 14pro</a>
                    <a href="#">Nova y63</a>
                     <a href="#">See more</a>
            </div>*/}
        </li>

        <li>Iphone
            {/* 
            <div className="dropdown-content">
                    <a href="#">Nova 13i</a>
                    <a href="#">Nova 14pro</a>
                    <a href="#">Nova y63</a>
                     <a href="#">See more</a>
            </div>*/}
        </li>

        <li>Tecno
           {/* 
            <div className="dropdown-content">
                    <a href="#">Nova 13i</a>
                    <a href="#">Nova 14pro</a>
                    <a href="#">Nova y63</a>
                     <a href="#">See more</a>
            </div>*/}
        </li>

        <li>Xiaomi
            {/* 
            <div className="dropdown-content">
                    <a href="#">Nova 13i</a>
                    <a href="#">Nova 14pro</a>
                    <a href="#">Nova y63</a>
                     <a href="#">See more</a>
            </div>*/}
        </li>

        <li>Infinix
            {/* 
            <div className="dropdown-content">
                    <a href="#">Nova 13i</a>
                    <a href="#">Nova 14pro</a>
                    <a href="#">Nova y63</a>
                     <a href="#">See more</a>
            </div>*/}
        </li>
            
        </ul>

    </div>

  
)
}

export default Nav