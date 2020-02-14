import React from "react"
import Shape from "../shape/shape"

export default {
  title: "Shape Grid",
}

export const ShapeGrid = () => {
  return (
  <div className="grid">
    {Array.from(Array(10), (e, i) => (
      <div className="" key={i}>
        <Shape
          index={i}
          fill="secondary"
        />
      </div>
    ))}
  </div>
  )
}