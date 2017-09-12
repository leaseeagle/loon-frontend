import React from "react"
import Axios from "axios"
import {AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios} from 'react-axios'

export default class AxiosGetRequest extends React.Component {

    constructor(props) {
        super(props);
        this.axiosInstance = Axios.create({
                                              baseURL: props.url,
                                              timeout: 2000,
                                              headers: {'Accept': 'application/json'}
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
                            var list = data.Datapoints.map((datapoint) => {
                                return <div key={i++}>Timestamp : {datapoint.Timestamp} Maximum: {datapoint.Maximum}
                                     Unit: {datapoint.Unit}</div>;
                            });

                            return (<div>
                                <div>{data.Label}</div>
                                <div>{list}</div>
                            </div>)
                        }
                        return (<div>Default message before request is made.</div>)
                    }}
                </Get>
            </AxiosProvider>
        </div>)
    }
}