_THIS UI LIBRARY IS STILL UNDER CONSTRUCTION. PLEASE DO NOT USE._

This UI library for React was built using Typescript, Rollup, and Storybook. It can be installed via NPM:

```
npm i @hgcl/accessible-library

```

## Accessibility considerations

This library follows the standards set by the [Web Content Accessibility Guidelines 2](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG 2).

Here is a [quick reference](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1) to the WCAG 2 requirements. When building our components, we are striving for a conformance of Level AAA, but will at least achieve Level AA.

- Use ARIA in a smart way
  - No ARIA is better than bad ARIA. Before using any ARIA, [check why](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/).
  - Synchronize ARIA attributes with a component state (TODO add examples)
- Operable:
  - Make all functionality available from a keyboard
  - Provide ways to help users navigate, find content, and determine where they are
  -
- Perceivable:
  - Provide text alternatives for non-text content
  - Optimize color contrast and size for images, icons, and text
- Robust
  - https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Robust

The W3C Web Accessibility Initiative website will give a broader overview of the [fundamentals of accessibility](https://www.w3.org/WAI/fundamentals/accessibility-principles/).

## Design decisions

- 8px grid for all spacings and sizes
- Global CSS variants are set in `global.css`. You can customize them in your project as you see fit.

## Resources

Design system inspirations (focus on accessibilty):

- https://rei.github.io/
- https://atlassian.design/
- https://design-system.service.gov.uk/
- https://circuit.sumup.com/

Inspiration to build this library: https://dev.to/iamrishupatel/how-to-create-a-react-component-library-using-storybook-typescript-scss-and-rollup-4pin
