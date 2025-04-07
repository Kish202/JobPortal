// data/mockData.js
export const mockData = {
    jobseeker: {
      profile: {
        name: "Alex Johnson",
        title: "Frontend Developer",
        location: "Seattle, WA",
        completionRate: 85
      },
      appliedJobs: [
        { id: 1, title: "Senior React Developer", company: "TechCorp", status: "Under Review", appliedDate: "2025-03-28" },
        { id: 2, title: "Frontend Engineer", company: "InnoSoft", status: "Interview Scheduled", appliedDate: "2025-03-25" },
        { id: 3, title: "UI Developer", company: "DesignHub", status: "Rejected", appliedDate: "2025-03-20" }
      ],
      recommendedJobs: [
        { id: 4, title: "React Developer", company: "WebSolutions", location: "Remote", salary: "$90K-$110K" },
        { id: 5, title: "Frontend Architect", company: "GlobalTech", location: "New York, NY", salary: "$120K-$140K" }
      ],
      skills: ["React", "JavaScript", "CSS", "HTML", "Redux", "TypeScript"]
    },
    
    recruiter: {
      stats: {
        openPositions: 12,
        applicantsToday: 28,
        interviewsScheduled: 5,
        hiringRate: 18
      },
      jobPostings: [
        { id: 101, title: "Senior React Developer", applicants: 24, status: "Active", daysOpen: 7 },
        { id: 102, title: "UI/UX Designer", applicants: 31, status: "Active", daysOpen: 5 },
        { id: 103, title: "Backend Engineer", applicants: 18, status: "On Hold", daysOpen: 14 }
      ],
      topCandidates: [
        { id: 201, name: "Jamie Smith", position: "Senior React Developer", matchScore: 92, status: "Interview Scheduled" },
        { id: 202, name: "Taylor Wilson", position: "UI/UX Designer", matchScore: 88, status: "Application Review" }
      ]
    },
    
    manager: {
      hiringOverview: {
        openRequisitions: 8,
        filledPositions: 3,
        timeToHire: "24 days",
        budgetUtilization: "68%"
      },
      teamRequests: [
        { id: 301, department: "Engineering", position: "DevOps Engineer", priority: "High", status: "Approved" },
        { id: 302, department: "Marketing", position: "Content Strategist", priority: "Medium", status: "Pending Approval" }
      ],
      upcomingInterviews: [
        { id: 401, candidate: "Morgan Lee", position: "Product Manager", date: "2025-04-08", interviewers: ["Jane", "Mike"] },
        { id: 402, candidate: "Casey Brown", position: "Data Analyst", date: "2025-04-10", interviewers: ["Lisa", "Tom"] }
      ],
      departmentMetrics: [
        { department: "Engineering", openRoles: 4, applicants: 58, interviews: 12 },
        { department: "Marketing", openRoles: 2, applicants: 43, interviews: 8 },
        { department: "Sales", openRoles: 2, applicants: 37, interviews: 9 }
      ]
    }
  };