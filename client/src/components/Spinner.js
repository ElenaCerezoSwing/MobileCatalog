import React, { Component } from 'react';


class Spinner extends Component {

    render() {
        return (

            <svg className='spinner-catalog' width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" stroke="#40cae0">
                <g fill="#2478b4" fillRule="evenodd" transform="translate(1 1)" strokeWidth="2">
                    <circle cx="100" cy="100" r="6" strokeOpacity="0">
                        <animate attributeName="r"
                            begin="1.5s" dur="3s"
                            values="6;100"
                            calcMode="linear"
                            repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity"
                            begin="1.5s" dur="3s"
                            values="1;0" calcMode="linear"
                            repeatCount="indefinite" />
                        <animate attributeName="stroke-width"
                            begin="1.5s" dur="3s"
                            values="2;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="100" cy="100" r="6" strokeOpacity="0">
                        <animate attributeName="r"
                            begin="3s" dur="3s"
                            values="6;100"
                            calcMode="linear"
                            repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity"
                            begin="3s" dur="3s"
                            values="1;0" calcMode="linear"
                            repeatCount="indefinite" />
                        <animate attributeName="stroke-width"
                            begin="3s" dur="3s"
                            values="2;0" calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                    <circle cx="100" cy="100" r="8">
                        <animate attributeName="r"
                            begin="0s" dur="1.5s"
                            values="6;1;2;3;4;5;6"
                            calcMode="linear"
                            repeatCount="indefinite" />
                    </circle>
                </g>
            </svg>
        )
    }
}

export default Spinner