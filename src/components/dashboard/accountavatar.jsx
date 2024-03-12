const AccountAvatar = ({ source, name, email }) => {
    return (
        <div className="flex items-center gap-3">
            <img src={source} alt="profile-name" width={40} />
            <div>
                <p className="text-base font-medium">{name}</p>
                <p className="text-sm font-light text-gray-400">{email}</p>
            </div>
        </div>
    );
};

export default AccountAvatar;