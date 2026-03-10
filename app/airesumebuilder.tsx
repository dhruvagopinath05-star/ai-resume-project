"use client";

import { useState } from "react";

export default function AIResumeBuilder() {

    const [resume, setResume] = useState({
        name: "",
        job: "",
        email: "",
        phone: "",
        summary: "",
        education: "",
        skills: "",
        experience: "",
        certificates: "",
        declaration: ""
    });

    const [template, setTemplate] = useState("modern");

    const inputStyle = {
        width: "100%",
        padding: "10px",
        marginTop: "10px",
        borderRadius: "6px",
        border: "1px solid gray"
    };

    const sectionTitle = {
        marginTop: "20px",
        fontWeight: "bold"
    };

    function downloadPDF() {
        window.print();
    }

    return (

        <div style={{
            display: "flex",
            gap: "40px",
            padding: "40px",
            background: "#020617",
            minHeight: "100vh",
            color: "white"
        }}>

            {/* LEFT FORM */}

            <div style={{ width: "50%" }}>

                <h2>Select Template</h2>

                <select
                    value={template}
                    onChange={(e) => setTemplate(e.target.value)}
                    style={{ padding: "10px", borderRadius: "6px" }}
                >
                    <option value="modern">Modern</option>
                    <option value="classic">Classic</option>
                    <option value="minimal">Minimal</option>
                    <option value="dark">Dark</option>
                    <option value="elegant">Elegant</option>
                    <option value="corporate">Corporate</option>
                    <option value="creative">Creative</option>
                    <option value="simple">Simple</option>
                </select>


                <h2 style={{ marginTop: "30px" }}>Personal</h2>

                <input
                    style={inputStyle}
                    placeholder="Full Name"
                    onChange={(e) => setResume({ ...resume, name: e.target.value })}
                />

                <input
                    style={inputStyle}
                    placeholder="Job Title"
                    onChange={(e) => setResume({ ...resume, job: e.target.value })}
                />

                <input
                    style={inputStyle}
                    placeholder="Email"
                    onChange={(e) => setResume({ ...resume, email: e.target.value })}
                />

                <input
                    style={inputStyle}
                    placeholder="Phone"
                    onChange={(e) => setResume({ ...resume, phone: e.target.value })}
                />

                <textarea
                    style={inputStyle}
                    placeholder="Professional Summary"
                    onChange={(e) => setResume({ ...resume, summary: e.target.value })}
                />

                <h3 style={sectionTitle}>Education</h3>

                <textarea
                    style={inputStyle}
                    placeholder="BSc Computer Science - XYZ University"
                    onChange={(e) => setResume({ ...resume, education: e.target.value })}
                />

                <h3 style={sectionTitle}>Skills</h3>

                <input
                    style={inputStyle}
                    placeholder="JavaScript, React, Node.js"
                    onChange={(e) => setResume({ ...resume, skills: e.target.value })}
                />

                <h3 style={sectionTitle}>Experience</h3>

                <textarea
                    style={inputStyle}
                    placeholder="Frontend Developer at ABC Company"
                    onChange={(e) => setResume({ ...resume, experience: e.target.value })}
                />

                <h3 style={sectionTitle}>Certificates</h3>

                <textarea
                    style={inputStyle}
                    placeholder="Google UX Certificate"
                    onChange={(e) => setResume({ ...resume, certificates: e.target.value })}
                />

                <h3 style={sectionTitle}>Declaration</h3>

                <textarea
                    style={inputStyle}
                    placeholder="I hereby declare that the above information is true."
                    onChange={(e) => setResume({ ...resume, declaration: e.target.value })}
                />

            </div>


            {/* RIGHT PREVIEW */}

            <div style={{
                width: "50%",
                background: "white",
                color: "black",
                padding: "30px",
                borderRadius: "10px"
            }}>

                <button
                    onClick={downloadPDF}
                    style={{
                        float: "right",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        border: "none",
                        background: "#0ea5e9",
                        color: "white",
                        cursor: "pointer"
                    }}
                >
                    Download PDF
                </button>

                <h1>{resume.name || "Your Name"}</h1>

                <h3 style={{ color: "#0ea5e9" }}>
                    {resume.job || "Your Job Title"}
                </h3>

                <p>Email: {resume.email}</p>
                <p>Phone: {resume.phone}</p>

                <h3>Professional Summary</h3>
                <p>{resume.summary}</p>

                <h3>Education</h3>
                <p>{resume.education}</p>

                <h3>Skills</h3>
                <p>{resume.skills}</p>

                <h3>Experience</h3>
                <p>{resume.experience}</p>

                <h3>Certificates</h3>
                <p>{resume.certificates}</p>

                <h3>Declaration</h3>
                <p>{resume.declaration}</p>

            </div>

        </div>

    );
}