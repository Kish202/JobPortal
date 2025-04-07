// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { mockData } from '../data/mockdata';

// const JobSeekerDashboard = () => {
//   const navigate = useNavigate();
//   const { profile, appliedJobs, recommendedJobs, skills } = mockData.jobseeker;

//   const handleLogout = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="bg-neugray-bg min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-2xl font-bold text-neugray-text">Job Seeker Dashboard</h1>
//           <button 
//             onClick={handleLogout}
//             className="bg-neugray-bg px-4 py-2 rounded-lg shadow-neumorph-sm text-neugray-text font-medium hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow"
//           >
//             Logout
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {/* Profile Card */}
//           <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6 col-span-1 md:col-span-2">
//             <div className="flex items-center mb-4">
//               <div className="w-16 h-16 rounded-full bg-neugray-accent text-white flex items-center justify-center text-2xl font-bold shadow-neumorph-sm">
//                 {profile.name.charAt(0)}
//               </div>
//               <div className="ml-4">
//                 <h2 className="text-xl font-bold text-neugray-text">{profile.name}</h2>
//                 <p className="text-gray-600">{profile.title}</p>
//                 <p className="text-gray-600">{profile.location}</p>
//               </div>
//             </div>
//             <div className="mt-4">
//               <h3 className="text-lg font-medium text-neugray-text">Profile Completion</h3>
//               <div className="mt-2 h-2 bg-gray-200 rounded-full shadow-inner">
//                 <div 
//                   className="h-full bg-neugray-accent rounded-full" 
//                   style={{ width: `${profile.completionRate}%` }}
//                 ></div>
//               </div>
//               <p className="mt-1 text-sm text-gray-600">{profile.completionRate}% Complete</p>
//             </div>
//           </div>

//           {/* Skills Card */}
//           <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6 col-span-1 md:col-span-2">
//             <h2 className="text-xl font-bold text-neugray-text mb-4">Skills</h2>
//             <div className="flex flex-wrap gap-2">
//               {skills.map((skill, index) => (
//                 <span 
//                   key={index} 
//                   className="px-3 py-1 bg-neugray-bg rounded-full text-sm shadow-neumorph-sm"
//                 >
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Applied Jobs */}
//           <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6 col-span-1 md:col-span-2">
//             <h2 className="text-xl font-bold text-neugray-text mb-4">Applied Jobs</h2>
//             <div className="overflow-x-auto">
//               <table className="w-full">
//                 <thead>
//                   <tr className="text-left text-gray-500">
//                     <th className="pb-3">Position</th>
//                     <th className="pb-3">Company</th>
//                     <th className="pb-3">Applied On</th>
//                     <th className="pb-3">Status</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-200">
//                   {appliedJobs.map(job => (
//                     <tr key={job.id} className="hover:bg-gray-50 transition-colors">
//                       <td className="py-3">{job.title}</td>
//                       <td className="py-3">{job.company}</td>
//                       <td className="py-3">{job.appliedDate}</td>
//                       <td className="py-3">
//                         <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                           job.status === "Under Review" ? "bg-blue-100 text-blue-700" :
//                           job.status === "Interview Scheduled" ? "bg-green-100 text-green-700" :
//                           "bg-red-100 text-red-700"
//                         }`}>
//                           {job.status}
//                         </span>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//           {/* Recommended Jobs */}
//           <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-6 col-span-1 md:col-span-2">
//             <h2 className="text-xl font-bold text-neugray-text mb-4">Recommended Jobs</h2>
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//               {recommendedJobs.map(job => (
//                 <div key={job.id} className="p-4 bg-neugray-bg rounded-xl shadow-neumorph-sm">
//                   <h3 className="font-semibold text-neugray-text">{job.title}</h3>
//                   <h4 className="text-gray-600 mb-2">{job.company}</h4>
//                   <div className="flex justify-between text-sm text-gray-500 mb-4">
//                     <span>{job.location}</span>
//                     <span>{job.salary}</span>
//                   </div>
//                   <button className="w-full bg-neugray-bg py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium">
//                     Apply Now
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default JobSeekerDashboard;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { mockData } from '../data/mockdata';
import flowe from '../assets/flowe.png'
import { useEffect } from 'react';

