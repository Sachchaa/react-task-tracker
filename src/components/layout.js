import Header from './header'

function Layout({ children }) {
    return (
        <>
            <div className='container'>
                <Header />
                {children}
            </div>

        </>

    )
}

export default Layout
