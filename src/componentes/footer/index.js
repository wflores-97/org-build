import "./footer.css"

const Footer = ()=>{
    return <footer className="footer" style={{backgroundImage: 'url(/img/Footer.png)'}}>
        <div className="redes">
            <a href="https://www.aluracursos.com">
                <img src="/img/facebook.png" alt="" />
            </a>
            <a href="https://www.aluracursos.com">
                <img src="/img/twitter.png" alt="" />
            </a>
            <a href="https://www.aluracursos.com">
                <img src="/img/instagram.png" alt="" />
            </a>
        </div>
        <img src="img/logo.png" alt="Org" />
        <strong>Desarrollado por: Wilson Flores &copy;</strong>
    </footer>
}

export default Footer;