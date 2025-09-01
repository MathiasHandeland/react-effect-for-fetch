import UsersListItem from './UsersListItem'

function UsersList({ users }) {
    return (
        <div className="scroll-container">
            <ul className="users-list">
                {users.map((user) => (
                    <UsersListItem key={user.id} user={user} />
                ))}
            </ul>
      </div>
    );
}

export default UsersList