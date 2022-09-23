
const Button = (props) =>{
    const {onclick, text} = props;
    
    return <>
    <button onClick={onclick}>{text}</button>
    </>
}

export default Button;