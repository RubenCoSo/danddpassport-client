


export default function AdventuringGear (props){
    // const [weapon, setWeapon] =useState()

    // setWeapon(props.weapon)

    // console.log(weapon);
    
    return (
        <>
            <p>Category:{props.gear.gear_category.name}</p>

            <p>Contains:</p>
            <ul>
                {props.gear.contents.map((gearItems)=>{
                    return <li>{gearItems.item.name}: {gearItems.quantity}</li>
                })}
            </ul>

        </>
    )


}