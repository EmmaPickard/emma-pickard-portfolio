import Slider from "react-slick";
import Image from "next/image";
import React, { useState } from "react";
import css from 'public/css.svg';
import express from 'public/express.svg';
import git from 'public/git.svg';
import github from'public/github.svg';
import html from 'public/html.svg';
import javascript from 'public/javascript.svg';
import knex from 'public/knex.svg';
import node from 'public/node.svg';
import postgresql from 'public/postgresql.svg';
import react from 'public/react.svg';
import vscode from 'public/vscode.svg'

const [images, setImages] = useState([
    { url: {css}},
    { url: {express} },
    { url: {git} },
    { url:  {github}},
    { url: {html}},
    { url:  {javascript}},
    { url:  {knex}},
    { url: {node} },
    { url: {postgresql} },
    { url: {react} },
    { url: {vscode} },
  ]);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  

const Carousel = () => {
  return (
    <Slider {...settings}>
    {images.map((image, index) => (
        <div>
            <Image 
            src={image.url}
            height={144}
            width={144}
            alt=""
            />
        </div>
    ))}
  </Slider>

  )
}

export default Carousel