import React from 'react'

const OsManagement = () => {
  return (
    <div className='w-[60vw] px-20 pt-10 text-xl mb-10 border-l-2 border-black'>
      <h1 className='text-2xl font-semibold' >Memory Mangement</h1>
<p className='mt-5'>Memory management refers to management of Primary Memory or Main Memory. Main Memory is a large  array of words or bytes where each words or bytes has its own address. </p>
<p className='mt-5'>Main Memory provides a fast storage that can be accessed directly by the CPU. For a program to be executed, it must in the main memory. An Oprating System does the following activites for memory management- </p>
<ul className='list-disc'>
    <li>Keeps track on primary memory, i.e, what part of it are in use by whom, what part are not in use.</li>
    <li>In multiprogramming, the OS decides which process will get memory and when and how much.</li>
    <li>Allocated the memory when a process is requests it to do so.</li>
    <li>De-allocates the memory when a process no longer needs it or has been terminated.</li>
</ul>
<h4 className='text-2xl mt-10 font-semibold'>Processor Manangement</h4>
<p className='mt-5'>In multiprogramming environment, the OS decides which process gets the processor when and for how much time. This function is called process scheduling. An Oprating System does the following activites for processor management-</p>
<ul className='list-disc'>
    <li>Keeps tracks of processor and status of process.The program is responsible for this task is known as <b>traffic controller.</b> </li>
    <li>Allocates the processor (CPU) to a process.</li>
    <li>De-allocates processor when a process is no longer required.</li>
</ul>
<h4 className='text-2xl mt-10 font-semibold'>Device Management</h4>
<p className='mt-5'>An Oprating System manages device communication via there respective drives. It does the following activities for device management.</p>
<ul className='list-disc'>
    <li>Keeps tracks of all devices. Program is responsible for this task known as the <b>I/O controller.</b></li>
    <li>Decides which process gets the device when and for how much time.</li>
    <li>Allocates the device in the efficient way.</li>
    <li>De-allocates the devices.</li>
</ul>
<h4 className='text-2xl mt-10 font-semibold'>File Management</h4>
<p className='mt-5'>A file system is normally organized into directories for easy navigation and usages. These directories may contain files and other directions.</p>
<p>An Oprating system does the following activites for file management-</p>
<ul className='list-disc'>
    <li>Keeps track of information, location, uses, status etc. The collective facilities are often known as <b>file system</b>.</li>
    <li>Decides who gets the resources.</li>
    <li>Allocates the resources.</li>
    <li>De-allocates the resources.</li>
</ul>
<h4 className='text-2xl mt-10 font-semibold'>Other Important Activities</h4>
<p className='mt-5'>Following are some of the important activities that an Operating System performs —</p>
<ul className='list-disc'>
    <li><b>Security —</b> By means of password and similar other techniques, it prevents unauthorized access to programs and data.</li>
    <li><b>Control over system performance —</b>Recording delays between request for a service and response from the system.</li>
    <li><b>Job accounting —</b> Keeping track of time and resources used by various jobs and users.</li>
    <li><b>Error detecting aids —</b> Production of dumps, traces, error messages, and other debugging and error detecting aids.</li>
    <li><b>Coordination between other softwares and users —</b> Coordination and assignment of compilers, interpreters, assemblers and other software to the various users of the computer systems.</li>
</ul>
<h5 className='text-xl mt-5 font-semibold'>Booting Process</h5>
<p>Power on {">>"} Post Program (Power on self test) {">>"} BIOS (Basic Input Output System) {">>"} Boot Loader {">>"} Options windows( if multiple os) {">>"} Kernel File Load {">>"} Operating System Boot</p>
<h5 className='text-xl mt-5 font-semibold'>BIOS</h5>
<p>BIOS is software that basically consists of input-output functions. These functions are low-level routines that the operating system uses to interface to different I/O devices like keyboard, screen, ports, etc.</p>
<h5 className='text-xl mt-5 font-semibold'>Booting/ Boot strapping</h5>
<p className='mt-5'>process to place the operating system in memory is known as booting or bootstrapping.</p>
<p className='mt-5'>Bootstrap program is loaded at power-up or reboot</p>
<ul className='list-disc mt-5'>
    <li>Typically stored in ROM or EPROM, generally known as firmware</li>
    <li>Initializes all aspects of system</li>
    <li>Loads operating system kernel and starts execution</li>
</ul>
<p className='mt-5'><b>Boot Software/Boot Loader/Bootstrap Loader</b></p>
<p className='mt-5'>The set of instructions needed for booting, i.e. to load the operating system in RAM is known as Boot Software/Boot Loader/Bootstrap Loader.</p>
<p className='mt-5'><b>Boot Device</b></p>
<p>The device that stores the operating system is called boot device.</p>
<p className='mt-5'><b>Privileged instructions</b></p>
<p>the instructions which are not directly executed by the user but need to be passed to the operating system are known as privileged instructions. </p>
<p className='mt-5'><b>System Call</b></p>
<p>All the privileged instructions, i.e. the instructions which need to interact with hardware and other resources and therefore passed to the operating system for execution, are known as system calls.</p>
    </div>
  )
}

export default OsManagement
