import React, { useState } from 'react';
import './syllabusentryc.css';

const SyllabusEntry = () => {
  const [degree, setDegree] = useState('');
  const [branch, setBranch] = useState('');
  const [regulation, setRegulation] = useState('');
  const [subject, setSubject] = useState('');
  const [showDropdown, setShowDropdown] = useState('');
  const [courseOutcomes, setCourseOutcomes] = useState([]);
  const [poMappings, setPoMappings] = useState([]);
  const [courseContent, setCourseContent] = useState([]);

  const handleDropdownToggle = (dropdownName) => {
    setShowDropdown((prevDropdown) =>
      prevDropdown === dropdownName ? '' : dropdownName
    );
  };

  const handleAddCourseOutcome = () => {
    setCourseOutcomes([...courseOutcomes, { id: Date.now(), value: '' }]);
  };

  const handleCourseOutcomeChange = (id, value) => {
    setCourseOutcomes(
      courseOutcomes.map((outcome) =>
        outcome.id === id ? { ...outcome, value } : outcome
      )
    );
  };

  const handleDeleteCourseOutcome = (id) => {
    setCourseOutcomes(courseOutcomes.filter((outcome) => outcome.id !== id));
  };

  const handleAddPoMapping = () => {
    setPoMappings([...poMappings, { id: Date.now(), value1: '', value2: '' }]);
  };

  const handlePoMappingChange = (id, field, value) => {
    setPoMappings(
      poMappings.map((mapping) =>
        mapping.id === id ? { ...mapping, [field]: value } : mapping
      )
    );
  };

  const handleDeletePoMapping = (id) => {
    setPoMappings(poMappings.filter((mapping) => mapping.id !== id));
  };

  const handleAddCourseContent = () => {
    setCourseContent([...courseContent, { id: Date.now(), unitTitle: '', hours: 0, details: '' }]);
  };

  const handleCourseContentChange = (id, field, value) => {
    setCourseContent(
      courseContent.map((content) =>
        content.id === id ? { ...content, [field]: value } : content
      )
    );
  };

  const handleDeleteCourseContent = (id) => {
    setCourseContent(courseContent.filter((content) => content.id !== id));
  };

  return (
    <div className="syllabus-entry">
      <div>
        <span>Degree</span>
        <select
          className="syllabus-entry-select"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
        >
          <option value="">Select Degree</option>
          {/* Add degree options here */}
        </select>

        <span>Branch</span>
        <select
          className="syllabus-entry-select"
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          <option value="">Select Branch</option>
          {/* Add branch options here */}
        </select>

        <span>Regulation</span>
        <select
          className="syllabus-entry-select"
          value={regulation}
          onChange={(e) => setRegulation(e.target.value)}
        >
          <option value="">Select Regulation</option>
          {/* Add regulation options here */}
        </select>

        <span>Subject</span>
        <select
          className="syllabus-entry-select"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="">Select Subject</option>
          {/* Add subject options here */}
        </select>
      </div>

      <div>
        <div
          className="dropdown-section"
          onClick={() => handleDropdownToggle('courseObjective')}
        >
          Course Objective Entry
        </div>
        {showDropdown === 'courseObjective' && (
          <div className="dropdown-content">
            {courseOutcomes.map((outcome, index) => (
              <div key={outcome.id} className="course-outcome-item">
                <span>Course Objective {index + 1}</span>
                <textarea
                  className="course-outcome-textarea"
                  value={outcome.value}
                  onChange={(e) =>
                    handleCourseOutcomeChange(outcome.id, e.target.value)
                  }
                />
                <div className="course-outcome-buttons">
                  <button
                    className="course-outcome-update-button"
                    onClick={() => console.log('Update clicked')}
                  >
                    Update
                  </button>
                  <button
                    className="course-outcome-delete-button"
                    onClick={() => handleDeleteCourseOutcome(outcome.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <button
              className="course-outcome-add-button"
              onClick={handleAddCourseOutcome}
            >
              Add Outcome
            </button>
          </div>
        )}
      </div>

      <div>
        <div
          className="dropdown-section"
          onClick={() => handleDropdownToggle('poMapping')}
        >
          Course Objective Entry & PO Mapping
        </div>
        {showDropdown === 'poMapping' && (
          <div className="dropdown-content">
            {poMappings.map((mapping, index) => (
              <div key={mapping.id} className="po-mapping-item">
                <span>CO-{index + 1}</span>
                <input
                  type="text"
                  className="po-mapping-input"
                  value={mapping.value1}
                  onChange={(e) =>
                    handlePoMappingChange(mapping.id, 'value1', e.target.value)
                  }
                />
                <input
                  type="text"
                  className="po-mapping-input"
                  value={mapping.value2}
                  onChange={(e) =>
                    handlePoMappingChange(mapping.id, 'value2', e.target.value)
                  }
                />
                <div className="po-mapping-buttons">
                  <button
                    className="po-mapping-update-button"
                    onClick={() => console.log('Update clicked')}
                  >
                    Update
                  </button>
                  <button
                    className="po-mapping-delete-button"
                    onClick={() => handleDeletePoMapping(mapping.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <button
              className="po-mapping-add-button"
              onClick={handleAddPoMapping}
            >
              Add Mapping
            </button>
          </div>
        )}
      </div>

      <div>
        <div
          className="dropdown-section"
          onClick={() => handleDropdownToggle('courseContent')}
        >
          Course Content Entry
        </div>
        {showDropdown === 'courseContent' && (
          <div className="dropdown-content">
            {courseContent.map((content, index) => (
              <div key={content.id} className="course-content-item">
                <span>Unit Title</span>
                <input
                  type="text"
                  className="course-content-input"
                  value={content.unitTitle}
                  onChange={(e) =>
                    handleCourseContentChange(content.id, 'unitTitle', e.target.value)
                  }
                />
                <span>Hours</span>
                <input
                  type="number"
                  className="course-content-input"
                  value={content.hours}
                  onChange={(e) =>
                    handleCourseContentChange(content.id, 'hours', e.target.value)
                  }
                />
                <span>Details</span>
                <textarea
                  className="course-content-textarea"
                  value={content.details}
                  onChange={(e) =>
                    handleCourseContentChange(content.id, 'details', e.target.value)
                  }
                />
                <div className="course-content-buttons">
                  <button
                    className="course-content-update-button"
                    onClick={() => console.log('Update clicked')}
                  >
                    Update
                  </button>
                  <button
                    className="course-content-delete-button"
                    onClick={() => handleDeleteCourseContent(content.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
            <button
              className="course-content-add-button"
              onClick={handleAddCourseContent}
            >
              Add Content
            </button>
          </div>
        )}
      </div>

      <div>
        <span>Report Download</span>
        <input
          className="syllabus-entry-input"
          type="text"
          placeholder="Include"
        />
        <button className="syllabus-entry-button">Select</button>
        <label>
          <input type="radio" name="format" value="word" /> MS Word
        </label>
        <label>
          <input type="radio" name="format" value="pdf" /> PDF
        </label>
        <button className="syllabus-entry-button">Generate</button>
      </div>
    </div>
  );
};

export default SyllabusEntry;
