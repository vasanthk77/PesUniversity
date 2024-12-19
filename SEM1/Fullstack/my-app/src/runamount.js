import React from "react"
class Demo extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={show:true}

    }
    delhead=()=>
    {
        this.setState({show:false})
    }
    redner()
    {
        let header
        if(this.state.show)
        {
            head=<Child/>

        }
        return(
            <div>
                <button type="button" onClick={this.delhead}>Delete</button>
            </div>
        )
    }

}
class child extends React.Component{
    componentWillUnmount()
    {
        alert("component deleted")

    }
    render()
    {
        return (
            <h1>Unamount</h1>
        )
    }
}
export default Demo

