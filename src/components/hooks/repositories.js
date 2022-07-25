import axios from "axios";
import React, { useEffect, useState } from "react";

const useRepositories = () => {
    const [ data, setData ] = useState(null)
    
    const getRepositories = async () => {
        const response = await axios('http://192.168.0.248:5000/api/repositories')
        setData(response.data)
    }

    useEffect(() => {
        getRepositories()
    }, [])

    const repositoriesNodes = data
    ? data.edges.map( edge => edge.node) : []

    return {repositories: repositoriesNodes}
}

export default useRepositories;