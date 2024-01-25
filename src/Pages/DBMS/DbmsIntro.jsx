import React from 'react'
import ArchitureOfDbms from "../../assets/architectureofDBMS.jpg";

const DbmsIntro = () => {
  return (
    <div  className='sm:w-[60vw] sm:px-20 px-5 sm:pt-10 text-xl mb-10 sm:border-l-2 border-black'>
      <h1 class="sm:text-center text-4xl ">DBMS (Database Management System)</h1>

        <h2  className='text-2xl mt-10 font-semibold'>Database :-</h2>
        <p>The collection of inter-related data which is used to retrieve, insert and delete the data efficiently. It is
            also used to organize the data in the form of a table, schema, views, and reports, etc are called Database.</p>

        <h2  className='text-2xl mt-10 font-semibold'>Database Management System :-</h2>
        <p>Data base management System is a system or software that manage the database and to perform the opration like
            creating ,deleteing data, updating data. <br />
            Some names :- MySQL, MongoDb, PostgreSQL, Microsoft SQL Server.</p>
        
        <h2  className='text-2xl mt-10 font-semibold'>Types of Architecture</h2>
        <img src={ArchitureOfDbms} alt=""/>
        <h3 className='font-semibold mt-7' >1-Tier of Architecture</h3>
        <ul  className='list-disc'>
            <li> In this type of Architecture the user are able to interact directly with the database </li>
            <li>Any changes done by user will affect the database itself.</li>
            <li>The 1-Tier architecture is used for development of the local application, where programmers can directly
                communicate with the database for the quick response.</li>
        </ul>
        <br/>
        <h3 className='font-semibold mt-7'>2-Tier of Architecture</h3>
        <ul className='list-disc'>
            <li>The 2-Tier architecture is same as basic client-server. In the two-tier architecture, applications on
                the client end can directly communicate with the database at the server side. For this interaction,
                API's like: ODBC, JDBC are used.</li>
            <li>The user interfaces and application programs are run on the client-side.</li>
            <li>The server side is responsible to provide the functionalities like: query processing and transaction
                management. </li>
            <li>To communicate with the DBMS, client-side application establishes a connection with the server side.
            </li>
        </ul>
        <br/>
        <h3 className='font-semibold mt-7'>3-Tier Architecture</h3>
        <ul className='list-disc'>
            <li>The 3-Tier architecture contains another layer between the client and server. In this architecture,
                client can't directly communicate with the server.</li>
            <li> The application on the client-end interacts with an application server which further communicates
                with the database system.</li>
            <li> End user has no idea about the existence of the database beyond the application server. The
                database also has no idea about any other user beyond the application.</li>
            <li>The 3-Tier architecture is used in case of large web application.</li>
        </ul>
    </div>
  )
}

export default DbmsIntro
