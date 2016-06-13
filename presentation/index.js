// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  city: require("../assets/city.jpg"),
  markdown: require("../assets/markdown.png"),

  lance: require("../assets/lance-bishop.jpg"),
  hal: require("../assets/hal.png"),
  roy: require("../assets/roy.jpg"),
  terminator: require("../assets/terminator.jpg"),
  agentSmith: require("../assets/agent-smith.jpg"),
  ocr: require("../assets/ocr.jpg"),
  fbTag: require("../assets/fb-tag.jpg"),
  googleCar: require("../assets/google-car.jpg"),
  spamAssassin: require("../assets/spam-assassin.jpg"),
  sentiment: require("../assets/sentiment.jpg"),
  infoExtraction: require("../assets/info-extraction.jpg"),
  alphaGo: require("../assets/alphago.jpg"),
  cat: require("../assets/cat.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "spin"]} transitionDuration={500}>
          <Slide>
            <Heading textFont="Futura" size={1} fit caps lineHeight={1.2}>
              [ 2001: A Space Odissey ]
            </Heading>
            <Heading textFont="Futura" size={1} fit caps lineHeight={1.2}>
              [ Blade Runner ] [ The Matrix ]
            </Heading>
            <Heading textFont="Futura" size={1} fit caps lineHeight={1.3}>
              [ And ] [ Now ] [ <S type="bold" style={{color: "black"}}>You</S> ]
            </Heading>
          </Slide>

          <Slide>
            <Image src={images.lance} width="100%"/>
          </Slide>

          <Slide>
            <Image src={images.roy} style={{border: "10px solid black"}} width="100%"/>
          </Slide>

          <Slide>
            <Image src={images.terminator} width="100%"/>
          </Slide>

          <Slide>
            <Image src={images.agentSmith} style={{border: "10px solid black"}} width="100%"/>
          </Slide>

          <Slide>
            <Image src={images.hal} width="100%"/>
          </Slide>

          <Slide bgColor="black">
            <Heading>artificial intelligence</Heading>
            <Text italic textColor="white">noun</Text>
            <BlockQuote>
              <Quote textSize="3rem">the theory and development of computer systems able to perform tasks normally requiring human intelligence, such as visual perception, speech recognition, decision-making, and translation between languages.</Quote>
            </BlockQuote>
          </Slide>

          <Slide bgColor="black">
            <Heading>machine learning</Heading>
            <Text italic textColor="white">noun</Text>
            <BlockQuote>
              <Quote textSize="3rem">a field of computer science which gives computers the ability to learn from data without being explicitly programmed.</Quote>
            </BlockQuote>
          </Slide>

          <Slide>
            <Heading fit caps>Machine Learning</Heading>
            <Heading fit caps textColor="black">In The Wild!</Heading>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={3} textColor="primary">Image Processing</Heading>
          </Slide>

          <Slide>
            <Image src={images.ocr} width="90%" />
          </Slide>

          <Slide>
            <Image src={images.fbTag} width="90%" />
          </Slide>

          <Slide>
            <Image src={images.googleCar} width="90%" />
          </Slide>

          <Slide bgColor="tertiary">
            <Heading size={3} textColor="primary">Text Processing</Heading>
          </Slide>

          <Slide>
            <Image src={images.spamAssassin} style={{border: "10px solid black"}} />
          </Slide>

          <Slide>
            <Image src={images.sentiment} style={{border: "10px solid black"}} width="100%"/>
          </Slide>

          <Slide>
            <Image src={images.infoExtraction} style={{border: "10px solid black"}} width="100%"/>
          </Slide>

          <Slide bgColor="tertiary">
            <Heading textColor="primary" size={3}>Games & Robotics</Heading>
          </Slide>

          <Slide tranition={["fade"]}>
            <Image src={images.alphaGo} style={{border: "10px solid black"}} width="90%" />
          </Slide>

          <Slide transition={["fade"]}>
            <iframe width="800" height="600" src="https://www.youtube.com/embed/V1eYniJ0Rnk?start=18" frameborder="0" allowfullscreen></iframe>
          </Slide>

          <Slide transition={["fade"]}>
            <iframe width="800" height="600" src="https://www.youtube.com/embed/qv6UVOQ0F44" frameborder="0" allowfullscreen></iframe>
          </Slide>

          <Slide transition={["fade"]}>
            <iframe width="800" height="600" src="https://www.youtube.com/embed/pgaEE27nsQw?start=55" frameborder="0" allowfullscreen></iframe>
          </Slide>

          <Slide bgImage={images.cat} align="flex-end flex-end">
            <Heading style={{textShadow: "0 0 2px black"}}>Hoo Lee Fuk</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
