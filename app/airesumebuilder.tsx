"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Home() {

    const router = useRouter()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showLogin, setShowLogin] = useState(false)

    function handleLogin() {

        if (email && password) {
            localStorage.setItem("loggedIn", "true")
            router.push("/builder")
        } else {
            alert("Enter email and password")
        }

    }

    function startBuilder() {
        router.push("/builder")
    }

    return (

        <div style={{
            background: "#020617",
            minHeight: "100vh",
            color: "white",
            fontFamily: "Arial",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "40px"
        }}>

            <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
                ResumeAI
            </h1>

            <h2 style={{ textAlign: "center" }}>
                Build a Professional Resume with AI in Minutes
            </h2>

            <p style={{
                maxWidth: "600px",
                textAlign: "center",
                marginTop: "10px"
            }}>
                Enter your details and generate a professional resume instantly using AI.
            </p>


            <div style={{ marginTop: "40px" }}>

                <button
                    onClick={startBuilder}
                    style={{
                        padding: "15px 25px",
                        background: "cyan",
                        border: "none",
                        borderRadius: "10px",
                        marginRight: "10px",
                        cursor: "pointer",
                        fontWeight: "bold"
                    }}
                >
                    CreateMy Resume Free
                </button>


                <button
                    onClick={() => setShowLogin(true)}
                    style={{
                        padding: "15px 25px",
                        background: "transparent",
                        border: "1px solid white",
                        borderRadius: "10px",
                        cursor: "pointer",
                        color: "white"
                    }}
                >
                    SignIn
                </button>

            </div>


            {showLogin && (

                <div style={{
                    background: "#111827",
                    padding: "30px",
                    borderRadius: "10px",
                    marginTop: "30px",
                    width: "300px"
                }}>

                    <h3>Login</h3>

                    <input
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={input}
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={input}
                    />

                    <button
                        onClick={handleLogin}
                        style={{
                            width: "100%",
                            padding: "12px",
                            marginTop: "10px",
                            background: "cyan",
                            border: "none",
                            borderRadius: "8px",
                            cursor: "pointer"
                        }}
                    >
                        SignIn
                    </button>

                </div>

            )}

        </div>

    )

}

const input = {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "1px solid gray"
}