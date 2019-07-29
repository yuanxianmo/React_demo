import React from 'react'
 function Main(){
    return(
        <div className="container">
            <div className="row">
                <div className="col"></div>
                <div className="col-8">
                    <QustionLists/>
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
 }
class QustionLists extends React.Component {
    constructor(props){
        super(props)
        this.state={
            inputTitle:'您的问题标题',
            inputTextarea:'问题描述',
            QustionList:[{
                title: 'Card title01',
                diQ: 6,
                content: 'With supporting text below as a natural lead-in to additional content.'
            },
            {
                title: 'Card title02',
                diQ: 12,
                content: 'With supporting text below as a natural lead-in to additional content.'
            },
            {
                title: 'Card title03',
                diQ: 8,
                content: 'With supporting text below as a natural lead-in to additional content.'
            }]
        }
        this.handleSeubmit=this.handleSeubmit.bind(this)
        this.handleInput=this.handleInput.bind(this)
        this.handleInputTextarea=this.handleInputTextarea.bind(this)
        this.handleCountJian=this.handleCountJian.bind(this)
        this.handleCountJia=this.handleCountJia.bind(this)
    }
    handleSeubmit(e){
        e.preventDefault()
        var data=[]
        if(this.state.inputTitle&&this.state.inputTextarea){
            data.push({
                title:this.state.inputTitle,
                content:this.state.inputTextarea,
                diQ:0
            })
            this.setState({QustionList:this.state.QustionList.concat(data)})
        }else {
            alert('请填写问题标题或者描述内容！！！')
        }

    }
    handleInput(e){
        e.preventDefault()
        this.setState({
            inputTitle:e.target.value
        })
}
    handleInputTextarea(e){
        e.preventDefault()
        this.setState({
            inputTextarea:e.target.value
        })
    }
    handleCountJian(index,e){
        e.preventDefault()
        this.state.QustionList[index].diQ=this.state.QustionList[index].diQ-1
        this.setState({
            QustionLists:this.state.QustionList
        })


    }
    handleCountJia(index,e){
        e.preventDefault()
        this.state.QustionList[index].diQ=this.state.QustionList[index].diQ+1
        this.setState({
            QustionLists:this.state.QustionList
        })
    }
    render(){
        var opData=this.state.QustionList
        opData.sort(function(a,b){
            return b.diQ-a.diQ
        })
        var lists=opData.map((item,index)=>(
            <div className="card" key={index+1}>
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.content}</p>
                    <button type="button" className="btn btn-primary" onClick={this.handleCountJian.bind(this,index)}>-</button>
                    <span>{item.diQ}</span>
                    <button type="button" className="btn btn-primary" onClick={this.handleCountJia.bind(this,index)}>+</button>
                </div>
            </div>
        ))
        return (
            <div>
                <label htmlFor="basic-url">问题</label>
                <div className="input-group mb-3">
                    <input type="text"  className="form-control" onChange={this.handleInput}  defaultValue={this.state.inputTitle}  aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <div className="input-group mb-3">
                    <input type="text"    className="form-control" onChange={this.handleInputTextarea}  defaultValue={this.state.inputTextarea}  aria-label="Username" aria-describedby="basic-addon1"/>
                </div>
                <button type="button" className="btn btn-secondary">取消</button>
                <button type="button" className="btn btn-success"  onClick={this.handleSeubmit}>确定</button>
                {lists}
            </div>
        )

    }
}
 export default Main
