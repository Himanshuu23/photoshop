import { useEffect, useState } from "react"

export default function Slider({ options, currProperty}) {
    const [slider, setSlider] = useState(() => options[currProperty].value)

    function handleSliderChange(e) {
        setSlider(e.target.value)
        options[currProperty].value = slider
    }
    
    useEffect(() => {
        setSlider(options[currProperty].value)
    }, [currProperty])

    useEffect(() => {
        options[currProperty].value = slider
    }, [slider])

    return (
        <>
            <input onChange={(e) => handleSliderChange(e)} className="slider" type='range' value={slider} min={options[currProperty].range.min} max={options[currProperty].range.max}/>
            <div className="slider-value">{slider}</div>
        </>
    )
}