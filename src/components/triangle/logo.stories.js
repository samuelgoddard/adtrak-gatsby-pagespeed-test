import React from "react"
import Logo from "./logo"

export default {
  title: "Logo",
}

export const logo = () => <Logo />
export const Small = () => <Logo modifier={`small`} />
