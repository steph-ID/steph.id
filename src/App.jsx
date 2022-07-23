import * as React from 'react';
import ProfilePhoto from "../components/ProfilePhoto"
import ProfileHeader from "../components/ProfileHeader"
import ProfileContent from "../components/ProfileContent"
import ContactButtons from "../components/ContactButtons"
import SocialFooter from "../components/SocialFooter"
import './App.css';

function App() {
    return (
        <main className="app-container">
            <ProfilePhoto />
            <div className="profile-container">
                <ProfileHeader />
                <ContactButtons />
                <ProfileContent />
            </div>
            <SocialFooter />
        </main>
    )
}

export default App;