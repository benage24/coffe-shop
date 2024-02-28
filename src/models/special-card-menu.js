import { MdOutlineBakeryDining } from "react-icons/md";
import { MdFreeBreakfast } from "react-icons/md";
import { CiCoffeeCup } from "react-icons/ci";

export const coffeeCard=[
    {
    name:"coffee",
    description:"Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula. Eos ei nisl graecis, vix apeririequat.",
    img:require('../assets/images/cup-caffee.jpg'),
    icon:< CiCoffeeCup  />

    },
    {
        name:"bakery",
        description:"Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula. Eos ei nisl graecis, vix apeririequat.",
        img:require('../assets/images/bakery.jpg'),
        icon:<MdOutlineBakeryDining />
        },
    
        {
            name:"breakfast",
            description:"Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expetendis in mei an pericula. Eos ei nisl graecis, vix apeririequat.",
            img:require('../assets/images/breakfast.jpg'),
            icon:<MdFreeBreakfast />
            }
            
        
    
    ]
    