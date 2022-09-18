import Part from "./Part"

const Content = (props) => {
    return <>
     <Part part={props.parts[0]} exercices={props.exercices[0]}/>
     <Part part={props.parts[1]} exercices={props.exercices[1]}/>
     <Part part={props.parts[2]} exercices={props.exercices[2]}/>
    </>
  }

  export default Content;