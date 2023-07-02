import Card from "../Card"
import "./Realms.css"

export const Realms = () =>{
    return(
        <div className="realms">
            <Card realm_img="images/realms/tolariano.png"/>
            <Card realm_img="images/realms/Dominaria.png"/>
            <Card realm_img="images/realms/Mirrodin.png"/>
        </div>
    )
}

export default Realms