import Card from "../Card"
import "./Realms.css"

export const Realms = () =>{
    return(
        <section className="realms">            
                <Card realm_img="images/realms/tolariano.png"/>
                <Card realm_img="images/realms/Dominaria.png"/>
                <Card realm_img="images/realms/Mirrodin.png"/>            
        </section>
    )
}

export default Realms