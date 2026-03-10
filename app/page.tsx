"use client";

import { useState, useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default function Home() {

  const [user, setUser] = useState(null);

  const [template, setTemplate] = useState("modern");

  const [resume, setResume] = useState({
    name: "",
    profile: "",
    skills: "",
    languages: "",
    education: "",
    certificates: "",
    declaration: ""
  });

  const templates = {
    modern: { background: "#f4f9ff", color: "#111" },
    classic: { background: "#fffaf0", color: "#000" },
    minimal: { background: "#ffffff", color: "#222" },
    dark: { background: "#111", color: "#fff" },
    elegant: { background: "#f9f3ff", color: "#333" },
    corporate: { background: "#eef3f7", color: "#0a2540" },
    creative: { background: "#fff7f0", color: "#333" },
    simple: { background: "#fafafa", color: "#000" }
  };

  useEffect(() => {
    const saved = localStorage.getItem("resumeData");
    if (saved) {
      setResume(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resume));
  }, [resume]);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  const handleChange = (e) => {
    setResume({
      ...resume,
      [e.target.name]: e.target.value
    });
  };

  const generateProfile = () => {
    setResume({
      ...resume,
      profile:
        "Motivated and detail-oriented individual with strong problem-solving ability seeking opportunities to contribute technical and creative skills."
    });
  };

  const suggestSkills = () => {
    setResume({
      ...resume,
      skills:
        "Communication, Leadership, Teamwork, Problem Solving, Time Management"
    });
  };

  const downloadPDF = async () => {

    const element = document.getElementById("resume-preview");

    if (!element) return;

    const canvas = await html2canvas(element);

    const img = canvas.toDataURL("image/png");

    const pdf = new jsPDF();

    pdf.addImage(img, "PNG", 10, 10, 180, 0);

    pdf.save("resume.pdf");
  };

  if (!user) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background: "linear-gradient(180deg,#001f2f,#003b46,#000)",
          color: "white"
        }}
      >
        <h1>AI Resume Builder</h1>

        <button
          onClick={handleLogin}
          style={{
            padding: "12px 30px",
            borderRadius: "10px",
            background: "#00bcd4",
            border: "none",
            color: "white",
            cursor: "pointer"
          }}
        >
          Sign In with Google
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>

      <h2>Welcome {user?.displayName}</h2>

      <h3>Resume Dashboard</h3>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <br />

      <textarea name="profile" placeholder="Profile" onChange={handleChange} />
      <br />

      <input name="skills" placeholder="Skills" onChange={handleChange} />
      <br />

      <input name="languages" placeholder="Languages" onChange={handleChange} />
      <br />

      <input name="education" placeholder="Education" onChange={handleChange} />
      <br />

      <input name="certificates" placeholder="Certificates" onChange={handleChange} />
      <br />

      <textarea name="declaration" placeholder="Declaration" onChange={handleChange} />

      <br /><br />

      <button onClick={generateProfile}>
        AI Generate Profile
      </button>

      <button onClick={suggestSkills}>
        AI Suggest Skills
      </button>

      <br /><br />

      <label>Select Template:</label>

      <select onChange={(e) => setTemplate(e.target.value)}>
        <option value="modern">Modern</option>
        <option value="classic">Classic</option>
        <option value="minimal">Minimal</option>
        <option value="dark">Dark</option>
        <option value="elegant">Elegant</option>
        <option value="corporate">Corporate</option>
        <option value="creative">Creative</option>
        <option value="simple">Simple</option>
      </select>

      <button onClick={downloadPDF}>
        Download PDF
      </button>

      <hr />

      <div
        id="resume-preview"
        style={{
          padding: "30px",
          border: "1px solid #ccc",
          marginTop: "20px",
          ...templates[template]
        }}
      >
        <h1>{resume.name}</h1>

        <h3>Profile</h3>
        <p>{resume.profile}</p>

        <h3>Skills</h3>
        <p>{resume.skills}</p>

        <h3>Languages</h3>
        <p>{resume.languages}</p>

        <h3>Education</h3>
        <p>{resume.education}</p>

        <h3>Certificates</h3>
        <p>{resume.certificates}</p>

        <h3>Declaration</h3>
        <p>{resume.declaration}</p>
      </div>

    </div>
  );
}