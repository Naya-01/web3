
const Button = (props) =>{
    const {onclick, delta, text} = props;

    return <>
    <button onClick={onclick} data-delta={delta}>  {text}   </button>
    </>
}

export default Button;