
import { ADD_EXPENSE, DELETE_EXPENSE, SEARCH_EXPENSE } from "../action-types/expenses";

const initialList=()=>{
    const list= localStorage.getItem("expense-list")
    let expenses=[];
    if(list){
        expenses= JSON.parse(list)
    }
    return expenses;
}
const initialSatate={
    expenseList: initialList(),
    query:"",
};

export const expenseReducer=(state=initialSatate, action)=>{
    switch (action.type) {
        case ADD_EXPENSE:{
            localStorage.setItem("expense-list", JSON.stringify([...state.expenseList,action.data]))
            return{
                ...state,
                expenseList:[...state.expenseList,action.data],
            }
        }
        case DELETE_EXPENSE:{
            const {data} = action;
            const updateList = state.expenseList.filter(
                (item) => item.createdAt !== data.createdAt
            )
            localStorage.setItem("expense-list", JSON.stringify([updateList]))
            return{
                ...state,
                expenseList: updateList,
            }
        }
        case SEARCH_EXPENSE:{
            const {query}=action
            return{
                ...state,
                query,
            }
        }
        default:
            return state;
    }
};