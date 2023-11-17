import { useEffect, useState } from "react";
import { debounce } from "lodash";
export default function Ingredients({idMeal}) {

const [ingredients, setIngredients] = useState(null);

async function fetchIngredients() {
    try{
        setIngredients(null);
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`);
        const ingredients = await response.json();
        setIngredients(ingredients.meals[0])
        idMeal = null;
    }catch(error) {
        console.log('Error', error);
    }
   }
  
   const debouncedFetch = debounce(fetchIngredients, 50);
     useEffect(() => {
        debouncedFetch();
     }, [idMeal])

    return(
        <>
            <div className="text-xs text-gray-400 ml-2">
                Ingredients needed:
                <ul>
                    {idMeal && ingredients && Object.entries(ingredients).map(([key, value], index) => (
                        key.startsWith('strIngredient') && value ? (
                            <li className="text-xs ml-6 text-gray-400" key={index}>
                                {value}
                            </li>
                        ) : null
                    ))}
                </ul>
            </div>
        </>
    )
}