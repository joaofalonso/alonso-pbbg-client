import './Card.css'

export const Card = (props) =>{
    return(
        <div className='card'>
            <img src={props.realm_img} alt="Imagem tolariano card"></img>
        </div>
    )
}

export default Card