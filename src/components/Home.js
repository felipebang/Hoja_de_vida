import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Totono from './imagenes/FELIPE.jpg';
import Table from 'react-bootstrap/Table';
import ProgressBar from 'react-bootstrap/ProgressBar';







export default class Home extends Component {
    render() {
        return (

            <div>
              

                    <h1>Acerca de mí</h1>
                <table striped bordered hover  border="0" width="100%">

                  
     
  
                
                        <tr>
                            <th ><div align="left"> <Image src={Totono}  width="150px" thumbnail /></div> </th>  
                            
                            
                            <th><text align="left"><p>Hola mi nombre es  Felipe Banguero Arrechea  creativo, con iniciativa y puntualidad, asumo con responsabilidad los retos y metas que la organización me plantee.
                            

                            Me considero una persona responsable, dinámica y creativa, con facilidad de adaptación y capacidad de trabajar en computadores,  
                              en condiciones de alta presión con iniciativa para resolver problemas eficientemente y lograr las metas y objetivos trazados por la empresa.
                        Técnico en sistemas, con competencias y habilidades laborales, conocimientos en instalación de nuevos software, ensamble de nuevos equipos, mantenimiento preventivo y predictivo que garantice el funcionamiento del hardware de los equipos, 
                        </p></text></th>
                        </tr>  

              <tr>
                <th>
                  <h6>Felipe Banguero Arrechea </h6>
                </th>
                <th>MIS HABILIDADES
                <Table striped bordered hover>
  <thead>
    <tr>
      <th>
        <h6>HTML</h6>
      <ProgressBar  animated now={50}  />
      </th>
      <th>
        <h6>JAVASCRIPS</h6>
      <ProgressBar animated now={45} />
      </th>
    </tr>

    <tr>
      <th>
        <h6>React</h6>
      <ProgressBar animated now={15} />
      </th>
      <th>
        <h6>PHP</h6>
      <ProgressBar animated now={50} />
      </th>
    </tr>
  </thead>
</Table>
                </th>
              </tr>


              <tr>
                <th>
                <a href="http://www.facebook.com/philip.flp/" target="_blank"><img alt="Siguenos en Facebook" src="https://lh6.googleusercontent.com/-CYt37hfDnQ8/T3nNydojf_I/AAAAAAAAAr0/P5OtlZxV4rk/s32/facebook32.png"/></a>
                <a href="https://www.instagram.com/philip_bangue/?hl=es" target="_blank"><img alt="Siguenos en Blogger" src="https://lh5.googleusercontent.com/-2cd4qn_7yDs/UIqEfqncDaI/AAAAAAAABfw/qhUaWfiH7DU/s32/instagram32.png"  /></a>
                <a href="https://www.youtube.com/channel/UCBFXlE0_tupFO7hRWz6032w" target="_blank"><img alt="Siguenos en YouTube" src="https://lh6.googleusercontent.com/-rVomfUIWxBw/T3ld3h7qGnI/AAAAAAAAAqs/Mvp1kyj9bzo/s32/youtube32.png"/></a>
                </th>
                </tr>

                <tr>
                  <th>
                  <h6>3-Abril-1996</h6>
                  </th>
                </tr>

                <tr>
                  <th>
                  <h6>Palmira Colombia</h6>
                  </th>
                 
                </tr>

                <tr>
                  <th>
                  <h6>Fbanguero4@misena.edu.co</h6>
                  </th>
                </tr>


                <tr>
                  <th>
                  <a href="https://docs.google.com/document/d/1te8pCz_Rb82T7SvAnHY7bmclO-tZri0X/edit?usp=drive_web&ouid=102710595481301266958&rtpof=true" download="https://docs.google.com/document/d/1te8pCz_Rb82T7SvAnHY7bmclO-tZri0X/edit?usp=drive_web&ouid=102710595481301266958&rtpof=true">Resumen</a><br />
                  </th>
                </tr>


                <tr>
                  <th>
                  <a href="./word\hoja-de-vida.docx" download="hojadevida.docx">Descargar</a>
                  </th>
                </tr>

</table>

      

            </div>






        )
    }
}


