import React from "react";
import { getPokemon } from "../Services/pokeAPI";
import DetailsPage from "./DetailsPage";
import useStore from "../store/PokemonData";
import Image from "../assets/BgImage.jpg";
import blackIcon from "../assets/blackLogo.jpg";

function Home(){

    const { isLoading, Pokemons} = useStore();
    const [data, setData] = React.useState(Pokemons);
    
    const [showPokemon, setShowPokemon] = React.useState(null);

    console.log("isLoading : ", isLoading);
    return (
        <div 
            className=" bg-[#E8F0FE] h-screen w-screen "
            style={{backgroundImage:`url(${Image})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
        >
            {/* header */}
            <nav className="h-15 shadow-xl bg-black flex items-center justify-center relative" > <img src={blackIcon}  onClick={() => setData([])} className=" cursor-pointer h-[80%] absolute left-10" /> <h1 className="font-bold text-3xl text-white " >The Pokemon Research Lab</h1></nav>
        
            {
                data?.length == 0 ? (
                    <div className=" h-[90vh] flex items-center justify-center" >
                        <button 
                            type="button"
                            className="font-semibold text-white text-xl bg-[#4B4B4B] h-fit px-16 py-4 rounded-full cursor-pointer border border-[#4B4B4B] hover:bg-white hover:text-[#4B4B4B]" 
                            onClick={() => getPokemon(setData)}
                        >
                            Fetch Full Pokedex Dataset
                        </button>
                    </div>
                ) : (
                    <div className="mx-auto w-11/12 h-[90vh] py-5 space-y-5" >
                        <h1 className="text-black font-bold text-4xl" >
                            Pokemon - I Choose You!
                        </h1>
                        <div className="scroll rounded border-4 border-black flex flex-col gap-2 h-[75vh] overflow-y-auto p-2" >
                            <div className="grid grid-cols-5 gap-2" >
                                {
                                    data?.length > 0 && data?.map((pokemonData, index) => (
                                        <div 
                                            key={index} 
                                            class="relative group cursor-pointer p-4 border aspect-square flex items-center justify-center border-gray-200 col-span-1 bg-gray-50 rounded-lg shadow-md  bg-linear-to-t from-sky-500 to-indigo-500"
                                        >    
                                            <h2 className="text-white font-bold text-4xl" >{pokemonData?.name?.charAt(0).toUpperCase() + pokemonData?.name?.slice(1) }</h2>

                                            <div className=" absolute hidden group-hover:flex items-center justify-center h-full w-full rounded-lg inset-0 bg-black/50" >
                                                <button
                                                    type="button"
                                                    className="rounded-full px-4 py-2 text-lg cursor-pointer  bg-white text-blue-500 font-bold "
                                                    onClick={() => setShowPokemon(pokemonData?.url)}
                                                >
                                                    View Details
                                                </button>
                                            </div>
                                        
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>    
                )
            }


            {
                isLoading && <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" >
                    <div class="custom-loader"></div>
                </div>
            }

            {
                showPokemon !== null && <DetailsPage api={showPokemon} cancle={setShowPokemon} />
            }
        </div>
    )
}

export default Home;