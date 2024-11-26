import React, { useState } from "react"
import { popular } from "../../../dummyData"
import "./hero.css"
import Popular from "./Popular"

const Hero = () => {
  const [items, setIems] = useState(popular)

  return (
    <>
      <section className='hero'>
        <div className='container'>
          {items.map((item) => {
            return (
              <>
                <Popular key={item.id} item={item} />
              </>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Hero
