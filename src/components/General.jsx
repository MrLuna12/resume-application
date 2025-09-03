import { useState } from "react";

function General() {
    const [isEditing, setEditing] = useState(true)
    const [inputFirstName, setInputFirstName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [inputLastName, setInputLastName] = useState('');
    const [lastName, setLastName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        setFirstName(inputFirstName);
        setLastName(inputLastName);
        setEmail(inputEmail);
        setEditing(false)
    }

    function handleEdit(event) {
        setEditing(true)
    }

    return (
        <div className="p-4">
            <div className="flex flex-col items-start gap-2">
                <h2 className="text-4xl">General Information</h2>

                {isEditing ?

                    <form onSubmit={(handleSubmit)} className="space-y-2">
                        <div className="flex gap-2 flex-col">
                            <input type="text" placeholder="First Name" value={inputFirstName} onChange={(event) => setInputFirstName(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <input type="text" placeholder="Last Name" value={inputLastName} onChange={(event) => setInputLastName(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            <input type="email" placeholder="Email" value={inputEmail} onChange={(event) => setInputEmail(event.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>

                        <button type="submit" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Save
                        </button>
                    </form>

                    :
                    <div>
                        <p>{firstName} {lastName}</p>

                        <p>{email}</p>

                        <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleEdit}>
                            edit
                        </button>

                    </div>
                }
            </div>
        </div>
    )
};

export default General;