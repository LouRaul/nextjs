const Dashboard = ({name, bio, blog}) => (
    <>
        <h1>{name}</h1>
        <p>{bio}</p>
        <p>{blog}</p>
    </>
);

Dashboard.getInitialProps = async() => {
    const res = await fetch('https://api.github.com/users/LouRaul');
    const user = await res.json();

    return user;
};

export default Dashboard;