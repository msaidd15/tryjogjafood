import React from "react";
import Image from "./Image";
import Title from "./Tittle";
import Description from "./Description";

const Card = ({ imageSrc, imageAlt, title, description }) => {
    return (
        // <div className="w-auto sm:mx-auto bg-slate-300 overflow-hidden">
        //     <div className="text-left">
        //     <Title text={title} />
        //     </div>
        
        // <Image src={imageSrc} alt={imageAlt} />
        // </div>


        <div className="card flex flex-col lg:flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg">
            <Image src={imageSrc} alt={imageAlt}  className="thumbnail h-72 w-96 mx-auto"/>
            <div className="card-details">

                <div className="top flex flex-row justify-between mx-4 font-semibold text-gray-500">
                    <div className="tag">#food</div>
                </div>

                <div className="middle mx-2">
                    <Title text={title}/>
                    <Description text={description} />

                </div>

                <div className="bottom flex justify-between mx-2">
                    <div className="auther flex">
                        <h4></h4>
                        <div className="readmore">
                        <a href="#">Readmore</a>
                        </div>
                    </div>
                </div>

            </div>
            

        </div>

    )
}

export default Card;

