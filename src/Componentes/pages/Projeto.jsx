import React from "react";
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


export const Projeto = () => {

    const itemData = [
        {
            img: './Imagens/loadingInit.jpg',
            title: 'Loading Page',
        },
        {
            img: './Imagens/login.jpg',
            title: 'Login Page',
        },
        {
            img: './Imagens/dash.jpg',
            title: 'Dashboard Page',
        },
        {
            img: './Imagens/estoque.jpg',
            title: 'Estoque Page',
        },
        {
            img: './Imagens/funcionarios.jpg',
            title: 'Funcionarios Page',
        },
        {
            img: './Imagens/producao.jpg',
            title: 'Produção Page',
        }
    ];

    return (
        <section >
            <h1>Projeto</h1>
            <div style={{ display: "flex", flexDirection:"row", justifyContent:"space-between" }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '40px' }}>
                    <Card
                        variant="outlined"
                        sx={{
                            minHeight: 550,
                            minWidth: 600,
                            maxWidth: 600,
                            display: 'flex',
                            flexDirection: 'column',
                            padding: 2,
                        }}
                    >
                        <Typography variant="h6">Lorem Ipsum</Typography>
                        <Typography variant="body6">Aplicativo foi feito para resolver o problema de uma empresa que não estava
                            conseguindo gerenciar o estoque, o aplicativo é usado pelos funcionários da parte de estoque.</Typography>
                    </Card>
                </div>
                <div>

                    <ImageList sx={{ width: 600, height: 550 }} variant="woven" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
                                    src={`${item.img}?w=161&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>


                </div>
            </div>

        </section>
    )



}