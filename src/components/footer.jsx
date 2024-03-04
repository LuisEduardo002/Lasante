
function Footer() {
return (
<div className="app">
    <section className="footer">
    <div className="img-footer">
        <img src='../assets/logoFooter.png' alt="logo-la-sante-naranja" />
    </div>
    <div className="subs-footer">
        <div className="suscribete">Suscribete</div>
        <input type="box" placeholder="Email" />
        <button type="buttonSubs"> Suscribirte</button>
        <div id="wea">
            <div className="text"> Síguenos en nuestras redes Sociales</div>
            <div className="iconsSocial">
            <div className="iconFace">
                <img src='../assets/logotipo-circular-de-facebook.png'alt="no img"></img>
            </div>
            <div className="iconInsta">
                <img src='../assets/instagram.png' alt='no img'></img>
            </div>
            </div>
        </div>
        
    </div>
    <section className="redes">
        
        <div className="contacto">
            <h1>Contacto</h1>
        601 3647500 Cra 65 B No. 13-13 Zona industrial Montevideo, Bogotá<br />
        Email: servicioalcliente@lasante.com.co<br />
        Política de protección de datos personales<br />
        Código de ética y cumplimiento
        </div>
    </section>
    </section>
    <footer className="app-footer">
    <p>© 2020 La Santé </p>
    </footer>
</div>
);
}
export default Footer