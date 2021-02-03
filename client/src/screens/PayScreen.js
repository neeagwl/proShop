import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux';
import Modal from '../components/Modal';
import {Link} from 'react-router-dom';
import {payOrder} from '../actions/orderActions';

const PayScreen = ({match,history}) => {
    const dispatch = useDispatch();
    const orderId= match.params.id;

    const orderPay = useSelector(state=>state.orderPay);
    const{success} = orderPay;

    const handleClick=()=>{
        console.log("payed")
        dispatch(payOrder(orderId))
    }

    useEffect(() => {
        if(success) {
            history.push(`/order/${orderId}`)
        }
    }, [success,history,orderId]) 

    const renderAction=()=>{
        return (
            <React.Fragment>
                <button  className="ui negative button" onClick={handleClick}>Pay Now</button>
                        <Link to={`/order/${orderId}`} className="ui button">Cancel</Link>
            </React.Fragment>
        )
    }

    const renderContent=()=>{
        
        return "Are you sure you want to confirm your payment? "
    }




    return (
        
            <Modal title="Pay for your Order"
                        content={renderContent()}
                        action={renderAction()}
                        onDismiss={()=>history.push(`/order/${orderId}`)}
                    />
    )
}

export default PayScreen
