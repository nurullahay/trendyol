function Firsat(props) {
    return(
        <>
            <div className="container firsatContainer">
                <div id="firsat">
                    <a href={props.firsat}>
                        <img src={props.firsatImg} alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default Firsat;