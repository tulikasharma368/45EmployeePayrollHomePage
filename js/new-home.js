window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
});
//UC4
//template literal ES6
const createInnerHtml = () => {
    const headerHtml = "  <th></th><th>Name</th><th>Gender</th><th>Department</th><th>Salary</th><th>Start Date</th><th>Actions</th>";

    let innerHtml = `${headerHtml}`;
    let empPayrollList = createEmployeePayrollJSON();
    for (const empPayrollData of empPayrollList){
        innerHtml = `${innerHtml}
            <tr>
                <td>
                    <img class="profile" src="${empPayrollData._profilePic}" alt="">
                </td>
                <td>${empPayrollData._name}</td>
                <td>${empPayrollData._gender}</td>
                <td>
                    <div class="dept-label">${getDeptHtml(empPayrollData._department)}</div>
                </td>
                <td>${empPayrollData._salary}</td>
                <td>${empPayrollData._startDate}</td>
                <td>
                    <img name="${empPayrollData._id}"  onclick="remove(this)"
                        src="/assets/images/delete-black-18dp.svg"
                        alt="delete">
                    <img name="${empPayrollData._id}" onclick="update(this)"
                        src="/assets/images/create-black-18dp.svg" alt="edit">
                </td>
            </tr>
            `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

const createEmployeePayrollJSON = () =>{
    let employeePayrollListLocal = [
        {
            _name: 'Chandler Bing',
            _gender: 'Male',
            _department: [
                'Engineer',
                'Finance'
            ],
            _salary: '500000',
            _startDate: '02 Aug 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/assets/profile-images/Ellipse -3.png'
        },
        {
            _name: 'Rachel Green',
            _gender: 'Female',
            _department: [
                'HR', 
                'Sales'
            ],
            _salary: '600000',
            _startDate: '20 July 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/assets/profile-images/Ellipse -1.png'
        },
        {
            _name: 'Joey Tribuani',
            _gender: 'Male',
            _department: [
                'Other' 
            ],
            _salary: '700000',
            _startDate: '01 Oct 2021',
            _note: '',
            _id: new Date().getTime(),
            _profilePic: '/assets/profile-images/Ellipse -8.png'
        }
    ];
    return employeePayrollListLocal;
}

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for(const dept of deptList){
        deptHtml = `${deptHtml}<div class = "dept-label">${dept}</div>`
    }
    return deptHtml;
}