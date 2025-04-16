import React from "react"
import Card from '@mui/material/Card';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Contato = () => {

    return (
        <section>
            <center>
            <h1>Contato</h1>
                <Card variant="outlined" 
                sx={{maxWidth:350, display:"flex", flexDirection:'column', alignItems:'flex-start', margin:1, paddingLeft:1}}

                >
                    <h4>Alex Sandro</h4> <a href="https://www.instagram.com/alekinho081"><InstagramIcon sx={{position:"absolute", top:150, right:'54vw'}} /></a>
                    alex_borba-junior@estudante.sesisenai.org.br
                    </Card>
                
                <Card variant="outlined"
                sx={{maxWidth:350, display:"flex", flexDirection:'column', alignItems:'flex-start', paddingLeft:1}}
                >
                    <h4>Gabriel Lino</h4><a href="https://www.instagram.com/lino.s7/"><InstagramIcon sx={{position:"absolute", top:245, right:'54vw'}}/></a>
                    
                    gabriel_lv_santos@estudante.sesisenai.org.br
                    </Card>

            </center>
                

        </section>
    )

}