import { Box } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

function Choose () {


    return (
        <Box className="WhyChooseUs">
               <div className="ButtonContainer">
                    <Button className="WedoHeader">Why Choose Us</Button>
            </div>

                <div className="WhychooseusDetails" style={{display:"flex"}}>
                    <img src="img/phoneimage2nobg.png" style={{marginTop:"20px"}}/>

                    <p style={{color:"black", marginTop:"150px", marginLeft:" 40px",

                    }}>
                        At te-tech communications, we believe buying a used phone should never feel like a gamble. That’s why we go the extra mile to make sure every device is tested, every price is fair, and every customer gets the support they deserve
                         plus a 3-month warranty for peace of mind. With thousands of happy customers and top-rated reviews, we’re proud to be the people’s trusted choice for reliable used phones."
                    </p>

                   

                </div>

                 
                
            
                     <br/>
                    <br/>
        </Box>
    )
}

export default Choose