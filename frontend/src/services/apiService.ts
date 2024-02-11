import axios from "axios";

const baseUrl = "http://localhost:5187"

interface CreateLembrete {
    name: string,
    date: string
}

export const createLembrete = async (data: CreateLembrete) => {
    try {
        const response = await axios.post(`${baseUrl}/api/Lembrete`, data);
        return response.data;
    } catch (error) {
        console.error("Erro ao criar lembrete:", error);
        throw error;
    }
}