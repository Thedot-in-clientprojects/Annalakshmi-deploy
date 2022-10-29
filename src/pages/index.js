const Home = () => {
    return <div / >
}

export const getServerSideProps = async() => {
    return {
        redirect: {
            permanent: true,
            destination: '/landing-preview',
        }
    }
}

export default Home;