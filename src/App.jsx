import { useEffect, useState } from "react";
import './App.css'
import BarComps from "./BarComps";
import ImageContainer from "./ImageContainer";
import Slider from './Slider.jsx'

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue-Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
  {
    name: 'Invert',
    property: 'invert',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Opacity',
    property: 'opacity',
    value: 100,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Saturate',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
]

export default function App() {
  const [currProperty, setCurrentProperty] = useState(0)

  return(
    <>
      <h1 style={{translate: '45vw'}}>Photoshop Clone</h1>
      <BarComps currProperty={currProperty} setCurrentProperty={setCurrentProperty} options={DEFAULT_OPTIONS}/>
      <ImageContainer currProperty={currProperty} options={DEFAULT_OPTIONS}/>
      <Slider options={DEFAULT_OPTIONS} currProperty={currProperty} />
    </>
  )
}
/* 
Two Bugs
1) The values are only visible when we open that property again
2) When we add one value then previous value gets removed which can be removed by setting property again in the imageContainer if the property is different from the currently setted property
*/