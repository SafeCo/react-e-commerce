import "./FooterList.css"

function FooterList() {
    return (
        <>
            <div>
                <div>
                    <h4>Shop Simple</h4>
                </div>
                    <ul className="footerList__list">
                        <li>
                        <p>Shop electronics</p>
                        </li>
                        <li>
                            <p>Shop clothes</p>
                        </li>
                        <li>
                            <p>Shop jewelery</p>
                        </li>
                        <li>
                            <p>Shop bags</p>
                        </li> 
                    </ul>
            </div>

            <div >
                <div>
                    <h4>Customer service</h4>
                </div>
                <ul className="footerList__list">
                    <li>
                        <p>Accessibility Statement</p>
                    </li>
                    <li>
                        <p>My Account</p>
                    </li>
                    <li>
                        <p>Shipping & Returns</p>
                    </li>
                    <li>
                        <p>FAQ</p>
                    </li>
                    <li>
                        <p>Contact us</p>
                    </li>
                    <li>
                        <p>Social media</p>
                    </li>
                    <li>
                        <p>Store locator</p>
                    </li>
                </ul>       
            </div>

            <div>
                <div>
                    <h4>Join Simple.</h4>
                </div>
                <ul className="footerList__list">
                    <li>
                        <p>Our Story</p>
                    </li>
                    <li>
                        <p>Our blog</p>
                    </li>
                    <li>
                        <p>VIP rewards</p>
                    </li>
                    <li>
                        <p>Ambassadors & Affiliates</p>
                    </li>
                </ul>                    
            </div>
        </>
    )
}

export default FooterList