import React from 'react'
class Device extends React.Component {
    key = 'CtlmtMO8ES1BK9HgNHlzKyoc6WAJSn';
    EnterpriseID = 'fe66c0a8-e2ee-491c-b931-bb7e32cafe79';

    // API URLs
    getDeviceURL = `https://zctse-api.esper.cloud/api/v1/enterprise/${this.EnterpriseID}/device`;

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {
                count: 0,
                results: []
            }
        };
    }

    componentDidMount() {
        fetch(this.getDeviceURL, {
            "method": "GET",
            "headers": {
                "Authorization": `Bearer ${this.key}`,
                "content-Type": "application/json"
            }
        }).then(res => res.json()).then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    items: {
                        count: result.count,
                        results: result.results
                    }
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div className="row">
                    <div className="col-12">
                        <h3>All Device ({items.count})</h3>
                        <ul className="looped">
                            {items.results.map((data, i) => (
                                <li >
                                    <div className="listItem">
                                        <div className="row">
                                            <div className="col-sm-1">
                                                <div className="image">
                                                    <img src="https://cdn4.iconfinder.com/data/icons/business-463/512/business_corporate_group_office-40-512.png"
                                                        alt="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="name">
                                                    {data.device_name}
                                                </div>
                                            </div>
                                            <div className="col-sm-5">
                                                <div className="status">
                                                    <span>{data.created_on}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }
}
export default Device