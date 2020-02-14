import React from "react"
import BlockQuote from "./blockquote"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

export default {
  title: "Blockquote",
  decorators: [withKnobs],
}

const knobLabel = "Label"

export const blockquote = () => <BlockQuote text={text(knobLabel, "This is an example of a blockquote that is rather nice.")} />
