// Import React
import React from "react";
import styled from 'react-emotion';

// Import Spectacle Core tags
import {
  BlockQuote,
  Code,
  Cite,
  Deck,
  Fill,
  Fit,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane
} from "spectacle";


// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

import './assets/cobalt2.prism.css'
import preloader from "spectacle/lib/utils/preloader";

const images = {
  customElement: require('../assets/custom_element.jpg'),
  htmlTemplates: require('../assets/html_templates.jpg'),
  shadowDom: require('../assets/shadow_dom.jpg'),
}

preloader(images);

const theme = createTheme({
  primary: "#ffc600",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "white"
}, {
  primary: {
    name: "Roboto Condensed",
    googleFont: true
  },
  secondary: "Helvetica"
});

theme.screen.global['.spectacle-content'] = {
  maxHeight: "unset"
}

const CustomList = styled(List)`
  line-height: 1.2;
`;

const StyledListItem = styled(ListItem)`
  margin-bottom: 0.6em;
  list-style-position: initial;
`;

const HeadingStyled = styled(Heading)`
  margin-bottom: 0.4em;
`
const CodeStyled = styled(Code)`
  font-size: inherit;
`;
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Web Components
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <HeadingStyled size={1} textColor="secondary">What Web Components mean? 🤷🏻‍♂️</HeadingStyled>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <HeadingStyled size={4} textColor="primary">Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps.</HeadingStyled>
        </Slide>

        <Slide transition={["fade"]} bgColor="primary">
          <HeadingStyled size={4} textColor="secondary">Specifications</HeadingStyled>
          <CustomList>
            <StyledListItem>Custom Element</StyledListItem>
            <StyledListItem>HTML template</StyledListItem>
            <StyledListItem>Shadow DOM</StyledListItem>
          </CustomList>
        </Slide>

        <Slide>
          <HeadingStyled size={2}>Custom Element</HeadingStyled>
          <Text>The Custom Elements specification lays the foundation for designing and using new types of DOM elements.</Text>
          <CodePane lang="js" source={require('raw-loader!./assets/custom_element')} textSize="22" theme="external" contentEditable />
        </Slide>

        <Slide>
          <HeadingStyled size={2}>HTML template</HeadingStyled>
          <Text>The HTML template element specification defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime.</Text>
          <CodePane lang="js" source={require('raw-loader!./assets/html_template')} textSize="22" theme="external" contentEditable />
        </Slide>

        <Slide>
          <HeadingStyled size={2}>Shadow DOM</HeadingStyled>
          <Text>The shadow DOM specification defines how to use encapsulated style and markup in web components.</Text>
          <CodePane lang="js" source={require('raw-loader!./assets/shadow_dom')} textSize="22" theme="external" contentEditable />
        </Slide>

        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Browsers support Custom Element</HeadingStyled>
          <Image src={images.customElement} />
        </Slide>
        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Browsers support HTML Templates</HeadingStyled>
          <Image src={images.htmlTemplates} />
        </Slide>
        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Browsers support Shadow DOM</HeadingStyled>
          <Image src={images.shadowDom} />
        </Slide>

        {/* Issues */}
        {/* Libraries */}
        {/* Polymer Lit HTML and Lit Element */}

        </Deck>
    );
  }
}
