import { useEffect, useState } from 'react';
import { getApiData } from './data/getApiData';

export const Header = () => {
    const [ menuLinksData, setMenuLinksData] = useState([]); //(1)

    const loadData = async () => {
        const data = await getApiData( 'menu_links')
        setMenuLinksData(data);
    }

    useEffect(() => { //(2) 
        // Load the menu links data from the API Gateway
        loadData();
    }, []);

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
                        menuLinksData.map((link) =>
                            <li key={link.href}><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                        // menuLinkData.map( menu => (
                        //     <li><a className={`icon ${menu.class}`} href={menu.href}><span>{menu.text}</span></a></li>        
                        )
                    }
                </ul>
            </div>
            </nav>
        </header>
    )
}

/*
(1) Agrego un estado para guardar los links del menu

(2) Agrego un useeffect para hacer la carga inicial de los links

*/

