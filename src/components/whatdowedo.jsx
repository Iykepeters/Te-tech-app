import { Box } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"

function ViewUs () {
    return (
        <Box className="Wedo">
            <div className="ButtonContainer">
                    <Button className="WedoHeader">Our Services</Button>
            </div>

            <div className="wedoDetails"> 
                 <img src="img\phoneimage1.webp"/>
                    <p> 1. We sell brand new mobile devices and accessories <br/> <br/>

                         2. We sell quality UK used mobile phones and accessories of all kinds.<br/> <br/>

                         3. We provide step by step guidance for intending mobile phone business owners
                         to set up profitably, also giving them leverage through our massive supply chain 
                         network.
                    </p>

            </div>

            
           
        </Box>
    )
}

export default ViewUs