import { Navigate, Outlet } from "react-router-dom"
import LoginPage from "../Pages/loginPage"
import StudentList from "../Pages/studentList"
import StudentProfile from "../Pages/StudentProfile"

export default function ProtectedRoute({ isAllowed, role, isLogged, children }) {
 if (!isAllowed) {
    if (isLogged) {
        if (role === 'SUPER_ADMIN') return <StudentList />
        else return <StudentProfile />
    } else {
        return <LoginPage />
    }
 }
 return children ? children : <Outlet />
}