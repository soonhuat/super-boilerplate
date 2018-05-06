import countries from './countryData'
import subjects from './subjectData'
import grades from './gradeData'
import educationLevels from './educationLevelData'
import englishBands from './englishBandData'

export const populateStep1CandidateLocale = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'Application',
      questions: [{
        title: 'Applicant Locale Status',
        type: 'Radio',
        options: ['Local', 'International'],
        isRequired: true,
        isAffectingSteps: true,
        className: 'col-xs-12 col-md-12 mt-3',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: false,
    skipCondition: [],
    version: 1,
  }
  return step
}

export const populateStep2InternationalPersonalInfo = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'Personal Information (International)',
      questions: [{
        title: 'Student Name',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Passport No',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Gender',
        type: 'Radio',
        options: ['Male', 'Female'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Marital Status',
        type: 'Radio',
        options: ['Single', 'Married'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Email Address',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Mobile No',
        description: '(starts with the country code)',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Home No',
        description: '(starts with the country code)',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Mailing Address',
        type: 'TextArea',
        isRequired: true,
        className: 'col-xs-12 col-md-12',
      }, {
        title: 'Postcode',
        type: 'Number',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'City',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Country',
        type: 'ComboBox',
        options: countries,
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Supporting Document',
        description: `Only these file format are accepted: pdf, doc, jpg, jpeg. | The maximum size per attachment is 1.0 MB 
          \n\rPlease rename the attachment filename to contain only characters. 
          \n\r* Compulsory supporting document`,
        type: 'Upload',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Previous Highest Education',
        type: 'ComboBox',
        options: ['O-Level', 'A-Level', 'Diploma', 'Degree', 'Master', 'PhD'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: true,
    skipCondition: [{
      title: 'Applicant Locale Status',
      answer: 'Local',
    }],
    isCombineSkipCondition: false,
    version: 1,
  }
  return step
}

export const populateStep2LocalPersonalInfo = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'Personal Information (Local)',
      questions: [{
        title: 'Student Name',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'NRIC',
        description: 'e.g: 880922001234',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Gender',
        type: 'Radio',
        options: ['Male', 'Female'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Marital Status',
        type: 'Radio',
        options: ['Single', 'Married'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Race',
        type: 'Radio',
        options: ['Malay', 'Chinese', 'Indian', 'Bumiputera (Sarawak)', 'Bumiputera (Sabah)', 'Others'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Religion',
        type: 'Radio',
        options: ['Islam', 'Christian', 'Buddha', 'Hindu', 'Others'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Email Address',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Mobile No',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Home No',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Mailing Address',
        type: 'TextArea',
        isRequired: true,
        className: 'col-xs-12 col-md-12',
      }, {
        title: 'Postcode',
        type: 'Number',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'City',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'State',
        type: 'ComboBox',
        options: ['Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 'Pahang', 'Perak', 'Perlis', 'Pulau Pinang', 'Sabah', 'Sarawak', 'Selangor', 'Terengganu', 'Wilayah Persekutuan Kuala Lumpur', 'Wilayah Persekutuan Labuan', 'Wilayah Persekutuan Petrajaya'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Previous Highest Education',
        type: 'ComboBox',
        options: ['SPM', 'STPM', 'UEC', 'Matriculation', 'O-Level', 'A-Level', 'Diploma', 'Degree', 'Master', 'PhD'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: true,
    skipCondition: [{
      title: 'Applicant Locale Status',
      answer: 'International',
    }],
    isCombineSkipCondition: false,
    version: 1,
  }
  return step
}

export const populateStep3HighEducationNonHighLevel = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'High School Education',
      questions: [{
        title: 'School Name',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Year of Completion',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Qualification Level',
        type: 'ComboBox',
        options: ['SPM', 'STPM', 'O-Level', 'A-Level', 'UEC', 'Matriculation', 'Diploma'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Qualification Name',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'List of Subject',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Subject 1',
        type: 'ComboBox',
        options: subjects,
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 1',
        type: 'ComboBox',
        options: grades,
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 2',
        type: 'ComboBox',
        options: subjects,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 2',
        type: 'ComboBox',
        options: grades,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 3',
        type: 'ComboBox',
        options: subjects,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 3',
        type: 'ComboBox',
        options: grades,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 4',
        type: 'ComboBox',
        options: subjects,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 4',
        type: 'ComboBox',
        options: grades,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 5',
        type: 'ComboBox',
        options: subjects,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 5',
        type: 'ComboBox',
        options: grades,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 6',
        type: 'ComboBox',
        options: subjects,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 6',
        type: 'ComboBox',
        options: grades,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 7',
        type: 'ComboBox',
        options: subjects,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 7',
        type: 'ComboBox',
        options: grades,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 8',
        type: 'ComboBox',
        options: subjects,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 8',
        type: 'ComboBox',
        options: grades,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 9',
        type: 'ComboBox',
        options: subjects,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 9',
        type: 'ComboBox',
        options: grades,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 10',
        type: 'ComboBox',
        options: subjects,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 10',
        type: 'ComboBox',
        options: grades,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 11',
        type: 'ComboBox',
        options: subjects,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 11',
        type: 'ComboBox',
        options: grades,
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 12',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 12',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 13',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 13',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Subject 14',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Grade 14',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: true,
    skipCondition: [{
      title: 'Previous Highest Education',
      answer: 'Degree',
    }, {
      title: 'Previous Highest Education',
      answer: 'Master',
    }, {
      title: 'Previous Highest Education',
      answer: 'PhD',
    }],
    isCombineSkipCondition: false,
    version: 1,
  }
  return step
}

export const populateStep3HighEducationHighLevel = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'High School Education',
      questions: [{
        title: 'Education 1',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Name of Qualification 1',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Level 1',
        type: 'ComboBox',
        options: educationLevels,
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Name of Institution 1',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'CGPA/Grade 1',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'From 1',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'To 1',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Education 2',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Name of Qualification 2',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Level 2',
        type: 'ComboBox',
        options: educationLevels,
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Name of Institution 2',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'CGPA/Grade 2',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'From 2',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'To 2',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Education 3',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Name of Qualification 3',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Level 3',
        type: 'ComboBox',
        options: educationLevels,
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Name of Institution 3',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'CGPA/Grade 3',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'From 3',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'To 3',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Education 4',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Name of Qualification 4',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Level 4',
        type: 'ComboBox',
        options: educationLevels,
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Name of Institution 4',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'CGPA/Grade 4',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'From 4',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'To 4',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Education 5',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Name of Qualification 5',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Level 5',
        type: 'ComboBox',
        options: educationLevels,
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Name of Institution 5',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'CGPA/Grade 5',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'From 5',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'To 5',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: true,
    skipCondition: [{
      title: 'Previous Highest Education',
      answer: 'SPM',
    }, {
      title: 'Previous Highest Education',
      answer: 'STPM',
    }, {
      title: 'Previous Highest Education',
      answer: 'UEC',
    }, {
      title: 'Previous Highest Education',
      answer: 'Matriculation',
    }, {
      title: 'Previous Highest Education',
      answer: 'O-Level',
    }, {
      title: 'Previous Highest Education',
      answer: 'A-Level',
    }, {
      title: 'Previous Highest Education',
      answer: 'Foundation',
    }, {
      title: 'Previous Highest Education',
      answer: 'Diploma',
    }],
    isCombineSkipCondition: false,
    version: 1,
  }
  return step
}

export const populateStep4ExtraCurricular = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'Extra Curricular Activities',
      questions: [{
        title: 'Extra Curricular Activity 1',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Activity 1',
        description: 'Activity / Club / Sport / Uniform / Award & Recognition',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Accomplishment 1',
        description: 'Role / Level of Accomplishment',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Organisation 1',
        description: 'Organisation / Awarded By',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Year 1',
        type: 'DatePicker',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Extra Curricular Activity 2',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Activity 2',
        description: 'Activity / Club / Sport / Uniform / Award & Recognition',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Accomplishment 2',
        description: 'Role / Level of Accomplishment',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Organisation 2',
        description: 'Organisation / Awarded By',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Year 2',
        type: 'DatePicker',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Extra Curricular Activity 3',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Activity 3',
        description: 'Activity / Club / Sport / Uniform / Award & Recognition',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Accomplishment 3',
        description: 'Role / Level of Accomplishment',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Organisation 3',
        description: 'Organisation / Awarded By',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Year 3',
        type: 'DatePicker',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Extra Curricular Activity 4',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Activity 4',
        description: 'Activity / Club / Sport / Uniform / Award & Recognition',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Accomplishment 4',
        description: 'Role / Level of Accomplishment',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Organisation 4',
        description: 'Organisation / Awarded By',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Year 4',
        type: 'DatePicker',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Extra Curricular Activity 5',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'Activity 5',
        description: 'Activity / Club / Sport / Uniform / Award & Recognition',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Accomplishment 5',
        description: 'Role / Level of Accomplishment',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Organisation 5',
        description: 'Organisation / Awarded By',
        type: 'Text',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Year 5',
        type: 'DatePicker',
        isRequired: false,
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: false,
    skipCondition: [],
    version: 1,
  }
  return step
}

export const populateStep5FinancialAid = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'Financial Aid',
      questions: [{
        title: 'Financial Source',
        type: 'ComboBox',
        options: ['Seft-Sponsored', 'Company Sponsorship', 'Bank Loan', 'PTPTN', 'MARA', 'EPF Withdrawal'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Settlement Method',
        type: 'ComboBox',
        options: ['Full Payment', 'Yearly Payment', 'Payment per Module', 'Payment per Semester'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: false,
    skipCondition: [],
    isCombineSkipCondition: false,
    version: 1,
  }
  return step
}

export const populateStep6EnglishProficiency = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'English Proficiency',
      questions: [{
        title: 'MUET',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'MUET Year',
        type: 'DatePicker',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'MUET Attachment',
        type: 'Upload',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'MUET Band',
        type: 'ComboBox',
        options: englishBands,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'IELTS',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'IELTS Year',
        type: 'DatePicker',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'IELTS Attachment',
        type: 'Upload',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'IELTS Band',
        type: 'ComboBox',
        options: englishBands,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'TOEFL',
        type: 'Label',
        className: 'col-xs-12 col-md-12 mt-3',
      }, {
        title: 'TOEFL Year',
        type: 'DatePicker',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'TOEFL Attachment',
        type: 'Upload',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'TOEFL Score',
        type: 'Number',
        regex: '^[1-9][0-9]?$|^120$',
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: false,
    skipCondition: [],
    isCombineSkipCondition: false,
    version: 1,
  }
  return step
}

export const populateStep7InternationalEmergencyContact = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'Emergency Contact Person (International)',
      questions: [{
        title: 'Contact Name',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Passport No',
        type: 'Text',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Occupation',
        type: 'Text',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Relationship',
        type: 'ComboBox',
        options: ['Father', 'Mother', 'Uncle', 'Auntie', 'Brother', 'Sister', 'Friend', 'Guardian'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Email Address',
        type: 'Text',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Mobile No',
        description: 'Starts with country code',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Mailing Address',
        type: 'TextArea',
        className: 'col-xs-12 col-md-12',
      }, {
        title: 'Postcode',
        type: 'Number',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'City',
        type: 'Text',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Country',
        type: 'ComboBox',
        options: countries,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Home No',
        type: 'Text',
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: true,
    skipCondition: [{
      title: 'Applicant Locale Status',
      answer: 'Local',
    }],
    isCombineSkipCondition: false,
    version: 1,
  }
  return step
}

export const populateStep7LocalEmergencyContact = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'Emergency Contact Person (International)',
      questions: [{
        title: 'Contact Name',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Relationship',
        type: 'ComboBox',
        options: ['Father', 'Mother', 'Uncle', 'Auntie', 'Brother', 'Sister', 'Friend', 'Guardian'],
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Email Address',
        type: 'Text',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Mobile No',
        description: 'e.g: 01326173201',
        type: 'Text',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Home No',
        description: 'e.g: 0326173201',
        type: 'Text',
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: true,
    skipCondition: [{
      title: 'Applicant Locale Status',
      answer: 'International',
    }],
    isCombineSkipCondition: false,
    version: 1,
  }
  return step
}

export const populateStep8InternationalSupportDoc = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'Supporting Document (International)',
      questions: [{
        title: 'Passport',
        description: 'Includes front with expiry date',
        type: 'Upload',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Scoll Certificate',
        description: 'Highest education obtained from the last institute attended',
        type: 'Upload',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Transcript',
        description: 'Highest education obtained from the last institute attended',
        type: 'Upload',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'PhD Proposal',
        description: 'Research / thesis proposal - compulsory for PhD applicant',
        type: 'Upload',
        className: 'col-xs-12 col-md-6',
      }, {
        title: 'Personal CV',
        description: 'Compulsory for PhD applicant',
        type: 'Upload',
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: true,
    skipCondition: [{
      title: 'Applicant Locale Status',
      answer: 'Local',
    }],
    isCombineSkipCondition: false,
    version: 1,
  }
  return step
}

export const populateStep8LocalSupportDoc = () => {
  const step = {
    details: [{
      language: 'en',
      title: 'Supporting Document (International)',
      questions: [{
        title: 'Identity Card (IC)',
        description: 'Includes front and back in one page',
        type: 'Upload',
        isRequired: true,
        className: 'col-xs-12 col-md-6',
      }],
      isDefault: true,
    }],
    // owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    isMaster: true,
    masterStep: null,
    isRequiredApproval: false,
    isSkippable: true,
    skipCondition: [{
      title: 'Applicant Locale Status',
      answer: 'International',
    }],
    isCombineSkipCondition: false,
    version: 1,
  }
  return step
}

