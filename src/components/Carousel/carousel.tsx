import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import logo from "../../images/logo.png"
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function carousel({ children }: { children: any }) {
  return (
    <Carousel>
    <div>
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp" />
    </div>
    <div>
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp" />
    </div>
    <div>
        <img src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp" />
    </div>
</Carousel>
  )
}
