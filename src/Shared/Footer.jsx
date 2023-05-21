

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            <div>
                <img src="https://dlkidzo.backdt.com/demos/img/logo/logo_01.png" alt="" />
                <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                <div className="flex gap-2">
                    <a className="text-black-500 font-bold" href="https://www.google.com/search?q=goggle&oq=goggle&aqs=chrome..69i57j69i64j0i10i131i433i512j46i10i131i199i433i465i512j0i10i131i433i512l4.2183j0j15&sourceid=chrome&ie=UTF-8">Goggle</a>
                    <a className="text-black-500 font-bold" href="https://www.google.com/search?gs_ssp=eJzj4tLP1TfIyK1MKy5TYDRgdGDw4khLTE5Nys_PBgBmYAfL&q=facebook&oq=face&aqs=chrome.1.69i57j46i67i131i199i433i465i650j0i67i650l2j0i67i131i433i650j0i131i433i512l2j0i20i131i263i433i512j0i271l2.2769j0j15&sourceid=chrome&ie=UTF-8">Fcebook</a>
                    <a className="text-black-500 font-bold" href="https://twitter.com/">Twitter</a>
                    <a className="text-black-500 font-bold" href="https://www.instagram.com/">Instagram</a>
                </div>

            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;