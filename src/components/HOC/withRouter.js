import { useParams } from "react-router-dom"

export function withRouter(child) {
    const ChildComponent = child;
    return (props) => {
        const params = useParams();
        return <ChildComponent {...props} params={params} />
    }
}