function Section(props) {
    return(
        <a className="cardDiv" href={props.cardLink + props.hover}>
            <div>
                <img src={props.resimURL} alt="" />
                <div className="card-p">
                    <p>{props.divInfo}</p>
                </div>
            </div>
        </a>
    )
}

export default Section;