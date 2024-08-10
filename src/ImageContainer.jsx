export default function ImageContainer({ options, currProperty }) {
    return (
        <>
            <div style={{backgroundSize: 'cover', backgroundPosition: 'center', filter: `${options[currProperty].property}(${options[currProperty].value}${options[currProperty].unit})`}} className="img-container"></div>
        </>
    )
}
