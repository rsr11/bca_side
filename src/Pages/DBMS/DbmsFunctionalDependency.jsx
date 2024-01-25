import React from 'react'

const DbmsFunctionalDependency = () => {
  return (
    <div  className='sm:w-[60vw] sm:px-20 px-5 sm:pt-10 text-xl mb-10 sm:border-l-2 border-black'>
       <h2 className='text-4xl'>Functional Dependency</h2>
<p className="mt-5">The functional dependency is a relationship that exists between two attributes. It typically exists between the primary key and non-key attribute within a table.</p>
<p className="mt-5">1.	X   →   Y  </p>
<p className="mt-5">The left side of FD is known as a determinant, the right side of the production is known as a dependent.</p>
<p className="mt-5">For example:</p>
<p className="mt-5">Assume we have an employee table with attributes: Emp_Id, Emp_Name, Emp_Address.</p>
<p className="mt-5">Here Emp_Id attribute can uniquely identify the Emp_Name attribute of employee table because if we know the Emp_Id, we can tell that employee name associated with it.</p>
<p className="mt-5">Functional dependency can be written as:</p>
<p className="mt-5">1.	Emp_Id → Emp_Name   </p>
<p className="mt-5">We can say that Emp_Name is functionally dependent on Emp_Id.</p>
<h3>Types of Functional dependency</h3>
<ul>
    <li>Trivial Functional Dependancy</li>
    <li>Non-Trivial Functional Dependancy</li>
</ul>
<h3>1. Trivial functional dependency</h3>
<p className="mt-5">	A → B has trivial functional dependency if B is a subset of A.</p>
<p className="mt-5">The following dependencies are also trivial like: A → A, B → B</p>
<p className="mt-5">Example:</p>
<p className="mt-5">1.Consider a table with two columns Employee_Id and Employee_Name.  </p>
<p className="mt-5">2.{"{Employee_id, Employee_Name}"}   →    Employee_Id is a trivial functional dependency as   </p>
<p className="mt-5">3.Employee_Id is a subset of {"{Employee_Id, Employee_Name}"}.  </p>
<p className="mt-5">4.Also, Employee_Id → Employee_Id and Employee_Name   →    Employee_Name are trivial dependencies too.  </p>
<h3>2. Non-trivial functional dependency</h3>
<p className="mt-5">A → B has a non-trivial functional dependency if B is not a subset of A.</p>
<p className="mt-5">When A intersection B is NULL, then A → B is called as complete non-trivial.</p>
<p className="mt-5">Example:</p>
<p className="mt-5">1.	ID   →    Name,  </p>
<p className="mt-5">2.	Name   →    DOB  </p>
<h3>Inference Rule (IR):</h3>
<p className="mt-5">The Armstrong's axioms are the basic inference rule.</p>
<p className="mt-5">Armstrong's axioms are used to conclude functional dependencies on a relational database</p>
<p className="mt-5">The inference rule is a type of assertion. It can apply to a set of FD(functional dependency) to derive other FD.</p>
<p className="mt-5">Using the inference rule, we can derive additional functional dependency from the initial set.</p>
<p className="mt-5">The Functional dependency has 6 types of inference rule:</p>

<h4>1. Reflexive Rule (IR1)</h4>
<p className="mt-5">In the reflexive rule, if Y is a subset of X, then X determines Y.</p>
<p className="mt-5">1.	If X ⊇ Y then X  →    Y  </p>
<p className="mt-5">Example:</p>
<p className="mt-5">1.	X = {"{ a, b, c, d, e }" }  </p>
<p className="mt-5">2.	Y = {"{a, b, c}"}  </p>
<h4>2. Augmentation Rule (IR2)</h4>
<p className="mt-5">The augmentation is also called as a partial dependency. In augmentation, if X determines Y, then XZ determines YZ for any Z.</p>
<p className="mt-5">1.	If X    →  Y then XZ   →   YZ   </p>
<p className="mt-5">Example:</p>
<p className="mt-5">1.	For R(ABCD),  if A   →   B then AC  →   BC  </p>
<h4>3. Transitive Rule (IR3)</h4>
<p className="mt-5">In the transitive rule, if X determines Y and Y determine Z, then X must also determine Z.</p>
<p className="mt-5">1.	If X   →   Y and Y  →  Z then X  →   Z    </p>
<h4>4. Union Rule (IR4)</h4>
<p className="mt-5">Union rule says, if X determines Y and X determines Z, then X must also determine Y and Z.</p>
<p className="mt-5">1.	If X    →  Y and X   →  Z then X  →    YZ     </p>
<p className="mt-5">Proof:</p>
<ol>
    <li>X → Y (given)</li>
    <li>X → Z (given)</li>
    <li>X → XY (using IR2 on 1 by augmentation with X. Where XX = X)</li>
    <li>XY → YZ (using IR2 on 2 by augmentation with Y)</li>
    <li>X → YZ (using IR3 on 3 and 4)</li>
</ol>
<h4>5. Decomposition Rule (IR5)</h4>
<p className="mt-5">Decomposition rule is also known as project rule. It is the reverse of union rule.</p>
<p className="mt-5">This Rule says, if X determines Y and Z, then X determines Y and X determines Z separately.</p>
<p className="mt-5">1.	If X   →   YZ then X   →   Y and X  →    Z   </p>
<p className="mt-5">Proof:</p>
<ol>
    <li>X → YZ (given)</li>
    <li>YZ → Y (using IR1 Rule)</li>
    <li>X → Y (using IR3 on 1 and 2)</li>
</ol>
<h4>6. Pseudo transitive Rule (IR6)</h4>
<p className="mt-5">In Pseudo transitive Rule, if X determines Y and YZ determines W, then XZ determines W.</p>
<p className="mt-5">1.	If X   →   Y and YZ   →   W then XZ   →   W   </p>
<p className="mt-5">Proof:</p>
<ol>
    <li>X → Y (given)</li>
    <li>WY → Z (given)</li>
    <li>WX → WY (using IR2 on 1 by augmenting with W)</li>
    <li>WX → Z (using IR3 on 3 and 2)</li>
</ol>
    </div>
  )
}

export default DbmsFunctionalDependency
