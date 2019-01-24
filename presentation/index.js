// Import React
import React from "react";
import styled from "react-emotion";

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

import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import "./assets/cobalt2.prism.css";

// Require CSS
require("normalize.css");

const images = {
  customElement: require("../assets/custom_element.jpg"),
  htmlTemplates: require("../assets/html_templates.jpg"),
  shadowDom: require("../assets/shadow_dom.jpg"),
  shadowTree: require("../assets/shadow_tree.jpg")
};

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

theme.screen.global[".spectacle-content"] = {
  maxHeight: "unset"
};

const CustomList = styled(List) `
  line-height: 1.2;
`;

const StyledListItem = styled(ListItem) `
  margin-bottom: 0.6em;
  list-style-position: initial;
`;

const HeadingStyled = styled(Heading) `
  margin-bottom: 0.4em;
`;
const CodeStyled = styled(Code) `
  font-size: inherit;
`;
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>

        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Web Components 🚀
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="tertiary">
          <HeadingStyled size={1} textColor="secondary">What Web Components mean? 🤷🏻‍♂️</HeadingStyled>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <HeadingStyled size={4} textColor="primary">Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags (UI elements) to use in web pages and web apps.</HeadingStyled>
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
          { /* eslint-disable-next-line import/no-unresolved */ }
          <CodePane lang="html" source={require("raw-loader!./assets/custom_element")} textSize="22" theme="external" contentEditable />
        </Slide>

        <Slide>
          <HeadingStyled size={2}>Shadow DOM</HeadingStyled>
          <Text>The shadow DOM specification defines how to use encapsulated style and markup in web components.</Text>
          { /* eslint-disable-next-line import/no-unresolved */ }
          <CodePane lang="html" source={require("raw-loader!./assets/shadow_dom")} textSize="22" theme="external" contentEditable />
        </Slide>

        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Shadow DOM</HeadingStyled>
          <Image src={images.shadowTree} />
        </Slide>

        <Slide>
          <HeadingStyled size={2}>HTML template</HeadingStyled>
          <Text>The HTML template element specification defines how to declare fragments of markup that go unused at page load, but can be instantiated later on at runtime.</Text>
          { /* eslint-disable-next-line import/no-unresolved */ }
          <CodePane lang="html" source={require("raw-loader!./assets/html_template")} textSize="22" theme="external" contentEditable />
        </Slide>

        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Browsers support - Custom Element</HeadingStyled>
          <Image src={images.customElement} />
        </Slide>
        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Browsers support - HTML Templates</HeadingStyled>
          <Image src={images.htmlTemplates} />
        </Slide>
        <Slide bgColor="tertiary">
          <HeadingStyled size={2}>Browsers support - Shadow DOM</HeadingStyled>
          <Image src={images.shadowDom} />
        </Slide>

        <Slide>
          <HeadingStyled size={2}>Pros</HeadingStyled>
          <CustomList>
            <StyledListItem>Web Standard driven = W3C</StyledListItem>
            <StyledListItem>Native</StyledListItem>
            <StyledListItem>Highly optimized</StyledListItem>
            <StyledListItem>Self encapsulated (shadow dom)</StyledListItem>
            <StyledListItem>Promote right separation of concerns</StyledListItem>
          </CustomList>
        </Slide>
        <Slide>
          <HeadingStyled size={2}>Cons</HeadingStyled>
          <CustomList>
            <StyledListItem>Native Cross Browser support</StyledListItem>
            <StyledListItem>Fine grained</StyledListItem>
            <StyledListItem>Split to different specifications</StyledListItem>
          </CustomList>
        </Slide>

        <Slide>
          <HeadingStyled size={4} textColor="secondary">Libraries</HeadingStyled>
          <CustomList>
            <StyledListItem><Link href="https://github.com/hybridsjs/hybrids">Hybrids</Link></StyledListItem>
            <StyledListItem><Link href="https://github.com/Polymer/lit-element">LitElement</Link></StyledListItem>
            <StyledListItem><Link href="https://www.polymer-project.org/">Polymer</Link></StyledListItem>
            <StyledListItem><Link href="https://skatejs.gitbooks.io/skatejs/content/">Skate.js</Link></StyledListItem>
            <StyledListItem><Link href="http://slimjs.com/">Slim.js</Link></StyledListItem>
            <StyledListItem><Link href="https://stenciljs.com/">Stencil</Link></StyledListItem>
          </CustomList>
        </Slide>

        <Slide>
          <HeadingStyled size={4} textColor="secondary">LitElement from Polymer team</HeadingStyled>
          <CustomList>
            <StyledListItem>Base class for creating web components</StyledListItem>
            <StyledListItem>Uses <Link href="https://github.com/Polymer/lit-html">lit-html</Link> for template rendering</StyledListItem>
          </CustomList>
        </Slide>

        <Slide>
          <HeadingStyled size={4} textColor="secondary">Useful links</HeadingStyled>
          <CustomList>
            <StyledListItem><Link href="https://www.webcomponents.org/">WebComponents.org</Link></StyledListItem>
            <StyledListItem><Link href="https://github.com/w3c/webcomponents">W3C spec for Web Components</Link></StyledListItem>
            <StyledListItem><Link href="https://github.com/praveenpuglia/shadow-dom-in-depth">Shadow DOM in depth</Link></StyledListItem>
            <StyledListItem><Link href="https://dev.to/bennypowers/lets-build-web-components-part-5-litelement-906?newly-registered-user=true#litelement-lifecycle">Let's build Web Component with lit-html</Link></StyledListItem>
            <StyledListItem><Link href="https://www.smashingmagazine.com/2016/12/styling-web-components-using-a-shared-style-sheet/">Styling Web Components</Link></StyledListItem>
            <StyledListItem><Link href="https://github.com/PolymerLabs/start-lit-element">lit-element Hello World application</Link></StyledListItem>
            <StyledListItem><Link href="https://alligator.io/web-components/styling-custom-elements/">Styling Custom Element</Link></StyledListItem>
          </CustomList>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <HeadingStyled size={4} textColor="primary">Thank You 🙏</HeadingStyled>
        </Slide>
      </Deck>
    );
  }
}
