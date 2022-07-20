import React, { Component } from 'react'

export default class Forms extends Component {
    render() {
        return (
            <div>
                <div className="container bg-warning p-2 mt-2">
                    <h3 className='text-center bg-light mt-2'>Fill your detail here to build your resume!</h3>
                    <form action="" method='post'>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="name" placeholder='name' name="name" />
                                    <label>First Name</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="mname" placeholder='mname' name="mname" />
                                    <label>Middle Name</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="lname" placeholder="lname" name='lname' />
                                    <label>Last Name</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="email" placeholder='email' name="email" />
                                    <label>Email id</label>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-floating">
                                    <input type="number" className="form-control" id="number" placeholder="number" name='number' />
                                    <label>Contact No.</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <div className="form-floating mb-3">
                                    <input type="date" className="form-control" id="dob" placeholder='dob' name="dob" />
                                    <label>Date of birth</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating mb-3">
                                    <select name="" id="" className='form-control'>
                                        <option value="">--Select one--</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                    <label>Gender</label>
                                </div>
                            </div>
                            <div className="col-4">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="nationality" placeholder="nationality" name='nationality' />
                                    <label>Nationality</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-floating">
                                <textarea name="about" id="about" cols="30" rows="10" className='form-control'></textarea>
                                <label>About yourself</label>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="form-floating">
                                <textarea name="work" id="work" cols="30" rows="10" className='form-control'></textarea>
                                <label>Work Experince</label>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="form-floating">
                                <textarea name="address" id="address" cols="30" rows="10" className='form-control'></textarea>
                                <label>Permanent address</label>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="form-group">
                                <input type="submit" value="Create resume now" className='btn btn-success w-100' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
