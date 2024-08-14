const Content = (props)=>{
    return(
        <div>
        <p>{props.course.part[0].name} {props.course.part[0].exercises}</p>
        <p>{props.course.part[1].name} {props.course.part[1].exercises}</p>
        <p>{props.course.part[2].name} {props.course.part[2].exercises}</p>
        </div>
    )
}

export default Content;