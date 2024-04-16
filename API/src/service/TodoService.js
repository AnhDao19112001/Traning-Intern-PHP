import axios from "axios";

const createTodo = async (values,jwtToken) => {
    try {
        const result = await axios.post(`http://localhost:8088/api/createTodo`,values,
    {
        headers: {
            Authorization : `Bearer ${jwtToken}`
        }
    });
        return result.data;
    } catch (error) {
        console.log(error.result.data);   
    } 
}

const search = async (findByName, sortBy, sortOrder, jwtToken) => {
    try {
        const result = await axios.get(`http://localhost:8088/api/todoList`, {
            params: {
                findByName: findByName,
                sortBy: sortBy,
                sortOrder: sortOrder
            },
            headers: {
                'Authorization': `Bearer ${jwtToken}`
            }
        });
        return result.data;
    } catch (error) {
        throw error;
    }
}

const getArchive = async (jwtToken) => {
    try {
        const result = await axios.get(`http://localhost:8088/api/archive`,
    {
        headers: {
            Authorization : `Bearer ${jwtToken}`
        }
    });
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const getFillter = async (jwtToken) => {
    try {
        const result = await axios.get(`http://localhost:8088/api/fillter`,
    {
        headers: {
            Authorization : `Bearer ${jwtToken}`
        }
    });
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const findById = async (id,jwtToken) => {
    try {
        const result = await axios.get(`http://localhost:8088/api/getByID/${id}`,
    {
        headers: {
            'Authorization': `Bearer ${jwtToken}`
        }
    });
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const updateTodo = async (id,todo,jwtToken) => {
    try {
        const result = await axios.patch(`http://localhost:8088/api/update/${id}`,todo,{
            headers:{
                Authorization: `Bearer ${jwtToken}`
            }
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const deleteTodo = async (_id,jwtToken) => {
    try {
        const result = await axios.delete(`http://localhost:8088/api/delete/${_id}`,{
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const restoreTodo = async (_id,jwtToken) => {
    try {
        const result = await axios.delete(`http://localhost:8088/api/restore/${_id}`,{
            headers: {
                Authorization: `Bearer ${jwtToken}`
            }
        });
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const changeStatusTodo = async (id,jwtToken) => {
    try {
      const result = await axios.patch(`http://localhost:8088/api/status/${id}`,null,{
        headers: {
            Authorization: `Bearer ${jwtToken}`
        }
      });
      return result.data;
    } catch (error) {
      throw error;
    }
  }

const typeStatus = async () => {
    try {
        const result = await axios.get(`http://localhost:8088/api/type`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const todoService = {
    createTodo,
    findById,
    updateTodo,
    deleteTodo,
    search,
    changeStatusTodo,
    typeStatus,
    getArchive,
    getFillter,
    restoreTodo
} 
export default todoService;