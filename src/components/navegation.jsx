
function Navegacion(){
    return(
        <nav className="todonav">
            <div className="imagensante">
                <img src="../assets/santelogo.png" alt='elepep'></img>
            </div>

            <div className="textolinks">
            <a href="#">Somos </a>
            <a href="#">Medicos Bioequivalentes</a>
            <a href="#">Farmacovigilancia</a>

  
            <div class="dropdown">
            <button class="dropbtn">Blog la santé ▾</button>

                <div class="dropdown-content">
                <a href="#">Ver todas las entradas</a>
                <a href="#">Todo acerca del Glaucoma</a>
                <a href="#">Salud Visual</a>
                <a href="#">Alergias</a>
                <a href="#">Hipertensión Arterial</a>
                <a href="#">Vitamina C</a>
                <a href="#">Infecciones virales</a>
                <a href="#">Bacterias</a>
                <a href="#">Antihistamínicos</a>
                </div>
            </div>
            <a href="#">Contacto</a>
            </div>
        </nav>

    )
}

export default Navegacion