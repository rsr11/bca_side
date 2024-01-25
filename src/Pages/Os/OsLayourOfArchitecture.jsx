import React from 'react'

const OsLayourOfArchitecture = () => {
  return (
    <div className='w-[60vw] px-20 pt-10 text-xl mb-10 border-l-2 border-black'>
      <h1 className='text-4xl'>Layered Architecture of OS </h1>
<h2 className='mt-10 text-2xl font-semibold' >Grouping of Functions in a layer</h2>
<ul className='list-disc'>
    <li>The functions related to a category are grouped together and made a layer of that category.</li>
    <li>The top most layer provides the interface to applications of the users.</li>
    <li>The lowest layer interacts with the underlying hardware.</li>
</ul>

<h5 className='mt-10 text-2xl font-semibold'>Computer system can be divided into four components:</h5>
<ul className='list-disc'>
    <li>Hardware - provides basic computing resources eg. CPU, memory, I/O devices</li>
    <li>Oprating System - Controls and coordinates use of hardware among various applications and users</li>
    <li>Application programs- defines the ways in which the system resources are used to solve the computing problems of the users eg. Word processors, compilers, web browers, database systems, video games.</li>
    <li>Users- eg. People, machines, other computers.</li>
</ul>
<h5 className='mt-10 text-2xl font-semibold'>Duel-mode operation allows OS to protect itself and other system components</h5>
<ul className='list-disc'>
    <li>User mode and kernal mode</li>
    <li>Mode bit provided by hardware</li>
    <li>Provides the ability to distinguish when system is running user code or kernal code</li>
    <li>Some instruction designated as privileged, only executable in kernal mode</li>
    <li>System call changes mode to kernal, return from call resets it to user</li>
</ul>
<h5 className='mt-10 text-2xl font-semibold'>Introduction to Computer Systems and Organization</h5>
<p className='mt-5'>In today’s life computers plays a vital role in our day-to-day life. We are surrounded by computers nowadays. Most of our daily work is directly or indirectly connected with computer systems.</p>
<p className='mt-5'>The computer systems and organization is a set of following components:</p>
<p className='mt-5'>Hardware: Hardware is the tangible parts of computer systems such as Keyboard, Mouse, Hard Disk, Motherboard,etc.</p>
<p className='mt-5'>Software: Software is the programs stored in computers those help to do user's work and provides an interface to the user such as Microsoft PowerPoint, Excel, Adobe reader, etc.</p>
<h5 className='mt-10 text-2xl font-semibold'> Functions of Computer Systems:</h5>
<p className='mt-5'>There are four main functions of the computer system:</p>
<ul className='list-disc'>
    <li><b>Input:</b> The process of data feeding by the user (Data means raw facts and figures)</li>
    <li><b>Process:</b> The actual work done in computers</li>
    <li><b>Output:</b> The result of user's task (It can be: On-screen (Soft Copy), On Paper (Hard Copy) or On Air)</li>
    <li><b>Storage:</b> The process of saving data</li>
</ul>
<h5 className='mt-10 text-2xl font-semibold'>Insights of Computer Systems and Organization</h5>
<p className='mt-5'>The computer system is just like an organization with different units. All units have their own functional parts or units to do a specific task. Look at the following diagram: </p>
<p className='mt-5'>Insights — Computer Systems and Organizations</p>
<h5 className='mt-10 text-2xl font-semibold'>CPU (Central Processing Unit)</h5>
<p className='mt-5'>Its work like a manager of a company. It accepts a request from Input unit, then guides, directs, controls and governs the performance of the computer. It has three functional units:</p>
<ul className='list-disc'>
    <li>CU (Control Unit)</li>
    <li>ALU ( Arithmetic and Logic Unit)</li>
    <li>Memory Unit</li>
</ul>
<ul className='list-disc mt-10'>
    <li><b>CU (Control Unit):</b> It accepts the request from CPU and does not perform any
        task itself. It determines, guides and control the request and then send it to ALU.</li>
    <li><b>ALU (Arithmetic and Login Unit):</b> ALU accepts the request from CU and performs the required task. It checks the request for what kind of task to be performed such as arithmetic operation (Addition, Subtraction, Multiplication or Division) or Logical comparison such as (Less Than, Greater Than etc.). After completion of the task, it sends the request to the next unit.</li>
    <li><b>MU (Memory Unit):</b> It is the next functional unit of computer  organization.  It is responsible for storing data into computer storage locations. It stores data permanently or temporarily. Further MU is divided into two kinds of memory as follows:</li>
</ul>

    </div>
  )
}

export default OsLayourOfArchitecture
