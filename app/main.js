import React from 'react'
import ReactDOM from 'react-dom'
import GetRequest from "./axiosGetRequest"

export default class Content extends React.Component {

    render() {
        return (
            <GetRequest
                url={"https://a84gsofkhk.execute-api.ap-southeast-2.amazonaws.com/develop/cloudwatch?metric=Outstanding Tasks&namespace=dev1/TriggerTask&name=slave01"}/>
        )

    }
}

ReactDOM.render(<Content/>, document.getElementById('content'));