import axios from "axios";

const baseUrl = "http://localhost:5187"

interface CreateLembrete {
    name: string,
    date: string
}

export const createLembrete = async (data: CreateLembrete) => {
    try {
        const response = await axios.post(`${baseUrl}/api/Lembrete`, data)
        return response.data
    } catch (error) {
        console.error("Erro ao criar lembrete:", error)
        throw error
    }
}

export const getLembretes = async () => {
    try {
        const response = await axios.get(`${baseUrl}/api/Lembrete`)
        return response.data
    } catch (error) {
        console.error("Erro ao criar lembrete:", error)
        throw error
    }
}

export const deleteLembretes = async (id: number) => {
    try {
        const response = await axios.delete(`${baseUrl}/api/Lembrete/${id}`)
        return response.data
    } catch (error) {
        console.error("Erro ao criar lembrete:", error)
        throw error
    }
}