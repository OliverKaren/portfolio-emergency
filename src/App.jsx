import { useState, useEffect } from 'react'
import './App.css'

function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    const team = [
        { name: "Sarah Chen", role: "DevOps Lead", skill: "Docker Expert" },
        { name: "Mike Johnson", role: "Backend Dev", skill: "API Master" },
        { name: "Emma Davis", role: "Frontend Dev", skill: "React Wizard" }
    ]

    return (
        <div className="App">
            <h1>🚀 StartupXYZ Team Portal</h1>
            <p>Current Time: {time}</p>

            <h2>Our Amazing Team</h2>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {team.map((member, index) => (
                    <div key={index} style={{
                        border: '2px solid #646cff',
                        borderRadius: '8px',
                        padding: '20px',
                        width: '200px'
                    }}>
                        <h3>{member.name}</h3>
                        <p><strong>Role:</strong> {member.role}</p>
                        <p><strong>Superpower:</strong> {member.skill}</p>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '40px', padding: '20px', background: '#f0f0f0', borderRadius: '8px' }}>
                <h3>🏭 Deployment Status</h3>
                <p>Environment: {import.meta.env.MODE}</p>
                <p>Version: 1.0.0</p>
                <p>Container: <span id="container-status">NOT DOCKERIZED YET</span></p>
            </div>
        </div>
    )
}

export default App
