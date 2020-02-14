import React from "react"
import { configure, addDecorator, addParameters } from "@storybook/react"
import { withA11y } from "@storybook/addon-a11y"
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport"
import "../src/styles/main.css"

const MarginDecorator = storyFn => <div className="m-5">{storyFn()}</div>

// Accessibility Decorator
addDecorator(withA11y)

// Wrap all previews with a margin
addDecorator(MarginDecorator)

// Add Viewport Addon
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
})

// automatically import all files ending in *.stories.js
configure(require.context("../src", true, /\.stories\.js$/), module)
// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""
