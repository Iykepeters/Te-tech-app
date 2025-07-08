import { Button } from "@chakra-ui/react"

function Banner() {

    return (
        <div className="VideoBG">
            
            <video className='videoTag' autoPlay loop muted>
            <source src="/img/S25Ultra-BuyPage-SamsungComOnly-ColorGroup-800x600.mp4" type='video/mp4' />
            </video>
                    <div className="Btext">
                        <h3> NWACHIEF TE-TECH COMMUNICATIONS</h3>
                            <p> Your best choice for quality london used mobile
                                phones and accessories
                            </p>
                                    <div className="navbtncontainer">
                                    <button className="navBtn">Learn More</button>
                                    </div>
                    </div>


        </div>
    )

}
export default Banner