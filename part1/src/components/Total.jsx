const Total = (props)=>{
    return (
        <div>
            <p>Number of exercises {props.course.part[0].exercises + props.course.part[1].exercises
             + props.course.part[2].exercises}</p>
        </div>
    );
}

export default Total;