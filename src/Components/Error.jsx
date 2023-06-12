import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err)
    return <div className="errorPage">
        {err.status}
    </div>
}
export default Error;