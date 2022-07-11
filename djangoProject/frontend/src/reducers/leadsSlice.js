// import {GET_LEADS} from '../actions/types.js';
import leadService from '../actions/leadService'
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

const initialState = {
    leads: []
}


//Get leads
export const getLeads = createAsyncThunk('leads/getAll', async (_,thunkAPI)=>{
    try{
        const response = await leadService.getLeads()
        return response
    }catch (error){
        console.log(error)
    }  
})

//delete lead
export const deleteLead = createAsyncThunk(
    'Leads/delete',
    async (id) => {
        try{
            // const token = thunkAPI.getState().auth.user.token 
            return await leadService.deleteLead(id)
        }catch (error){
            console.log(error)
        }
    }
)

//Create lead
export const createLead = createAsyncThunk(
    'leads/create',
    async (leadData, thunkAPI) => {
        try{
            // const token = thunkAPI.getState().auth.user.token
            
            return await leadService.createLead(leadData)
        }catch (error){
            console.log(error)
        }
    }
)

export const leadsSlice = createSlice({
    name: 'lead',
    initialState,
    reducers:{
        reset: (state) => initialState,
    },
    extraReducers: (builder) =>{
        builder
        .addCase(getLeads.pending,(state)=>{
            console.log('getleads pending')
        })
        .addCase(getLeads.fulfilled,(state,action)=>{

            state.leads = action.payload
            // console.log(action)
        })
        .addCase(getLeads.rejected,(state,action)=>{
            console.log('getleads rejected')
            state.message = action.payload
        })
        .addCase(deleteLead.pending,(state)=>{
            console.log('deleteLead pending')
        })
        .addCase(deleteLead.fulfilled,(state,action)=>{

            state.leads = state.leads.filter((lead) => lead.id !== action.meta.arg)

        })
        .addCase(deleteLead.rejected,(state,action)=>{
            console.log('deleteLead rejected')
            state.message = action.payload
        })
        .addCase(createLead.pending,(state)=>{
            console.log('createLead pending')
        })
        .addCase(createLead.fulfilled,(state,action)=>{
            // console.log('slice')
            // console.log(state.leads)
            // console.log(action)
            state.leads.push(action.payload.data)
        })
        .addCase(createLead.rejected,(state,action)=>{
            console.log('createLead rejected')
            state.message = action.payload
        })
    }
})

export const {reset} = leadsSlice.actions
export default leadsSlice.reducer