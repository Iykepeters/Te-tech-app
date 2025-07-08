import { Button, Card, Image, Text } from "@chakra-ui/react"
function Product (props) {

 

    return (
        <div className="Product-View-Container">
            <div className="Product-View-Wrapper">
             <Card.Root className="Product-View-Card" width="320px">
                <Card.Title style={{textAlign:"center", fontWeight:"bold"}}>{props.item.name}</Card.Title>
                 <Image className="Product-Img"
                  src={props.item.image}
                  alt="Green double couch with wooden legs"
                  />
                <Card.Body gap="2">
                <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="0" textAlign="center">
                 < Button variant="solid">{props.item.action}</Button>
                 </Text>
                </Card.Body>
              </Card.Root>


          </div>
        </div>

    )
}

export default Product