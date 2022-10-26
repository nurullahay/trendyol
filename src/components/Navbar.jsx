function Navbar(props) {


    return(
        <>


            <div id="navMainBox" className="container">
            <div id="navMenu">
                <ul id="navList">
                    <li>
                        <a href={props.kadin}>KADIN</a>
                    </li>
                    <li>
                        <a href={props.erkek}>ERKEK</a>
                    </li>
                    <li>
                        <a href={props.anneCocuk}>ANNE&ÇOCUK</a>
                    </li>
                    <li>
                        <a href={props.evMobilya}>EV&MOBİLYA</a>
                    </li>
                    <li>
                        <a href={props.süpermarket}>SÜPERMARKET</a>
                    </li>
                    <li>
                        <a href={props.kozmetik}>KOZMETİK</a>
                    </li>
                    <li>
                        <a href={props.ayakkabiCanta}>AYAKKABI&ÇANTA</a>
                    </li>
                    <li>
                        <a href={props.saatAksesuar}>SAAT&AKSESUAR</a>
                    </li>
                    <li>
                        <a href={props.elektronik}>ELEKTRONİK</a>
                    </li>
                    <li>
                        <a href={props.sporOutdoor}>SPOR&OUTDOOR</a>
                    </li>
                </ul>
            </div>
            </div>
        </>
    )
}

export default Navbar;