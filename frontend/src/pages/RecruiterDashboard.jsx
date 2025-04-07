import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockData } from '../data/mockdata';
import {useEffect, useState} from 'react';
import flowe from '../assets/flowe1.png'

import { delay, motion } from 'framer-motion';
import {useAuth}  from '../context/AuthContext';
const RecruiterDashboard = () => {
  const navigate = useNavigate();
  const { stats, topCandidates } = mockData.recruiter;
 const [scrolled, setScrolled] = useState(false);
 const [jobPostings, setJobPostings] = useState(() => {
  // Try to get jobs from localStorage first
  const savedJobs = localStorage.getItem('jobPostings');
  return savedJobs ? JSON.parse(savedJobs) : mockData.recruiter.jobPostings;
});
const {logout} = useAuth();
// Save jobs to localStorage whenever they change
useEffect(() => {
  localStorage.setItem('jobPostings', JSON.stringify(jobPostings));
}, [jobPostings]);
  
  const [showNewJobForm, setShowNewJobForm] = useState(false);
  const [newJob, setNewJob] = useState({
    title: '',
    department: '',
    location: '',
    description: '',
    applicants: 0,
    status: 'Active',
    daysOpen: 0
  });


  
  const [editingJobId, setEditingJobId] = useState(null);
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };
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


      const formVariants = {
        hidden: { height: 0, opacity: 0 },
        show: { 
          height: 'auto', 
          opacity: 1,
          transition: { 
            type: "spring",
            stiffness: 200,
            damping: 25
          }
        }
      };


    
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingJobId !== null) {
      setJobPostings(prevJobs => 
        prevJobs.map(job => 
          job.id === editingJobId 
            ? { ...job, [name]: value } 
            : job
        )
      );
    } else {
      setNewJob(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmitJob = (e) => {
    e.preventDefault();
    if (editingJobId !== null) {
      // Update existing job
      setJobPostings(prevJobs => 
        prevJobs.map(job => 
          job.id === editingJobId 
            ? { ...job, editing: false } 
            : job
        )
      );
      setEditingJobId(null);
    } else {
      // Create new job
      const newJobWithId = {
        ...newJob,
        id: `job-${Date.now()}`, // Generate a unique ID
        applicants: 0,
        status: 'Active',
        daysOpen: 0
      };
      
      setJobPostings(prevJobs => [...prevJobs, newJobWithId]);
      
      // Reset form and hide it
      setNewJob({
        title: '',
        department: '',
        location: '',
        description: '',
        applicants: 0,
        status: 'Active',
        daysOpen: 0
      });
    }
    setShowNewJobForm(false);
  };

  const handleEditJob = (job) => {
    // Set all jobs to not editing
    setJobPostings(prevJobs => 
      prevJobs.map(j => ({ ...j, editing: j.id === job.id }))
    );
    
    setEditingJobId(job.id);
    setShowNewJobForm(true);
    
    // Populate form with job data
    setNewJob({
      title: job.title,
      department: job.department || '',
      location: job.location || '',
      description: job.description || '',
    });
  };

  const handleViewJob = (job) => {
    // Here you would typically navigate to a detailed view of the job
    console.log("Viewing job:", job);
    alert(`Viewing details for: ${job.title}`);
  };

  const cancelEdit = () => {
    setEditingJobId(null);
    setShowNewJobForm(false);
    setNewJob({
      title: '',
      department: '',
      location: '',
      description: '',
      applicants: 0,
      status: 'Active',
      daysOpen: 0
    });
    // Reset editing state for all jobs
    setJobPostings(prevJobs => 
      prevJobs.map(job => ({ ...job, editing: false }))
    );
  }; 

  return (
    <div className="bg-neugray-bg min-h-screen p-3 sm:p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
          <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              scrolled ? 'bg-neugray-bg/70 backdrop-blur-sm shadow-md' : 'bg-neugray-bg'
            }`}>
              <div className="max-w-7xl mx-auto p-3 sm:p-4">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-0">
                  <div className="flex items-center gap-3">
                    <img src={flowe} className='min-w-10 min-h-10 w-12 h-12 max-sm:pt-3 opacity-90' alt="Logo" />
                    <h1 className="text-xl sm:text-2xl font-bold text-neugray-text">Recruiter Dashboard</h1>
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

        {/* Stats Cards */}
        <motion.div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-4 md:mb-6 mt-20"
         variants={containerVariants}
         initial="hidden"
              animate="show">
          <motion.div className="bg-neugray-bg rounded-2xl shadow-neumorph p-4 sm:p-6 text-center"
           variants={boxVariants}
           initial="hidden"
                animate="show">
            <h3 className="text-sm sm:text-base text-gray-600">Open Positions</h3>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-neugray-accent mt-1 sm:mt-2">{stats.openPositions}</p>
          </motion.div>
          <motion.div className="bg-neugray-bg rounded-2xl shadow-neumorph p-4 sm:p-6 text-center"
           variants={boxVariants}
           initial="hidden"
                animate="show">
            <h3 className="text-sm sm:text-base text-gray-600">Applicants Today</h3>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-neugray-accent mt-1 sm:mt-2">{stats.applicantsToday}</p>
          </motion.div>
          <motion.div className="bg-neugray-bg rounded-2xl shadow-neumorph p-4 sm:p-6 text-center" 
               variants={boxVariants}
              initial="hidden"
                   animate="show">
            <h3 className="text-sm sm:text-base text-gray-600">Interviews Scheduled</h3>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-neugray-accent mt-1 sm:mt-2">{stats.interviewsScheduled}</p>
          </motion.div>
          <motion.div className="bg-neugray-bg rounded-2xl shadow-neumorph p-4 sm:p-6 text-center" variants={boxVariants}
              initial="hidden"
                   animate="show">
            <h3 className="text-sm sm:text-base text-gray-600">Hiring Rate</h3>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-neugray-accent mt-1 sm:mt-2">{stats.hiringRate}%</p>
          </motion.div>
        </motion.div>

        {/* Job Postings */}
        <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-4 sm:p-6 mb-4 md:mb-6">
          <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center mb-4 gap-2 xs:gap-0">
            <h2 className="text-lg sm:text-xl font-bold text-neugray-text">Job Postings</h2>
            <button 
              onClick={() => editingJobId ? cancelEdit() : setShowNewJobForm(!showNewJobForm)}
              className="w-full xs:w-auto bg-neugray-bg px-3 py-1 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium"
            >
              {editingJobId ? '- Cancel Edit' : showNewJobForm ? '- Cancel' : '+ New Job'}
            </button>
          </div>
          
          {/* Jobs form */}
          <motion.div 
            className="mb-4 overflow-hidden"
            initial="hidden"
            animate={showNewJobForm ? "show" : "hidden"}
            variants={formVariants}
          >
            <form onSubmit={handleSubmitJob} className="bg-neugray-bg rounded-xl shadow-neumorph-sm p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-600 mb-1">Job Title</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={editingJobId !== null 
                      ? jobPostings.find(job => job.id === editingJobId)?.title || '' 
                      : newJob.title}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-neugray-bg rounded-lg shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-neugray-accent text-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="department" className="block text-sm font-medium text-gray-600 mb-1">Department</label>
                  <input
                    type="text"
                    id="department"
                    name="department"
                    value={editingJobId !== null 
                      ? jobPostings.find(job => job.id === editingJobId)?.department || '' 
                      : newJob.department}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-neugray-bg rounded-lg shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-neugray-accent text-sm"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="location" className="block text-sm font-medium text-gray-600 mb-1">Location</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={editingJobId !== null 
                    ? jobPostings.find(job => job.id === editingJobId)?.location || '' 
                    : newJob.location}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-neugray-bg rounded-lg shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-neugray-accent text-sm"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="block text-sm font-medium text-gray-600 mb-1">Description</label>
                <textarea
                  id="description"
                  name="description"
                  rows="3"
                  value={editingJobId !== null 
                    ? jobPostings.find(job => job.id === editingJobId)?.description || '' 
                    : newJob.description}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 bg-neugray-bg rounded-lg shadow-neumorph-inset focus:outline-none focus:ring-2 focus:ring-neugray-accent text-sm"
                  required
                ></textarea>
              </div>
              <div className="flex justify-end">
                <button 
                  type="submit"
                  className="bg-neugray-bg px-4 py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium"
                >
                  {editingJobId !== null ? 'Update Job' : 'Create Job'}
                </button>
              </div>
            </form>
          </motion.div>
          
          <div className="overflow-x-auto -mx-4 sm:-mx-6 px-4 sm:px-6">
            <table className="w-full min-w-full">
              <thead>
                <tr className="text-left text-gray-500">
                  <th className="pb-3 px-2 text-xs sm:text-sm">Job Title</th>
                  <th className="pb-3 px-2 text-xs sm:text-sm">Applicants</th>
                  <th className="pb-3 px-2 text-xs sm:text-sm">Status</th>
                  <th className="pb-3 px-2 text-xs sm:text-sm">Days Open</th>
                  <th className="pb-3 px-2 text-xs sm:text-sm">Actions</th>
                </tr>
              </thead>
              <tbody>
                {jobPostings.map(job => (
                  <tr key={job.id} className={`hover:bg-gray-50 transition-colors ${job.editing ? 'bg-blue-50' : ''}`}>
                    <td className="py-2 sm:py-3 px-2 text-xs sm:text-sm">{job.title}</td>
                    <td className="py-2 sm:py-3 px-2 text-xs sm:text-sm">{job.applicants}</td>
                    <td className="py-2 sm:py-3 px-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        job.status === "Active" ? "bg-green-100 text-green-700" : 
                        "bg-yellow-100 text-yellow-700"
                      }`}>
                        {job.status}
                      </span>
                    </td>
                    <td className="py-2 sm:py-3 px-2 text-xs sm:text-sm">{job.daysOpen}</td>
                    <td className="py-2 sm:py-3 px-2">
                      <div className="flex space-x-2">
                        <button 
                          onClick={() => handleViewJob(job)}
                          className="p-1 bg-neugray-bg rounded-md shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow"
                          title="View job details"
                        >
                          👁️
                        </button>
                        <button 
                          onClick={() => handleEditJob(job)}
                          className="p-1 bg-neugray-bg rounded-md shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow"
                          title="Edit job"
                        >
                          ✏️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
       {/* jobs form */}
      
        {/* Top Candidates */}
        <div className="bg-neugray-bg rounded-2xl shadow-neumorph p-4 sm:p-6">
          <h2 className="text-lg sm:text-xl font-bold text-neugray-text mb-3 sm:mb-4">Top Candidates</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {topCandidates.map(candidate => (
              <div key={candidate.id} className="p-3 sm:p-4 bg-neugray-bg rounded-xl shadow-neumorph-sm">
                <div className="flex items-center mb-2 sm:mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-neugray-accent text-white flex items-center justify-center text-lg sm:text-xl font-bold mr-3">
                    {candidate.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-neugray-text">{candidate.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{candidate.position}</p>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-3 sm:mb-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Match Score</p>
                    <div className="relative inline-flex items-center justify-center">
                      <svg className="w-12 h-12 sm:w-16 sm:h-16" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E6EDF3"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#4299e1"
                          strokeWidth="3"
                          strokeDasharray={`${candidate.matchScore}, 100`}
                        />
                      </svg>
                      <span className="absolute text-xs sm:text-sm font-semibold">{candidate.matchScore}%</span>
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                      {candidate.status}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="flex-1 bg-neugray-bg py-1 sm:py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-text font-medium text-xs sm:text-sm">
                    Review
                  </button>
                  <button className="flex-1 bg-neugray-bg py-1 sm:py-2 rounded-lg shadow-neumorph-sm hover:shadow-neumorph active:shadow-neumorph-pressed transition-shadow text-neugray-accent font-medium text-xs sm:text-sm">
                    Contact
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

export default RecruiterDashboard;