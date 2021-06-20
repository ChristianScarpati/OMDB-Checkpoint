import React from "react"
import style from '../styles/footer.module.css'
import GetMovies from "./GetMovies"



const Footer2= () => {

    return(

        <div>
            <footer className={style.background}>
					<div className="container">
						<div className="row">
							<p>Página hecha 100% a mano por Cristian 3p <a href="www.google.com.ar">google</a> </p>
                            <GetMovies />
						</div>
					</div>
				</footer>
        </div>
    )

}

export default Footer2;