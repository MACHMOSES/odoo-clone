const FooterInput = () => {
    return(
        <div>
            <form action="#" method="get">
                <select className="form-select" id="language" name="language">
                    <option selected disabled>Select Language</option>
                    <option value="English">English</option>
                    <option value="French">French</option>
                    <option value="Spanish">Spanish</option>
                    <option value="German">German</option>
                    <option value="Swahili">Swahili</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Arabic">Arabic</option>
                </select>
            </form>
            <p>Odoo is a suite of open source business apps that cover all your company needs: CRM, eCommerce, accounting, inventory, point of sale, project management, etc.</p>
            <p>Odoo's unique value proposition is to be at the same time very easy to use and fully integrated.</p>
        </div>
    );
}

export default FooterInput;