import axios from "axios";
import toast from "react-hot-toast"


export const getPokemon = async (setData) => {
    const toastId = toast.loading("Loading...");
    try {
        const response = await axios.get(" https://pokeapi.co/api/v2/pokemon");
        if (response?.status !== 200) {
            throw new Error(
                "Something went wront in fetching Pokemon Data"
            );
        }
        setData(response?.data?.results);
        toast.success("Data Fetched");
    } catch (err) {
        console.log("Error : ", err);
        toast.error("Data Not Found");
    }
    toast.dismiss(toastId);
}

export const fetchPokemonDetail = async (api, setPokeMonDetail) => {
     const toastId = toast.loading("Loading...");
     try{
        const response = await axios.get(api);
        if (response?.status !== 200) {
            throw new Error(
                "Something went wront in fetching Pokemon Details"
            );
        }
        setPokeMonDetail(response?.data);
        toast.success("Data Fetched");
     }catch(err){
        console.log("Error : ", err);
        toast.error("Data Not Found");
     }
     toast.dismiss(toastId);
}