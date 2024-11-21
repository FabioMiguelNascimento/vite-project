import { useUser } from './UserContext';

function UserProfile() {
    const { user, showProfile, toggleProfile, logout } = useUser();

    if (!showProfile || !user) return null;

    return (
        <div className="user-profile">
            <button className="close-button" onClick={toggleProfile}>×</button>
            <h2>Meu Perfil</h2>
            <div className="profile-info">
                <p><strong>Nome:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
            </div>
            <button 
                className="logout-button" 
                onClick={() => {
                    logout();
                    toggleProfile();
                }}
            >
                Sair
            </button>
        </div>
    );
}

export default UserProfile;