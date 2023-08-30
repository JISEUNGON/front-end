import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const KakaoCallback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const params= new URL(document.location.toString()).searchParams;

        console.log(params.get("code"));
        
        axios.get(`${process.env.REACT_APP_SERVER_URL}/login/kakao/token?code=${params.get("code")}`)
        .then((response) => {
            console.log(response);
            localStorage.setItem("userInfo", JSON.stringify(response.data));
            navigate("/univ/signup/input")
        })
        .catch((error) => {
            console.log(error);
        });
    },[navigate]);

    return(
        <div className="callback" style={{display: "flex", background: "red", position: "fixed", left: "35%", right: "35%", width: "30%", height: "100%", justifyContent: "center" , alignItems: "center", backgroundColor: "#16F1BD"}}>
            <img src="/images/login/logo.png" alt="logo" style={{marginBottom: "50%"}}/>
        </div>
    )
}
export default KakaoCallback;