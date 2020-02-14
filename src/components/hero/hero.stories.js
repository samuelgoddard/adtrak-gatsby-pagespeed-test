import React from "react"
import Hero from "./hero"
import { withKnobs, text } from "@storybook/addon-knobs"

export default {
  title: "Hero",
  decorators: [withKnobs],
}

export const hero = () => (
  <Hero
    heading={text("Heading", "Heading Message")}
    subHeading={text("Subheading", "Subheading Message")}
    excerpt={text("Excerpt", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur")}
  />
)
