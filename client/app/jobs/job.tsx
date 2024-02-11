"use client"
import React, { useState } from 'react';
import Link from 'next/link';

interface Job {
  _id: string;
  company_name: string;
  title: string;
  description: string;
  remote: boolean;
  url: string;
  tags: string[];
  job_types: string[];
  location: string;
  created_at: string;
}

interface Props {
  jobs: Job[];
}

const Jobs: React.FC<Props> = ({ jobs }) => {
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);

  const applyJob = (jobId: string) => {
    setAppliedJobs(prevState => [...prevState, jobId]);
  };

  const isJobApplied = (jobId: string) => {
    return appliedJobs.includes(jobId);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold mb-8">Jobs</h1>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map(job => (
          <div key={job._id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{job.title}</h2>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <p className="text-gray-700 mb-2">Location: {job.location}</p>
            <p className="text-gray-700 mb-2">Company: {job.company_name}</p>
            <p className="text-gray-700 mb-2">Job Type: {job.job_types.join(', ')}</p>
            <div className="flex justify-end mt-4">
              {!isJobApplied(job._id) ? (
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
                  onClick={() => applyJob(job._id)}
                >
                  Apply
                </button>
              ) : (
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded cursor-not-allowed"
                  disabled
                >
                  Applied
                </button>
              )}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;