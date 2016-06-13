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
  image(src, { border = false, width = "100%" } = {}) {
    if (border) {
      return (
        <Image src={src} width={width} style={{border: "8px solid black"}} />
      );
    } else {
      return (
        <Image src={src} width={width} />
      );
    }
  }

  intermezzo(title) {
    return (
      <Slide bgColor="tertiary">
        <Heading size={3} textColor="primary">{title}</Heading>
      </Slide>
    );
  }

  ytEmbed(src) {
    return (
      <iframe width="800" height="600" src={src} frameBorder="0" allowFullScreen></iframe>
    );
  }

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
            {this.image(images.lance)}
          </Slide>

          <Slide>
            {this.image(images.roy, { border: true })}
          </Slide>

          <Slide>
            {this.image(images.terminator)}
          </Slide>

          <Slide>
            {this.image(images.agentSmith, { border: true })}
          </Slide>

          <Slide>
            {this.image(images.hal)}
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

          {this.intermezzo("Image Processing")}

          <Slide>
            {this.image(images.ocr, { width: "90%" })}
          </Slide>

          <Slide>
            {this.image(images.fbTag, { width: "90%" })}
          </Slide>

          <Slide>
            {this.image(images.googleCar, { width: "90%" })}
          </Slide>

          {this.intermezzo("Text Processing")}

          <Slide>
            {this.image(images.spamAssassin, { border: true, width: "auto" })}
          </Slide>

          <Slide>
            {this.image(images.sentiment, { border: true })}
          </Slide>

          <Slide>
            {this.image(images.infoExtraction, { border: true })}
          </Slide>

          {this.intermezzo("Games & Robotics")}

          <Slide tranition={["fade"]}>
            {this.image(images.alphaGo, { border: true, width: "90%" })}
          </Slide>

          <Slide transition={["fade"]}>
            {this.ytEmbed("https://www.youtube.com/embed/V1eYniJ0Rnk?start=18")}
          </Slide>

          <Slide transition={["fade"]}>
            {this.ytEmbed("https://www.youtube.com/embed/qv6UVOQ0F44")}
          </Slide>

          <Slide transition={["fade"]}>
            {this.ytEmbed("https://www.youtube.com/embed/pgaEE27nsQw?start=55")}
          </Slide>

          <Slide bgImage={images.cat} align="flex-end flex-end">
            <Heading size={2} caps>Hoo Lee Fuk</Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
