import { useState } from "react";

function Education() {
    const [isEditing, setEditing] = useState(true);
    const [inputSchoolName, setInputSchoolName] = useState('');
    const [schoolName, setSchoolName] = useState('');
    const [inputStudyProgram, setInputStudyProgram] = useState('');
    const [studyProgram, setStudyProgram] = useState('');
    const [inputStartDate, setInputStartDate] = useState('');
    const [startDate, setStartDate] = useState('');
    const [inputEndDate, setInputEndDate] = useState('');
    const [endDate, setEndDate] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setSchoolName(inputSchoolName);
        setStudyProgram(inputStudyProgram);
        setStartDate(inputStartDate);
        setEndDate(inputEndDate);
        setEditing(false);
    }

    function handleEdit() {
        setEditing(true);
    }

    return (
        <div className="p-4">
            <div className="flex flex-col items-start gap-2">
                <h2 className="text-4xl">Education Experience</h2>
                {isEditing ? (
                    <form onSubmit={handleSubmit} className="space-y-2">
                        <div className="flex gap-2 flex-col">
                            <input type="text" placeholder="School Name" value={inputSchoolName} onChange={e => setInputSchoolName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <input type="text" placeholder="Study Program" value={inputStudyProgram} onChange={e => setInputStudyProgram(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <input type="date" placeholder="From" value={inputStartDate} onChange={e => setInputStartDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <input type="date" placeholder="To" value={inputEndDate} onChange={e => setInputEndDate(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <button type="submit" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Save
                        </button>
                    </form>
                ) : (
                    <div>
                        <p>{schoolName}</p>
                        <p>{studyProgram}</p>
                        <p>{startDate} - {endDate}</p>
                        <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleEdit}>
                            Edit
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Education;