const UsersData = props => {
    const showAdminAlert = () => {
        alert("I am an admin!");
    }

    return <button className="logout-btn" onClick={showAdminAlert}>View Users Data</button>
}

export default UsersData;