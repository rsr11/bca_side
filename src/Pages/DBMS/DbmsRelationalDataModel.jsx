import React from 'react'

const DbmsRelationalDataModel = () => {
  return (
    <div  className='sm:w-[60vw] sm:px-20 px-2 sm:pt-10 text-xl mb-10 sm:border-l-2 border-black overflow-x-auto'>
      <h1 className='text-4xl'>Relational Data Model</h1>
        <p className="mt-5">Relational data model are represent as a table that have rows and columns, where each row known as tuple and
            each column known as attributes.</p>
        <h3 className="mt-10 text-2xl font-semibold">Termology</h3>
        <h3 className="mt-10 text-2xl font-semibold">Domain</h3>
        <p className="mt-5">It contains the atomic value that a attribute can have. </p>
        <h3 className="mt-10 text-2xl font-semibold">Relational instance</h3>
        <p className="mt-5">Finite set of tuple in database represent as relational instance. it don't have duplicate tuple.</p>
        <h3 className="mt-10 text-2xl font-semibold">Relational schema</h3>
        <p className="mt-5">A relational schema contain the name of relation and the name of attributes or column.</p>
        <h3 className="mt-10 text-2xl font-semibold">Properties of relations</h3>
        <ul className="list-disc">
            <li>Name of the relation must be distinct from other relations.</li>
            <li>Each relational cell will contain only one atomic value.</li>
            <li>Each attributes with contain distinct atomic value.</li>
            <li>The tuple will have not any duplicate values.</li>
        </ul>
        <h3 className="mt-10 text-2xl font-semibold">Relational Algebra</h3>
        <p className="mt-5">Relatinal algebra is a proceduce query language. It gives step by step process to obtain the result of the
            queries, it use oprators to perform the queries.</p>
        <h3 className="mt-10 text-2xl font-semibold">Types of relational opration</h3>
        <ul className="list-disc">
            <li>Select opration</li>
            <li>Project opration</li>
            <li>Union opration</li>
            <li>Set intersection</li>
            <li>Set difference</li>
            <li>rename opration</li>
        </ul>

        <h3 className="mt-10 text-2xl font-semibold">1) Selection opration</h3>
        <p className="mt-5">this opration select the tuple that satisfy the given predicate.</p>
        <p className="mt-5">it denoted by the sigma.</p>
        <p className="mt-5">example : sigma predicate(name="ram")(relation)</p>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b> Branch_Name</b></td>
                <td className="p-3 border border-black"><b> Loan_no</b></td>
                <td className="p-3 border border-black"><b> Amount</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Jhotwara</td>
                <td className="p-3 border border-black">L-11</td>
                <td className="p-3 border border-black">1000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Raja Park</td>
                <td className="p-3 border border-black">L-12</td>
                <td className="p-3 border border-black">2000</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Banipark</td>
                <td className="p-3 border border-black">L-13</td>
                <td className="p-3 border border-black">4000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Raja Park</td>
                <td className="p-3 border border-black">L-14</td>
                <td className="p-3 border border-black">6000</td>
            </tr>
        </table>
        <p className="mt-5">input: σ Branch_Name="Raja Park"(LOAN)</p>
        <p className="mt-5">output:</p>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b> Branch_Name</b></td>
                <td className="p-3 border border-black"><b> Loan_no</b></td>
                <td className="p-3 border border-black"><b> Amount</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Raja Park</td>
                <td className="p-3 border border-black">L-12</td>
                <td className="p-3 border border-black">2000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Raja Park</td>
                <td className="p-3 border border-black">L-14</td>
                <td className="p-3 border border-black">6000</td>
            </tr>
        </table>
        <h3 className="mt-10 text-2xl font-semibold">2) Project opration</h3>
        <p className="mt-5">this opration show the list of those attributes that we wish to appear in the result. the rest of the
            attributes are eliminated from the table.</p>
        <p className="mt-5"> It denoted by pie</p>
        <p className="mt-5">example : pie attributes name(relation)</p>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b> Name</b></td>
                <td className="p-3 border border-black"><b> Phone no</b></td>
                <td className="p-3 border border-black"><b> City</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Raman</td>
                <td className="p-3 border border-black">1142756385</td>
                <td className="p-3 border border-black">Jaipur</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Raja</td>
                <td className="p-3 border border-black">1321123432</td>
                <td className="p-3 border border-black">Jodhpur</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Kamal</td>
                <td className="p-3 border border-black">3212343213</td>
                <td className="p-3 border border-black">Kota</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Rajesh</td>
                <td className="p-3 border border-black">1122133432</td>
                <td className="p-3 border border-black">Kota</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Chinu</td>
                <td className="p-3 border border-black">5142777325</td>
                <td className="p-3 border border-black">Ajmer</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Sandeep</td>
                <td className="p-3 border border-black">5421942832</td>
                <td className="p-3 border border-black">Alwar</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Mandeep</td>
                <td className="p-3 border border-black">6789232385</td>
                <td className="p-3 border border-black">Jaipur</td>
            </tr>
        </table>
        <p className="mt-5">input: ∏ Name, City (CUSTOMER) </p>
        <p className="mt-5">output:</p>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b> Name</b></td>
                <td className="p-3 border border-black"><b> City</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Raman</td>

                <td className="p-3 border border-black">Jaipur</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Raja</td>
                <td className="p-3 border border-black">Jodhpur</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Kamal</td>
                <td className="p-3 border border-black">Kota</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Rajesh</td>
                <td className="p-3 border border-black">Kota</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Chinu</td>
                <td className="p-3 border border-black">Ajmer</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Sandeep</td>
                <td className="p-3 border border-black">Alwar</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Mandeep</td>
                <td className="p-3 border border-black">Jaipur</td>
            </tr>
        </table>
        <h3 className="mt-10 text-2xl font-semibold">3) Union Opration</h3>
        <p className="mt-5">Suppose there are two tuples R and S. The union operation contains all the tuples that are either in R or S
            or both in R & S.</p>
        <p className="mt-5">It eliminates the duplicate tuples. It is denoted by ∪.</p>
        <p className="mt-5">Notation: R ∪ S </p>
        <p className="mt-5">A union operation must hold the following condition:</p>
        <ul className="list-disc">
            <li>R and S must have the attribute of the same number.</li>
            <li>Duplicate tuples are eliminated automatically.</li>
        </ul>

        <p className="mt-5">Example:</p>
        <h4>Depositor table</h4>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b> Customer_Name</b></td>
                <td className="p-3 border border-black"><b> Acccount_No</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Hulk</td>
                <td className="p-3 border border-black">A-111</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Ironman</td>
                <td className="p-3 border border-black">A-121</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Thor</td>
                <td className="p-3 border border-black">A-131</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Natasha</td>
                <td className="p-3 border border-black">A-141</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Groot</td>
                <td className="p-3 border border-black">A-151</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Antman</td>
                <td className="p-3 border border-black">A-161</td>
            </tr>
        </table>
        <h4>Borrow table</h4>
        <table className="table mt-5">
            <tr>
                <td className="p-3 border border-black"><b> Customer_Name</b></td>
                <td className="p-3 border border-black"><b> Loan_No</b></td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Hulk</td>
                <td className="p-3 border border-black">L-111</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Ironman</td>
                <td className="p-3 border border-black">L-121</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Spider-man</td>
                <td className="p-3 border border-black">L-131</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Deadpool</td>
                <td className="p-3 border border-black">L-141</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Spider-man</td>
                <td className="p-3 border border-black">L-151</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Falcon</td>
                <td className="p-3 border border-black">L-161</td>
            </tr>
        </table>
        <p className="mt-5">Input: ∏ CUSTOMER_NAME (Borrow) ∪ ∏ CUSTOMER_NAME (Depositor) </p>
        <p className="mt-5">Output:</p>


        <table className="table mt-5">
            <tr>
                <td class="bg-secondary "><b>Customer_Name</b></td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Hulk</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Ironman</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Thor</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Natasha</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Groot</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Antman</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Spider-man</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Deadpool</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Falcon</td>
            </tr>
        </table>
        <h3 className="mt-10 text-2xl font-semibold">4) Set Intersection</h3>
        <p className="mt-5">Suppose there are two tuples R and S. The set intersection operation contains all tuples that are in both R &
            S.</p>
        <p className="mt-5">It is denoted by intersection ∩.</p>
        <p className="mt-5">Notation: R ∩ S </p>
        <p className="mt-5">Example: Using the above DEPOSITOR table and BORROW table.</p>
        <p className="mt-5">Input: ∏ CUSTOMER_NAME (Borrow) ∩ ∏ CUSTOMER_NAME (Depositor) </p>
        <p className="mt-5">Output:</p>


        <table className="table mt-5">
            <tr>
                <td className="p-3 border border-black"><b>Customer_Name</b></td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Hulk</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Ironman</td>
            </tr>
        </table>

        <h3 className="mt-10 text-2xl font-semibold">5) Set Differene</h3>
        <p className="mt-5">Suppose there are two tuples R and S. The set difference operation contains all tuples that are in R but not
            in S.</p>
        <p className="mt-5">It is denoted by intersection minus (-).</p>
        <p className="mt-5">Notation: R - S </p>
        <p className="mt-5">Example: Using the above DEPOSITOR table and BORROW table</p>
        <p className="mt-5">Input: ∏ CUSTOMER_NAME (Borrow) - ∏ CUSTOMER_NAME (Depositor) </p>
        <p className="mt-5">Output:</p>
        <table className="table mt-5">
            <tr>
                <td className="p-3 border border-black"><b> Customer_Name</b></td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Spider-man</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Deadpool</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Falcon</td>
            </tr>
        </table>
        <h3 className="mt-10 text-2xl font-semibold">6) Cartesian product/ Cross product</h3>
        <p className="mt-5">The Cartesian product is used to combine each row in one table with each row in the other table. It is also
            known as a cross product.</p>
        <p className="mt-5">It is denoted by X.</p>
        <p className="mt-5">Notation: E X D </p>
        <p className="mt-5">Example:</p>
        <h4>Employee</h4>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b>Emp_Id</b></td>
                <td className="p-3 border border-black"><b>Emp_Name</b></td>
                <td className="p-3 border border-black"><b>Emp_Dept</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">1</td>
                <td className="p-3 border border-black">Smith</td>
                <td className="p-3 border border-black">C</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">2</td>
                <td className="p-3 border border-black">Harry</td>
                <td className="p-3 border border-black">D</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">3</td>
                <td className="p-3 border border-black">Jonny</td>
                <td className="p-3 border border-black">S</td>
            </tr>
        </table>
        <h4>Department</h4>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b>Dept_No</b></td>
                <td className="p-3 border border-black"><b>Dept_Name</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">C</td>
                <td className="p-3 border border-black">Marketing</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">D</td>
                <td className="p-3 border border-black">Sales</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">S</td>
                <td className="p-3 border border-black">Legal</td>
            </tr>

        </table>
        <p className="mt-5">Input: Employee X Department </p>
        <p className="mt-5">Output:</p>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b>Emp_Id</b></td>
                <td className="p-3 border border-black"><b>Emp_Name</b></td>
                <td className="p-3 border border-black"><b>Emp_Dept</b></td>
                <td className="p-3 border border-black"><b>Dept_No</b></td>
                <td className="p-3 border border-black"><b>Dept_Name</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">1</td>
                <td className="p-3 border border-black">Smith</td>
                <td className="p-3 border border-black">C</td>
                <td className="p-3 border border-black">C</td>
                <td className="p-3 border border-black">Marketing</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">2</td>
                <td className="p-3 border border-black">Smith</td>
                <td className="p-3 border border-black">C</td>
                <td className="p-3 border border-black">D</td>
                <td className="p-3 border border-black">Sales</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">1</td>
                <td className="p-3 border border-black">Smith</td>
                <td className="p-3 border border-black">C</td>
                <td className="p-3 border border-black">S</td>
                <td className="p-3 border border-black">Legal</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">2</td>
                <td className="p-3 border border-black">Harry</td>
                <td className="p-3 border border-black">D</td>
                <td className="p-3 border border-black">C</td>
                <td className="p-3 border border-black">Marketing</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">2</td>
                <td className="p-3 border border-black">Harry</td>
                <td className="p-3 border border-black">D</td>
                <td className="p-3 border border-black">D</td>
                <td className="p-3 border border-black">Sales</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">2</td>
                <td className="p-3 border border-black">Harry</td>
                <td className="p-3 border border-black">D</td>
                <td className="p-3 border border-black">S</td>
                <td className="p-3 border border-black">Legal</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">3</td>
                <td className="p-3 border border-black">Jonny</td>
                <td className="p-3 border border-black">S</td>
                <td className="p-3 border border-black">C</td>
                <td className="p-3 border border-black">Marketing</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">3</td>
                <td className="p-3 border border-black">Jonny</td>
                <td className="p-3 border border-black">S</td>
                <td className="p-3 border border-black">D</td>
                <td className="p-3 border border-black">Sales</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">3</td>
                <td className="p-3 border border-black">Jonny</td>
                <td className="p-3 border border-black">S</td>
                <td className="p-3 border border-black">S</td>
                <td className="p-3 border border-black">Legal</td>
            </tr>
        </table>

        <h3 className="mt-10 text-2xl font-semibold">7)Rename Opration</h3>
        <p className="mt-5">The rename operation is used to rename the output relation.</p>
        <p className="mt-5">It is denoted by rho (ρ).</p>
        <p className="mt-5">Example: We can use the rename operator to rename STUDENT relation to STUDENT1.</p>
        <p className="mt-5">ρ(STUDENT1, STUDENT)</p>
        <h2 class="text-center">Join Opration</h2>
        <p className="mt-5">A Join operation combines related tuples from different relations, if and only if a given join condition is
            satisfied. It is denoted by ⋈.</p>
        <p className="mt-5">Example</p>
        <h4>Employee</h4>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b>Employee_id</b></td>
                <td className="p-3 border border-black"><b>Employee_Name</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">1</td>
                <td className="p-3 border border-black">Shubham</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">2</td>
                <td className="p-3 border border-black">Kunal</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">3</td>
                <td className="p-3 border border-black">Aman</td>
            </tr>
        </table>
        <h4>Salary</h4>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b>Employee_id</b></td>
                <td className="p-3 border border-black"><b>Salary</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">1</td>
                <td className="p-3 border border-black">20000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">2</td>
                <td className="p-3 border border-black">30000</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">3</td>
                <td className="p-3 border border-black">40000</td>
            </tr>
        </table>
        <p className="mt-5">Operation: (EMPLOYEE ⋈ SALARY)</p>
        <p className="mt-5">Result:</p>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b>Employee_id</b></td>
                <td className="p-3 border border-black"><b>Employee_Name</b></td>
                <td className="p-3 border border-black"><b>Salary</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">1</td>
                <td className="p-3 border border-black">Shubham</td>
                <td className="p-3 border border-black">20000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">2</td>
                <td className="p-3 border border-black">Kunal</td>
                <td className="p-3 border border-black">30000</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">3</td>
                <td className="p-3 border border-black">Aman</td>
                <td className="p-3 border border-black">40000</td>
            </tr>
        </table>
        <h3 className="mt-10 text-2xl font-semibold">Types of Join Opration</h3>
        <p className="mt-5">There are 3 types of Join Opration</p>
        <ul className="list-disc">
            <li>Natural Join</li>
            <li>Outer Join</li>
            <ul className="list-disc">
            <li>Left Outer Join</li>
            <li>Right Outer Join</li>
            <li>Full outer Join</li>
        </ul>
            <li>Equi Join</li>
        </ul>
        <h3 className="mt-10 text-2xl font-semibold">Natural Join</h3>
        <p className="mt-5">A natural join is the set of tuples of all combinations in R and S that are equal on their common attribute names.</p>
        <p className="mt-5">It is denoted by ⋈.</p>
        <p className="mt-5">Example: Let's use the above EMPLOYEE table and SALARY table:</p>
        <p className="mt-5">Input: 	∏Employee_Name, Salary (Employee ⋈ Salary)  </p>  
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black"><b>Employee_name</b></td>
                <td className="p-3 border border-black"><b>Salary</b></td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Shubham</td>
                <td className="p-3 border border-black">20000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Kunal</td>
                <td className="p-3 border border-black">30000</td>
            </tr>
            <tr class="bg-light"> 
                    <td className="p-3 border border-black">Aman</td>
                    <td className="p-3 border border-black">40000</td>
            </tr>
        </table>
        <h3 className="mt-10 text-2xl font-semibold">Outer Join</h3>
        <p className="mt-5">The outer opration is an extension of the join opration. It is used to deal with missing information.</p>
        <p className="mt-5">Example:</p>
        <h4>Employee</h4>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black">Employee_id</td>
                <td className="p-3 border border-black">Street</td>
                <td className="p-3 border border-black">City</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Ram</td>
                <td className="p-3 border border-black">Civil Line</td>
                <td className="p-3 border border-black">Mumbai</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Shyam</td>
                <td className="p-3 border border-black">Park Street</td>
                <td className="p-3 border border-black">Kolkata</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Ravi</td>
                <td className="p-3 border border-black">M.G.Street</td>
                <td className="p-3 border border-black">Delhi</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Hari</td>
                <td className="p-3 border border-black">Nehru Nagar</td>
                <td className="p-3 border border-black">Hyderabad</td>
            </tr>
        </table>
        <h4>Factory Worker</h4>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black">Employee_Name</td>
                <td className="p-3 border border-black">Branch</td>
                <td className="p-3 border border-black">Salary</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Ram</td>
                <td className="p-3 border border-black">Infosys</td>
                <td className="p-3 border border-black">10000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Shyam</td>
                <td className="p-3 border border-black">Wipro</td>
                <td className="p-3 border border-black">20000</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Kuber</td>
                <td className="p-3 border border-black">HCL</td>
                <td className="p-3 border border-black">30000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Hari</td>
                <td className="p-3 border border-black">TCS</td>
                <td className="p-3 border border-black">50000</td>
            </tr>
        </table>
        <p className="mt-5">Input:(EMPLOYEE ⋈ FACT_WORKERS)  </p>
        <p className="mt-5">Output:</p>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black">Employee_Name</td>
                <td className="p-3 border border-black">Street</td>
                <td className="p-3 border border-black">City</td>
                <td className="p-3 border border-black">Branch</td>
                <td className="p-3 border border-black">Salary</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Ram</td>
                <td className="p-3 border border-black">Civil line</td>
                <td className="p-3 border border-black">Mumbai</td>
                <td className="p-3 border border-black">Infosys</td>
                <td className="p-3 border border-black">10000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Shyam</td>
                <td className="p-3 border border-black">Park street</td>
                <td className="p-3 border border-black">Kolkata</td>
                <td className="p-3 border border-black">Wipro</td>
                <td className="p-3 border border-black">20000</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Hari</td>
                <td className="p-3 border border-black">Nehru nagar </td>
                <td className="p-3 border border-black">Hyderabad</td>
                <td className="p-3 border border-black">TCS</td>
                <td className="p-3 border border-black">50000</td>
            </tr>
        </table>
        <h4>a)Left outer join:</h4>
        <p className="mt-5">Left outer join contains the set of tuples of all combinations in R and S that are equal on their common attribute names.</p>
        <p className="mt-5">In the left outer join, tuples in R have no matching tuples in S.</p>
        <p className="mt-5">It is denoted by ⟕.</p>
        <p className="mt-5">Example: Using the above EMPLOYEE table and FACT_WORKERS table</p>
        <p className="mt-5">Input: 	EMPLOYEE ⟕ FACT_WORKERS   </p>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black">Employee_Name</td>
                <td className="p-3 border border-black">Street</td>
                <td className="p-3 border border-black">City</td>
                <td className="p-3 border border-black">Branch</td>
                <td className="p-3 border border-black">Salary</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Ram</td>
                <td className="p-3 border border-black">Civil line</td>
                <td className="p-3 border border-black">Mumbai</td>
                <td className="p-3 border border-black">Infosys</td>
                <td className="p-3 border border-black">10000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Shyam</td>
                <td className="p-3 border border-black">Park street</td>
                <td className="p-3 border border-black">Kolkata</td>
                <td className="p-3 border border-black">Wipro</td>
                <td className="p-3 border border-black">20000</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Hari</td>
                <td className="p-3 border border-black">Nehru nagar </td>
                <td className="p-3 border border-black">Hyderabad</td>
                <td className="p-3 border border-black">TCS</td>
                <td className="p-3 border border-black">50000</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Ravi</td>
                <td className="p-3 border border-black">M.G. Street</td>
                <td className="p-3 border border-black">Delhi</td>
                <td className="p-3 border border-black">NULL</td>
                <td className="p-3 border border-black">NULL</td>
            </tr>
        </table>
        <h4>b)Right outer join:</h4>
        <p className="mt-5">Right outer join contains the set of tuples of all combinations in R and S that are equal on their common attribute names.</p>
        <p className="mt-5">In right outer join, tuples in S have no matching tuples in R.</p>
        <p className="mt-5">It is denoted by ⟖.</p>
        <p className="mt-5">Example: Using the above EMPLOYEE table and FACT_WORKERS Relation</p>
        <p className="mt-5">Input:	EMPLOYEE ⟖ FACT_WORKERS  </p>
        <p className="mt-5">Output:</p>
        <table className="table mt-5">
            <tr class="bg-secondary">
                <td className="p-3 border border-black">Employee_Name</td>
                <td className="p-3 border border-black">Branch</td>
                <td className="p-3 border border-black">Salary</td>
                <td className="p-3 border border-black">Street</td>
                <td className="p-3 border border-black">City</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Ram</td>
                <td className="p-3 border border-black">Infosys</td>
                <td className="p-3 border border-black">10000</td>
                <td className="p-3 border border-black">Civil line</td>
                <td className="p-3 border border-black">Mumbai</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Shyam</td>
                <td className="p-3 border border-black">Wipro</td>
                <td className="p-3 border border-black">20000</td>
                <td className="p-3 border border-black">Park street</td>
                <td className="p-3 border border-black">Kolkata</td>
            </tr>
            <tr class="bg-light">
                <td className="p-3 border border-black">Hari</td>
                <td className="p-3 border border-black">TCS</td>
                <td className="p-3 border border-black">50000</td>
                <td className="p-3 border border-black">Nehru nagar </td>
                <td className="p-3 border border-black">Hyderabad</td>
            </tr>
            <tr>
                <td className="p-3 border border-black">Kuber</td>
                <td className="p-3 border border-black">HCL</td>
                <td className="p-3 border border-black">30000</td>
                <td className="p-3 border border-black">NULL</td>
                <td className="p-3 border border-black">NULL</td>
            </tr>
            </table>
            <h4>c)Full outer join:</h4>
            <p className="mt-5">Full outer join is like a left or right join except that it contains all rows from both tables.</p>
            <p className="mt-5">In full outer join, tuples in R that have no matching tuples in S and tuples in S that have no matching tuples in R in their common attribute name.</p>
            <p className="mt-5">It is denoted by ⟗.</p>
            <p className="mt-5">Example: Using the above EMPLOYEE table and FACT_WORKERS table</p>
            <p className="mt-5">Input:EMPLOYEE ⟗ FACT_WORKERS  </p>
            <p className="mt-5">Output:</p>
            <table className="table mt-5">
                <tr class="bg-secondary">
                    <td className="p-3 border border-black">Employee_Name</td>
                    <td className="p-3 border border-black">Branch</td>
                    <td className="p-3 border border-black">Salary</td>
                    <td className="p-3 border border-black">Street</td>
                    <td className="p-3 border border-black">City</td>
                </tr>
                <tr class="bg-light">
                    <td className="p-3 border border-black">Ram</td>
                    <td className="p-3 border border-black">Civil line</td>
                    <td className="p-3 border border-black">Mumbai</td>
                    <td className="p-3 border border-black">Infosys</td>
                    <td className="p-3 border border-black">10000</td>
                </tr>
                <tr>
                    <td className="p-3 border border-black">Shyam</td>
                    <td className="p-3 border border-black">Park street</td>
                    <td className="p-3 border border-black">Kolkata</td>
                    <td className="p-3 border border-black">Wipro</td>
                    <td className="p-3 border border-black">20000</td>
                </tr>
                <tr class="bg-light">
                    <td className="p-3 border border-black">Hari</td>
                    <td className="p-3 border border-black">Nehru nagar </td>
                    <td className="p-3 border border-black">Hyderabad</td>
                    <td className="p-3 border border-black">TCS</td>
                    <td className="p-3 border border-black">50000</td>
                </tr>
                <tr>
                    <td className="p-3 border border-black">Ravi</td>
                    <td className="p-3 border border-black">M.G. Street</td>
                    <td className="p-3 border border-black">Delhi</td>
                    <td className="p-3 border border-black">NULL</td>
                    <td className="p-3 border border-black">NULL</td>
                </tr>
                <tr class="bg-light">
                    <td className="p-3 border border-black">Kuber</td>
                    <td className="p-3 border border-black">NULL</td>
                    <td className="p-3 border border-black">NULL</td>
                    <td className="p-3 border border-black">HCL</td>
                    <td className="p-3 border border-black">30000</td>
                </tr>
            </table>
            <h3 className="mt-10 text-2xl font-semibold">Equi join:</h3>
            <p className="mt-5">It is also known as an inner join. It is the most common join. It is based on matched data as per the equality condition. The equi join uses the comparison operator(=).</p>
            <p className="mt-5">Example:</p>
            <h4>Customer Table</h4>
            <table className="table mt-5">
                <tr class="bg-secondary">
                    <td className="p-3 border border-black">Class_id</td>
                    <td className="p-3 border border-black">Name</td>
                </tr>
                <tr class="bg-light">
                    <td className="p-3 border border-black">1</td>
                    <td className="p-3 border border-black">John</td>
                </tr>
                <tr>
                    <td className="p-3 border border-black">2</td>
                    <td className="p-3 border border-black">Harry</td>
                </tr>
                <tr class="bg-light">
                    <td className="p-3 border border-black">3</td>
                    <td className="p-3 border border-black">Jackson</td>
                </tr>
            </table>
            <h4>Product</h4>
            <table className="table mt-5">
                <tr class="bg-secondary">
                    <td className="p-3 border border-black">Product_id</td>
                    <td className="p-3 border border-black">City</td>
                </tr>
                <tr class="bg-light">
                    <td className="p-3 border border-black">1</td>
                    <td className="p-3 border border-black">Delhi</td>
                </tr>
                <tr>
                    <td className="p-3 border border-black">2</td>
                    <td className="p-3 border border-black">Mumbai</td>
                </tr>
                <tr class="bg-light">
                    <td className="p-3 border border-black">3</td>
                    <td className="p-3 border border-black">Noida</td>
                </tr>
            </table>
            <p className="mt-5">Input: CUSTOMER ⋈ PRODUCT    </p>
            <p className="mt-5">Output:</p>
            <table className="table mt-5">
                <tr class="bg-secondary">
                    <td className="p-3 border border-black"><b>Class_id</b></td>
                    <td className="p-3 border border-black"><b>Name</b></td>
                    <td className="p-3 border border-black"><b>Product_id</b></td>
                    <td className="p-3 border border-black"><b>City</b></td>
                </tr>
                <tr class="bg-light">
                    <td className="p-3 border border-black">1</td>
                    <td className="p-3 border border-black">John</td>
                    <td className="p-3 border border-black">1</td>
                    <td className="p-3 border border-black">Delhi</td>
                </tr>
                <tr>
                    <td className="p-3 border border-black">2</td>
                    <td className="p-3 border border-black">Harry</td>
                    <td className="p-3 border border-black">2</td>
                    <td className="p-3 border border-black">Mumbai</td>
                </tr>
                <tr class="bg-light">
                    <td className="p-3 border border-black">3</td>
                    <td className="p-3 border border-black">Harry</td>
                    <td className="p-3 border border-black">3</td>
                    <td className="p-3 border border-black">Noida</td>
                </tr>
            </table>
    </div>
  )
}

export default DbmsRelationalDataModel
