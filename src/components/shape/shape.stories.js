import React from "react"
import Shape from "./shape"

export default {
  title: "Shape",
}

export const Primary = () => (
  <Shape
    width={150}
    height={150}
    index={0}
    fill="primary"
  />
)

export const Secondary = () => (
  <Shape
    width={150}
    height={150}
    index={0}
    fill="secondary"
  />
)

export const SecondaryDark = () => (
  <Shape
    width={150}
    height={150}
    index={0}
    fill="secondary-dark"
  />
)
