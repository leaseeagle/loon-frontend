import React from "react"
import Axios from "axios"
import {AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios} from 'react-axios'
import {Chart}  from 'react-google-charts';

export default class AxiosGetRequest extends React.Component {

    constructor(props) {
        super(props);
        this.axiosInstance = Axios.create({
                                              baseURL: props.url,
                                              timeout: 2000,
                                              headers: {'Accept': 'application/json','Authorization':'allow993874657'}
                                          });
    }

    render() {
        return (<div>
            <AxiosProvider instance={this.axiosInstance}>
                <Get url={this.props.url}>
                    {(error, response, isLoading) => {
                        if (error) {
                            return <div>Opps, {error.message}</div>
                        }
                        else if (isLoading) {
                            return <div>loading</div>
                        }
                        else if (response !== null) {
                            var i = 1;
                            var data = JSON.parse(response.data);
                            /*                            var list = data.Datapoints.map((datapoint) => {
                                                            return <ListGroupItem>Timestamp : {datapoint.Timestamp} Maximum: {datapoint.Maximum}
                                                                Unit: {datapoint.Unit}</ListGroupItem>;
                                                        });*/

                            var chartData  = [['Timestamp', 'Maximum']];
                            data.Datapoints.map((datapoint) => {
                                chartData.push([datapoint.Timestamp, datapoint.Maximum]);
                            });

                            return (
                                <div className={'my-pretty-chart-container'}>
                                    <Chart
                                chartType="ScatterChart"
                                data={chartData}
                                options={{}}
                                graph_id="ScatterChart"
                                width="100%"
                                height="400px"
                                legend_toggle
                                    /></div>)
                        }
                        return (<div>Default message before request is made.</div>)
                    }}
                </Get>
            </AxiosProvider>
        </div>)
    }
}