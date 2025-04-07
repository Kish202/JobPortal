// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { mockData } from '../data/mockdata';

// const ManagerDashboard = () => {
//   const navigate = useNavigate();
//   const { hiringOverview, teamRequests, upcomingInterviews, departmentMetrics } = mockData.manager;

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="bg-neugray-bg min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-neugray-text">Hiring Manager Dashboard</h1>
//           <button 
//             onClick={handleLogout}
//             className="bg-neugray-bg px-4 py-2 rounded-lg shadow-neumorph-sm text-neugray-text font-medium hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow"
//           >
//             Logout
//           </button>
//         </div>

//         {/* Hiring Overview Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//           <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6 text-center">
//             <h3 className="text-gray-600">Open Requisitions</h3>
//             <p className="text-4xl font-bold text-neugray-accent mt-2">{hiringOverview.openRequisitions}</p>
//           </div>
//           <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6 text-center">
//             <h3 className="text-gray-600">Filled Positions</h3>
//             <p className="text-4xl font-bold text-neugray-accent mt-2">{hiringOverview.filledPositions}</p>
//           </div>
//           <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6 text-center">
//             <h3 className="text-gray-600">Avg. Time to Hire</h3>
//             <p className="text-4xl font-bold text-neugray-accent mt-2">{hiringOverview.timeToHire}</p>
//           </div>
//           <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6 text-center">
//             <h3 className="text-gray-600">Budget Utilization</h3>
//             <p className="text-4xl font-bold text-neugray-accent mt-2">{hiringOverview.budgetUtilization}</p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//           {/* Team Requests */}
//           <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-neugray-text">Team Requests</h2>
//               <button className="bg-neugray-bg px-3 py-1 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium">
//                 + New Request
//               </button>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="text-left text-gray-500">
//                     <th className="pb-3 px-2">Department</th>
//                     <th className="pb-3 px-2">Position</th>
//                     <th className="pb-3 px-2">Priority</th>
//                     <th className="pb-3 px-2">Status</th>
//                     <th className="pb-3 px-2">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {teamRequests.map(request => (
//                     <tr key={request.id} className="hover:bg-gray-50 transition-colors">
//                       <td className="py-3 px-2">{request.department}</td>
//                       <td className="py-3 px-2">{request.position}</td>
//                       <td className="py-3 px-2">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           request.priority === "High" ? "bg-red-100 text-red-700" : 
//                           "bg-yellow-100 text-yellow-700"
//                         }`}>
//                           {request.priority}
//                         </span>
//                       </td>
//                       <td className="py-3 px-2">{request.status}</td>
//                       <td className="py-3 px-2">
//                         <div className="flex space-x-2">
//                           <button className="p-1 bg-neugray-bg rounded-md shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-green-600">
//                             ✓
//                           </button>
//                           <button className="p-1 bg-neugray-bg rounded-md shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-red-600">
//                             ✗
//                           </button>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Department Metrics */}
//           <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6">
//             <h2 className="text-xl font-bold text-neugray-text mb-4">Department Metrics</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//               {departmentMetrics.map((dept, index) => (
//                 <div key={index} className="p-4 bg-neugray-bg rounded-xl shadow-neumorph-sm">
//                   <h3 className="font-semibold text-neugray-text text-center mb-3">{dept.department}</h3>
//                   <div className="space-y-2">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600 text-sm">Open Roles</span>
//                       <span className="font-medium">{dept.openRoles}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600 text-sm">Applicants</span>
//                       <span className="font-medium">{dept.applicants}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600 text-sm">Interviews</span>
//                       <span className="font-medium">{dept.interviews}</span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Upcoming Interviews */}
//         <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6">
//           <h2 className="text-xl font-bold text-neugray-text mb-4">Upcoming Interviews</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {upcomingInterviews.map(interview => (
//               <div key={interview.id} className="p-4 bg-neugray-bg rounded-xl shadow-neumorph-sm">
//                 <div className="mb-4">
//                   <h3 className="font-semibold text-neugray-text">{interview.candidate}</h3>
//                   <p className="text-gray-600">{interview.position}</p>
//                   <p className="text-sm text-gray-500 mt-1 flex items-center">
//                     <span className="mr-1">📅</span> {interview.date}
//                   </p>
//                 </div>
//                 <div className="mb-4">
//                   <p className="text-sm text-gray-500">Interviewers:</p>
//                   <div className="flex mt-1 space-x-1">
//                     {interview.interviewers.map((interviewer, idx) => (
//                       <div key={idx} className="w-8 h-8 rounded-full bg-neugray-accent text-white flex items-center justify-center text-sm font-medium">
//                         {interviewer.charAt(0)}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//                 <div className="flex space-x-2">
//                   <button className="flex-1 bg-neugray-bg py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-text font-medium text-sm">
//                     Reschedule
//                   </button>
//                   <button className="flex-1 bg-neugray-bg py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium text-sm">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ManagerDashboard;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockData } from '../data/mockdata';
import { useEffect } from 'react';
import {delay, motion} from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import flowe from '../assets/Violet-Flowe.png';

