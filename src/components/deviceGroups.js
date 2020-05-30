import React from 'react'
class DeviceGroup extends React.Component {
    key = 'CtlmtMO8ES1BK9HgNHlzKyoc6WAJSn';
    EnterpriseID = 'fe66c0a8-e2ee-491c-b931-bb7e32cafe79';

    // API URLs
    getDeviceGRpURL = `https://zctse-api.esper.cloud/api/v1/enterprise/${this.EnterpriseID}/devicegroup`;

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
        fetch(this.getDeviceGRpURL, {
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
                                <li>
                                    <div className="listItem">
                                        <div className="row">
                                            <div className="col-sm-1">
                                                <div className="image">
                                                    <img src="https://zctse.esper.cloud/static/media/phone.1976b651.svg" alt="" />
                                                </div>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="name">
                                                    {data.name}
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
export default DeviceGroup