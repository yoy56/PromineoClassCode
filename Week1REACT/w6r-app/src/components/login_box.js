import React from "react";

export default class loginBox extends React.Component {
    render() {
        return (
            <div className='border border-info rounded-bottom rounded-3 bg-light w-25 mx-auto'>
                <h3 className='text-primary text-center'>Log In</h3>
                <div className='container text-center'>
                    <form>
                        <input type='text' placeholder='Username'></input> <br/>
                        <input type='password' placeholder='Password'></input> <br/>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}