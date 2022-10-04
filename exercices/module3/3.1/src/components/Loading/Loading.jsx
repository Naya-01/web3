const { useState } = require("react")

const Loading = ({composant}) => {
    const [loading, setLoading] = useState(true);

    if (loading) {
        setTimeout(() =>{
            setLoading(false)
        }, 3000);
        return <>
        <h1>{"Loading...."}</h1>
        </>
    }else {
        return composant;
    }
}

export default Loading;