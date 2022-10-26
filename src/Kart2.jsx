

const Kart2 = props => {
    let { imgSrc, cardExp, price, cardLink, cardBrandName, promText, firsatLogo, kargo } = props.data;

    return(
        <div className="card">
            <a href={cardLink}>
                <div id="headLogo">
                    <p id="kargo">{kargo}</p>
                    <button id="favoriBtn"><i><span class="material-symbols-outlined">favorite</span></i></button>
                </div>
                <div id="firsatLogo">
                    <img src={firsatLogo} alt="" />
                </div>
                <div id="cardImg">
                    <img src={imgSrc} alt="" />
                </div>
                <div id="cardInfo">
                    <div id="cardExp">
                        <p id="cardParag"><span id="cardBrandName">{cardBrandName}</span>{cardExp}</p>
                    </div>                
                </div>
                <div>
                    <div>
                        <h2 id="cardPrice">{price}</h2>
                    </div>
                    <div>
                        <p id="promText">{promText}</p>
                </div>
                </div>
            </a>
        </div>
    )
}


export default Kart2;


