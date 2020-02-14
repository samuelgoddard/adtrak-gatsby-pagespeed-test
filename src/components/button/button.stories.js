import React from "react"
import Button from "./button"
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"

export default {
  title: "Button",
  decorators: [withKnobs],
}

const knobLabel = "Label"

export const button = () => <Button label={text(knobLabel, "Default Button")} />

export const primary = () => (
  <Button modifier="primary" label={text(knobLabel, "Primary Button")} />
)

export const secondaryLight = () => (
  <Button modifier="secondary-light" label={text(knobLabel, "Secondary Light Button")} />
)
