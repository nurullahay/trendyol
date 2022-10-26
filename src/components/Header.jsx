function Header(props) {
    return(
        <>

            <div id="navBar">
                <div id="headerTop">
                    <ul className="right">
                        <li>
                            <a href="https://www.trendyol.com/Hesabim/IndirimKuponlari">İndirim Kuponlarım</a>
                        </li>
                        <li>
                            <a href="https://partner.trendyol.com/onboarding/satici-formu">Trendyol'da Satış Yap</a>
                        </li>
                        <li>
                            <a href="https://www.trendyol.com/yardim/sorular">Yardım & Destek</a>
                        </li>
                    </ul>
                </div>
                <br />

                <div id="kapsayici">
                    <div id="logoDiv">
                        <div className="menuIcon">
                            <span class="material-symbols-outlined">menu</span>
                        </div>
                        <a id="logo" href="https://www.trendyol.com/">
                            <img src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="" />
                        </a>
                    </div>
                    <div id="search">
                        <input id="searchText" type="text" placeholder="Aradığınız ürün, marka veya katagoriyi yazınız" />
                        <i id="searchIcon">
                            <span id="searchIcon" class="material-symbols-outlined">search</span>
                        </i>
                    </div>

                    <div id="userMenu">
                        <ul>
                            <li>
                                <a href="https://www.trendyol.com/giris?cb=https%3A%2F%2Fwww.trendyol.com%2F">
                                    <span class="userI material-symbols-outlined">person</span>
                                    <p className="userP">Giriş Yap</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.trendyol.com/Hesabim/Favoriler">
                                    <span class="userI material-symbols-outlined">favorite</span>
                                    <p className="userP">Favorilerim</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.trendyol.com/sepet">
                                    <span class="userI material-symbols-outlined">shopping_basket</span>
                                    <p className="userP">Sepetim</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="searchMobile">
                    <input id="searchText" type="text" placeholder="Katagori, ürün veya marka ara.." />
                    <i id="searchIcon">
                        <span id="searchIcon" class="material-symbols-outlined">search</span>
                    </i>
                </div>
            </div>

        </>
    )
}

export default Header;
