import axios from "axios";

let axiosInstance=axios.create({
     baseURL: 'https://bill-management-api-server.vercel.app'
})

const useAxios = () => {
    return axiosInstance;
};

export default useAxios;