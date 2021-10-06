import { useState } from "react"



export default function Weapon (props){
    // const [weapon, setWeapon] =useState()

    // setWeapon(props.weapon)

    // console.log(weapon);
    
    return (
        <>
            <p>Category:{props.weapon.weapon_category}</p>

            <p>Weapon Range:{props.weapon.weapon_range}</p>
            
            <p>Damage:{props.weapon.damage.damage_dice}{props.weapon.damage.damage_dice}</p>

            <p>Attack Range:{props.weapon.range.normal}</p>



        </>
    )


}