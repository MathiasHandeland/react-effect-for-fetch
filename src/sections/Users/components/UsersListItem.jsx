
function UserListItem({ user }) {
    return (
        <li key={user.id} style={{ background: user.favouriteColour }}>
            <img
                src={user.profileImage}
                alt={`${user.firstName} ${user.lastName}`} 
            />
            <h3>Name : {user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
        </li>
    );
}

export default UserListItem;