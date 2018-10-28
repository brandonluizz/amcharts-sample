import React from 'react'

class SummaryBox extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h5>Vendas Totais</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6><span style={{display: 'block'}}>Autorizadas</span> R$10.000,00</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <h6 style={{fontSize: '14px'}}><span style={{display: 'block', fontSize: '12px'}}>Autorizadas</span> R$10.000,00</h6>
                    </div>
                    <div className="col">
                        <h6 style={{fontSize: '14px'}}><span style={{display: 'block', fontSize: '12px'}}>Autorizadas</span> R$10.000,00</h6>
                    </div>
                    <div className="col">
                        <h6 style={{fontSize: '14px'}}><span style={{display: 'block', fontSize: '12px'}}>Autorizadas</span> R$10.000,00</h6>
                    </div>
                </div>
            </div>
        )
    }
}

export default SummaryBox