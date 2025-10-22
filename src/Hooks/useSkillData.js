import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useSkillData = () => {
     const [skillData, setSkillData] = useState([])
    const [loading,setLoading]=useState(true)
    const [error, setError] = useState(null)

     useEffect ( () =>{
        setLoading(true)
        axios('/skillsData.json') 
        .then (data => setSkillData(data.data))
        .catch(err => setError(err))
        .finally(() => setLoading(false))
    },[])

    return {skillData,loading,error}
};

export default useSkillData;