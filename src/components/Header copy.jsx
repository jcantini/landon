// Esta es una copia para trabajar con los archivos json en lugar de acceder a la API
// Solo hice copia de este archivo no de los otros que directamente los dejo con el acceso a la API

import menuLinksData from './data/menu_links.json'; // Le asigo un nombre al json que importo

export const Header = () => {
  return (
    <header id="intro">
        <article className="fullheight">
        <div className="hgroup">
            <h1>Landon Hotel</h1>
            <h2>West London</h2>
            <p><a href="#welcome"><img src="https://landonhotel.com/images/misc/arrow.png" alt="down arrow" /></a></p>
        </div>
        </article>

        <nav id="nav">
        <div className="navbar">
            <div className="brand"><a href="#welcome">Landon <span>Hotel</span></a></div>
            <ul>
                {
                    menuLinksData.map( menu => (
                        <li><a className={`icon ${menu.class}`} href={menu.href}><span>{menu.text}</span></a></li>        
                     ))
                }
            </ul>
        </div>
        </nav>
    </header>
  )
}


