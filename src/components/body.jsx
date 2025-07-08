import { Button, Card, Image, } from "@chakra-ui/react"

function Body() {

  return (

    <div className="Containerbody">
       <div className="ButtonContainer">
                          <Button className="WedoHeader">Get to know us</Button>
                  </div>
      <Card.Root maxW="md" overflow="hidden" className="cardRoot">
        <Image className="containImg"
          src="img/vision1.webp"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="4">
          <Card.Title className="cardHeader">Mission Statement</Card.Title>
          <Card.Description className="cardtext">
            Our mission is to make buying a used phone feel as safe and satisfying
            as buying new — by offering tested devices, honest prices, fast support,
            and premium value for your money
          </Card.Description>
        </Card.Body>
      </Card.Root>


      <Card.Root maxW="md" overflow="hidden" className="cardRoot">
        <Image
          src="img/vision2.webp" className="containImg"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="4">
          <Card.Title className="cardHeader">Business Goal</Card.Title>
          <Card.Description className="cardtext">
            <ul>
              <li>•	To be our customers’ first choice for reliable UK used mobile phones</li>
              <li>•	To have 90% of our customers give a 100% satisfactory review and fewer than 5% encountering any device issue.</li>
              <li>•	To create zero distinction between UK used and newly acquired mobile devices for all our clients.</li>
            </ul>
          </Card.Description>
        </Card.Body>
      </Card.Root>

<Card.Root maxW="md" overflow="hidden" className="cardRoot">
        <Image
          src="img/goal1.jpg"
          className="containImg"
          alt="Green double couch with wooden legs"
        />
        <Card.Body gap="4">
          <Card.Title className="cardHeader">Our Target</Card.Title>
          <Card.Description className="cardtext">
            <ul>
              <li>•	Small business owners looking to venture into the mobile telecommunication industry</li>
              <li>•	Students and young professionals (need a quality phone for social life, school or work)</li>
              <li>•	Budget conscious customers (you want good quality phones with relatively low pricing)</li>
              <li>•	Parents who intend to buy mobile phone for their kids</li>
              <li>•	Everyone who has an idea of the need of a mobile phone to either chat or make calls.</li>
            </ul>
          </Card.Description>
        </Card.Body>
      </Card.Root>
    



    </div>




  )

}

export default Body