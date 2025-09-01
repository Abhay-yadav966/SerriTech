import React, { useRef } from "react";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { fetchPokemonDetail } from "../Services/pokeAPI";
import useStore from "../store/PokemonData";
const DetailsPage = ({api, cancle}) => {

    const modelRef = useRef(null);
    const {PokemonDetails} = useStore();
    const [pokeMonDetail, setPokeMonDetail] = React.useState(PokemonDetails);
    
    React.useEffect(() => {
        fetchPokemonDetail(api, setPokeMonDetail);
    }, [api]);

    React.useEffect(() => {
        function handleClickOutside(event){
            if(modelRef.current && !modelRef.current.contains(event.target)){
                cancle(null);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [cancle])

    return (
        <div 
            className="fixed inset-0 bg-white/30  backdrop-blur-md flex items-center justify-center z-50" 
        >
            <div ref={modelRef} className="backdrop-blur-md bg-white/30 border border-white/40 rounded-xl p-10 shadow-lg w-[50%] " >
                <div className=" cursor-pointer absolute top-2 right-2" onClick={() => cancle(null)} >
                    <ClearOutlinedIcon />
                </div>
                <h1 className="text-center font-extrabold text-5xl" >{pokeMonDetail?.name?.charAt(0).toUpperCase() + pokeMonDetail?.name?.slice(1)}</h1>
                <img 
                    src={pokeMonDetail?.sprites?.front_default}
                    className="object-fit object-cover mx-auto h-[30vh] "
                />

                <div className="h-[30vh]" >
                    <h2 className="font-bold text-2xl" >Moves</h2>
                    <div className="flex flex-wrap gap-2 overflow-y-auto  rounded-xl p-4 h-full scroll  border-4 border-black " >
                        {
                            pokeMonDetail?.moves?.map((pokemonMove, index) => (
                                <div
                                    className="rounded-full px-4 py-1 text-md font-semibold bg-red-500 text-white "
                                    key={index}
                                >
                                    <p className="text-nowrap" >{pokemonMove?.move?.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailsPage;