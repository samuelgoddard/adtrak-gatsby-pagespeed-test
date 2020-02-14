import React from "react"
import Layout from "./src/components/layout"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

const insertJS = () => {
  const s = document.createElement(`script`)
  s.type = `text/javascript`
  s.src = "//217641.tctm.co/t.js"
  document.getElementsByTagName(`head`)[0].appendChild(s)
}

export const onInitialClientRender = () => {
  insertJS()
}