import React from "react";
import Movie from "./Movie";

export default class MovieList extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        };
    }

    render() {
        return(
            <div className='w-50 mx-auto'>
                <Movie Id='0' Title='Test Movie' StarRate={4}/>
                <Movie Id='1' Title='Test Movie 2' StarRate={2.5} Desc='The Sequal to "Test Movie".'/>
                <Movie Id='2' Title='Alien' StarRate={4.5} Desc='In deep space, the crew of the commercial 
                starship Nostromo is awakened from their cryo-sleep capsules halfway through their journey 
                home to investigate a distress call from an alien vessel. The terror begins when the crew 
                encounters a nest of eggs inside the alien ship. An organism from inside an egg leaps out 
                and attaches itself to one of the crew, causing him to fall into a coma.' 
                Img='./Posters/Alien (1979).jpeg'/>
                <Movie Id='3' Title='Ant-Man' StarRate={4.5} Img='./Posters/Ant-Man (2015).jpeg'/>
                <Movie Id='4' Title='Hamilton' StarRate={4.5} Img='./Posters/Hamilton (2020).jpeg'/>
                <Movie Id='5' Title='Maleficent' StarRate={4.5} Img='./Posters/Maleficent (2014).jpeg'/>
                <Movie Id='6' Title='Robin Hood' StarRate={4.5} Img='./Posters/Robin Hood (1973).jpeg'/>
                <Movie Id='7' Title='Serenity' StarRate={4.5} Img='./Posters/Serenity (2005).jpeg'/>
                <Movie Id='8' Title='Spider-Man Into the Spider-Verse' StarRate={4.5} Img='./Posters/Spider-Man- Into the Spider-Verse (2018).jpeg'/>
                <Movie Id='9' Title='Terror of Mechagodzilla' StarRate={4.5} Img='./Posters/Terror of Mechagodzilla (1975).jpg'/>
                <Movie Id='10' Title='Up' StarRate={4.5} Img='./Posters/Up (2009).png'/>
                <Movie Id='11' Title='Valerian and the City of a Thousand Planets' StarRate={4.5} Img='./Posters/Valerian and the City of a Thousand Planets (2017).jpeg'/>
                <Movie Id='12' Title='Venom' StarRate={4.5} Img='./Posters/Venom (2018).jpg'/>
            </div>
        )
    }
}