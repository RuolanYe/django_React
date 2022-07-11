import axios from 'axios';

import { GET_LEADS } from './types';

//GET LEADS
export const getLeads = async () => {

    const response = await axios.get("/api/leads/")
    // console.log('service')
    // console.log(response)
    
    return response.data
}

//delete lead
const deleteLead = async (leadId) => {
    // const config ={
    //     headers:{
    //         Authorization: `Bearer ${token}`
    //     }
    // }
    const response = await axios.delete("/api/leads/" + leadId)
    
    // return response.data
    return response
}


//create lead
const createLead = async (leadData) => {
    // const config ={
    //     headers:{
    //         Authorization: `Bearer ${token}`
    //     }
    // }

    const response = await axios.post("/api/leads/", leadData)
    // console.log('service')
    // console.log(leadData)
    // console.log(response)
    return response
}

const leadService = {
    getLeads,
    deleteLead,
    createLead,
}

export default leadService