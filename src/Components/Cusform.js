import React ,{ useState }from 'react'
import { Control, LocalForm, Errors } from 'react-redux-form';
import './contactus.css'
function Cusform() {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [phonenum, setPhonenum] = useState(0);
    let [message, setMessage] = useState('');

    function handleSubmit(values){
        console.log(JSON.stringify(values))
        setName(values.name)
        setEmail(values.email)
        setPhonenum(values.phonenum)
        setMessage(values.message)
    }

    return (
        <div className="">
            <LocalForm onSubmit={(values)=>handleSubmit(values)}>
            <div className="row pr-4 pl-4">
            <div className="col-md-6 center">
                    <div className="form-group">
                        <Control.text model='.name' id='name' name="name" placeholder='Name *' className="form-control"/>
                    </div>
            </div>
            </div>
            <div className="row pr-4 pl-4">
            <div className="col-md-6 center">
                    <div className="form-group">
                        <Control.text model='.email' id='email' name="email" placeholder='Email *' className="form-control"/>
                    </div>
            </div>
            </div>
            <div className="row pr-4 pl-4">
            <div className="col-md-6 center">
                    <div className="form-group">
                        <Control.text model='.phonenum' id='phonenum' name="phonenum" placeholder='Phone Number*' className="form-control"/>
                    </div>
            </div>
            </div>
            <div className="row pr-4 pl-4">
            <div className="col-md-6 center">
                    <div className="form-group">
                        <Control.textarea model='.message' id='message' name="message" placeholder='Message*'  rows="7" className="form-control"/>
                    </div>
            </div>
            </div>
            <div className="row pr-4 pl-4">
            <div className="col-md-6 center">
                    <div className="form-group">
                        <button type="submit" className="btn  pr-5 pl-5 mt-3 contactsubmitbtn mb-5">SUBMIT</button>
                    </div>
            </div>
            </div>
            </LocalForm>
        </div>
    )
}

export default Cusform
