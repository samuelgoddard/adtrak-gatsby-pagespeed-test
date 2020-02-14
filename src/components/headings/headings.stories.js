import React from "react"
import { withKnobs, text, boolean } from "@storybook/addon-knobs"

export default {
  title: "Typography",
  decorators: [withKnobs],
}

const knobLabel = "Label"

export const heading = () => (
  <div className="content">
    {[...Array(5)].map((e, i) => {
      const HeadingTag = `h${i + 1}`

      return (
        <div key={i} className="mb-8">
          <HeadingTag>
            {text(
              knobLabel,
              "Lorem ipsum dolor sit amet consecteteur adip elit aram"
            )}
          </HeadingTag>

          {boolean("With Paragraphs?", false) && (
            <>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex. Ut enim ad minim veniam, quis nostrud
                exercitation.
              </p>

              <p>
                Lea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit.
              </p>
            </>
          )}
        </div>
      )
    })}
  </div>
)
