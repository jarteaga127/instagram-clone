import { StoriesData } from "../data/StoriesData";
import Story from "./Story";
import "../styles/stories.css";

export default function Stories() {

const slideLeft = () => {
var slider = document.getElementsByClassName("slider");
slider.scrollLeft = slider.scrollLeft - 500;
}

const slideRight = () => {
    var slider = document.getElementsByClassName("slider");
    slider.scrollLeft = slider.scrollLeft + 500;    
}

    return(
        <div className="stories">
            <div className="horizontal-scroll">
                <div className="scroll-left-cont">
                    <button onClick={slideLeft}><i class="fa-solid fa-chevron-left"></i></button>
                </div>
                <div className="slider">
                <Story stories={StoriesData}/>
                </div>
                <div className="scroll-right-cont">
                    <button onClick={slideRight}><i class="fa-solid fa-chevron-right"></i></button>
                </div>
            </div>
        </div>
    )
}