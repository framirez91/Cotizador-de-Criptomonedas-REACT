import styled from '@emotion/styled'

const Contenedor = styled.div`
color: #fff;
font-family: 'Lato', sans-serif;
display: flex;
gap: 1rem;
align-items: center;
margin-top: 30 px;



`
const Avatar = styled.img`
display: block;
width: 120px;
height: 120px;
border-radius: 50%;
border: 4px solid #fff;


`
const Texto = styled.p`
font-size: 15px;
span {
    font-weight: 700;
}
`
const Precio = styled.p`
font-size: 24px;
span {
    font-weight: 700;
}
`




const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCTDAY,IMAGEURL,LASTUPDATE} = resultado 
    return (
        <Contenedor>
            <Avatar 
            src={`https://www.cryptocompare.com/${IMAGEURL}`}
            alt="imgencripto" />
           <div>
           <Precio>El precio es de: <span>{PRICE}</span></Precio>
           <Texto>El precio mas alto del dia es de: <span>{HIGHDAY}</span></Texto>
           <Texto>El precio mas bajo del dia es de: <span>{LOWDAY}</span></Texto>
           <Texto>Variacion ultimas 24 Horas: <span>{CHANGEPCTDAY}</span></Texto>
           <Texto>Ultima Actualizacion <span>{LASTUPDATE}</span></Texto>
           </div>


        </Contenedor>
    )
}

export default Resultado