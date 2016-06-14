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
  Table,
  TableHeaderItem,
  TableItem,
  TableRow,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

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
  tasks: require("../assets/tasks.png"),
  fbTag: require("../assets/fb-tag.jpg"),
  googleCar: require("../assets/google-car.jpg"),
  spamAssassin: require("../assets/spam-assassin.jpg"),
  sentiment: require("../assets/sentiment.jpg"),
  infoExtraction: require("../assets/info-extraction.jpg"),
  alphaGo: require("../assets/alphago.jpg"),
  cat: require("../assets/cat.jpg"),
  linear: require("../assets/linear.png"),
  linear2: require("../assets/linear2.png"),
  logistic: require("../assets/logistic.png"),
  logistic2: require("../assets/logistic2.png"),
  overfitting: require("../assets/overfitting.png"),
  underfitting: require("../assets/underfitting.png"),
  neurons: require("../assets/neurons.jpg"),
  neuralNetwork: require("../assets/neural-network.png"),
  sigmoid: require("../assets/sigmoid.png"),
  deepNN: require("../assets/deep-nn.png"),
  orNN: require("../assets/or-nn.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#ff4081"
}, {
  primary: "Futura"
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
        <Heading size={4} caps textColor="primary">{title}</Heading>
      </Slide>
    );
  }

  videoEmbed(src) {
    return (
      <iframe width="800" height="600" src={src} frameBorder="0" allowFullScreen></iframe>
    );
  }

  whiteSpan(text) {
    return (
      <S type="" style={{color: "white"}}>
        {text}
      </S>
    );
  }

  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade", "spin"]} transitionDuration={500}>
          <Slide>
            <Heading size={1} fit caps lineHeight={1.2}>
              [ 2001: A Space Odissey ]
            </Heading>
            <Heading size={1} fit caps lineHeight={1.2}>
              [ Blade Runner ] [ The Matrix ]
            </Heading>
            <Heading size={1} fit caps lineHeight={1.3}>
              [ Her ] [ And ] [ <S type="bold" style={{color: "black"}}>You</S> ]
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
            <Heading fit>artificial intelligence</Heading>
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
            {this.image(images.tasks, { width: "60%" })}
          </Slide>

          <Slide>
            {this.image(images.fbTag)}
          </Slide>

          <Slide>
            {this.image(images.googleCar)}
          </Slide>

          {this.intermezzo("Language Processing")}

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
            {this.videoEmbed("https://www.youtube.com/embed/V1eYniJ0Rnk?start=18")}
          </Slide>

          <Slide transition={["fade"]}>
            {this.videoEmbed("https://www.youtube.com/embed/qv6UVOQ0F44")}
          </Slide>

          <Slide transition={["fade"]}>
            {this.videoEmbed("https://www.youtube.com/embed/pgaEE27nsQw?start=55")}
          </Slide>

          <Slide transition={["fade"]}>
            {this.videoEmbed("https://www.youtube.com/embed/xOCurBYI_gY?start=913")}
          </Slide>

          <Slide bgImage={images.cat} align="flex-end flex-end">
            <Heading size={2} caps>Hoo Lee Fuk</Heading>
          </Slide>

          <Slide>
            <Heading fit caps>So how does it work?</Heading>
          </Slide>

          <Slide bgColor="black">
            <Heading fit>A more formal definition of Machine Learning</Heading>

            <BlockQuote>
              <Quote textSize="3rem">A computer program is said to learn to perform a task T from experience E, if its performance at task T, as measured by a performance metric P, improves with experience E over time.</Quote>
              <Cite>Tom Mitchell</Cite>
            </BlockQuote>
          </Slide>

          <Slide bgColor="black">
            <Heading fit>A less formal definition of Machine Learning</Heading>

            <BlockQuote>
              <Quote textSize="2.9rem">A computer program is said to learn to perform a {this.whiteSpan("task")} when its performance can be measured by a {this.whiteSpan("metric")} which improves with {this.whiteSpan("experience")}.</Quote>
              <Cite>me</Cite>
            </BlockQuote>
          </Slide>

          <Slide textColor="white">
            <Table>
              <tbody>
                <TableRow>
                  <TableItem>Task</TableItem>
                  <TableItem>Playing Chess</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Experience</TableItem>
                  <TableItem>Look at matches</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Metric</TableItem>
                  <TableItem>Win Percentage</TableItem>
                </TableRow>
              </tbody>
            </Table>
          </Slide>

          <Slide textColor="white">
            <Table>
              <tbody>
                <TableRow>
                  <TableItem>Task</TableItem>
                  <TableItem>Recognize Obama's face</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Experience</TableItem>
                  <TableItem>Look at pictures of Obama</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Metric</TableItem>
                  <TableItem>Recognition accuracy</TableItem>
                </TableRow>
              </tbody>
            </Table>
          </Slide>

          <Slide textColor="white">
            <Table>
              <tbody>
                <TableRow>
                  <TableItem>Task</TableItem>
                  <TableItem>Malignant cancer prediction</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Experience</TableItem>
                  <TableItem>Look at historical data</TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>Metric</TableItem>
                  <TableItem>Prediction accuracy</TableItem>
                </TableRow>
              </tbody>
            </Table>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.city} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Training Set
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Features
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Test Set
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["zoom", "fade"]} bgColor="primary">
            <Heading caps fit>The Two Types</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Supervised
                </Heading>
                <Appear>
                  <List margin={10} textColor="white">
                    <ListItem>Linear Regression</ListItem>
                    <ListItem>Logistic Regression</ListItem>
                    <ListItem>Neural Networks</ListItem>
                  </List>
                </Appear>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Unsupervised
                </Heading>
                <Appear>
                  <List margin={10} textColor="white">
                    <ListItem>Clustering</ListItem>
                    <ListItem>Anomaly Detection</ListItem>
                    <ListItem>Dimension Reduction</ListItem>
                  </List>
                </Appear>
              </Fill>
            </Layout>
          </Slide>

          {this.intermezzo('Linear regression')}

          <Slide>
            {this.image(images.linear, { width: "80%"})}
          </Slide>

          <Slide>
            {this.image(images.linear2, { width: "80%"})}
          </Slide>

          {this.intermezzo('Logistic regression')}

          <Slide>
            {this.image(images.logistic, { width: "80%"})}
          </Slide>

          <Slide>
            {this.image(images.logistic2, { width: "80%"})}
          </Slide>

          {this.intermezzo('Overfitting')}

          <Slide>
            {this.image(images.overfitting, { width: "80%"})}
          </Slide>

          {this.intermezzo('Underfitting')}

          <Slide>
            {this.image(images.underfitting, { width: "80%"})}
          </Slide>

          {this.intermezzo('Neural Networks')}

          <Slide>
            {this.image(images.neurons)}
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            {this.image(images.neuralNetwork)}
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            {this.image(images.sigmoid)}
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            {this.image(images.orNN)}
          </Slide>

          <Slide transition={["slide"]} bgColor="white">
            {this.image(images.deepNN)}
          </Slide>

          <Slide transition={["fade"]}>
            {this.videoEmbed("https://www.youtube.com/embed/FwFduRA_L6Q?start=29")}
          </Slide>

          <Slide transition={["fade"]}>
            {this.videoEmbed("https://player.vimeo.com/video/169187915")}
          </Slide>

          {this.intermezzo("Demo time!")}

          <Slide bgColor="black" textColor="primary">
            <Heading fit>Thanks! Questions?</Heading>

            <List>
              <ListItem>arkham.github.io/ml-talk</ListItem>
              <ListItem>Ju Liu @arkh4m</ListItem>
              <ListItem>AlphaSights</ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
