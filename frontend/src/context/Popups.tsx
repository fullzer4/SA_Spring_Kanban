import { createContext, useState } from "react";

export const PopupContext = createContext<any>(()=>{})

export const PopupProvider = ({ children }: any) => {

    const [add, setAdd] = useState("Background off")
    const [edit, setEdit ] = useState("Background off")

    const changeAddState = (e:any) => {
        e.preventDefault()
        if(add === "Background"){
            setAdd("Background off")
        }else{
            setAdd("Background")
        }   
    }

    const changeEditState = (e:any) => {
        e.preventDefault()
        if(edit === "Background"){
            setEdit("Background off")
            
        }else{
            setEdit("Background")
        }
    }   

    return(
        <PopupContext.Provider value={{
            setAdd,
            add,
            changeAddState,
            setEdit,
            edit,
            changeEditState,
            }}> 
            {children}
        </PopupContext.Provider>
    )
}