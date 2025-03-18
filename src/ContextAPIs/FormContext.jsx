import { createContext, useState, useContext } from "react";

export const FormContext = createContext(null);

const initialFormData = {
  fullName: "",
  formNo: "",
  parentName: "",
  parentNumber: "",
  school: "",
  jobInfo: "",
  email: "",
  gender: "",
  presentAddress: "",
  permanentAddress: "",
  nid: "",
  mobile: "",
  guardianName: "",
  dob: "",
  bloodGroup: "",
};

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState(initialFormData);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
