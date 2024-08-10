import './App.css'

export default function BarComps({options, currProperty, setCurrentProperty}) {
    return(
        <div className='btn-container'>
            {options.map((option, index) => <button className={(options[currProperty].name == option.name)? 'btn active':'btn'} onClick={() => setCurrentProperty(index)} key={option.name}>{option.name}</button>)}
        </div>
    )
}