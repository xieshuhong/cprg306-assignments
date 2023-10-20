import { useEffect, useState } from "react";

export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    async function fetchMealIdeas() {
        try{
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            console.log('data: ' + data);
            setMeals(data.meals);
        }catch(error) {
            console.log("Error", error);
        }
    }
    
    useEffect(() => {
        fetchMealIdeas();
    }, [ingredient])


    return(
        <main>
                <div>
                    <h3 className="text-xl font-bold">Meal Ideas</h3>
                    <p>{ingredient? `Here are some meal ideas using ${ingredient}: ` : `No meal ideas found for: ${ingredient}` }</p>
                    <ul>
                       {meals && meals.map((item) => {
                               return(
                                <li class="p-2 m-1 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">{item.strMeal}</li>
                               )

                            })
                        }
                    </ul>
                </div>
        </main>
    );

}