import { delay, motion } from 'framer-motion';
const JobSeekerDashboard = () => {
  const navigate = useNavigate();
  const { profile, appliedJobs, recommendedJobs } = mockData.jobseeker;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [isEditing, setIsEditing] = useState(false)

  const handleLogout = () => {
    navigate('/login');
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

  useEffect(() => {
    const savedSkills = localStorage.getItem('jobseekerSkills');
    if (savedSkills) {
      setSkills(JSON.parse(savedSkills));
    } else {
      // If no skills in localStorage, use mock data
      setSkills(mockData.jobseeker.skills);
      // Save initial skills to localStorage
      localStorage.setItem('jobseekerSkills', JSON.stringify(mockData.jobseeker.skills));
    }
  }, []);

  // Save skills to localStorage whenever they change
  useEffect(() => {
    if (skills.length > 0) {
      localStorage.setItem('jobseekerSkills', JSON.stringify(skills));
    }
  }, [skills]);
  const addSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() !== '' && !skills.includes(newSkill.trim())) {
      const updatedSkills = skills.some(skill => skill.toLowerCase() === newSkill.trim().toLowerCase()) 
  ? skills 
  : [...skills, newSkill.trim()];
      setSkills(updatedSkills);
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    const updatedSkills = skills.filter(skill => skill !== skillToRemove);
    setSkills(updatedSkills);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
    setNewSkill('');
  };

 
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  
  
  const skillVariants = {
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

  return (
    <div className="bg-neugray-bg min-h-screen p-3 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        {/* <div className="flex flex-col sm:flex-row justify-between items-center mb-6 sm:mb-8">
<img src={flowe} className='min-w-10 min-h-10 w-12 h-12 opacity-90' alt="" />
          <button 
            onClick={handleLogout}
            className="bg-neugray-bg px-4 py-2 rounded-lg shadow-neumorph-sm text-neugray-text font-medium hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow w-full sm:w-auto"
          >
            Logout
          </button>
        </div> */}

{/* <div className="bg-neugray-bg min-h-screen p-3 sm:p-4 md:p-6 pt-20 sm:pt-24"> */}
      {/* Fixed Header */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-neugray-bg/70 backdrop-blur-sm shadow-md' : 'bg-neugray-bg'
      }`}>
        <div className="max-w-7xl mx-auto p-3 sm:p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-0">
            <div className="flex items-center gap-3">
              <img src={flowe} className='min-w-10 min-h-10 w-12 h-12 max-sm:pt-3 opacity-90' alt="Logo" />
              <h1 className="text-xl sm:text-2xl font-bold text-neugray-text">JobSeeker Dashboard</h1>
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

        <div className="grid grid-cols-1 gap-4 sm:gap-6 mt-32 sm:mt-20">
          {/* Profile Card */}
          <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center mb-4">
              <div className="w-16 h-16 rounded-full bg-neugray-accent text-white flex items-center justify-center text-2xl font-bold shadow-neumorph-sm mx-auto sm:mx-0 mb-4 sm:mb-0">
                {profile.name.charAt(0)}
              </div>
              <div className="sm:ml-4 text-center sm:text-left">
                <h2 className="text-xl font-bold text-neugray-text">{profile.name}</h2>
                <p className="text-gray-600">{profile.title}</p>
                <p className="text-gray-600">{profile.location}</p>
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-neugray-text">Profile Completion</h3>
              <div className="mt-2 h-2 bg-gray-200 rounded-full shadow-inner">
                <div 
                  className="h-full bg-neugray-accent rounded-full" 
                  style={{ width: `${profile.completionRate}%` }}
                ></div>
              </div>
              <p className="mt-1 text-sm text-gray-600">{profile.completionRate}% Complete</p>
            </div>
          </div>



          {/* Skills Card */}
          <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-4 sm:p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-neugray-text">Skills</h2>
              <button 
                onClick={toggleEditing}
                className="p-2 bg-neugray-bg rounded-md shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent text-sm"
              >
                {isEditing ? 'Done' : 'Edit Skills'}
              </button>
            </div>
            
            {isEditing && (
              <form onSubmit={addSkill} className="mb-4 flex">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Add a new skill..."
                  className="flex-1 p-2 rounded-l-lg bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-neugray-accent"
                />
                <button 
                  type="submit"
                  className="bg-neugray-accent text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90"
                >
                  Add
                </button>
              </form>
            )}
            
            <motion.div 
              className="flex flex-wrap gap-2 justify-center sm:justify-start"
              variants={containerVariants}
              initial="hidden"
                   animate="show"
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="px-3 py-1 bg-neugray-bg rounded-full text-sm shadow-neumorph-sm flex items-center"
                  variants={skillVariants}
                  custom={index}
                >
                  {skill}
                  {isEditing && (
                    <button 
                      onClick={() => removeSkill(skill)} 
                      className="ml-2 text-gray-500 hover:text-red-500"
                    >
                      ✕
                    </button>
                  )}
                </motion.div>
              ))}
              {skills.length === 0 && (
                <p className="text-gray-500 text-sm">No skills added yet. Click "Edit Skills" to add some.</p>
              )}
            </motion.div>
          </div>

          {/* Applied Jobs */}
          <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-4 sm:p-6">
            <h2 className="text-xl font-bold text-neugray-text mb-4">Applied Jobs</h2>
            <div className="overflow-x-auto -mx-4 sm:mx-0">
              <table className="w-full min-w-full">
                <thead>
                  <tr className="text-left text-gray-500">
                    <th className="pb-3 px-4 sm:px-2">Position</th>
                    <th className="pb-3 px-2 hidden sm:table-cell">Company</th>
                    <th className="pb-3 px-2 hidden md:table-cell">Applied On</th>
                    <th className="pb-3 px-4 sm:px-2">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {appliedJobs.map(job => (
                    <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-4 sm:px-2 font-medium">{job.title}</td>
                      <td className="py-3 px-2 hidden sm:table-cell">{job.company}</td>
                      <td className="py-3 px-2 hidden md:table-cell">{job.appliedDate}</td>
                      <td className="py-3 px-4 sm:px-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          job.status === "Under Review" ? "bg-blue-100 text-blue-700" :
                          job.status === "Interview Scheduled" ? "bg-green-100 text-green-700" :
                          "bg-red-100 text-red-700"
                        }`}>
                          {job.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Recommended Jobs */}
          <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-4 sm:p-6">
            <h2 className="text-xl font-bold text-neugray-text mb-4">Recommended Jobs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recommendedJobs.map(job => (
                <div key={job.id} className="p-3 sm:p-4 bg-neugray-bg rounded-xl shadow-neumorph-sm">
                  <h3 className="font-semibold text-neugray-text text-base">{job.title}</h3>
                  <h4 className="text-gray-600 text-sm mb-2">{job.company}</h4>
                  <div className="flex flex-col sm:flex-row justify-between text-sm text-gray-500 mb-3">
                    <span className="mb-1 sm:mb-0">{job.location}</span>
                    <span>{job.salary}</span>
                  </div>
                  <button className="w-full bg-neugray-bg py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerDashboard;