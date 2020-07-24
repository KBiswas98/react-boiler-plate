import { SAVE_USER } from "../config/constant";
import axios from 'axios'
import { API_USERS_DATA } from "../../utilits/api/Path";

export const getDog = () => ({
    type: SAVE_USER,
    payload: axios.get(API_USERS_DATA)
});