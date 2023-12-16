import { Link } from 'react-router-dom'
import TopBar from './topBar'
import Footer from './footer';
import './index.css'

const ErrorPage = () => {
    return (
        <>
        <TopBar />
        <div className='errorPage'>
            <h1>Oh no, this page doesn't exist!</h1>
            <Link to='/' className='goBackText' >
                You can go back to the home page by clicking here!
            </Link>
        </div>
        <Footer />
        </>
    )
}

export default ErrorPage