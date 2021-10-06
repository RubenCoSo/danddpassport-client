


export default function Armor (props){
    // const [weapon, setWeapon] =useState()

    // setWeapon(props.weapon)

    // console.log(weapon);
    
    return (
        <>
            <p>Category:{props.armor.armor_category}</p>

            <p>Armor class base: {props.armor.armor_class.base}</p>
            
            <p>Minimum strength to wear:{props.armor.str_minimum}</p>

        </>
    )


}