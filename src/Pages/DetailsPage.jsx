import React, { useRef } from "react";
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { fetchPokemonDetail } from "../services/pokeAPI";
const DetailsPage = ({api, cancle}) => {

    const popUpRef = useRef();

    const [pokeMonDetail, setPokeMonDetail] = React.useState(null);
    
    React.useEffect(() => {
        fetchPokemonDetail(api, setPokeMonDetail);
    }, [api]);

    return (
        <div ref={popUpRef} className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" >
            <div className=" relative bg-white rounded-lg p-6 w-150 shadow-lg h-[80vh]" >
                <div className="absolute top-2 right-2" onClick={() => cancle(null)} >
                    <ClearOutlinedIcon />
                </div>
                <h1 className="text-center font-extrabold text-5xl" >{pokeMonDetail?.name?.charAt(0).toUpperCase() + pokeMonDetail?.name?.slice(1)}</h1>
                <img 
                    src={pokeMonDetail?.sprites?.front_default}
                    className="object-fit object-cover mx-auto h-[30vh] "
                />

                <div className="h-[30vh]" >
                    <h2 className="font-bold text-2xl" >Moves</h2>
                    <div className="flex flex-wrap gap-2 overflow-y-auto  rounded-xl p-4 h-full scroll  border-4 border-gray-400 " >
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