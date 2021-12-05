import React from "react";
import Movie from "./Movie";
import { Reviewslist } from "./ReviewsList";

const Movies = [{Id : 0,Title : 'Test Movie', Year : '2020', Desc : null, TempStar : 4},
{Id : 1,Title : 'Test Movie 2', Year : '2021', Desc : 'The Sequal to "Test Movie".', TempStar : 2.5},
{Id : 2,Title : 'Alien', Year : '1979', Desc : 'In deep space, the crew of the commercial starship Nostromo is awakened from their cryo-sleep capsules halfway through their journey  home to investigate a distress call from an alien vessel. The terror begins when the crew encounters a nest of eggs inside the alien ship. An organism from inside an egg leaps out and attaches itself to one of the crew, causing him to fall into a coma', TempStar : 4.5},
{Id : 3,Title : 'Ant-Man', Year : '2015', Desc : null, TempStar : 4.5},
{Id : 4,Title : 'Hamilton', Year : '2020', Desc : null, TempStar : 4.5},
{Id : 5,Title : 'Robin Hood', Year : '1973', Desc : null, TempStar : 4.5},
{Id : 6,Title : 'Serenity', Year : '2005',Desc : null, TempStar : 4.5},
{Id : 7,Title : 'Maleficent', Year : '2014', Desc : null, TempStar : 4.5},
{Id : 8,Title : 'Spider-Man Into the Spider-Verse', Year : '2018', Desc : null, TempStar : 4.5},
{Id : 9,Title : 'Terror of Mechagodzilla', Year : '1975', Desc : null, TempStar : 4.5},
{Id : 10,Title : 'Up', Year : '2009', Desc : null, TempStar : 4.5},
{Id : 11,Title : 'Valerian and the City of a Thousand Planets', Year : '2017', Desc : null, TempStar : 4.5},
{Id : 12,Title : 'Venom', Year : '2018', Desc : null, TempStar : 4.5}];

export default class MovieList extends React.Component {
    constructor(props){
        super(props)
        this.state = {           

        };
        //this.calcStar.bind(this);
    }


    // calcStar(Id) {
    //     console.log("calc")
    //     let Staramount = 0;
    //     console.log(Reviewslist[Id]);
    //     Reviewslist[Id].map((e) => 
    //         {Staramount += parseInt(e.Amount);
    //         console.log(Staramount);}
    //     );

    //     Staramount = Staramount / (Reviewslist[Id]).length;
        

    //     // this.setState({
    //     //     Img : this.props.Img,
    //     //     Title : this.props.Title,
    //     //     Desc : this.props.Desc,
    //     //     Id : this.props.Id,
    //     //     StarRate : Staramount
    //     // })
    //     return(Staramount);
    // }

    MovelistMake(props){
        //this.calcStar();
        const movs = props.movs;
        // let el = this.calcStar(0);
        // console.log(el);
        const movslist = movs.map((e) =>
                    <Movie Id={e.Id} Title={e.Title} Year={e.Year} Desc={e.Desc} StarRate={'0'} Img={`./Posters/${e.Title} (${e.Year}).jpeg`} key={e.Id}/>
        
        );
        return(
            movslist
        )
    }

    render() {
        return(
            <div className='w-50 mx-auto'>
                <this.MovelistMake movs={Movies}/>
            </div>
        )
    }
}