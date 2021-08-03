import "./styles/App.css"
import UserProfileImage from "./components/UserProfileImage"
import TableHeader from "./components/TableHeader"
import MainHeader from "./components/MainHeader"
import ActionEllipsis from "./components/ActionEllipsis"

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <ActionEllipsis />
                <MainHeader />
                <TableHeader />
                <UserProfileImage
                    imgSrc='https://static.photocdn.pt/images/articles/2019/08/07/images/articles/2019/07/31/linkedin_photo_tips.jpg'
                    name='Tommaso Tavormin'
                    email='tommasotavormina@cecotec.es'
                />
            </header>
        </div>
    )
}

export default App
