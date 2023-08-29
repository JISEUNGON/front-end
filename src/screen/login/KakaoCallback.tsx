import axios from "axios";
import { useEffect,useContext } from "react";
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
            navigate("/")
        })
        .catch((error) => {
            console.log(error);
        });
    },[navigate]);

    return(
        <div>
            <p>카카오 로그인 콜백</p>
        </div>
    )
}
export default KakaoCallback;