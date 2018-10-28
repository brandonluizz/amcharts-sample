import React from 'react'
import AmCharts from "@amcharts/amcharts3-react";
import charSettings from './chartSettings'
import './index.css'
import SummaryBox from './SummaryBox'

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard-container">
                <div className="row">
                    <div className="col">
                        <AmCharts.React
                            className="my-class"
                            style={{
                                width: "100%",
                                height: "350px",
                                borderBottom: '1px solid #ccc'
                            }}
                            options={charSettings} />
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="dashboard-card-box card-box-border">
                            <SummaryBox />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="dashboard-card-box card-box-border">
                            <SummaryBox />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="dashboard-card-box card-box-border">
                            <SummaryBox />
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div className="dashboard-card-box">
                            <SummaryBox />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard