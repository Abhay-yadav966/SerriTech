import axios from "axios";
import toast from "react-hot-toast"
import useStore  from "../store/PokemonData"

export const getPokemon = async (setData) => {
    const { addPokemons, setLoading } = useStore.getState();
    const toastId = toast.loading("Loading...");
    setLoading(true);
    try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");
        if (response?.status !== 200) {
            throw new Error(
                "Something went wront in fetching Pokemon Data"
            );
        }

        addPokemons(response?.data?.results);
        setData(response?.data?.results);
        toast.success("Data Fetched");
    } catch (err) {
        console.log("Error : ", err);
        toast.error("Data Not Found");
    }
    setLoading(false);
    toast.dismiss(toastId);
}

export const fetchPokemonDetail = async (api, setPokeMonDetail) => {
     const { addPokemonDetails } = useStore.getState();
     const toastId = toast.loading("Loading...");
     try{
        const response = await axios.get(api);
        if (response?.status !== 200) {
            throw new Error(
                "Something went wront in fetching Pokemon Details"
            );
        }
        addPokemonDetails(response?.data);
        setPokeMonDetail(response?.data);
        toast.success("Data Fetched");
     }catch(err){
        console.log("Error : ", err);
        toast.error("Data Not Found");
     }
     toast.dismiss(toastId);
}