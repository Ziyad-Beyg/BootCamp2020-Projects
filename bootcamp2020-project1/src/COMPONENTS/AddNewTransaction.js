import React,{useState, useContext} from 'react'
import { GlobalContext } from '../CONFIG/Context'
import '../App.css'

export default function AddNewTransaction() {

    const { dispatch} = useContext(GlobalContext)
    const [userText, setUserText] = useState('')
    const [Amount, setAmount] = useState('')

    async function AddTransaction(){

        if(userText.trim() === '' ) return;
        if(Amount.trim() === '' ) return;

        let data = {
            text : userText,
            amount : Number(Amount),
            id : Math.random().toString(16).slice(2),
        }

        await dispatch({ type:"NEW_TRANSACTION", payload: data})

        setUserText('')
        setAmount('')
    }

    return (
        <div className='newTransactionDiv'>
            <h2 className='newTransactionHeading'>
             Add New Transaction
           </h2>        

           <p className='newTransactionPara1'>
                Text
            </p>    
            <input type='text' value={userText} onChange={(e)=>{setUserText(e.target.value)}} placeholder='Enter Text ...' />
            <p className='newTransactionPara2'>
                Amount <br /> (enter your expense amount with a '-' sign)
            </p>
            <input type= "number" value={Amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder='Enter Amount ...' />

            <div className='addBtnDiv'>
                <button onClick={AddTransaction}> ADD TRANSACTION </button>
            </div>

        </div>
    )
}

