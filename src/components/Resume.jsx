import React, { Component } from 'react'

export default class Resume extends Component {
    render() {
        return (
            <div className='m-0 p-0'>
                <div className="container mt-3">
                    <div className="row m-0 p-0">
                        <div className="card m-0 p-0">
                            <div className="card-header bg-light text-center">
                                <p className='text-success'>Your compiled resume is here!</p>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="row">
                                            <div className="col-4">
                                                <p><strong>Name:-</strong></p>
                                                <p><strong>Email id:-</strong></p>
                                                <p><strong>Conatct no.:-</strong></p>
                                                <p><strong>Date of Birth:-</strong></p>
                                                <p><strong>Gender:-</strong></p>
                                                <p><strong>Nationality:-</strong></p>

                                            </div>
                                            <div className="col-8">
                                                <p>Prince Kumar</p>
                                                <p>prince@gmail.com</p>
                                                <p>8677939971</p>
                                                <p>30-May</p>
                                                <p>Male</p>
                                                <p>Indian</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <img src={'./prince.jpeg'} alt="" height={200} className="border border-primary" />
                                    </div>
                                    <hr style={{ border: '2px dotted green' }} />
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <p><strong>About yourself:-</strong></p>
                                    </div>
                                    <div className="col-lg-8">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quis perferendis enim pariatur omnis nostrum doloribus, sapiente, assumenda vero ipsam molestiae libero tempora similique aliquid? Sit accusamus accusantium laborum ea cupiditate doloribus modi commodi vitae temp
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <p><strong>Work experience:-</strong></p>
                                    </div>
                                    <div className="col-lg-8">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quis perferendis enim pariatur omnis nostrum doloribus, sapiente, assumenda vero ipsam molestiae libero tempora similique aliquid? Sit accusamus accusantium laborum ea cupiditate doloribus modi commodi vitae temp
                                        </p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4">
                                        <p><strong>Permanent Address:-</strong></p>
                                    </div>
                                    <div className="col-lg-8">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint quis perferendis enim pariatur omnis nostrum doloribus, sapiente, assumenda vero ipsam molestiae libero tempora similique aliquid? Sit accusamus accusantium laborum ea cupiditate doloribus modi commodi vitae temp
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
