import React from "react"
import { AxiosProvider, Request, Get, Delete, Head, Post, Put, Patch, withAxios } from 'react-axios'

export default class AxiosGetRequest extends React.Component {

    render (){
        return <div>
            <Get url={this.props.url} >
                {(error, response, isLoading) => {
                    if(error){
                        return <div>Opps, {error.message}</div>
                    }
                    else if(isLoading) {
                        return <div>loading</div>
                    }
                    else if (response !== null) {
                        return (<div>{response.data}</div>)
                    }
                    return (<div>Default message before request is made.</div>)
                }}
            </Get>

        </div>
    }
}