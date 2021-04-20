
    import React, { Component } from 'react';
    import EmployeeServices from './EmployeeServices'
    class ListEmployee extends Component {
        constructor(){
            super();
            this.state={
                employees :[]
            }
        }

        componentDidMount(){
            EmployeeServices.getEmployee().then((res)=>
            {
                this.setState({employees: res.data})
            }
            );
        }

        render() {
            return (
                <div>
                <h2 className="text-center"> List of Employees</h2>
                    <div className="row">
                        <table className="table table-bordered">
                            <tbody>
                                <tr>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Job Role</th>
                                </tr>
                            </tbody>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employees=>
                                        <tr key={employees.id}>
                                            <td>{employees.firstName}</td>
                                            <td>{employees.lastName}</td>
                                            <td>{employees.jobRole}</td>
                                        </tr>
                                    )
                                }                                
                            </tbody>
                        </table>
                    </div>           
                </div>
            );
        }
    }
    
    export default ListEmployee;
