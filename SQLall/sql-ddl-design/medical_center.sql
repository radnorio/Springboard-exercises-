--database for medical center

DROP DATABASE IF EXISTS medical_center;
CREATE DATABASE medical_center;
\c outer_space
--creates Doctors table
CREATE TABLE Doctors
(
    doctor_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    patients INT REFERENCES Patients(patient_id) ON DELETE SET NULL
);
--creates Patients label
CREATE TABLE Patients
(
    patient_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    doctors INT REFERENCES Doctors(doctor_id) ON DELETE SET NULL,
    diagnoses TEXT[]
);