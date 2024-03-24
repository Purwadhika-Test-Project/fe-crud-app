import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import generateFakeData from "@/utils/data/generateFakeData";

const Dashboard = () => {
  const [data, setData] = useState<any>([]);
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [formData, setFormData] = useState<any>({
    username: "",
    email: "",
    location: "",
    phone: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const fakeData = generateFakeData();
      setData(fakeData);
    };

    fetchData();
  }, []);

  const handleAddData = () => {
    const newData = {
      username: formData.username,
      email: formData.email,
      location: formData.location,
      phone: formData.phone,
    };
    setData([newData, ...data]);
    setFormData({
      username: "",
      email: "",
      location: "",
      phone: "",
    });
    setIsAdding(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Layout>
      <div className="container h-screen mx-auto">
        <h1 className="text-2xl font-semibold text-white my-4">User Data</h1>
        <button
          onClick={() => setIsAdding(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded fixed bottom-5 right-5"
        >
          Add Data
        </button>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((item: any, index: any) => (
              <tr key={index}>
                <td
                  className={`px-6 py-4 whitespace-no-wrap ${
                    index % 2 === 0 ? "bg-cyan-100" : "bg-white"
                  }`}
                >
                  {item.username}
                </td>
                <td
                  className={`px-6 py-4 whitespace-no-wrap ${
                    index % 2 === 0 ? "bg-cyan-100" : "bg-white"
                  }`}
                >
                  {item.email}
                </td>
                <td
                  className={`px-6 py-4 whitespace-no-wrap ${
                    index % 2 === 0 ? "bg-cyan-100" : "bg-white"
                  }`}
                >
                  {item.location}
                </td>
                <td
                  className={`px-6 py-4 whitespace-no-wrap ${
                    index % 2 === 0 ? "bg-cyan-100" : "bg-white"
                  }`}
                >
                  {item.phone}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isAdding && (
          <div
            onClick={() => setIsAdding(false)}
            className="fixed inset-0 bg-black opacity-50 z-50"
          ></div>
        )}
        {isAdding && (
          <div className="fixed bottom-0 right-0 mb-20 mr-20 bg-white p-4 rounded-lg shadow-lg z-50">
            <h2 className="text-lg font-semibold mb-2">Add New Data</h2>
            <div className="mb-2">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md
                shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              onClick={handleAddData}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;
