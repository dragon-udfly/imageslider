import React,  {useState, useEffect} from 'react'; 
import '../CSS/FruitShowCase.css'

function FruitShowCase(){
    const leftFruits = [
        {name: "Apple", image:"/images/apple.jpg"}, 
        {name: "Banana", image:"/images/banana.jpg"}, 
        {name: "Orange", image:"/images/orange.jpg"},
        
    ];

    const rightFruits = [
        {name: "Avacoda", image:"/images/mango.jpg"},
        {name: "pineapple", image: "/images/pineapple.jpg"},
        {name: "WoodApple", image: "/images/woodapple.jpg"}

    ];

    /* ... concatination in react */
    const allFruits = [...leftFruits,...rightFruits];
    const[currentIndex, setCurrentIndex] = useState(0); /*initializing to 0 */

    useEffect(() => {
        // Set up the interval to update the current index every 3 seconds
        const interval = setInterval(() => {
          setCurrentIndex((prev) => (prev + 1) % allFruits.length);
        }, 3000);
    
        // Cleanup function to clear the interval when the component unmounts
       return () => clearInterval(interval);
      }, [allFruits.length]); // Dependency array ensures the effect runs when allFruits.length changes
    return(
        <div className="container">
            <div className="side">
                {
                    //left fruits
                    leftFruits.map((fruit,i)=>(
                        <div key={i} className={`fruit ${allFruits[currentIndex].name === fruit.name ? "active" : " "}`}>
    
                        {fruit.name}
                        </div>
                    ))
                }
            </div>
    
            <div className="image-box">
                <img src={allFruits[currentIndex].image}></img>
    
            </div>
            <div className="side">
                {
                    //left fruits
                    rightFruits.map((fruit,i)=>(
                        <div key={i} className={`fruit ${allFruits[currentIndex].name === fruit.name ? "active" : " "}`}>
    
                        {fruit.name}
                        </div>
                    ))
                }
            </div>
    
        </div>
    )
}

export default FruitShowCase