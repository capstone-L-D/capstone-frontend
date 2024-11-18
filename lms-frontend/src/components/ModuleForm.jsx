import React, { useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';

function ModuleForm() {
  const [error, setError] = useState();
  const [submissionMessage, setSubmissionMessage] = useState(''); // State for the submission message
  const token = localStorage.getItem("authToken");
  const [module, setModule] = useState({
    moduleTitle: '',
    moduleDuration: 0,
    contents: [{ contentTitle: '', contentType: '', contentUrl: '' }],
  });

  const addContent = () => {
    setModule({
      ...module,
      contents: [...module.contents, { contentTitle: '', contentType: '', contentUrl: '' }],
    });
  };

  const removeContent = (index) => {
    const newContents = module.contents.filter((_, i) => i !== index);
    setModule({ ...module, contents: newContents });
  };

  const updateContent = (index, field, value) => {
    const newContents = module.contents.map((content, i) => {
      if (i === index) {
        return { ...content, [field]: value };
      }
      return content;
    });
    setModule({ ...module, contents: newContents });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmissionMessage(''); // Clear the previous message
    console.log(JSON.stringify(module));
    try {
      const response = await fetch("http://localhost:8333/modules/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(module),
      });
      console.log(response)
      if (response.status==200) {
        setModule({
            moduleTitle: '',
            moduleDuration: 0,
            contents: [{ contentTitle: '', contentType: '', contentUrl: '' }],
          })
        setSubmissionMessage('Module created successfully!'); // Success message
       
      } else {
        const responseData = await response.json();
       
        setSubmissionMessage(`Failed to create module: ${responseData.message || response.statusText}`);
      }
    } catch (err) {
      if (err.response) {
        setSubmissionMessage(
          `Failed to create module: ${err.response.data.message || err.response.statusText}`
        );
      } else if (err.request) {
        setSubmissionMessage("No response received from the server. Please try again.");
      } else {
        setSubmissionMessage(`Error: ${err.message}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Create Module</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="moduleTitle" className="block text-sm font-medium text-gray-700">
                Module Title
              </label>
              <input
                type="text"
                id="moduleTitle"
                value={module.moduleTitle}
                onChange={(e) => setModule({ ...module, moduleTitle: e.target.value })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 border p-2"
                required
              />
            </div>

            <div>
              <label htmlFor="moduleDuration" className="block text-sm font-medium text-gray-700">
                Module Duration (minutes)
              </label>
              <input
                type="number"
                id="moduleDuration"
                value={module.moduleDuration}
                onChange={(e) => setModule({ ...module, moduleDuration: Number(e.target.value) })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-50 border p-2"
                min="0"
                required
              />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-gray-900">Module Contents</h2>
              <button
                type="button"
                onClick={addContent}
                className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Plus className="h-4 w-4 mr-1" />
                Add Content
              </button>
            </div>

            {module.contents.map((content, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-gray-700">Content #{index + 1}</h3>
                  {module.contents.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeContent(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Content Title</label>
                    <input
                      type="text"
                      value={content.contentTitle}
                      onChange={(e) => updateContent(index, 'contentTitle', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white border p-2"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Content Type</label>
                    <select
                      value={content.contentType}
                      onChange={(e) => updateContent(index, 'contentType', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white border p-2"
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="video">Video</option>
                      <option value="document">Document</option>
                      <option value="quiz">Quiz</option>
                      <option value="assignment">Assignment</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Content URL</label>
                    <input
                      type="url"
                      value={content.contentUrl}
                      onChange={(e) => updateContent(index, 'contentUrl', e.target.value)}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-white border p-2"
                      placeholder="https://"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <Save className="h-4 w-4 mr-2" />
              Save Module
            </button>
          </div>

          {/* Display the submission message */}
          {submissionMessage && (
            <div
              className={`mt-4 text-center ${
                submissionMessage.startsWith("Failed")
                  ? "text-red-600"
                  : "text-green-600"
              }`}
            >
              {submissionMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModuleForm;
