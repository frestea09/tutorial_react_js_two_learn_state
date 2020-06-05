import React from 'react'

class Header extends React.Component{
    constructor(){
        super()
        this.state = {
            message : 'Selamat Datang Pelanggan'
        }
    }
    prosesLogOut(){
        this.setState(
            {
                message:'Selamat Jalan Pelanggan'
            }
        )
    }
    render(){
        return(
            <div>
                <h1>Selamat Datang {this.props.name}</h1>
                <h3>{this.state.message}</h3>
                <button onClick={()=>{
                            this.prosesLogOut()}}
            >Log Out</button>
            </div>
        );
    }
}

export default Header