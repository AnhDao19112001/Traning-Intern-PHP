import axios from "axios";

const createTodo = async (values) => {
    try {
        const result = await axios.post(`http://localhost:8088/api/createTodo`,values);
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
                'Authorization': `Bear ${jwtToken}`
            }
        });
        return result.data;
    } catch (error) {
        throw error;
    }
}

const getArchive = async () => {
    try {
        const result = await axios.get(`http://localhost:8088/api/archive`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const findById = async (id) => {
    try {
        const result = await axios.get(`http://localhost:8088/api/getByID/${id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const updateTodo = async (id,todo) => {
    try {
        const result = await axios.patch(`http://localhost:8088/api/update/${id}`,todo);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const deleteTodo = async (_id) => {
    try {
        const result = await axios.delete(`http://localhost:8088/api/delete/${_id}`);
        return result.data;
    } catch (error) {
        console.log(error);
    }
}

const changeStatusTodo = async (id) => {
    try {
      const result = await axios.patch(`http://localhost:8088/api/status/${id}`);
      return result.status;
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
    getArchive
} 
export default todoService;