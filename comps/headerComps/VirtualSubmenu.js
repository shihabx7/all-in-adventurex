import Link from "next/link"
import { ImPlay3 } from "react-icons/im";
import { getVirtualGameSlug } from "../../pages/api/VirtualGames/getVirtualGameSlug";
const VirtualSubmenu=()=>{

  

    return(
        <>
                                     
                                             <a href="/virtual-games/virtual-escape-rooms-madness" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Madness</span>
                                             </a>
                                    
                                   
                                             <a href="/virtual-games/virtual-escape-rooms-zombie-apocalypse" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Zombie Apocalypse</span>
                                             </a>
                                    
                                    
                                             <a href="/virtual-games/virtual-escape-rooms-bomb" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Bomb</span>
                                             </a>
                                    
                               
                                             <a href="/virtual-games/virtual-escape-rooms-prison" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Prison</span>
                                             </a>
                                   
                                 
                                             <a href="/virtual-games/virtual-escape-rooms-aztec" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Aztec</span>
                                             </a>
                                    
                                
                                             <a href="/virtual-games/virtual-escape-rooms-japan" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Japan</span>
                                             </a>
                                
                                    
                                             <a href="/virtual-games/virtual-game-show-room" className="flex items-center space-x-1 my-1">
                                                <span className="text-gold"><ImPlay3/></span><span className="sub-link-txt-sub">Virtual Game Show Room</span>
                                             </a>
                                    
        </>
    )
}

export default VirtualSubmenu