const ManagerDashboard = () => {
  const navigate = useNavigate();
  const { hiringOverview, upcomingInterviews, departmentMetrics } = mockData.manager;
  const {logout} = useAuth();
  const [teamRequests, setTeamRequests] = useState(() => {
    const savedRequests = localStorage.getItem('teamRequests');
    return savedRequests ? JSON.parse(savedRequests) : mockData.manager.teamRequests;
  });

  // State for form inputs
  const [newRequest, setNewRequest] = useState({
    id: '',
    department: '',
    position: '',
    priority: 'Medium',
    status: 'Pending'
  });
  
  // State for editing mode
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  // Save to localStorage whenever teamRequests changes
  useEffect(() => {
    localStorage.setItem('teamRequests', JSON.stringify(teamRequests));
  }, [teamRequests]);
 
 
  const handleLogout = () => {
    logout()
;    navigate('/login');
  };



    const [scrolled, setScrolled] = useState(false);
  
    // Handle scroll event to add transparency effect
    useEffect(() => {
      const handleScroll = () => {
        const isScrolled = window.scrollY > 10;
        if (isScrolled !== scrolled) {
          setScrolled(isScrolled);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [scrolled]);
 const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.0,
      }
    }
  };

  const boxVariants = {
    hidden: { scale: 0, opacity: 0 },
    show: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.3 * (Math.random() * 2) // Random delay for each skill
      }
    }
  };
    // Form handlers
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setNewRequest({
        ...newRequest,
        [name]: value
      });
    };
  
    const handleAddRequest = () => {
      if (!newRequest.department || !newRequest.position) return;
      
      if (editingId !== null) {
        // Update existing request
        setTeamRequests(teamRequests.map(req => 
          req.id === editingId ? { ...newRequest, id: editingId } : req
        ));
        setEditingId(null);
      } else {
        // Add new request
        const id = Date.now().toString();
        setTeamRequests([...teamRequests, { ...newRequest, id }]);
      }
      
      // Reset form
      setNewRequest({
        id: '',
        department: '',
        position: '',
        priority: 'Medium',
        status: 'Pending'
      });
      setShowForm(false);
    };
  
    const handleEditRequest = (request) => {
      setNewRequest({ ...request });
      setEditingId(request.id);
      setShowForm(true);
    };
  
    const handleDeleteRequest = (id) => {
      setTeamRequests(teamRequests.filter(request => request.id !== id));
    };
  
    const handleApproveRequest = (id) => {
      setTeamRequests(teamRequests.map(request => 
        request.id === id ? { ...request, status: 'Approved' } : request
      ));
    };
  
    const handleRejectRequest = (id) => {
      setTeamRequests(teamRequests.map(request => 
        request.id === id ? { ...request, status: 'Rejected' } : request
      ));
    };
  return (
    <div className="bg-neugray-bg min-h-screen p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* <div className="flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8">
          <h1 className="text-xl sm:text-2xl font-bold text-neugray-text mb-3 sm:mb-0">Hiring Manager Dashboard</h1>
          <button 
            onClick={handleLogout}
            className="bg-neugray-bg px-4 py-2 rounded-lg shadow-neumorph-sm text-neugray-text font-medium hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow w-full sm:w-auto"
          >
            Logout
          </button>
        </div> */}
      {/* Fixed Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neugray-bg/70 backdrop-blur-sm shadow-md' : 'bg-neugray-bg'
      }`}>
        <div className="max-w-7xl mx-auto p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-0">
            <div className="flex items-center gap-3">
              <img src={flowe} className='min-w-10 min-h-10 w-12 h-12 max-sm:pt-3 opacity-90' alt="Logo" />
              <h1 className="text-xl sm:text-2xl font-bold text-neugray-text">HiringManager Dashboard</h1>
            </div>
            <button 
              onClick={handleLogout}
              className="bg-neugray-bg px-4 py-2 rounded-lg shadow-neumorph-sm text-neugray-text font-medium hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow w-full sm:w-auto mt-3 sm:mt-0"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-32 sm:mt-20"></div>
        {/* Hiring Overview Cards */}
        <motion.div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-4 sm:mb-6"
         variants={containerVariants}
              initial="hidden"
              animate="show">
          <motion.div className="bg-neugray-bg rounded-2xl shadow-neumorph p-3 sm:p-6 text-center"
           variants={boxVariants}
           initial="hidden"
           animate="show">
            <h3 className="text-gray-600 text-sm sm:text-base">Open Requisitions</h3>
            <p className="text-2xl sm:text-4xl font-bold text-neugray-accent mt-1 sm:mt-2">{hiringOverview.openRequisitions}</p>
          </motion.div>
             <motion.div className="bg-neugray-bg rounded-2xl shadow-neumorph p-3 sm:p-6 text-center"
           variants={boxVariants}
              initial="hidden"
              animate="show">
            <h3 className="text-gray-600 text-sm sm:text-base">Filled Positions</h3>
            <p className="text-2xl sm:text-4xl font-bold text-neugray-accent mt-1 sm:mt-2">{hiringOverview.filledPositions}</p>
          </motion.div>
          <motion.div className="bg-neugray-bg rounded-2xl shadow-neumorph p-3 sm:p-6 text-center"
           variants={boxVariants}
           initial="hidden"
           animate="show">
            <h3 className="text-gray-600 text-sm sm:text-base">Avg. Time to Hire</h3>
            <p className="text-2xl sm:text-4xl font-bold text-neugray-accent mt-1 sm:mt-2">{hiringOverview.timeToHire}</p>
          </motion.div>
          <motion.div className="bg-neugray-bg rounded-2xl shadow-neumorph p-3 sm:p-6 text-center"
           variants={boxVariants}
           initial="hidden"
           animate="show">
            <h3 className="text-gray-600 text-sm sm:text-base">Budget Utilization</h3>
            <p className="text-2xl sm:text-4xl font-bold text-neugray-accent mt-1 sm:mt-2">{hiringOverview.budgetUtilization}</p>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
          {/* Team Requests */}
          <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-3 sm:p-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-xl font-bold text-neugray-text mb-2 sm:mb-0">Team Requests</h2>
              <button 
                onClick={() => {
                  setShowForm(!showForm);
                  setEditingId(null);
                  setNewRequest({
                    id: '',
                    department: '',
                    position: '',
                    priority: 'Medium',
                    status: 'Pending'
                  });
                }}
                className="bg-neugray-bg px-3 py-1 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium text-sm w-full sm:w-auto"
              >
                {showForm ? '- Cancel' : '+ New Request'}
              </button>
            </div>
            
            {/* Form for adding/editing requests */}
            {showForm && (
              <div className="bg-neugray-bg rounded-xl shadow-neumorph-sm p-3 mb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Department</label>
                    <input
                      type="text"
                      name="department"
                      value={newRequest.department}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white rounded-lg shadow-inner text-sm"
                      placeholder="Enter department"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Position</label>
                    <input
                      type="text"
                      name="position"
                      value={newRequest.position}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white rounded-lg shadow-inner text-sm"
                      placeholder="Enter position"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Priority</label>
                    <select
                      name="priority"
                      value={newRequest.priority}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white rounded-lg shadow-inner text-sm"
                    >
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-1">Status</label>
                    <select
                      name="status"
                      value={newRequest.status}
                      onChange={handleInputChange}
                      className="w-full p-2 bg-white rounded-lg shadow-inner text-sm"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                      <option value="In Progress">In Progress</option>
                    </select>
                  </div>
                </div>
                <div className="mt-3 text-right">
                  <button
                    onClick={handleAddRequest}
                    className="bg-neugray-bg px-4 py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium text-sm"
                  >
                    {editingId !== null ? 'Update Request' : 'Add Request'}
                  </button>
                </div>
              </div>
            )}
            
            <div className="overflow-x-auto -mx-3 sm:mx-0">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm">
                    <th className="pb-2 sm:pb-3 px-2">Department</th>
                    <th className="pb-2 sm:pb-3 px-2 hidden sm:table-cell">Position</th>
                    <th className="pb-2 sm:pb-3 px-2">Priority</th>
                    <th className="pb-2 sm:pb-3 px-2 hidden md:table-cell">Status</th>
                    <th className="pb-2 sm:pb-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {teamRequests.map(request => (
                    <tr key={request.id} className="hover:bg-gray-50 transition-colors text-sm">
                      <td className="py-2 sm:py-3 px-2">{request.department}</td>
                      <td className="py-2 sm:py-3 px-2 hidden sm:table-cell">{request.position}</td>
                      <td className="py-2 sm:py-3 px-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          request.priority === "High" ? "bg-red-100 text-red-700" : 
                          request.priority === "Medium" ? "bg-yellow-100 text-yellow-700" :
                          "bg-green-100 text-green-700"
                        }`}>
                          {request.priority}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-2 hidden md:table-cell">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          request.status === "Approved" ? "bg-green-100 text-green-700" : 
                          request.status === "Rejected" ? "bg-red-100 text-red-700" :
                          request.status === "In Progress" ? "bg-blue-100 text-blue-700" :
                          "bg-gray-100 text-gray-700"
                        }`}>
                          {request.status}
                        </span>
                      </td>
                      <td className="py-2 sm:py-3 px-2">
                        <div className="flex space-x-2">
                          <button 
                            onClick={() => handleEditRequest(request)}
                            className="p-1 bg-neugray-bg rounded-md shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-blue-600"
                            title="Edit"
                          >
                            ✎
                          </button>
                          <button 
                            onClick={() => handleApproveRequest(request.id)}
                            className="p-1 bg-neugray-bg rounded-md shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-green-600"
                            title="Approve"
                          >
                            ✓
                          </button>
                          <button 
                            onClick={() => handleRejectRequest(request.id)}
                            className="p-1 bg-neugray-bg rounded-md shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-red-600"
                            title="Reject"
                          >
                            ✗
                          </button>
                          <button 
                            onClick={() => handleDeleteRequest(request.id)}
                            className="p-1 bg-neugray-bg rounded-md shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-gray-600"
                            title="Delete"
                          >
                            🗑
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {teamRequests.length === 0 && (
              <div className="text-center py-4 text-gray-500">
                No team requests found. Add a new request to get started.
              </div>
            )}
          </div>

          {/* Department Metrics */}
          <motion.div className="bg-neugray-bg rounded-2xl shadow-neumorph p-3 sm:p-6"
           variants={containerVariants}
           initial="hidden"
           animate="show">
            <h2 className="text-lg sm:text-xl font-bold text-neugray-text mb-3 sm:mb-4">Department Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {departmentMetrics.map((dept, index) => (
                <motion.div key={index} className="p-3 sm:p-4 bg-neugray-bg rounded-xl shadow-neumorph-sm"
                variants={boxVariants}
                initial="hidden"
                animate="show">
                  <h3 className="font-semibold text-neugray-text text-center mb-2 sm:mb-3 text-sm sm:text-base">{dept.department}</h3>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Open Roles</span>
                      <span className="font-medium">{dept.openRoles}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Applicants</span>
                      <span className="font-medium">{dept.applicants}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Interviews</span>
                      <span className="font-medium">{dept.interviews}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Upcoming Interviews */}
        <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-3 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-neugray-text mb-3 sm:mb-4">Upcoming Interviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {upcomingInterviews.map(interview => (
              <div key={interview.id} className="p-3 sm:p-4 bg-neugray-bg rounded-xl shadow-neumorph-sm">
                <div className="mb-3 sm:mb-4">
                  <h3 className="font-semibold text-neugray-text text-sm sm:text-base">{interview.candidate}</h3>
                  <p className="text-gray-600 text-sm">{interview.position}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mt-1 flex items-center">
                    <span className="mr-1">📅</span> {interview.date}
                  </p>
                </div>
                <div className="mb-3 sm:mb-4">
                  <p className="text-xs sm:text-sm text-gray-500">Interviewers:</p>
                  <div className="flex mt-1 space-x-1">
                    {interview.interviewers.map((interviewer, idx) => (
                      <div key={idx} className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-neugray-accent text-white flex items-center justify-center text-xs sm:text-sm font-medium">
                        {interviewer.charAt(0)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-neugray-bg py-1 sm:py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-text font-medium text-xs sm:text-sm">
                    Reschedule
                  </button>
                  <button className="flex-1 bg-neugray-bg py-1 sm:py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium text-xs sm:text-sm">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManagerDashboard;