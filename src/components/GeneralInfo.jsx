import { useState } from "react";

function GeneralInfo() {
    const [inputFirstName, setInputFirstName] = useState('');
    const [firstName, setFirstName] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setFirstName(inputFirstName)
    }

    return (
        <div className="p-4">
            <div className="flex flex-col items-start gap-2">
                <h2 className="text-4xl">General Information</h2>

                <form onSubmit={(handleSubmit)}>
                    <div className="flex gap-2 flex-col">
                        <input type="text" placeholder="First Name" onChange={(event) => setInputFirstName(event.target.value)} className="border border-gray-500 rounded" />
                        <input type="text" placeholder="Last Name" className="border border-gray-500 rounded" />
                        <input type="email" placeholder="Email" className="border border-gray-500 rounded" />
                    </div>

                    <button type="submit" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Save
                    </button>
                </form>
            </div>
        </div>
    )
};

export default GeneralInfo;